import React from "react";
import LandingPageDescription from "./LandingPageDescription";
import LandingPageMain from "./LandingPageMain";
import "../css/LandingPageDesign.css";

const LandingPageDesign = () => {
  return (
    <>
      <div className="landingPage-background">
        <LandingPageMain />
        <LandingPageDescription />
      </div>
    </>
  );
};

export default LandingPageDesign;
