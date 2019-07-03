import React from "react";

import {
  ForecastBox,
  ForecastTitle,
  ForecastInfo,
  ForecastMetric
} from "./ForecastItem.style";

const ForecastItem = props => {
  return (
    <ForecastBox>
      <ForecastTitle>{props.forecastType}</ForecastTitle>
      <ForecastInfo>
        {props.forecastInfo}
        <ForecastMetric>{props.forecastMetric}</ForecastMetric>
      </ForecastInfo>
    </ForecastBox>
  );
};

export default ForecastItem;
