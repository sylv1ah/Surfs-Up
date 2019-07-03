import styled from "styled-components";

const ForecastBox = styled.div`
  font-family: "Rubik Mono One", sans-serif;
  box-shadow: #072ab9 3px 3px 0px 0px;
  margin: 1em;
`;

const ForecastTitle = styled.div`
  background-color: #8ea3fb;
  padding: 0.2em 0.5em;
`;

const ForecastInfo = styled.div`
  background-color: white;
  font-size: 3em;
  display: flex;
  align-items: baseline;
  padding: 0em 0.5em;
`;

const ForecastMetric = styled.div`
  font-size: 0.4em;
`;

export { ForecastBox, ForecastInfo, ForecastTitle, ForecastMetric };
