import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import WifiProtectedSetupIcon from "@mui/icons-material/WifiProtectedSetup";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../css/InputSizeHelper.css";

const InputSizeHelper = () => {
  const [value, setValue] = useState(3);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 3) {
      setValue(3);
    } else if (value > 9) {
      setValue(9);
    }
  };

  return (
    <>
      <div className="size-input">
        Enter the Size of Matrix :
        <Input
          value={value}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 3,
            max: 9,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
          sx={{ ml: 1 }}
        />
      </div>
      <div className="size-slider">
        <Slider
          value={typeof value === "number" ? value : 3}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={3}
          max={9}
        />
      </div>
      <Button
        variant="contained"
        sx={{ pl: 2, pr: 2 }}
        endIcon={<WifiProtectedSetupIcon />}
        onClick={() => {
          const randomValue = Math.ceil(Math.random() * 7) + 2;
          setValue(randomValue);
        }}
      >
        Generate
        <br />
        Random
      </Button>
      <div className="navigationButtons">
        <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />}>
          Back
        </Button>
        <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
          Next
        </Button>
      </div>
    </>
  );
};

export default InputSizeHelper;
