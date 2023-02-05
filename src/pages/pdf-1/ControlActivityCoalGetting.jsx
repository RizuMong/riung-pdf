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
  const [dt_plan1, setDtPlan1] = useState("");
  const [dt_actual1, setDtActual1] = useState("");
  const [loading_start1a, setLoadingStart1a] = useState("");
  const [loading_start2a, setLoadingStart2a] = useState("");
  const [loading_stop1a, setLoadingStop1a] = useState("");
  const [loading_stop2a, setLoadingStop2a] = useState("");
  const [jalan_hauling_hujan1, setJalanHaulingHujan1a] = useState("");
  const [jalan_hauling_slippery1, setJalanHaulingSlippery1a] = useState("");
  const [area_pit_hujan1, setAreaPitHujan1a] = useState("");
  const [area_pit_slippery1, setAreaPitSlippery1a] = useState("");
  const [size_coal1, setSizeCoal1] = useState("");
  const [cleaning1, setCleaning1] = useState("");
  const [kontaminasi1, setKontaminasi1] = useState("");
  const [kontaminasi_dirty_coal1, setDirtyCoal1] = useState("");
  const [kantongan_air1, setKantonganAir1] = useState("");
  const [kelayakan_akses1, setKelayakanAkses1] = useState("");
  const [metode_loading1, setMetodeLoading1] = useState("");

  //Kolom 2
  const [coal1, setCoal1] = useState("");

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
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setTanggal(data[0].tanggal);
        setLokasi(data[0].lokasi);
        setPenerima(data[0].penerima);
        setJobsite(data[0].jobsite);
        setShift(data[0].shift);

        // Kolom 1
        setPit1(data[0].data.pit);
        setSeam1(data[0].data.seam);
        setCn1(data[0].data.cn_unit);
        setDtPlan1(data[0].data.dt_plan);
        setDtActual1(data[0].data.dt_actual);
        setLoadingStart1a(data[0].data.loading_start_1);
        setLoadingStart2a(data[0].data.loading_start_2);
        setLoadingStop1a(data[0].data.loading_stop_1);
        setLoadingStop2a(data[0].data.loading_stop_2);
        setJalanHaulingHujan1a(data[0].data.jalan_hauling_hujan);
        setJalanHaulingSlippery1a(data[0].data.jalan_hauling_slippery);
        setAreaPitHujan1a(data[0].data.area_pit_hujan);
        setAreaPitSlippery1a(data[0].data.area_pit_slippery)
        setSizeCoal1(data[0].data.size_coal)
        setCleaning1(data[0].data.cleaning)
        setKontaminasi1(data[0].data.kontaminasi)
        setDirtyCoal1(data[0].data.kontaminasi_dirty_coal)
        // Kantongan Air: Belum ada datanya
        setKelayakanAkses1(data[0].data.akses_front_coal)
        setMetodeLoading1(data[0].data.metode_loading)

        console.log(data[0].data.dt_plan);
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
                      PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE{" "}
                      {jobsite}
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
                      HARI/TANGGAL: {tanggal}
                    </p>
                    <hr className="w-100" />
                    <p className="mb-2 px-2 fw-semibold text-alat">
                      PIT & SHIFT: {lokasi} & {shift}
                    </p>
                    <hr className="w-100" />
                    <p className="mb-2 px-2 fw-semibold text-alat">HALAMAN: </p>
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
                    width="15%"
                    scope="col-3"
                    className="header-table-coal2 align-middle"
                  >
                    PEMERIKSAAN
                  </th>
                  <th
                    scope="col-3"
                    width="14%"
                    className="header-table-coal text-start"
                  >
                    C/N UNIT: {cn1}
                  </th>
                  <th
                    scope="col-3"
                    width="14%"
                    className="header-table-coal text-start"
                  >
                    C/N UNIT:
                  </th>
                  <th
                    scope="col-3"
                    width="14%"
                    className="header-table-coal text-start"
                  >
                    C/N UNIT:
                  </th>
                  <th
                    scope="col-3"
                    width="14%"
                    className="header-table-coal text-start"
                  >
                    C/N UNIT:
                  </th>
                  <th
                    scope="col-3"
                    width="14%"
                    className="header-table-coal text-start"
                  >
                    C/N UNIT:
                  </th>
                  <th
                    scope="col-3"
                    rowSpan={2}
                    width="15%"
                    className="header-table-coal2 align-middle"
                  >
                    KETERANGAN
                  </th>
                </tr>
                <tr>
                  <th scope="col-3" width="14%" className="header-table-coal text-start">
                    PIT: {pit1}
                    <br />
                    SEAM: {seam1}
                  </th>
                  <th scope="col-3" width="14%" className="header-table-coal text-start">
                    PIT:
                    <br />
                    SEAM:
                  </th>
                  <th scope="col-3" width="14%" className="header-table-coal text-start">
                    PIT:
                    <br />
                    SEAM:
                  </th>
                  <th scope="col-3" width="14%" className="header-table-coal text-start">
                    PIT:
                    <br />
                    SEAM:
                  </th>
                  <th scope="col-3" width="14%" className="header-table-coal text-start">
                    PIT:
                    <br />
                    SEAM:
                  </th>
                </tr>
              </thead>

              {/* Jumlah DT */}
              <tbody className="text-start">
                <tr>
                  <td>
                    Jumlah DT:
                    <br />
                    Plan:
                    <br />
                    Actual:
                  </td>
                  <td className="text-center">
                    <br /> {dt_plan1} <br /> {dt_actual1}
                  </td>
                  <td className="text-center">
                    {" "}
                    {/* <br /> {dt_plan2} <br /> {dt_actual2} */}
                  </td>
                  <td className="text-center">
                    {" "}
                    {/* <br /> {dt_plan3} <br /> {dt_actual3} */}
                  </td>
                  <td className="text-center">
                    {" "}
                    {/* <br /> {dt_plan4} <br /> {dt_actual4} */}
                  </td>
                  <td className="text-center">
                    {" "}
                    {/* <br /> {dt_plan5} <br /> {dt_actual5} */}
                  </td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
              {/* Loading */}
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
                  <td className="text-center text-sm">
                    {" "}
                    <br /> {loading_start1a} - {loading_start2a} <br />{" "}
                    {loading_stop1a} - {loading_stop2a}{" "}
                  </td>
                  {/* <td className="text-center text-sm">
                    {" "}
                    <br /> {loading_start1a} - {loading_start2a}{" "}
                    <br /> {loading_stop1a} - {loading_stop2a}{" "}
                  </td>
                  <td className="text-center text-sm">
                    {" "}
                    <br /> {loading_start1a} - {loading_start2a}{" "}
                    <br /> {loading_stop1a} - {loading_stop2a}{" "}
                  </td>
                  <td className="text-center text-sm">
                    {" "}
                    <br /> {loading_start1a} - {loading_start2a}{" "}
                    <br /> {loading_stop1a} - {loading_stop2a}{" "}
                  </td>
                  <td className="text-center text-sm">
                    {" "}
                    <br /> {loading_start1a} - {loading_start2a}{" "}
                    <br /> {loading_stop1a} - {loading_stop2a}{" "}
                  </td> */}
                  <td></td>
                </tr>
              </tbody>
              {/* Jalan Hauling */}
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
                  <td className="text-center text-sm">
                    <br />
                    {jalan_hauling_hujan1} - {jalan_hauling_slippery1}
                  </td>
                  <td className="text-center text-sm"></td>
                  <td className="text-center text-sm"></td>
                  <td className="text-center text-sm"></td>
                  <td className="text-center text-sm"></td>
                  <td className="text-center text-sm"></td>
                </tr>
              </tbody>
              {/* Area Pit */}
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
                  <td className="text-center text-sm">
                    <br />
                    {area_pit_hujan1} - {area_pit_slippery1}
                  </td>
                  <td className="text-center text-sm">
                    <br />
                    {/* Data2 */}
                  </td>
                  <td className="text-center text-sm">
                    <br />
                    {/* Data3 */}
                  </td>
                  <td className="text-center text-sm">
                    <br />
                    {/* Data4 */}
                  </td>
                  <td className="text-center text-sm">
                    <br />
                    {/* Data5 */}
                  </td>
                  <td className="text-center text-sm">
                  </td>
                </tr>
              </tbody>
              {/* Size Coal */}
              <tbody className="text-start">
                <tr>
                  <td>Size Coal:</td>
                  <td className="text-center">{size_coal1}</td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
              {/* Cleaning */}
              <tbody className="text-start">
                <tr>
                  <td>Cleaning:</td>
                  <td className="text-center">{cleaning1}</td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
              {/* Kontaminasi */}
              <tbody className="text-start">
                <tr>
                  <td>Kontaminasi OB:</td>
                  <td className="text-center">{kontaminasi1}</td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
              {/* Kontaminasi Dirty Coal */}
              <tbody className="text-start">
                <tr>
                  <td>Kontaminasi dirty coal:</td>
                  <td className="text-center">{kontaminasi_dirty_coal1}</td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
              {/* Kantongan Air */}
              <tbody className="text-start">
                <tr>
                  <td>Kantongan air:</td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
              {/* Kelayakan Jalan */}
              <tbody className="text-start">
                <tr>
                  <td>Kelayakan jalan:</td>
                  <td className="text-center">{kelayakan_akses1}</td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
              {/* Metode Loading */}
              <tbody className="text-start">
                <tr>
                  <td>Metode loading:</td>
                  <td className="text-center">{metode_loading1}</td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
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
