import styled from "@emotion/styled";

type ButtonProps = {
  isRed?: boolean;
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.isRed ? "red" : "blue"};
  color: white;
  border: none; 
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;  
  font-size: 16px;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;


