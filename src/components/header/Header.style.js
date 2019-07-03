import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  height: 8vh;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  z-index: 5;
`;

const StyledLogo = styled.img`
  width: auto;
  height: 6vh;
  margin: 1em;
`;

const Burger = styled.img`
  width: 2em;
  height: 2em;
  margin: 1em;
`;

export { StyledHeader, StyledLogo, Burger };
