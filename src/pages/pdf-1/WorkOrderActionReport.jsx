import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import { Table } from "react-bootstrap";
import LogoRiung from "../../assets/logo-riung2.jpg";
import "../../styles/App.css";

const WorkOrderActionReport = () => {
  const [loading, setLoading] = useState(true);

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/work-order",
        {
          data: {
            id_work_order: "I275ieJVg",
          },
        }
      )
      .then((res) => {
        const { data } = res;

        console.log(data);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="text-center pt-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
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
                        NO. :{" "}
                        <span className="fw-normal">
                          IV/Eng/WO-Pro/VII/21
                        </span>
                      </p>
                      <hr className="w-100" />
                      <p className="mb-2 px-2  fw-normal text-alat">
                        PERIODE :{" "}
                      </p>
                      <hr className="w-100" />
                    </div>
                  </th>
                  <div className="vr" style={{ height: 70 }}></div>
                  <th className="col-2 pl-2">
                    <div className="mb-3">
                      <p className="mb-2 px-2 fw-normal text-alat">HALAMAN</p>
                      <p className="fw-normal text-alat pl-4">1</p>
                    </div>
                  </th>
                </thead>
              </table>
            </div>
            <hr className="w-100 solid" />

            {/* Head Table Content */}
            <Table responsive bordered>
              <thead className="text-center">
                <tr>
                  <th
                    colspan={2}
                    scope="col-3"
                    className="header-table-action border-end"
                    style={{ width: "50%", verticalAlign: "middle" }}
                  >
                    PEMERIKSAAN
                  </th>
                  <th
                    colspan={2}
                    scope="col-3"
                    className="header-table-action"
                    style={{ width: "50%", verticalAlign: "middle" }}
                  >
                    ACTION REPORT
                  </th>
                </tr>
                <tr>
                  <th scope="col-3" className="header-table-coal text-start ">
                    KEPADA: Prod & TDC Dept. Head
                  </th>
                  <th
                    scope="col-3"
                    className="header-table-coal text-start border-end"
                  >
                    DEPT. : Production & TDC
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    KEPADA: Engineering Dept. Head
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    Dept. Engineering
                  </th>
                </tr>
                <tr>
                  <th
                    colspan={2}
                    scope="col-3"
                    className="header-table-coal text-start border-end"
                  >
                    TEMBUSAN: Project Manager
                  </th>
                  <th
                    colspan={2}
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
                    TEMBUSAN: Project Manager
                  </th>
                </tr>
              </thead>
            </Table>

            {/* Table Content */}
            <Table responsive bordered className="m-0">
              <thead>
                <tr>
                  <th
                    style={{ width: "3%", verticalAlign: "middle" }}
                    className="header-table-action2"
                  >
                    NO
                  </th>
                  <th
                    style={{ width: "29%", verticalAlign: "middle" }}
                    className="header-table-action2"
                  >
                    URAIAN PEKERJAAN
                  </th>
                  <th
                    style={{ width: "10%", verticalAlign: "middle" }}
                    className="header-table-action2"
                  >
                    LOKASI
                  </th>
                  <th
                    style={{ width: "8%", verticalAlign: "middle" }}
                    className="header-table-action2 border-end"
                  >
                    TARGET WAKTU
                  </th>
                  <th
                    style={{ width: "32%", verticalAlign: "middle" }}
                    className="header-table-action2"
                  >
                    URAIAN PELAKSANAAN
                  </th>
                  <th
                    style={{ width: "18%", verticalAlign: "middle" }}
                    className="header-table-action2"
                  >
                    KETERANGAN
                  </th>
                </tr>
              </thead>
              <tbody className="text-center align-middle">
                <tr>
                  <td className="text-sm">(1)</td>
                  <td className="text-sm text-start">
                    Target Include Rain & Slippery:
                    <br />
                    OB: 542 Bcm
                    <br />
                    Coal: 500 Ton
                  </td>
                  <td className="text-sm fw-semibold">A2 Utara</td>
                  <td className="text-sm fw-semibold border-end">28/08/21</td>
                  <td className="text-sm text-start">
                    Actual Production OB:
                    <br />
                    OB: 563, 571 Bcm
                    <br />
                    Coal: 44' 267 Ton
                  </td>
                  <td className="text-sm">Keterangan</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th className="text-sm fw-normal border-top" colSpan={4}>
                    GAMBAR ACUAN YANG DIGUNAKAN NO: PPT WO_PRO_WK04_2108 slide 6
                  </th>
                  <th
                    className="fw-semibold border-top"
                    rowSpan={2}
                    colSpan={2}
                    style={{ verticalAlign: "top" }}
                  >
                    CATATAN:
                  </th>
                </tr>
                <tr>
                  <th
                    style={{ width: "50%" }}
                    className="fw-semibold"
                    colSpan={4}
                  >
                    CATATAN:
                    <span className="text-sm fw-normal">
                      Harap Feedback diberikan maksimal pada target waktu yang
                      telah tercantum sebelum pukul 15:00 WITA
                    </span>
                  </th>
                  <th
                    style={{ width: "50%" }}
                    className="fw-semibold px-1"
                    colSpan={2}
                  ></th>
                </tr>
              </thead>
            </Table>

            {/* Content Bottom & Tanda Tangan */}
            <Table responsive bordered className="m-0">
              <thead className="text-center">
                <tr>
                  <th style={{ width: "25%" }} className="fw-semibold">
                    <p className="fw-normal text-sm">Krassi, 22 Agustus 2021</p>
                    <p>DIORDER OLEH,</p>
                    <p className="mt-5 border-top border-1">
                      (Yogi Aditya Widodo)
                    </p>
                  </th>
                  <th
                    style={{ width: "25%", verticalAlign: "top" }}
                    className="fw-semibold px-1"
                  >
                    <p>DITERIMA OLEH,</p>
                    <p className="fw-normal text-sm text-start px-1">
                      NAMA: Afrizon
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      JABATAN: Prod Dept. Head
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      DEPT: Production
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      TANGGAL:
                    </p>
                    <p className="fw-normal text-sm text-start px-1">PARAF: </p>
                  </th>

                  <th style={{ width: "25%" }} className="fw-semibold">
                    <p className="fw-normal text-sm">Krassi, 22 Agustus 2021</p>
                    <p>DIORDER OLEH,</p>
                    <p className="mt-5 border-top border-1">(Afrizon)</p>
                  </th>

                  <th
                    style={{ width: "25%", verticalAlign: "top" }}
                    className="fw-semibold"
                  >
                    <p>DITERIMA OLEH,</p>
                    <p className="fw-normal text-sm text-start px-1">
                      NAMA: Yogi Aditya W.
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      JABATAN: Engineering Dept. Head
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      DEPT: Engineering
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      TANGGAL:
                    </p>
                    <p className="fw-normal text-sm text-start px-1">PARAF: </p>
                  </th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(WorkOrderActionReport);
