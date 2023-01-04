import React from "react";
import { WithRouter } from "../utils/Navigation";

import LogoRiung from "../assets/logo-riung.jpg";
import "../styles/App.css";

const DaftarPeriksaAlatAngkut = () => {
  return (
    <div className="container px-5 pb-5">
      <div className="mt-2">
        <p className="text-end fst-italic">FRM-OPR-018</p>
        <div className="border border-3 border-dark">
          <div className="p-3">
            {/* Header */}
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
                <thead>
                  <th className="col-4">
                    {" "}
                    <div className="d-flex gap-3 mb-3">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold header-pt">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                        ...........................
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-5">
                    <h1 className="header-alat-angkut mb-4">
                      DAFTAR PERIKSA KONTAMINASI ALAT ANGKUT BATUBARA
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                        Hari/Tanggal:{" "}
                      </p>
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                        Shift:{" "}
                      </p>
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                        Halaman:{" "}
                      </p>
                    </div>
                  </th>
                </thead>
                
              </table>
              <hr className="w-100"/>
            </div>

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row justify-content-center">
                <div className="col-10 d-flex gap-5">
                  <p className="fw-bold mt-6">Productivity =</p>
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <p className="fw-bold pl-3">60</p>
                      <hr className="" />
                      <p className="fw-bold pl-2">Minutes</p>
                    </div>
                    <p className="fw-bold">x Production</p>
                  </div>
                </div>
                <div className="col-2 text-center">
                  <p>Dibuat oleh,</p>
                  <p className="mt-5 border-bottom border-dark border-3">
                    ( Group Leader )
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(DaftarPeriksaAlatAngkut);
