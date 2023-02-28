import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ProductControl = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/production-control-page",
        {
          data: {
            // id_production_control: queryParams.get("id_production_control"),
            // lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            // pkh: queryParams.get("pkh")
            id_production_control: queryParams.get("id_production_control"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            pkh: queryParams.get("pkh")
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        if (res.data && res.data[0] && res.data[0].jobsite) {
          setJobsite(res.data[0].jobsite);
        }
        if (res.data && res.data[0] && res.data[0].tanggal) {
          setTanggal(res.data[0].tanggal);
        }
        if (res.data && res.data[0] && res.data[0].lokasi) {
          setLokasi(res.data[0].lokasi);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM – OPR - 004</p>
        <div className="border border-2 border-dark">
          <div className="p-3">
            {/* Header */}
            {/* Header Table */}
            <table className="table">
              <thead>
                <th className="col-4">
                  {" "}
                  <div className="d-flex gap-3 mb-2 align-items-center">
                    <img
                      className="pl-2"
                      src={LogoRiung}
                      width="120"
                      height="60"
                      alt="Logo RIUNG"
                    />
                    <h5 className="fw-bold header-pt">
                      PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE{" "}
                      {jobsite}
                    </h5>
                  </div>
                </th>
                <div className="vr" style={{ height: 80 }}></div>
                <th className="col-5">
                  <h5 className="header-production-control2 text-serif mb-4">
                    PRODUCTION CONTROL
                  </h5>
                </th>
                <div className="vr" style={{ height: 80 }}></div>
                <th className="col-3">
                  <div className="mb-3">
                    <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                      Hari/Tanggal: {tanggal}
                    </p>
                    <hr className="w-100" />
                    <p className="pt-2 px-2 text-serif fw-semibold text-alat">
                      Lokasi: {lokasi}
                    </p>
                  </div>
                </th>
              </thead>
            </table>

            <hr className="w-100 mb-3 mt-2 solid" />
            {/* Content Table */}
            <Table responsive bordered>
              <thead className="text-center">
                <tr>
                  <th
                    rowSpan={2}
                    width="20%"
                    scope="col-3"
                    className="header-table-product align-middle"
                  >
                    Waktu
                  </th>
                  <th
                    scope="col-3"
                    width="25%"
                    colSpan={2}
                    className="header-table-product align-middle"
                  >
                    Produksi
                  </th>
                  <th
                    scope="col-3"
                    width="25%"
                    colSpan={2}
                    className="header-table-product align-middle"
                  >
                    Akumulasi Produksi
                  </th>
                  <th
                    rowSpan={2}
                    width="30%"
                    scope="col-3"
                    className="header-table-product align-middle"
                  >
                    Keterangan
                  </th>
                </tr>
                <tr>
                  <th scope="col-3">Plan</th>
                  <th scope="col-3">Aktual</th>
                  <th scope="col-3">Plan</th>
                  <th scope="col-3">Aktual</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {/* {datas?.map((item, index) => (
                  <tr key={index}>
                    <td>{item?.line.jam}</td>
                    <td>{item?.line.produksi_plan}</td>
                    <td>{item?.line.produksi_aktual}</td>
                    <td>{item?.line.akumulasi_plan}</td>
                    <td>{item?.line.akumulasi_aktual}</td>
                    <td>{item?.line.keterangan}</td>
                  </tr>
                ))} */}
                <tr>
                  <td>07:00 - 08:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>08:00 - 09:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>09:00 - 10:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>10:00 - 11:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11:00 - 12:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>12:00 - 13:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>13:00 - 14:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>14:00 - 15:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>15:00 - 16:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>16:00 - 17:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>17:00 - 18:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>18:00 - 19:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>19:00 - 20:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>20:00 - 21:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>21:00 - 22:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>22:00 - 23:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>23:00 - 24:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>00:00 - 01:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>01:00 - 02:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>02:00 - 03:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>03:00 - 04:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>04:00 - 05:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>05:00 - 06:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>06:00 - 07:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>

            {/* Content Bottom */}
            <table class="table mt-3">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="text-serif fw-bold">
                    Shift
                  </th>
                  <th scope="col" className="text-serif fw-bold">
                    Section Head
                  </th>
                  <th scope="col" className="text-serif fw-bold">
                    Tanda Tangan
                  </th>
                  <th scope="col" className="text-serif fw-bold">
                    Catatan{" "}
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <th className="text-serif align-middle" scope="row">
                    I
                  </th>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <th className="text-serif align-middle" scope="row">
                    II
                  </th>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(ProductControl);
