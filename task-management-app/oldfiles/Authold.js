import React from 'react';
import axios from 'axios';

class Auth extends React.Component {
  // Function to handle user registration
  registerUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/userAuth/register', {
        email: email,
        password: password
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  // Function to handle user login
  loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/userAuth/login', {
        email: email,
        password: password
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  // Function to handle password recovery
  recoverPassword = async (email, newPassword) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/passwordRecovery', {
        email: email,
        newPassword: newPassword
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  render() {
    return (
      <div>
        {/* Render your authentication form or components */}
      </div>
    );
  }
}

export default Auth;
