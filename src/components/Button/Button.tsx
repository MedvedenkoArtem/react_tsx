/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"

import type { ButtonProps } from "./types";
import { StyledButton } from "./styles";
function Button(props: ButtonProps) {
  return (
    <StyledButton
      type={props.type}
      onClick={props.onClick}
      isRed={props.isRed}
      disabled={props.disabled}
    >
      {props.name}
    </StyledButton>
  );
}

export default Button;
