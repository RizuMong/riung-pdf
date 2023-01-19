import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ProductionReport = () => {
  const [datas, setDatas] = useState([]);
  const [diterima, setDiterima] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(import.meta.env.VITE_HANDOVER_URL, {
        data: {
          _id: queryParams.get("_id"),
          company_id: queryParams.get("company_id"),
          created_at: queryParams.get("created_at"),
          created_by: queryParams.get("created_by"),
          date: queryParams.get("date"),
          id: queryParams.get("id"),
          id_hop: queryParams.get("id_hop"),
          kategori: "Front OB",
          lokasi: "testing",
          lokasi_pkh_id: "fr5MlB2Vg",
          penerima_hop: {
            company_user_id: 163624,
            email: "userbiariung4@mailinator.com",
            name: "userbiariung4 ",
            photo: "",
          },
          pkh_id: "iQFMlfhVg",
          shift: "Shift 1",
          updated_at: 1673495715902,
          updated_by: 163623,
        },
      })
      .then((res) => {
        const { data } = res;
        setDatas(data);
        if (res.data && res.data[0] && res.data[0].diterima) {
          setDiterima(res.data[0].diterima);
        }
        if (res.data && res.data[0] && res.data[0].tanggal) {
          setTanggal(res.data[0].tanggal);
        }
        if (res.data && res.data[0] && res.data[0].shift) {
          setShift(res.data[0].shift);
        }
        console.log({
          arr: data[0].shift,
        });
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
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
                        Hari / Tanggal /Shift: {tanggal} / {shift}
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
            <table className="table table-bordered">
              <thead className="text-center">
                <tr>
                  <th
                    width="15%"
                    scope="col"
                    className="fs-6 table-light align-middle"
                  >
                    UNIT B/D
                  </th>
                  <th
                    width="15%"
                    scope="col"
                    className="fs-6 table-light align-middle"
                  >
                    UNIT S/B
                  </th>
                  <th
                    width="70%"
                    scope="col"
                    className="fs-6 align-middle text-start"
                  >
                    CATATAN
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <td className="text-sm fw-semibold border border-1">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </td>
                <td className="text-sm fw-semibold border border-1">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </td>
                <td className="text-sm fw-semibold border border-1">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </td>
              </tbody>
            </table>

            <hr className="w-100 solid m-0" />

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Dibuat oleh,</p>
                  <p className="mt-5">()</p>
                  <p className="fw-bold">Group Leader</p>
                </div>
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Diserahkan,</p>
                  <p className="mt-5">()</p>
                  <p className="fw-bold">Section Head</p>
                </div>
                <div className="col-4 text-center">
                  <p className="fw-bold">Diterima,</p>
                  <p className="mt-5">({diterima})</p>
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
