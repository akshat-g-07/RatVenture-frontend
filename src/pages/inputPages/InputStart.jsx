import React from "react";
import LandingPageMain from "../landingPage/components/jsx/LandingPageMain";
import InputStartHelper from "./components/jsx/InputStartHelper";

const InputStart = () => {
  return (
    <>
      <div className="inputPage-background">
        <LandingPageMain />
        <InputStartHelper />
      </div>
    </>
  );
};

export default InputStart;
