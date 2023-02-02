import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ControlActivityCoalGetting = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [shift, setShift] = useState("");
  const [penerima, setPenerima] = useState("");


  //Kolom 1
  const [cn1, setCn1] = useState("");
  const [pit1, setPit1] = useState("");
  const [seam1, setSeam1] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/control-activity-coal-getting",
        {
          data: {
            tanggal: 1673136000000,
            lokasi: "test pdf 1",
            shift: "Shift 1",
            lokasi_pkh_id: "9H-UHiT4R",
            id_control_activity_coal_getting: "YGeUNiTVR",
          }
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setTanggal(data[0].tanggal);
        setLokasi(data[0].lokasi)
        setPenerima(data[0].penerima)
        setJobsite(data[0].jobsite)
        setShift(data[0].shift)


        // Kolom 1
        setPit1(data[0].data.pit);
        setSeam1(data[0].data.seam);
        setCn1(data[0].data.cn_unit)

        // Dt Plan: dt_plan
        // Dt Actual: dt_actual
        // Loading Start: loading_start_1
        // Loading Start: loading_start_2
        // Loading Stop: loading_stop_1
        // Loading Stop: loading_stop_2
        // Jalan Haulin Hujan: jalan_hauling_hujan
        // Jalan Haulin Slippery: jalan_hauling_slippery
        //Area Pit Hujan: area_pit_hujan
        // Area Pit Slippery: area_pit_slippery
        // Size Coal: size_coal
        // Cleaning: cleaning


        console.log(data[0].data.pit);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM – OPR - 021</p>
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
                      {" "} {jobsite}
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
                    <p className="mb-2 pt-1 px-2 fw-semibold text-alat">
                      HARI/TANGGAL:{" "} {tanggal} 
                    </p>
                    <hr className="w-100" />
                    <p className="mb-2 px-2 fw-semibold text-alat">
                      PIT & SHIFT:{" "} {lokasi} & {shift}
                    </p>
                    <hr className="w-100" />
                    <p className="mb-2 px-2 fw-semibold text-alat">
                      HALAMAN:{" "}
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
                  <th scope="col-3" className="header-table-coal text-start">
                    C/N UNIT: {cn1}
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    C/N UNIT:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    C/N UNIT:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    C/N UNIT:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    C/N UNIT:
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
                    PIT: {pit1}
                    <br />
                    SEAM: {seam1}
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    PIT:
                    <br />
                    SEAM:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    PIT:
                    <br />
                    SEAM:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    PIT:
                    <br />
                    SEAM:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    PIT:
                    <br />
                    SEAM:
                  </th>
                </tr>
              </thead>

              <tbody className="text-start">
                <tr>
                  <td>
                    Jumlah DT:
                    <br />
                    Plan:
                    <br />
                    Actual:
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tbody className="text-start">
                <tr>
                  <td>
                    Loading
                    <br />
                    <div className="d-flex gap-4">
                      <span>Start:</span>
                      <span>-</span>
                      <span>Stop:</span>
                    </div>
                    <div className="d-flex gap-4">
                      <span>Start:</span>
                      <span>-</span>
                      <span>Stop:</span>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tbody className="text-start">
                <tr>
                  <td>
                    Jalan Hauling
                    <br />
                    <div className="d-flex gap-4">
                      <span>Hujan:</span>
                      <span>-</span>
                      <span>Slippery:</span>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tbody className="text-start">
                <tr>
                  <td>
                    Area PIT
                    <br />
                    <div className="d-flex gap-4">
                      <span>Hujan:</span>
                      <span>-</span>
                      <span>Slippery:</span>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tbody className="text-start">
                <tr>
                  <td>Size Coal:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tbody className="text-start">
                <tr>
                  <td>Cleaning:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tbody className="text-start">
                <tr>
                  <td>Kontaminasi OB:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tbody className="text-start">
                <tr>
                  <td>Kontaminasi dirty coal:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tbody className="text-start">
                <tr>
                  <td>Kantongan air:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tbody className="text-start">
                <tr>
                  <td>Kelayakan jalan:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <tbody className="text-start">
                <tr>
                  <td>Metode loading:</td>
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
                  <p className="mt-5">()</p>
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
                  <p className="mt-5">({penerima})</p>
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
