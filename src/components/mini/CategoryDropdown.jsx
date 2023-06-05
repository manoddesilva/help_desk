import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CategoryDropdown = ({ label, onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState("part_and_machinery");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onOptionChange(selectedValue);
  };

  return (
    <FormControl variant="filled" size="small" style={{ width: "100%" }}>
      <InputLabel id="dropdown-label">{label}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <MenuItem value="part_and_machinery">Part & Machinery</MenuItem>
        <MenuItem value="building">Building</MenuItem>
        <MenuItem value="fabrication">Fabrication</MenuItem>
        <MenuItem value="health_and_safety">Health & Safety</MenuItem>
        <MenuItem value="furniture">Furniture</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CategoryDropdown;
