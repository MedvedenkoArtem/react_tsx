/** @jsxImportSource @emotion/react */
/** @jsxImportSource @emotion/react */
import { ChangeEvent } from "react"
import { StyledInput, ErrorText, InputWrapper } from "./styles"
import type { InputProps } from "./types"
function Input({
  id,
  name,
  value,
  placeholder,
  disabled,
  error,
  onChange,
}: InputProps) {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
  }

  return (
    <InputWrapper>
      <StyledInput
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        hasError={!!error}
        onChange={handleChange}
      />

      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  )
}

export default Input