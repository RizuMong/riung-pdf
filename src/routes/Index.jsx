import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExcavatorControl from "../pages/ExcavatorControl";
import DaftarPeriksaAlatAngkut from "../pages/DaftarPeriksaAlatAngkut"

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ExcavatorControl />} />
        <Route path="/periksa-alat-angkut" element={<DaftarPeriksaAlatAngkut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;