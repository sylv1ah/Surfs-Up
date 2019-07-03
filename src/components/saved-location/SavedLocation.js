import React from "react";

import { SavedLocationBox, Title, SubTitle, Star } from "./SavedLocation.style";

const SavedLocation = () => {
  return (
    <SavedLocationBox>
      <Title>
        batu bolong beach
        <SubTitle>canggu, bali</SubTitle>
      </Title>
      <Star />
    </SavedLocationBox>
  );
};

export default SavedLocation;
