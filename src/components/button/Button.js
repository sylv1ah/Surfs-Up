import React from "react";

import { StyledButton, StyledBigButton } from "./Button.style";

const Button = props => {
  return <StyledButton>{props.children}</StyledButton>;
};

const BigButton = props => {
  return <StyledBigButton>{props.children}</StyledBigButton>;
};

export { Button, BigButton };
