// import React, { useState } from "react";
// import styled from "styled-components";
// import Input from "./components/Input";
// import Button from "./components/Button";
// import Auth from "./Auth";

// // Styled components for the signup form
// const SignupFormContainer = styled.div`
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

// function SignupForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const auth = new Auth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await auth.registerUser(email, password);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <SignupFormContainer>
//       <WelcomeText>Sign Up</WelcomeText>
//       <form onSubmit={handleSubmit}>
//         <InputContainer>
//           <Input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </InputContainer>
//         <ButtonContainer>
//           <Button type="submit" content="Sign Up" />
//         </ButtonContainer>
//       </form>
//     </SignupFormContainer>
//   );
// }

// export default SignupForm;
