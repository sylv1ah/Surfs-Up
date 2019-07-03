import React from "react";

import PageFormat from "./PageFormat.style";
import SavedLocation from "../components/saved-location/SavedLocation";

const Saved = () => {
  return (
    <PageFormat>
      your saved locations
      <SavedLocation
        location="/forecast"
        locationTitle="batu bolong beach"
        locationSubTitle="canggu, bali"
      />
      <SavedLocation
        location="/forecast"
        locationTitle="fistral beach"
        locationSubTitle="cornwall, uk"
      />
    </PageFormat>
  );
};

export default Saved;
