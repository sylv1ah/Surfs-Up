import React from "react";

import StarButton from "../components/star-button/StarButton";
import PageFormat from "./PageFormat.style";
import LocationTitle from "../components/location-title/LocationTitle";
import ForecastItem from "../components/forecast-item/ForecastItem";

const Forecast = () => {
  return (
    <PageFormat>
      <StarButton />
      <LocationTitle
        title="batu bolong beach"
        subTitle="canggu, bali"
        sunRise="07:00"
        sunSet="21:00"
      />
      <ForecastItem
        forecastType="wave height"
        forecastInfo="0.5"
        forecastMetric="m"
      />
      <ForecastItem
        forecastType="wave period"
        forecastInfo="6.7"
        forecastMetric="s"
      />
      <ForecastItem
        forecastType="wind"
        forecastInfo="1.8"
        forecastMetric="m/s"
      />
      <ForecastItem
        forecastType="temperature"
        forecastInfo="14-16"
        forecastMetric="°c"
      />
    </PageFormat>
  );
};

export default Forecast;
