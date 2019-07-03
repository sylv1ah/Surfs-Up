import styled from "styled-components";

const Title = styled.div`
  font-family: "Rubik Mono One", sans-serif;
  font-size: 1.5em;
  text-align: center;
`;

const SubTitle = styled(Title)`
  font-size: 1em;
`;

const Sun = styled(Title)`
  font-size: 3em;
  margin: 0 0.5em;
`;

const Time = styled(Title)`
  font-size: 1.5em;
`;

const SunRiseSet = styled(Title)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  font-size: 0.8em;
`;

export { Title, SubTitle, Sun, Time, SunRiseSet };
