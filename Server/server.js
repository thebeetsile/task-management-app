const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const connectDB = require('./DataBase_Connection/db');
const userRoutes = require('./routes/api/userAuth');
const PORT = process.env.PORT || 5000;



app.use(cors());


// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/userAuth', userRoutes);

// Specify the absolute path to the build folder
// const buildPath = path.resolve(__dirname, '../task-management-app/build');

// // Serve static files (like your React app's build folder)
// app.use(express.static(buildPath));

// Route to serve your React app
// app.get('/', (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
