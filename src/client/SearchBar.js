import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const SearchBar = (props) => {
  return (
    <div>
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="primary">Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchBar;