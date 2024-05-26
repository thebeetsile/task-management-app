// import React, { useState } from 'react';
// import styled from "styled-components";
// import Button from "./components/Button";
// import Icon from "./components/Icon";
// import Input from "./components/Input";
// import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
// // import { useHistory } from "react-router-dom"; // Uncomment if you are using react-router

// function App() {
//   const FacebookBackground =
//     "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
//   const InstagramBackground =
//     "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
//   const GoogleBackground =
//     "linear-gradient(to right, #4285F4, #DB4437, #F4B400, #0F9D58)";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const history = useHistory(); // Uncomment if you are using react-router

//   // Function to handle login
//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (data.error) {
//         // Handle unsuccessful login
//         console.error(data.message);
//       } else {
//         // Redirect user to another page upon successful login
//         // Example: history.push("/dashboard");
//         console.log("Login successful");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };

//   // Function to handle navigation to signup form
//   // const handleSignUp = () => {
//   //   history.push("/signup"); // Navigate to the signup form
//   // };

//   return (
//     <MainContainer>
//       <WelcomeText>Task Management</WelcomeText>
//       <InputContainer>
//         <Input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <Input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </InputContainer>
//       <ButtonContainer>
//         <Button onClick={handleLogin} content="Login" />
//         <Button onClick={handleSignUp} content="Sign Up" /> {/* Use handleSignUp for navigation */}
//       </ButtonContainer>
//       <LoginWith>OR LOGIN WITH</LoginWith>
//       <HorizontalRule />
//       <IconsContainer>
//         <Icon color={GoogleBackground}>
//           <FaGoogle />
//         </Icon>
//         <Icon color={FacebookBackground}>
//           <FaFacebookF />
//         </Icon>
//         <Icon color={InstagramBackground}>
//           <FaInstagram />
//         </Icon>
//       </IconsContainer>
//       <ForgotPassword>Forgot Password ?</ForgotPassword>
//     </MainContainer>
//   );
// }
// const MainContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   height: 80vh;
//   width: 30vw;
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   backdrop-filter: blur(8.5px);
//   -webkit-backdrop-filter: blur(8.5px);
//   border-radius: 10px;
//   color: #ffffff;
//   text-transform: uppercase;
//   letter-spacing: 0.4rem;
//   @media only screen and (max-width: 320px) {
//     width: 80vw;
//     height: 90vh;
//     hr {
//       margin-bottom: 0.3rem;
//     }
//     h4 {
//       font-size: small;
//     }
//   }
//   @media only screen and (min-width: 360px) {
//     width: 80vw;
//     height: 90vh;
//     h4 {
//       font-size: small;
//     }
//   }
//   @media only screen and (min-width: 411px) {
//     width: 80vw;
//     height: 90vh;
//   }

//   @media only screen and (min-width: 768px) {
//     width: 80vw;
//     height: 80vh;
//   }
//   @media only screen and (min-width: 1024px) {
//     width: 70vw;
//     height: 50vh;
//   }
//   @media only screen and (min-width: 1280px) {
//     width: 30vw;
//     height: 80vh;
//   }
// `;

// const WelcomeText = styled.h2`
//   margin: 3rem 0 2rem 0;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   height: 20%;
//   width: 100%;
// `;

// const ButtonContainer = styled.div`
//   margin: 1rem 0 2rem 0;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const LoginWith = styled.h5`
//   cursor: pointer;
// `;

// const HorizontalRule = styled.hr`
//   width: 90%;
//   height: 0.3rem;
//   border-radius: 0.8rem;
//   border: none;
//   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
//   background-color: #ebd0d0;
//   margin: 1.5rem 0 1rem 0;
//   backdrop-filter: blur(25px);
// `;

// const IconsContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 2rem 0 3rem 0;
//   width: 80%;
// `;

// const ForgotPassword = styled.h4`
//   cursor: pointer;
// `;

// export default App;