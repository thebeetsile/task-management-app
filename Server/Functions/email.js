const { createRequire } = require('module');
const customRequire = createRequire(__filename);



var nodemailer = require('nodemailer');

const sendEmail =async (Email,subject,message) =>{

 
try{
  const userEmail=""//for security purposes removed my email and password can replace with yours
  const password=""
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: userEmail,
 pass: password
 }
});

var mailOptions = {
  from:userEmail,
  to:Email,
  subject:subject,
  text:message
};

transporter.sendMail(mailOptions, function(error, info){
 if (error) {
 console.log(error);
 } else {
 console.log('Email sent: ' + info.response);
 }

});
}catch (error) {
  
}

}
module.exports = sendEmail;