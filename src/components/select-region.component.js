import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const regionMap = {
  All: "All",
  East: "America/New_York",
  Central: "America/Chicago",
  West: "America/Los_Angeles",
};

export default function RegionSelect(props) {
  const [region, setRegion] = React.useState("");

  const handleChange = (event) => {
    setRegion(event.target.value);
    props.onChange(regionMap[event.target.value]);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 500 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="Region"
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All </MenuItem>
          <MenuItem value={"East"}>East </MenuItem>
          <MenuItem value={"Central"}>Central</MenuItem>
          <MenuItem value={"West"}>West</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
