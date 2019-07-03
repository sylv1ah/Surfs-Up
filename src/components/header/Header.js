import React from "react";

import Logo from "../../assets/wavyLogoBig.png";
import BurgerIcon from "../../assets/burger.png";
import { StyledHeader, StyledLogo, Burger } from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} />
      <Burger src={BurgerIcon} />
    </StyledHeader>
  );
};

export default Header;
