import styled from "styled-components";

import Wave from "../assets/newwave05.png";

const Background = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap");
  background-image: url(${Wave});
  background-repeat: no-repeat;
  background-size: 60% auto;
  background-position: left bottom;
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  margin: 0;
  left: 0;
  @media only screen and (max-width: 768px) {
    background-size: 100% auto;
  }
`;

export default Background;
