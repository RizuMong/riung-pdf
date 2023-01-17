import React from "react";
import { WithRouter } from "../../utils/Navigation";

import Img_TTD from "../../assets/img_ttd.png";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DrillingReport = () => {
  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM-OPR-007</p>
        <div className="border border-3 border-dark">
          <div className="p-3">
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
                <thead>
                  <th className="col-4">
                    {" "}
                    <div className="d-flex gap-3 align-items-center mb-4">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold header-pt">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                        MGM
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-5">
                    <h1 className="header-drill fw-bold mb-6">
                      DRILLING REPORT
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 text-serif fw-normal align-middle text-alat border-bottom border-1 pb-2">
                        PIT: <span className="text-black">EAST KAWI</span>
                      </p>
                      <p className="mb-2 px-2 text-serif fw-normal align-middle text-alat border-bottom border-1 pb-2">
                        Tanggal:{" "}
                        <span className="text-black">8 - 11 - 2022</span>
                      </p>
                      <p className="mb-2 px-2 text-serif fw-normal align-middle text-alat border-bottom border-1 pb-1">
                        SHIFT: <span className="text-black">1</span>
                      </p>
                    </div>
                  </th>
                </thead>
              </table>

              {/* Table Content */}
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-center fs-6">
                      <th rowSpan={3} className="fw-semibold align-middle">
                        C/N UNIT
                      </th>
                      <th colSpan={4} className="fw-semibold align-middle">
                        LOKASI
                      </th>
                      <th rowSpan={3} className="fw-semibold align-middle">
                        No of Hole
                      </th>
                      <th rowSpan={3} className="fw-semibold align-middle">
                        Depth (m){" "}
                      </th>
                      <th rowSpan={3} className="fw-semibold align-middle">
                        Work
                      </th>
                      <th colSpan={10} className="fw-semibold align-middle">
                        Delays
                      </th>
                      <th colSpan={3} className="fw-semibold align-middle">
                        Idle
                      </th>
                      <th colSpan={2} className="fw-semibold align-middle">
                        Maint.
                      </th>
                      <th rowSpan={3} className="fw-semibold align-middle">
                        KETERANGAN
                      </th>
                    </tr>
                    <tr className="text-center fs-6">
                      <th rowSpan={2} className="fw-semibold align-middle">
                        BLOK
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        STRIP
                      </th>
                      <th colspan={2} className="fw-semibold align-middle">
                        ELV
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D01{" "}
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D02
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D03
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D04
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D05
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D06
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D07
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D08
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D09
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D010
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        I01
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        I02
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        I03
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        N01
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        S01
                      </th>
                    </tr>
                    <tr className="text-center fs-6">
                      <th className="fw-semibold align-middle">BLOK</th>
                      <th className="fw-semibold align-middle">STRIP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center text-black">
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                    </tr>
                    {/* <tr className="text-center">
                      <td colSpan={5} className="text-start fw-semibold">
                        TOTAL UNIT DRILLING 1:
                      </td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                    </tr>
                    <tr className="text-center">
                      <td colSpan={5} className="text-start fw-semibold">
                        TOTAL UNIT DRILLING 2:
                      </td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                    </tr> */}
                    <tr className="text-center">
                      <td colSpan={5} className="text-center fs-5 fw-semibold">
                        TOTAL
                      </td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Content Bottom */}
              <div className="container px-4">
                <div className="row border border-1 align-items-center">
                  <div className="col-3 text-center gap-5">
                    <p className="fw-bold">Diserahkan Oleh,</p>
                    <img src={Img_TTD} alt="Gambar TTD" width="80" />
                    <p className="fw-bold">(Data)</p>
                    <p className="fw-bold">Section Shift 1</p>
                  </div>
                  <div className="col-3 text-center gap-5">
                    <p className="fw-bold">Diterima Oleh,</p>
                    <img src={Img_TTD} alt="Gambar TTD" width="80" />
                    <p className="fw-bold">(Data)</p>
                    <p className="fw-bold">Koordinator Shift 2</p>
                  </div>
                  <div className="col-6">
                    <div className="d-flex justify-content-between">
                      <div className="fw-normal">
                        <p>Catatan:</p>
                        <p>D01 : P2H</p>
                        <p>D02 : Isi Solar & Lube</p>
                        <p>D03 : Cek U/C</p>
                        <p>D04 : Pindah Alat</p>
                        <p>D05 : Tunggu Alat Lain</p>
                        <p>D06 : Survey</p>
                      </div>
                      <div className="fw-normal mt-3">
                        <p>D07 : Tunggu Blasting</p>
                        <p>D08 : Cuci Unit</p>
                        <p>D09 : Ganti Shift</p>
                        <p>D10 : Istirahat/Makan</p>
                        <p>I01 : Tidak Ada Pekerjaan</p>
                        <p>I02 : Tidak Ada Operator</p>
                      </div>
                      <div className="fw-normal mt-3">
                        <p>I03 : Hujan</p>
                        <p>N01 : Breakdown</p>
                        <p>S01 : Service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(DrillingReport);
