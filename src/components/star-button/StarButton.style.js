import styled from "styled-components";

import StarUnClicked from "../../assets/star.png";
import StarClicked from "../../assets/starYellow.png";

const Star = styled.button`
  background-image: url(${StarUnClicked});
  background-repeat: no-repeat;
  background-size: cover;
  width: 4em;
  height: 4em;
  margin: 0.5em;
  background-color: white;
  border: none;

  &:hover {
    background-image: url(${StarClicked});
  }
`;

export { Star };
