import React from "react";
import { WithRouter } from "../utils/Navigation";

import LogoRiung from "../assets/logo-riung.jpg";
import "../styles/App.css";

const LogBookSectionReport = () => {
  return (
    <div className="container-fluid pb-5">
      <div className="mt-2">
        <div className="border border-3 border-dark">
          <div className="p-1">
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
                <thead>
                  <th className="col-3">
                    {" "}
                    <div className="d-flex gap-3 mb-4">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="84"
                        height="40"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold text-lg">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                        SMU
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-6">
                    <h1 className="header-report-production mb-6 fw-semibold">
                      LOG BOOK SECTION HEAD REPORT
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
                    <div className="mb-1">
                      <p className="mb-2 px-2  fw-normal text-alat">
                        No. Dokumen:{" "}
                        <span className="fw-semibold fst-italic">
                          FRM-OPR - 006
                        </span>
                      </p>
                      <hr className="w-100" />
                      <p className="mb-2 px-2  fw-normal text-alat">
                        Hari / Tanggal:{" "}
                      </p>
                      <hr className="w-100" />
                      <p className="mb-2 px-2  fw-normal text-alat">
                        Halaman:{" "}
                      </p>
                      <hr className="w-100" />
                    </div>
                  </th>
                </thead>
              </table>
            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-2">
                <thead className="text-center">
                  <tr>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="3%"
                      scope="col"
                      className="fs-6"
                    >
                      NO
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="10%"
                      scope="col"
                      className="fs-6"
                    >
                      LOKASI
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="8%"
                      scope="col"
                      className="fs-6"
                    >
                      C/N LOADER
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="8%"
                      scope="col"
                      className="fs-6"
                    >
                      C/N HAULER
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="22%"
                      scope="col"
                      className="fs-6"
                    >
                      AKTIVITAS
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="14%"
                      scope="col"
                      className="fs-6"
                    >
                      SKETSA
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="5%"
                      scope="col"
                      className="fs-6"
                    >
                      STATUS PKH
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="15%"
                      scope="col"
                      className="fs-6"
                    >
                      PROBLEM
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="10%"
                      scope="col"
                      className="fs-6"
                    >
                      CORRECTIVE ACTION
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="5%"
                      scope="col"
                      className="fs-6"
                    >
                      PARAF
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-sm fw-normal">1</td>
                    <td className="text-sm fw-normal">PIT CENTRAL</td>
                    <td className="text-sm fw-normal">EX 510</td>
                    <td className="text-sm fw-normal">5 x DT VOLVO</td>
                    <td className="text-sm fw-normal">EX 510</td>
                    <td className="text-sm fw-normal">EX 510</td>
                    <td className="text-sm fw-normal">EX 510</td>
                    <td className="text-sm fw-normal">EX 510</td>
                    <td className="text-sm fw-normal">EX 510</td>
                    <td className="text-sm fw-normal">EX 510</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr className="w-100 solid m-0" />

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Diserahkan Oleh,</p>
                  <p className="mt-5 fw-bold">(Yosua H)</p>
                  <p className="fw-bold">Section Shift 1</p>
                </div>
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Diterima Oleh,</p>
                  <p className="mt-5 fw-bold">(Muhlis)</p>
                  <p className="fw-bold">Koordinator Shift 2</p>
                </div>
                <div className="col-4 text-center">
                  <p className="fw-bold">Diketahui,</p>
                  <p className="mt-5 fw-bold">(__________________)</p>
                  <p className="fw-bold">Production Dept Head</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(LogBookSectionReport);
