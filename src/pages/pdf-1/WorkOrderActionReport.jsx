import React from "react";
import { WithRouter } from "../../utils/Navigation";

import LogoRiung from "../../assets/logo-riung2.jpg";
import "../../styles/App.css";

const WorkOrderActionReport = () => {
  return (
    <div className="container-fluid pb-5">
      <div className="mt-2">
        <p className="text-end fs-6 fst-italic">Form Eng 024</p>
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
                        width="290"
                        height="40"
                        alt="Logo RIUNG"
                      />
                    </div>
                  </th>
                  <div className="vr" style={{ height: 70 }}></div>
                  <th className="col-6">
                    <h1 className="header-report-production mb-4 fw-semibold">
                      WORK ORDER & ACTION REPORT
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 70 }}></div>
                  <th className="col-2">
                    <div className="mb-1">
                      <p className="mb-2 px-2  fw-normal text-alat">
                        No. Dokumen:{" "}
                        <span className="fw-semibold fst-italic">
                          FRM-OPR - 003
                        </span>
                      </p>
                      <hr className="w-100" />
                      <p className="mb-2 px-2  fw-normal text-alat">
                        Hari / Tanggal /Shift:{" "}
                      </p>
                      <hr className="w-100" />
                    </div>
                  </th>
                  <div className="vr" style={{ height: 70 }}></div>
                  <th className="col-2 pl-2">
                    <div className="mb-3">
                      <p className="mb-2 px-2 fw-normal text-alat">
                        HALAMAN
                      </p>
                      <p className="fw-normal text-alat pl-4">1</p>
                    </div>
                  </th>
                </thead>
              </table>
            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}


            {/* Content Bottom */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(WorkOrderActionReport);
