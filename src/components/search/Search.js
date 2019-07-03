import React from "react";

import { StyledSearch } from "./Search.style";
import Button from "../button/Button";
import InputBox from "../input-box/InputBox";

const Search = () => {
  return (
    <StyledSearch>
      <InputBox placeholder="enter location" />
      <Button>search location</Button>
      OR
      <Button>use your location</Button>
    </StyledSearch>
  );
};

export default Search;
