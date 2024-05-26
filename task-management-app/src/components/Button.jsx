import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 25%;
  height: 3rem;
  margin:3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Add transition for smooth hover effect */

  /* Hover effect */
  &:hover {
    background: linear-gradient(to right, #03217b 0%, #14163c 79%); /* Change background color on hover */
  }
`;
