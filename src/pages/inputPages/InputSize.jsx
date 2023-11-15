import React from "react";
import LandingPageMain from "../landingPage/components/jsx/LandingPageMain";
import InputSizeHelper from "./components/jsx/InputSizeHelper";

const InputSize = () => {
  return (
    <>
      <div className="inputPage-background">
        <LandingPageMain />
        <InputSizeHelper />
      </div>
    </>
  );
};

export default InputSize;
