import React from "react";
import { WithRouter } from "../utils/Navigation";

import Table from "react-bootstrap/Table";
import LogoRiung from "../assets/logo-riung.jpg";
import "../styles/App.css";

const ProductControl = () => {
  return (
    <div className="container px-5 pb-5">
      <div className="mt-2">
        <p className="text-end fst-italic">FRM – OPR - 002</p>
        <div className="border border-2 border-dark">
          <div className="p-3">
            {/* Header */}
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
                  <h1 className="header-production-control text-serif mb-7">
                    PRODUCTION CONTROL
                  </h1>
                </th>
                <div className="vr" style={{ height: 100 }}></div>
                <th className="col-3">
                  <div className="mb-4">
                    <p className="mb-3 px-2 text-serif fw-semibold text-alat">
                      Hari/Tanggal:{" "}
                    </p>
                    <hr className="w-100" />
                    <p className="pt-2 px-2 text-serif fw-semibold text-alat">
                      Lokasi:{" "}
                    </p>
                  </div>
                </th>
              </thead>
            </table>

            {/* Content Table */}

            {/* Content Bottom */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(ProductControl);
