import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./landingPage/LandingPage";
import InputSize from "./inputPages/InputSize";
import InputStart from "./inputPages/InputStart";
import InputBlock from "./inputPages/InputBlock";

const AllPages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/inputSize" element={<InputSize />} />
          <Route path="/inputStart" element={<InputStart />} />
          <Route path="/inputBlock" element={<InputBlock />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllPages;
