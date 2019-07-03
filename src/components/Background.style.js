import styled from "styled-components";

import Wave from "../assets/newwave05.png";

const Background = styled.div`
  background-image: url(${Wave});
  background-repeat: no-repeat;
  background-size: 60% auto;
  background-position: left bottom;
  min-height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  @media only screen and (max-width: 768px) {
    background-size: 80% auto;
  }
`;

export default Background;
