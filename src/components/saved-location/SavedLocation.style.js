import styled from "styled-components";

import StarUnClicked from "../../assets/star.png";
import StarClicked from "../../assets/starYellow.png";

const SavedLocationBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em;
  width: 90vw;
`;

const Title = styled.div`
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #24c2fc;
  }
`;

const SubTitle = styled.div`
  font-size: 0.8em;
`;

const Star = styled.div`
  background-image: url(${StarClicked});
  background-repeat: no-repeat;
  background-size: contain;
  width: 2em;
  height: 2em;
  margin: 0.5em;
  background-color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-image: url(${StarUnClicked});
  }
`;

export { SavedLocationBox, Title, SubTitle, Star };
