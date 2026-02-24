import styled from "@emotion/styled"

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const StyledInput = styled.input<{ hasError: boolean }>`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid
    ${({ hasError }) => (hasError ? "#ff3333" : "#ccc")};

  background-color: ${({ disabled }) =>
    disabled ? "#e5e5e5" : "white"};

  outline: none;

  &:focus {
    border-color: ${({ hasError }) =>
      hasError ? "#ff3333" : "#5252f1"};
  }
`

export const ErrorText = styled.span`
  font-size: 12px;
  color: #ff3333;
`