import React from "react";
import { WithRouter } from "../../utils/Navigation";

import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const PerintahKerjaHarian = () => {
  return (
    <div className="container-fluid pb-5">
      <div className="mt-2">
        <div className="border border-3 border-dark">
          <div className="p-1">
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
                <thead>
                  <th className="col-1">
                    {" "}
                    <div className="d-flex gap-3 mb-4">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-6">
                    <h1 className="header-report-production mb-6 fw-semibold">
                      PERINTAH KERJA HARIAN (PKH)
                    </h1>
                  </th>
                  <th className="col-3">
                    <div className="mb-4">
                      <p className="mb-2 px-2 fw-semibold fst-italic text-alat">
                        FRM-OPR - 006
                      </p>
                      <p className="mb-2 px-2 fw-semibold fs-6 text-alat">
                        2-2
                      </p>
                    </div>
                  </th>
                </thead>
              </table>
              <hr className="w-100 solid" />
              <table className="table">
                <thead>
                  <th className="col-8">
                    <div className="mb-5">
                      <p className="mb-2 mt px-3 fw-normal text-alat">
                        DARI: Dept. Head
                      </p>
                      <p className="mb-2 px-3 fw-normal text-alat">
                        KEPADA: Section Head
                      </p>
                    </div>{" "}
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-4">
                    <div className="mb-3">
                      <p className="mb-2 mt px-2 fw-normal text-alat">
                        Jobsite: SMU
                      </p>
                      <p className="mb-2 px-2 fw-normal text-alat">
                        Hari/Tanggal: Senin, 23 Mei 2022
                      </p>
                      <p className="mb-2 px-2 fw-normal text-alat">
                        Area: Disposal Void Central Selatan
                      </p>
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
                      width="5%"
                      scope="col"
                      className="fs-6"
                    >
                      NO
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="20%"
                      scope="col"
                      className="fs-6"
                    >
                      LOKASI
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="25%"
                      scope="col"
                      className="fs-6"
                    >
                      INSTRUKSI KERJA
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="25%"
                      scope="col"
                      className="fs-6"
                    >
                      LAPORAN PELAKSANAAN SHIFT 1
                    </th>
                    <th
                      style={{ verticalAlign: "middle" }}
                      width="25%"
                      scope="col"
                      className="fs-6"
                    >
                      LAPORAN PELAKSANAAN SHIFT 2
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-sm fw-normal">1</td>
                    <td className="text-sm fw-normal">
                      Disposal Void Central Selatan
                    </td>
                    <td className="text-sm fw-normal">
                      -Dumping material FD pembentukan disposal RL +105
                      (EX510,460) - Dumping material FD RL +10 (Sekatan) (EX
                      421, 459)
                    </td>
                    <td className="text-sm fw-normal"></td>
                    <td className="text-sm fw-normal"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr className="w-100 solid m-0" />
            {/* Content Bottom */}
            <div className="row">
              <div>
                <div className="d-flex gap-5 mt-1">
                  <p className="mb-2 mt px-2 fw-normal text-alat">
                    Dibuat: Dept. Head
                  </p>
                  <p className="mb-2 mt px-2 fw-normal text-alat">
                    Demzy Tendean
                  </p>
                </div>

                <div className="d-flex gap-2">
                  <p className="mb-2 px-2 fw-normal text-alat">
                    Dilaporkan: Section Head
                  </p>
                  <p className="mb-2 mt px-2 fw-normal text-alat">
                    Yosua H Hutagaol
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="mb-2 px-2 fw-normal text-alat">
                    Dilaksanakan: Group Leader
                  </p>
                  <p className="mb-2 px-2 fw-semibold text-alat">
                    ( Bambang S)
                  </p>
                  <p className="mb-2 px-2 fw-semibold text-alat px-5">
                    ( Andika N)
                  </p>
                </div>
              </div>
            </div>
            <hr className="w-100 solid m-0" />
            <div className="d-flex justify-content-between">
              <h5 className="fs-6 mt-1 border-end px-2 border-2">
                NB: TOLONG DI JAGA ELEVASI DISPOSAL JANGAN SAMPAI OVER FILL
              </h5>
              <p className="fs-6 mt-1">Halaman: 02/02</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(PerintahKerjaHarian);
