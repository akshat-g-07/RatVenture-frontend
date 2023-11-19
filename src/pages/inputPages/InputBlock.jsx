import React from "react";
import LandingPageMain from "../landingPage/components/jsx/LandingPageMain";
import InputBlockHelper from "./components/jsx/InputBlockHelper";

const InputBlock = () => {
  return (
    <>
      <div className="inputPage-background">
        <LandingPageMain />
        <InputBlockHelper />
      </div>
    </>
  );
};

export default InputBlock;
