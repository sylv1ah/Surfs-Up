import React from "react";

import { Link } from "react-router-dom";
import { SavedLocationBox, Title, SubTitle, Star } from "./SavedLocation.style";
import { BigButton } from "../button/Button";

const SavedLocation = props => {
  return (
    <SavedLocationBox>
      <Title>
        <Link to={props.location}>
          <BigButton>{props.locationTitle}</BigButton>
        </Link>
        <SubTitle>{props.locationSubTitle}</SubTitle>
      </Title>
      <Star />
    </SavedLocationBox>
  );
};

export default SavedLocation;
