import React from "react";

import { Title, SubTitle, Sun, Time, SunRiseSet } from "./LocationTitle.style";

const LocationTitle = props => {
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <SubTitle>{props.subTitle}</SubTitle>
      <SunRiseSet>
        <Time>{props.sunRise}</Time>am <Sun>☼</Sun> <Time>{props.sunSet}</Time>
        pm
      </SunRiseSet>
    </React.Fragment>
  );
};

export default LocationTitle;
