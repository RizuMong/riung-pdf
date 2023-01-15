import React from "react";
import { WithRouter } from "../../utils/Navigation";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const FormPengambilanBahanPeledak = () => {
  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <div className="border border-2 border-dark">
          <div className="p-2">
            {/* Header */}
            <div className="d-flex gap-3 align-items-center">
              <img
                className="pl-2"
                src={LogoRiung}
                width="120"
                height="60"
                alt="Logo RIUNG"
              />
              <h5 className="fw-bold text-xl">
                PT. RIUNG MITRA LESTARI <br /> JOB SITE : MGM
              </h5>
            </div>

            <div className="d-flex justify-content-center py-5">
              <h1 className="border p-2 w-75 text-center fw-normal">
                FORMULIR PENGAMBILAN BAHAN PELEDAK
              </h1>
            </div>

            <hr className="w-100 solid" />

            {/* Table Header */}

            {/* Table Content */}

            {/* Content Bottom */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(FormPengambilanBahanPeledak);
