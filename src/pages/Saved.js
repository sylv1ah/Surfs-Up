import React from "react";

import PageFormat from "./PageFormat.style";
import SavedLocation from "../components/saved-location/SavedLocation";

const Saved = () => {
  return (
    <PageFormat>
      your saved locations
      <SavedLocation />
    </PageFormat>
  );
};

export default Saved;
