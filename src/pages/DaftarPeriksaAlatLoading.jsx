import React from "react";
import { WithRouter } from "../utils/Navigation";

import Table from "react-bootstrap/Table";
import LogoRiung from "../assets/logo-riung.jpg";
import "../styles/App.css";

const DaftarPeriksaAlatLoading = () => {
  return (
    <div className="container-fluid px-5 pb-5">
      <div className="mt-2">
        <p className="text-end fst-italic">FRM – OPR - 018</p>
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
                      className="pl-2 mb-4"
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
                  <h1 className="header-alat-loading mb-5 ">
                    DAFTAR PERIKSA KONTAMINASI ALAT LOADING/CLEANING
                  </h1>
                </th>
                <div className="vr" style={{ height: 100 }}></div>
                <th className="col-3">
                  <div className="mb-4">
                    <p className="mb-2 pt-1 px-2 text-serif fw-semibold text-alat">
                      Hari/Tanggal:{" "}
                    </p>
                    <hr className="w-100" />
                    <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                      Pit & Shift:{" "}
                    </p>
                    <hr className="w-100" />
                    <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                      Halaman:{" "}
                    </p>
                    <hr className="w-100" />
                  </div>
                </th>
              </thead>
            </table>

            <hr className="w-100 mb-3 mt-2 solid" />
            {/* Content Table */}
            <Table responsive bordered hover size="sm">
              <thead className="text-center">
                <tr>
                  <th
                    rowSpan={2}
                    scope="col-3"
                    className="header-table-coal2"
                    style={{ verticalAlign: "middle" }}
                  >
                    PEMERIKSAAN
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    C/N UNIT
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    C/N UNIT
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    C/N UNIT
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    C/N UNIT
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    C/N UNIT
                  </th>
                  <th
                    scope="col-3"
                    rowSpan={2}
                    className="header-table-coal2"
                    style={{ verticalAlign: "middle" }}
                  >
                    KETERANGAN
                  </th>
                </tr>
                <tr>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI:
                  </th>
                </tr>
              </thead>

              <tbody className="text-start">
                {/* A. PENGECHEKAN P2H */}
                <tr>
                  <td className="fw-bold">
                    A. PENGECHEKAN P2H
                    <br />
                    <span className="fw-normal">
                      1. Apakah P2H telah dilakukan dengan benar oleh operator
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* B. PENGECHEKAN UNIT */}
                <tr>
                  <td className="fw-bold">
                    B. PENGECHEKAN UNIT <br />
                    - Undercarriage
                    <br />
                    <span className="fw-normal">
                      1. Apakah P2H telah dilakukan dengan benar oleh operator
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2. Apakah kekencangan track-link normal</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    3. Apakah undercarriage sudah bersih dari material non
                    Batubara
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* Teeth, Pins & Bucket */}
                <tr>
                  <td className="fw-bold">
                    - Teeth, Pins & Bucket
                    <br />
                    <span className="fw-normal">
                      1. Apakah P2H telah dilakukan dengan benar oleh operator
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    2. Apakah pemasangan pin & lock pin bolt pada teeth bucket
                    sudah benar & aman
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    3. Apakah teeth bucket bukan bekas reinforced (harus genuine
                    parts)
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4. Apakah punggung bucket tidak ada retakan</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* Teeth, Pins & Bucket */}
                <tr>
                  <td className="fw-bold">
                    C. LINGKUNGAN
                    <br />
                    <span className="fw-normal">
                      1. Apakah lingkungan loading excavator <br/> sudah bersih dari
                      material non-batubara
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>

            <hr className="w-100 mb-3 mt-2 solid" />
            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p>Pemeriksaan tersebut sudah dilakukan dengan benar Oleh,</p>
                  <p className="mt-5">(__________________)</p>
                  <p> Prod. Group Leader</p>
                </div>
                <div className="col-4 align-self-end">
                  <p className="text-base">
                    Distribusi : <u>Asli</u> : Production Dept., <u>Yellow</u> :
                    Customer
                  </p>
                </div>
                <div className="col-4 text-center">
                  <p>Mengetahui,</p>
                  <p className="mt-5">(__________________)</p>
                  <p>Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(DaftarPeriksaAlatLoading);
