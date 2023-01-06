import React from "react";
import { WithRouter } from "../utils/Navigation";

import Table from "react-bootstrap/Table";
import LogoRiung from "../assets/logo-riung.jpg";
import "../styles/App.css";

const ControlActivityCoalGetting = () => {
  return (
    <div className="container px-5 pb-5">
      <div className="mt-2">
        <p className="text-end fst-italic">FRM – OPR - 004</p>
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
                  <h1 className="header-coal-getting mb-8">
                    CONTROL ACTIVITY COAL GETTING
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
                      Lokasi:{" "}
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
            <Table responsive bordered hover>
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
                  <th
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
                    C/N UNIT
                  </th>
                  <th
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
                    C/N UNIT
                  </th>
                  <th
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
                    C/N UNIT
                  </th>
                  <th
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
                    C/N UNIT
                  </th>
                  <th
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
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
                  <th
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
                    PIT: 
                    <br/>
                    SEAM:
                  </th>
                  <th
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
                    PIT: 
                    <br/>
                    SEAM:
                  </th>
                  <th
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
                    PIT: 
                    <br/>
                    SEAM:
                  </th>
                  <th
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
                    PIT: 
                    <br/>
                    SEAM:
                  </th>
                  <th
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
                    PIT: 
                    <br/>
                    SEAM:
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>Content</td>
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
                    Distribusi : <u>Asli</u> : Production Dept., <u>Yellow</u> : Customer
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

export default WithRouter(ControlActivityCoalGetting);
