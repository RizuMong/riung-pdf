import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ProductControl = () => {
  const [data, setData] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [catatan, setCatatan] = useState({
    catatan_shift_1: "",
    catatan_shift_2: "",
  });
  const [section, setSection] = useState({
    section_head_1: "",
    section_head_2: "",
  });
  const [loading, setLoading] = useState(true);

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
            id_production_control: queryParams.get("id_production_control"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            pkh: queryParams.get("pkh"),
            logbook_id: queryParams.get("logbook_id"),
          }
        }
      )
      .then((res) => {
        const { data } = res;
        setData(data);
        setJobsite(data?.jobsite);
        setTanggal(data?.tanggal);
        setLokasi(data?.lokasi);
        setCatatan({
          catatan_shift_1: data.catatan_shift_1,
          catatan_shift_2: data.catatan_shift_2,
        });
        setSection({
          section_head_1: data.section_head_1,
          section_head_2: data.section_head_2,
        });
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // fungsi untuk mengecek jam dan mengembalikan data yang cocok
  const getDataByJam = (jam) => {
    const detail = data?.detail || []; // default ke array kosong jika data belum ada
    const formattedJam = jam.replace(".", ":"); // ubah format jam menjadi "HH:mm" dari "HH.mm"
    return detail.find((d) => d.jam === formattedJam) || {}; // default ke objek kosong jika data tidak ditemukan
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
        <p className="text-end fst-italic">FRM – OPR - 004</p>
        <div className="border border-2 border-dark">
          <div className="p-3">
            {/* Header */}
            {/* Header Table */}
            <Table responsive>
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
            </Table>

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
                {/* Shift 1 */}
                <tr>
                  <td>07:00 - 08:00</td>
                  <td>{getDataByJam("07:00 - 08:00").produksi_aktual}</td>
                  <td>{getDataByJam("07:00 - 08:00").produksi_plan}</td>
                  <td>{getDataByJam("07:00 - 08:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("07:00 - 08:00").akumulasi_plan}</td>
                  <td>{getDataByJam("07:00 - 08:00").keterangan}</td>
                </tr>
                <tr>
                  <td>08:00 - 09:00</td>
                  <td>{getDataByJam("08:00 - 09:00").produksi_aktual}</td>
                  <td>{getDataByJam("08:00 - 09:00").produksi_plan}</td>
                  <td>{getDataByJam("08:00 - 09:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("08:00 - 09:00").akumulasi_plan}</td>
                  <td>{getDataByJam("08:00 - 09:00").keterangan}</td>
                </tr>
                <tr>
                  <td>09:00 - 10:00</td>
                  <td>{getDataByJam("09:00 - 10:00").produksi_aktual}</td>
                  <td>{getDataByJam("09:00 - 10:00").produksi_plan}</td>
                  <td>{getDataByJam("09:00 - 10:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("09:00 - 10:00").akumulasi_plan}</td>
                  <td>{getDataByJam("09:00 - 10:00").keterangan}</td>
                </tr>
                <tr>
                  <td>10:00 - 11:00</td>
                  <td>{getDataByJam("10:00 - 11:00").produksi_aktual}</td>
                  <td>{getDataByJam("10:00 - 11:00").produksi_plan}</td>
                  <td>{getDataByJam("10:00 - 11:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("10:00 - 11:00").akumulasi_plan}</td>
                  <td>{getDataByJam("10:00 - 11:00").keterangan}</td>
                </tr>
                <tr>
                  <td>11:00 - 12:00</td>
                  <td>{getDataByJam("11:00 - 12:00").produksi_aktual}</td>
                  <td>{getDataByJam("11:00 - 12:00").produksi_plan}</td>
                  <td>{getDataByJam("11:00 - 12:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("11:00 - 12:00").akumulasi_plan}</td>
                  <td>{getDataByJam("11:00 - 12:00").keterangan}</td>
                </tr>
                <tr>
                  <td>12:00 - 13:00</td>
                  <td>{getDataByJam("12:00 - 13:00").produksi_aktual}</td>
                  <td>{getDataByJam("12:00 - 13:00").produksi_plan}</td>
                  <td>{getDataByJam("12:00 - 13:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("12:00 - 13:00").akumulasi_plan}</td>
                  <td>{getDataByJam("12:00 - 13:00").keterangan}</td>
                </tr>
                <tr>
                  <td>13:00 - 14:00</td>
                  <td>{getDataByJam("13:00 - 14:00").produksi_aktual}</td>
                  <td>{getDataByJam("13:00 - 14:00").produksi_plan}</td>
                  <td>{getDataByJam("13:00 - 14:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("13:00 - 14:00").akumulasi_plan}</td>
                  <td>{getDataByJam("13:00 - 14:00").keterangan}</td>
                </tr>
                <tr>
                  <td>14:00 - 15:00</td>
                  <td>{getDataByJam("14:00 - 15:00").produksi_aktual}</td>
                  <td>{getDataByJam("14:00 - 15:00").produksi_plan}</td>
                  <td>{getDataByJam("14:00 - 15:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("14:00 - 15:00").akumulasi_plan}</td>
                  <td>{getDataByJam("14:00 - 15:00").keterangan}</td>
                </tr>
                <tr>
                  <td>15:00 - 16:00</td>
                  <td>{getDataByJam("15:00 - 16:00").produksi_aktual}</td>
                  <td>{getDataByJam("15:00 - 16:00").produksi_plan}</td>
                  <td>{getDataByJam("15:00 - 16:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("15:00 - 16:00").akumulasi_plan}</td>
                  <td>{getDataByJam("15:00 - 16:00").keterangan}</td>
                </tr>
                <tr>
                  <td>16:00 - 17:00</td>
                  <td>{getDataByJam("16:00 - 17:00").produksi_aktual}</td>
                  <td>{getDataByJam("16:00 - 17:00").produksi_plan}</td>
                  <td>{getDataByJam("16:00 - 17:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("16:00 - 17:00").akumulasi_plan}</td>
                  <td>{getDataByJam("16:00 - 17:00").keterangan}</td>
                </tr>
                <tr>
                  <td>17:00 - 18:00</td>
                  <td>{getDataByJam("17:00 - 18:00").produksi_aktual}</td>
                  <td>{getDataByJam("17:00 - 18:00").produksi_plan}</td>
                  <td>{getDataByJam("17:00 - 18:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("17:00 - 18:00").akumulasi_plan}</td>
                  <td>{getDataByJam("17:00 - 18:00").keterangan}</td>
                </tr>
                <tr>
                  <td>18:00 - 19:00</td>
                  <td>{getDataByJam("18:00 - 19:00").produksi_aktual}</td>
                  <td>{getDataByJam("18:00 - 19:00").produksi_plan}</td>
                  <td>{getDataByJam("18:00 - 19:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("18:00 - 19:00").akumulasi_plan}</td>
                  <td>{getDataByJam("18:00 - 19:00").keterangan}</td>
                </tr>
                {/* Shift 2 */}
                <tr>
                  <td>19:00 - 20:00</td>
                  <td>{getDataByJam("19:00 - 20:00").produksi_aktual}</td>
                  <td>{getDataByJam("19:00 - 20:00").produksi_plan}</td>
                  <td>{getDataByJam("19:00 - 20:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("19:00 - 20:00").akumulasi_plan}</td>
                  <td>{getDataByJam("19:00 - 20:00").keterangan}</td>
                </tr>
                <tr>
                  <td>20:00 - 21:00</td>
                  <td>{getDataByJam("20:00 - 21:00").produksi_aktual}</td>
                  <td>{getDataByJam("20:00 - 21:00").produksi_plan}</td>
                  <td>{getDataByJam("20:00 - 21:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("20:00 - 21:00").akumulasi_plan}</td>
                  <td>{getDataByJam("20:00 - 21:00").keterangan}</td>
                </tr>
                <tr>
                  <td>21:00 - 22:00</td>
                  <td>{getDataByJam("21:00 - 22:00").produksi_aktual}</td>
                  <td>{getDataByJam("21:00 - 22:00").produksi_plan}</td>
                  <td>{getDataByJam("21:00 - 22:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("21:00 - 22:00").akumulasi_plan}</td>
                  <td>{getDataByJam("21:00 - 22:00").keterangan}</td>
                </tr>
                <tr>
                  <td>22:00 - 23:00</td>
                  <td>{getDataByJam("22:00 - 23:00").produksi_aktual}</td>
                  <td>{getDataByJam("22:00 - 23:00").produksi_plan}</td>
                  <td>{getDataByJam("22:00 - 23:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("22:00 - 23:00").akumulasi_plan}</td>
                  <td>{getDataByJam("22:00 - 23:00").keterangan}</td>
                </tr>
                <tr>
                  <td>23:00 - 24:00</td>
                  <td>{getDataByJam("23:00 - 24:00").produksi_aktual}</td>
                  <td>{getDataByJam("23:00 - 24:00").produksi_plan}</td>
                  <td>{getDataByJam("23:00 - 24:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("23:00 - 24:00").akumulasi_plan}</td>
                  <td>{getDataByJam("23:00 - 24:00").keterangan}</td>
                </tr>
                <tr>
                  <td>00:00 - 01:00</td>
                  <td>{getDataByJam("00:00 - 01:00").produksi_aktual}</td>
                  <td>{getDataByJam("00:00 - 01:00").produksi_plan}</td>
                  <td>{getDataByJam("00:00 - 01:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("00:00 - 01:00").akumulasi_plan}</td>
                  <td>{getDataByJam("00:00 - 01:00").keterangan}</td>
                </tr>
                <tr>
                  <td>01:00 - 02:00</td>
                  <td>{getDataByJam("01:00 - 02:00").produksi_aktual}</td>
                  <td>{getDataByJam("01:00 - 02:00").produksi_plan}</td>
                  <td>{getDataByJam("01:00 - 02:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("01:00 - 02:00").akumulasi_plan}</td>
                  <td>{getDataByJam("01:00 - 02:00").keterangan}</td>
                </tr>
                <tr>
                  <td>02:00 - 03:00</td>
                  <td>{getDataByJam("02:00 - 03:00").produksi_aktual}</td>
                  <td>{getDataByJam("02:00 - 03:00").produksi_plan}</td>
                  <td>{getDataByJam("02:00 - 03:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("02:00 - 03:00").akumulasi_plan}</td>
                  <td>{getDataByJam("02:00 - 03:00").keterangan}</td>
                </tr>
                <tr>
                  <td>03:00 - 04:00</td>
                  <td>{getDataByJam("03:00 - 04:00").produksi_aktual}</td>
                  <td>{getDataByJam("03:00 - 04:00").produksi_plan}</td>
                  <td>{getDataByJam("03:00 - 04:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("03:00 - 04:00").akumulasi_plan}</td>
                  <td>{getDataByJam("03:00 - 04:00").keterangan}</td>
                </tr>
                <tr>
                  <td>04:00 - 05:00</td>
                  <td>{getDataByJam("04:00 - 05:00").produksi_aktual}</td>
                  <td>{getDataByJam("04:00 - 05:00").produksi_plan}</td>
                  <td>{getDataByJam("04:00 - 05:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("04:00 - 05:00").akumulasi_plan}</td>
                  <td>{getDataByJam("04:00 - 05:00").keterangan}</td>
                </tr>
                <tr>
                  <td>05:00 - 06:00</td>
                  <td>{getDataByJam("05:00 - 06:00").produksi_aktual}</td>
                  <td>{getDataByJam("05:00 - 06:00").produksi_plan}</td>
                  <td>{getDataByJam("05:00 - 06:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("05:00 - 06:00").akumulasi_plan}</td>
                  <td>{getDataByJam("05:00 - 06:00").keterangan}</td>
                </tr>
                <tr>
                  <td>06:00 - 07:00</td>
                  <td>{getDataByJam("06:00 - 07:00").produksi_aktual}</td>
                  <td>{getDataByJam("06:00 - 07:00").produksi_plan}</td>
                  <td>{getDataByJam("06:00 - 07:00").akumulasi_aktual}</td>
                  <td>{getDataByJam("06:00 - 07:00").akumulasi_plan}</td>
                  <td>{getDataByJam("06:00 - 07:00").keterangan}</td>
                </tr>
              </tbody>
            </Table>

            {/* Content Bottom */}
            <Table responsive className="table mt-3">
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
                {/* Shift 1 */}
                <tr className="align-middle" style={{ height: 50 }}>
                  <th className="text-serif align-middle" scope="row">
                    I
                  </th>
                  <td className="text-sm">{section.section_head_1}</td>
                  <td></td>
                  <td className="text-sm">{catatan.catatan_shift_1}</td>
                </tr>
                {/* Shift 2 */}
                <tr className="align-middle" style={{ height: 50 }}>
                  <th className="text-serif align-middle" scope="row">
                    II
                  </th>
                  <td className="text-sm">{section.section_head_2}</td>
                  <td className="text-sm"></td>
                  <td className="text-sm">{catatan.catatan_shift_2}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(ProductControl);
