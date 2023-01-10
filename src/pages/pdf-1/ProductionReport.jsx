import React from "react";
import { WithRouter } from "../../utils/Navigation";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ProductionReport = () => {
  return (
    <div className="container-fluid">
      <div className="mt-2">
        <p className="text-end fst-italic">FRM-OPR-018</p>
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
                        width="84"
                        height="40"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold text-lg">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                        ...........................
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-6">
                    <h1 className="header-report-production mb-6 fw-semibold">
                      HANDOVER PRODUCTION REPORT
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
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
                      <p className="mb-2 px-2  fw-normal text-alat">
                        Halaman:{" "}
                      </p>
                      <hr className="w-100" />
                    </div>
                  </th>
                </thead>
              </table>
            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}
            <Table bordered hover className="text-center mt-3">
              <thead>
                <tr>
                  <th
                    scope="col"
                    colSpan={2}
                    className="header-table-production fw-bold"
                  >
                    FLEET
                  </th>
                  <th
                    scope="col"
                    colSpan={9}
                    className="header-table-production fw-bold"
                  >
                    FRONT LOADING
                  </th>
                  <th
                    scope="col"
                    colSpan={2}
                    className="header-table-production fw-bold"
                  >
                    ROAD
                  </th>
                  <th
                    scope="col"
                    colSpan={6}
                    className="header-table-production fw-bold"
                  >
                    DUMPING POINT
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={3}
                    className="header-table-production fw-normal"
                  >
                    REMARKS
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    C/N LOADER
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    C/N HAULER
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    PIT
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    BLOCK
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    SEAM
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    MATERIAL TYPE
                  </th>
                  <th
                    scope="col"
                    colspan={2}
                    className="header-table-production2 fw-normal"
                  >
                    RL
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    CONDITION
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    SUPPORT EQUIPMENT
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    CONDITION
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    SUPPORT EQUIPMENT
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    DISP/S'PILE
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    colspan={2}
                    className="header-table-production2 fw-normal"
                  >
                    RL
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    CONDITION
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    SUPPORT EQUIPMENT
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    colspan={2}
                    rowSpan={2}
                    className="header-table-production2 fw-normal"
                  >
                    DISTANCE
                  </th>
                  {/* <th>dd</th> */}
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal"
                  >
                    PLAN
                  </th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal"
                  >
                    ACT
                  </th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal"
                  >
                    PLAN
                  </th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal"
                  >
                    ACT
                  </th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal"
                  ></th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal"
                  ></th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal"
                  ></th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal"
                  ></th>
                </tr>

                {/* Data */}
                <tr>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 1
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 2
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 3
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 4
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 5
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 6
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 7
                  </th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal"
                  >
                    Data 8
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 9
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 10
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 11
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 12
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 13
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 14
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 15
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 16
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 17
                  </th>
                  <th
                    scope="col"
                    colSpan={2}
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 18
                  </th>
                  <th
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                    className="header-table-production2 fw-normal"
                  >
                    Data 19
                  </th>
                </tr>

                {/* <tbody>
                  <th scope="col" className="w-100">Data</th>
                </tbody> */}
              </thead>

              <tbody className="text-start"></tbody>
            </Table>

            {/* Data Unit */}
            <div className="d-flex">
              <div className="mt-3">
                <Table bordered hover className="">
                  <thead className="table table-light">
                    <tr>
                      <th>UNIT B/D</th>
                      <th>UNIT S/B </th>
                      {/* <th className="table">CATATAN:</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Data.........</td>
                      <td>Data.........</td>
                      {/* <td></td> */}
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="mt-3">
                <hr className="production pl-2 w-100" />
                <p className="fw-semibold">Catatan: ....</p>
                <hr className="production pl-2 mt-7 w-100" />
              </div>
            </div>

            <hr className="w-100 solid m-0" />

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Dibuat oleh,</p>
                  <p className="mt-5">(__________________)</p>
                  <p className="fw-bold">Group Leader</p>
                </div>
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Diserahkan,</p>
                  <p className="mt-5">(__________________)</p>
                  <p className="fw-bold">Section Head</p>
                </div>
                <div className="col-4 text-center">
                  <p className="fw-bold">Diterima,</p>
                  <p className="mt-5">(__________________)</p>
                  <p className="fw-bold">Group Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <p className="text-bottom-left fw-normal text-bottom flex-grow-1">
            Distribusi : Asli : Production Dept.
          </p>
          <p className="text-center fw-normal text-bottom">Revisi : 0</p>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(ProductionReport);
