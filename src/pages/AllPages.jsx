import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./landingPage/LandingPage";

const AllPages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllPages;
