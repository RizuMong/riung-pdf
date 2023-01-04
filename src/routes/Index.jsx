import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExcavatorControl from "../pages/ExcavatorControl";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExcavatorControl />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;