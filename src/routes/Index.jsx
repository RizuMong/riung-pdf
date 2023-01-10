import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// PDF 1
import ExcavatorControl from "../pages/pdf-1/ExcavatorControl";
import DaftarPeriksaAlatAngkut from "../pages/pdf-1/DaftarPeriksaAlatAngkut";
import HandOverProductionReport from "../pages/pdf-1/ProductionReport";
import ControlActivityCoalGetting from "../pages/pdf-1/ControlActivityCoalGetting";
import DaftarPeriksaAlatLoading from "../pages/pdf-1/DaftarPeriksaAlatLoading";
import ProductionControl from "../pages/pdf-1/ProductControl";
import HandoverReportPitSupportServiceActivity from "../pages/pdf-1/ReportPitService";
import RoadMaintenanceHandover from "../pages/pdf-1/RoadMaintenanceHandover";
import DaftarPeriksaOpenLeader from "../pages/pdf-1/DaftarPeriksaGroupLeader";
import DaftarPeriksaLeader from "../pages/pdf-1/DaftarPeriksaLeader";
import WorkOrderActionReport from "../pages/pdf-1/WorkOrderActionReport";
import LogBookSectionReport from "../pages/pdf-1/LogBookSectionReport";
import PerintahKerjaHarian from "../pages/pdf-1/PerintahKerjaHarian";

// PDF 2
import BeritaAcaraPeledakan from "../pages/pdf-2/BeritaAcaraPeledakan";
import BlastDesign from "../pages/pdf-2/BlastDesign";
import BlastingReport from "../pages/pdf-2/BlastingReport";
import CheckAktivitasPeledakan from "../pages/pdf-2/CheckAktivitasPeledakan";
import DrillDesign from "../pages/pdf-2/DrillDesign";
import DrillingReport from "../pages/pdf-2/DrillingReport";
import FormPengambilanBahanPeledak from "../pages/pdf-2/FormPengambilanBahanPeledak";
import PemeriksaanKondisiLubangLedak from "../pages/pdf-2/PemeriksaanKondisiLubangLedak";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PDF 1 */}
        <Route exact path="/" element={<ExcavatorControl />} />
        <Route
          path="/daftar-periksa-alat-angkut"
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
          path="/daftar-periksa-open-leader"
          element={<DaftarPeriksaOpenLeader />}
        />
        <Route
          path="/road-maintenance-handover"
          element={<RoadMaintenanceHandover />}
        />
        <Route
          path="/work-order-action-report"
          element={<WorkOrderActionReport />}
        />
        <Route
          path="/log-book-section-report"
          element={<LogBookSectionReport />}
        />
        <Route
          path="/perintah-kerja-harian"
          element={<PerintahKerjaHarian />}
        />
        {/* PDF 2 */}
        <Route path="/drill-design" element={<DrillDesign />} />
        <Route
          path="/pemeriksaan-kondisi-lubang-ledak"
          element={<PemeriksaanKondisiLubangLedak />}
        />
        <Route path="/drilling-report" element={<DrillingReport />} />
        <Route
          path="/form-pengambilan-bahan-peledak"
          element={<FormPengambilanBahanPeledak />}
        />
        <Route
          path="/check-aktivitas-peledakan"
          element={<CheckAktivitasPeledakan />}
        />
        <Route path="/blast-design" element={<BlastDesign />} />
        <Route path="/blasting-report" element={<BlastingReport />} />
        <Route
          path="/berita-acara-peledakan"
          element={<BeritaAcaraPeledakan />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
