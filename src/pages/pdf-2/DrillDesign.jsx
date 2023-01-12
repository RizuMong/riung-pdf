import React from "react";
import { WithRouter } from "../../utils/Navigation";

import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DrillDesign = () => {
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
                    <h1 className="header-drill mb-6">DRILL DESIGN</h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat border-bottom border-1 pb-2">
                        Hari/Tanggal:{" "}
                      </p>
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat border-bottom border-1 pb-2">
                        Shift:{" "}
                      </p>
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat border-bottom border-1 pb-1">
                        Halaman:{" "}
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

export default WithRouter(DrillDesign);
