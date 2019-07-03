import React from "react";

import { StyledInput } from "./InputBox.style";
const InputBox = props => {
  return <StyledInput placeholder={props.placeholder} />;
};

export default InputBox;
