import React from "react";

import StarButton from "../components/star-button/StarButton";
import PageFormat from "./PageFormat.style";
import LocationTitle from "../components/location-title/LocationTitle";

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
    </PageFormat>
  );
};

export default Forecast;
