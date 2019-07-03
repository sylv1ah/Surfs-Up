import React from "react";

import { Link } from "react-router-dom";
import { StyledSearch } from "./Search.style";
import { Button } from "../button/Button";
import InputBox from "../input-box/InputBox";

const SearchForm = props => {
  return (
    <StyledSearch>
      <InputBox placeholder="enter location" />
      <Button>search location</Button>
      OR
      <Link to={props.location}>
        <Button>use your location</Button>
      </Link>
    </StyledSearch>
  );
};

export default SearchForm;
