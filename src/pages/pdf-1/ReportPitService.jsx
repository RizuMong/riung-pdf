import React from "react";
import { WithRouter } from "../../utils/Navigation";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ReportPitService = () => {
  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic text-sm">FRM-OPR-018</p>
        <div className="border border-3 border-dark">
          <div className="p-1">
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
                <thead>
                  <th className="col-3">
                    {" "}
                    <div className="d-flex gap-3 ">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="84"
                        height="40"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold text-lg">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                        RMGM
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 60 }}></div>
                  <th className="col-6">
                    <h1 className="header-report-pit mb-3">
                      HANDOVER REPORT FOR PIT SERVICE ACTIVITY
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 60 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 fw-semibold text-alat">
                        Hari/Tanggal:{" "}
                      </p>
                      <p className="mb-2 px-2 fw-semibold text-alat">SHIFT: </p>
                    </div>
                  </th>
                </thead>
              </table>
            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}
            <Table bordered hover className="text-center">
              <thead>
                <tr>
                  <th scope="col" className="header-table-pit">
                    No
                  </th>
                  <th scope="col" className="header-table-pit">
                    ACTIVITY
                  </th>
                  <th scope="col" className="header-table-pit fw-bold">
                    LOCATION
                  </th>
                  <th scope="col" className="header-table-pit fw-bold">
                    SUPPORT FOR
                  </th>
                  <th scope="col" className="header-table-pit">
                    UNIT
                  </th>
                  <th scope="col" className="header-table-pit">
                    REMARK
                  </th>
                </tr>
              </thead>
              <tbody className="text-start">
                <tr>
                  <td className="text-center">1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>

            <hr className="w-100 solid m-0" />

            {/* Content Bottom */}
            <div className="container px-5 mt-2">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p className="text-sm">Dibuat oleh,</p>
                  <p className="mt-4">()</p>
                  <p className="text-sm">Pit Service Group Leader</p>
                </div>
                <div className="col-4 text-center gap-5">
                  <p className="text-sm">Diserahkan oleh:</p>
                  <p className="mt-4">()</p>
                  <p className="text-sm">Prod. Dept/Section Head</p>
                </div>
                <div className="col-4 text-center">
                  <p className="text-sm">Diterima oleh,</p>
                  <p className="mt-4">()</p>
                  <p className="text-sm">Pit Service Group Leader</p>
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

export default WithRouter(ReportPitService);
