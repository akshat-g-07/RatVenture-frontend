import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./landingPage/LandingPage";
import InputSize from "./inputPages/InputSize";
import InputStart from "./inputPages/InputStart";

const AllPages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/inputSize" element={<InputSize />} />
          <Route path="/inputStart" element={<InputStart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllPages;
