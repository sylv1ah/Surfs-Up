import styled from "styled-components";

import StarUnClicked from "../../assets/star.png";
import StarClicked from "../../assets/starYellow.png";

const Star = styled.button`
  background-image: url(${StarUnClicked});
  background-repeat: no-repeat;
  background-size: contain;
  width: 4em;
  height: 4em;
  min-height: 4em;
  min-width: 4em;
  margin: 0.5em;
  background-color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-image: url(${StarClicked});
  }
`;

export { Star };
