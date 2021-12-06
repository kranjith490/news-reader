import React from "react";
import { TextField } from "@material-ui/core/";

export default function Search({ handleSearch }) {
  return (
    <TextField
      id="outlined-full-width"
      style={{ margin: 8 }}
      placeholder="Search new..."
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      onChange={(event) => {
        handleSearch(event.target.value);
      }}
    />
  );
}
