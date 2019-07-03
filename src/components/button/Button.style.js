import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Rubik Mono One", sans-serif;
  margin: 1em;
  background-color: #24c2fc;
  width: fit-content;
  font-size: 1rem;
  padding: 0.2em 0.5em;
  color: black;
  box-shadow: #0b6584 3px 4px 0px 0px;
  border: none;
  cursor: pointer;
`;

const StyledBigButton = styled(StyledButton)`
  font-size: 1.5em;
  text-align: left;
  margin: 0;
  max-width: 70vw;
  width: fit-content;
`;

export { StyledButton, StyledBigButton };
