import React from "react";
import { WithRouter } from "../../utils/Navigation";

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
                      <p className="mb-2 px-2 text-serif fw-normal text-alat border-bottom border-1 pb-2">
                        PIT: <span className="text-danger">EAST KAWI</span>
                      </p>
                      <p className="mb-2 px-2 text-serif fw-normal text-alat border-bottom border-1 pb-2">
                        Tanggal:{" "}
                        <span className="text-danger">8 - 11 - 2022</span>
                      </p>
                      <p className="mb-2 px-2 text-serif fw-normal text-alat border-bottom border-1 pb-1">
                        SHIFT: <span className="text-danger">1</span>
                      </p>
                    </div>
                  </th>
                </thead>
              </table>

              

            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(DrillingReport);
