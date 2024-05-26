// Import necessary modules
const express = require('express');
const cors = require('cors');
const router = express.Router();
const bcrypt =require('bcryptjs');

const sendEmail = require('../../Functions/email');
const User = require('../../Models/User'); 
const {registerValidationSchema}=require('../../Validations/validationSchema');
// Route for user registration
router.post('/register', async (req, res) => {
    try {
        const {email } = req.body;
        const { error } = registerValidationSchema(req.body);

        if (error) {
            return res.status(400).json({ error: true, message: error.details[0].message });
        }

        const condition = [];
        
        if (email) condition.push({ email: email });
        

        const existingUser = await User.findOne({
            $or: condition
        });

        if (existingUser) {
            let errorMessage = 'User Already Exists:';
            if (email && existingUser.email === email) {
                errorMessage += ' Email already registered.';
            }
            return res.status(400).json({ error: true, message: errorMessage });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        let confirmationEmail =  email ;
        const newUser = await new User({
            email: email,
            password: hashedPassword,
        }).save();

        if (email) {
            sendEmail(
                confirmationEmail,` User Account created successfully` ,`
            
                
                Thank you for registering with the Task Management App. Your account has been successfully created.
                You can now log in using your email address and password.
                
                (N.B) Use your email to log in to your account.
                
                Now you can enjoy managing your tasks efficiently with our app.
                
                If you have any questions or need assistance, feel free to contact our support team.
                
                Happy task managing!
                `
            );
        }

        res.status(200).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }
});



  router.post('/passwordRecovery', async (req, res) => {
    try {
        const {email,newPassword } = req.body;

        const user = await User.findOne({ $or: [{ email }] });
        if (!user) {
            return res.status(400).json({ error: true, message: 'Invalid user credentials' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ error: false, message: 'Password reset successful' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: 'Internal server error' });
    }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          error: true,
          message: "Email Does not exist"
        });
      }
  
      const verifiedPassword = await bcrypt.compare(password, user.password);
      if (!verifiedPassword) {
        return res.status(401).json({
          error: true,
          message: "Invalid password"
        });
      }
  
      res.status(200).json({
        error: false,
        user,
        message: "Logged in successfully"
      });
      console.log("logged in");
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: true,
        message: "Internal Server Error"
      });
    }
  });
  
module.exports = router;
