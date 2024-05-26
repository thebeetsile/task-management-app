import React, { useState } from 'react';
import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";
import Input from "./Input";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function App() {
  const FacebookBackground = "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground = "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const GoogleBackground = "linear-gradient(to right, #4285F4, #DB4437, #F4B400, #0F9D58)";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log("Attempting login with email:", email); // Log the email being used for login
      console.log("API URL:", process.env.REACT_APP_API_URL); // Log the API URL being used for the request
  
      const response = await fetch(`${process.env.REACT_APP_API_URL}/userAuth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      console.log("API response:", response); // Log the API response object
  
      const data = await response.json();
      console.log("Response data:", data); // Log the data received from the API response
  
      if (data.error) {
        console.error(data.message);
      } else {
        console.log("Login successful");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <MainContainer>
      <WelcomeText>Task Management</WelcomeText>
      <InputContainer>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={handleLogin} content="Login" />
        <Button onClick={handleSignUp} content="Sign Up" />
      </ButtonContainer>
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={GoogleBackground}>
          <FaGoogle />
        </Icon>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default App;
