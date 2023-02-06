import React from "react";
import { WithRouter } from "../../utils/Navigation";

import { Table } from "react-bootstrap";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const MinutesOfMeeting = () => {
  return (
    <div className="border border-1 border-dark p-1">
      {/* Header */}
      <div className="d-flex justify-content-between">
        <div>
          <img src={LogoRiung} alt="Logo Riung Ops" width="80" height="44" />
        </div>
        <h5 className="align-self-center fw-bold fs-4 mt-2">
          MINUTES of MEETING
        </h5>
        <div>
          <p className="text-sm">FRM-MRE-015</p>
          <p className="text-sm">Rev. 01</p>
        </div>
      </div>

      {/* Tanggal dan Lokasi */}
      <div className="d-flex gap-5 mt-3">
        <p className="text-sm">Tanggal:</p>
        <p className="text-sm pl-5">Lokasi:</p>
      </div>

      {/* Table Peserta */}
      <Table responsive bordered>
        <thead>
          <tr>
            <th className="align-top text-sm fw-bold" rowSpan={4}>
              Peserta:
            </th>
          </tr>
          <tr className="text-center text-sm align-middle">
            <th>Absen</th>
            <th>Absen</th>
            <th>Absen</th>
            <th>Absen</th>
            <th>Absen</th>
            <th>Absen</th>
            <th>Absen</th>
            <th>Absen</th>
            <th>Absen</th>
            <th>Absen</th>
          </tr>
        </thead>
      </Table>

      {/* Nama Meeting */}
      <div className="w-100 border border-1">
        <p className="text-sm fw-semibold">Nama Meeting: </p>
      </div>

      {/* Table Content */}
      <Table responsive bordered hover>
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Materi Pembahasan</th>
            <th>Progress</th>
            <th>Due Date</th>
            <th>PIC</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center text-sm">
            <td>1</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
          </tr>
        </tbody>
      </Table>

      {/* Note */}
      <div className="pl-2">
        <p className="text-danger fw-bold fs-6">NOTE:</p>
      </div>
    </div>
  );
};

export default WithRouter(MinutesOfMeeting);
