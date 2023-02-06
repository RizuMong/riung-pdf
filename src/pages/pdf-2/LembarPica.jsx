import React from "react";
import { WithRouter } from "../../utils/Navigation";

import LogoRiung from "../../assets/logo-riung3.jpg";
import "../../styles/App.css";

const LembarPica = () => {
  return (
    <div className="border border-2 border-dark p-1">
      {/* Header Form */}
      <header className="mt-1">
        <div className="d-flex justify-content-center">
          <img src={LogoRiung} alt="Logo Riung Ops" width="140" height="56" />
        </div>
        <h1 className="text-center fs-4">
          LEMBAR <span className="text-danger">PICA</span>
        </h1>
        <h2 className="text-center fs-5 fw-normal">
          (PROBLEM IDENTIFICATION, CORRECTIVE - PREVENTION ACTION)
        </h2>
      </header>

      {/* Header */}
      <div className="mt-2">
        <pre className="text-normal m-0">Jobsite :</pre>
        <pre className="text-normal m-0">Bagian/departemen :</pre>
        <div className="d-flex justify-content-between">
          <pre className="text-normal m-0">Proses/kegiatan :</pre>
          <p className="text-sm">FRM-MRE-001</p>
        </div>
        <div className="d-flex justify-content-between">
          <pre className="text-normal m-0">Periode :</pre>
          <p>Rev. 1</p>
        </div>
      </div>

      {/* Table Content (Missing Width Table)*/}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-abu">
            <tr className="text-center">
              <th>No</th>
              <th>PROBLEM</th>
              <th>CAUSE / Identification</th>
              <th>CORRECTIVE - PREVENTION ACTION</th>
              <th>PIC</th>
              <th>Due Date</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
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
      <div className="d-flex justify-content-between px-5 mt-4">
        <div className="mt-2">
          <p>Disahkan oleh,</p>
          <p className="mt-5 text-center border-bottom border-1 border-dark">
            (Casey Khaled)
          </p>
        </div>
        <div>
          <p>lokasi, ..../..../.....</p>
          <p>Di siapkan oleh</p>
          <p className="mt-6 text-center border-bottom border-1 border-dark">
            (Casey Khaled)
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(LembarPica);
