import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExcavatorControl from "../pages/ExcavatorControl";
import DaftarPeriksaAlatAngkut from "../pages/DaftarPeriksaAlatAngkut";
import HandOverProductionReport from "../pages/ProductionReport";
import ControlActivityCoalGetting from "../pages/ControlActivityCoalGetting";
import DaftarPeriksaAlatLoading from "../pages/DaftarPeriksaAlatLoading";
import ProductionControl from "../pages/ProductControl";
import HandoverReportPitSupportServiceActivity from "../pages/ReportPitService";
import RoadMaintenanceHandover from "../pages/RoadMaintenanceHandover";
import DaftarPeriksaLeader from "../pages/DaftarPeriksaGroupLeader";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ExcavatorControl />} />
        <Route
          path="/periksa-alat-angkut"
          element={<DaftarPeriksaAlatAngkut />}
        />
        <Route
          path="/production-report"
          element={<HandOverProductionReport />}
        />
        <Route
          path="/daftar-periksa-alat-loading"
          element={<DaftarPeriksaAlatLoading />}
        />
        <Route path="/product-control" element={<ProductionControl />} />
        <Route
          path="/report-pit-service"
          element={<HandoverReportPitSupportServiceActivity />}
        />
        <Route
          path="/control-activity-coal-getting"
          element={<ControlActivityCoalGetting />}
        />
        <Route
          path="/daftar-periksa-leader"
          element={<DaftarPeriksaLeader />}
        />
        <Route
          path="/road-maintenance-handover"
          element={<RoadMaintenanceHandover />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
