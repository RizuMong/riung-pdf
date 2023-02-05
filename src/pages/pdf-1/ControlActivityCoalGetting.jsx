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
  const [jalan_hauling_hujan1, setJalanHaulingHujan1] = useState("");
  const [jalan_hauling_slippery1, setJalanHaulingSlippery1] = useState("");
  const [area_pit_hujan1, setAreaPitHujan1] = useState("");
  const [area_pit_slippery1, setAreaPitSlippery1] = useState("");
  const [size_coal1, setSizeCoal1] = useState("");
  const [cleaning1, setCleaning1] = useState("");
  const [kontaminasi1, setKontaminasi1] = useState("");
  const [kontaminasi_dirty_coal1, setDirtyCoal1] = useState("");
  const [kantongan_air1, setKantonganAir1] = useState("");
  const [kelayakan_akses1, setKelayakanAkses1] = useState("");
  const [metode_loading1, setMetodeLoading1] = useState("");

  //Kolom 2
  const [cn2, setCn2] = useState("");
  const [pit2, setPit2] = useState("");
  const [seam2, setSeam2] = useState("");
  const [dt_plan2, setDtPlan2] = useState("");
  const [dt_actual2, setDtActual2] = useState("");
  const [loading_start1b, setLoadingStart1b] = useState("");
  const [loading_start2b, setLoadingStart2b] = useState("");
  const [loading_stop1b, setLoadingStop1b] = useState("");
  const [loading_stop2b, setLoadingStop2b] = useState("");
  const [jalan_hauling_hujan2, setJalanHaulingHujan2] = useState("");
  const [jalan_hauling_slippery2, setJalanHaulingSlippery2] = useState("");
  const [area_pit_hujan2, setAreaPitHujan2] = useState("");
  const [area_pit_slippery2, setAreaPitSlippery2] = useState("");
  const [size_coal2, setSizeCoal2] = useState("");
  const [cleaning2, setCleaning2] = useState("");
  const [kontaminasi2, setKontaminasi2] = useState("");
  const [kontaminasi_dirty_coal2, setDirtyCoal2] = useState("");
  const [kantongan_air2, setKantonganAir2] = useState("");
  const [kelayakan_akses2, setKelayakanAkses2] = useState("");
  const [metode_loading2, setMetodeLoading2] = useState("");

  // Kolom 3
  const [cn3, setCn3] = useState("");
  const [pit3, setPit3] = useState("");
  const [seam3, setSeam3] = useState("");
  const [dt_plan3, setDtPlan3] = useState("");
  const [dt_actual3, setDtActual3] = useState("");
  const [loading_start1c, setLoadingStart1c] = useState("");
  const [loading_start2c, setLoadingStart2c] = useState("");
  const [loading_stop1c, setLoadingStop1c] = useState("");
  const [loading_stop2c, setLoadingStop2c] = useState("");
  const [jalan_hauling_hujan3, setJalanHaulingHujan3] = useState("");
  const [jalan_hauling_slippery3, setJalanHaulingSlippery3] = useState("");
  const [area_pit_hujan3, setAreaPitHujan3] = useState("");
  const [area_pit_slippery3, setAreaPitSlippery3] = useState("");
  const [size_coal3, setSizeCoal3] = useState("");
  const [cleaning3, setCleaning3] = useState("");
  const [kontaminasi3, setKontaminasi3] = useState("");
  const [kontaminasi_dirty_coal3, setDirtyCoal3] = useState("");
  const [kantongan_air3, setKantonganAir3] = useState("");
  const [kelayakan_akses3, setKelayakanAkses3] = useState("");
  const [metode_loading3, setMetodeLoading3] = useState("");

  // Kolom 4
  const [cn4, setCn4] = useState("");
  const [pit4, setPit4] = useState("");
  const [seam4, setSeam4] = useState("");
  const [dt_plan4, setDtPlan4] = useState("");
  const [dt_actual4, setDtActual4] = useState("");
  const [loading_start1d, setLoadingStart1d] = useState("");
  const [loading_start2d, setLoadingStart2d] = useState("");
  const [loading_stop1d, setLoadingStop1d] = useState("");
  const [loading_stop2d, setLoadingStop2d] = useState("");
  const [jalan_hauling_hujan4, setJalanHaulingHujan4] = useState("");
  const [jalan_hauling_slippery4, setJalanHaulingSlippery4] = useState("");
  const [area_pit_hujan4, setAreaPitHujan4] = useState("");
  const [area_pit_slippery4, setAreaPitSlippery4] = useState("");
  const [size_coal4, setSizeCoal4] = useState("");
  const [cleaning4, setCleaning4] = useState("");
  const [kontaminasi4, setKontaminasi4] = useState("");
  const [kontaminasi_dirty_coal4, setDirtyCoal4] = useState("");
  const [kantongan_air4, setKantonganAir4] = useState("");
  const [kelayakan_akses4, setKelayakanAkses4] = useState("");
  const [metode_loading4, setMetodeLoading4] = useState("");

  // Kolom 5
  const [cn5, setCn5] = useState("");
  const [pit5, setPit5] = useState("");
  const [seam5, setSeam5] = useState("");
  const [dt_plan5, setDtPlan5] = useState("");
  const [dt_actual5, setDtActual5] = useState("");
  const [loading_start1e, setLoadingStart1e] = useState("");
  const [loading_start2e, setLoadingStart2e] = useState("");
  const [loading_stop1e, setLoadingStop1e] = useState("");
  const [loading_stop2e, setLoadingStop2e] = useState("");
  const [jalan_hauling_hujan5, setJalanHaulingHujan5] = useState("");
  const [jalan_hauling_slippery5, setJalanHaulingSlippery5] = useState("");
  const [area_pit_hujan5, setAreaPitHujan5] = useState("");
  const [area_pit_slippery5, setAreaPitSlippery5] = useState("");
  const [size_coal5, setSizeCoal5] = useState("");
  const [cleaning5, setCleaning5] = useState("");
  const [kontaminasi5, setKontaminasi5] = useState("");
  const [kontaminasi_dirty_coal5, setDirtyCoal5] = useState("");
  const [kantongan_air5, setKantonganAir5] = useState("");
  const [kelayakan_akses5, setKelayakanAkses5] = useState("");
  const [metode_loading5, setMetodeLoading5] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/control-activity-coal-getting",
        {
          data: {
            tanggal: queryParams.get("tanggal"),
            lokasi: queryParams.get("lokasi"),
            shift: queryParams.get("shift"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            id_control_activity_coal_getting: queryParams.get(
              "id_control_activity_coal_getting"
            ),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setTanggal(data[0]?.tanggal);
        setLokasi(data[0]?.lokasi);
        setPenerima(data[0]?.penerima);
        setJobsite(data[0]?.jobsite);
        setShift(data[0]?.shift);

        // Kolom 1
        setPit1(data[0]?.data.pit);
        setSeam1(data[0]?.data.seam);
        setCn1(data[0]?.data.cn_unit);
        setDtPlan1(data[0]?.data.dt_plan);
        setDtActual1(data[0]?.data.dt_actual);
        setLoadingStart1a(data[0]?.data.loading_start_1);
        setLoadingStart2a(data[0]?.data.loading_start_2);
        setLoadingStop1a(data[0]?.data.loading_stop_1);
        setLoadingStop2a(data[0]?.data.loading_stop_2);
        setJalanHaulingHujan1(data[0]?.data.jalan_hauling_hujan);
        setJalanHaulingSlippery1(data[0]?.data.jalan_hauling_slippery);
        setAreaPitHujan1(data[0]?.data.area_pit_hujan);
        setAreaPitSlippery1(data[0]?.data.area_pit_slippery);
        setSizeCoal1(data[0]?.data.size_coal);
        setCleaning1(data[0]?.data.cleaning);
        setKontaminasi1(data[0]?.data.kontaminasi);
        setDirtyCoal1(data[0]?.data.kontaminasi_dirty_coal);
        // Kantongan Air: Belum ada datanya
        setKelayakanAkses1(data[0]?.data.akses_front_coal);
        setMetodeLoading1(data[0]?.data.metode_loading);

        // Kolom 2
        setPit2(data[1]?.data.pit);
        setSeam2(data[1]?.data.seam);
        setCn2(data[1]?.data.cn_unit);
        setDtPlan2(data[1]?.data.dt_plan);
        setDtActual2(data[1]?.data.dt_actual);
        setLoadingStart1b(data[1]?.data.loading_start_1);
        setLoadingStart2b(data[1]?.data.loading_start_2);
        setLoadingStop1b(data[1]?.data.loading_stop_1);
        setLoadingStop2b(data[1]?.data.loading_stop_2);
        setJalanHaulingHujan2(data[1]?.data.jalan_hauling_hujan);
        setJalanHaulingSlippery2(data[1]?.data.jalan_hauling_slippery);
        setAreaPitHujan2(data[1]?.data.area_pit_hujan);
        setAreaPitSlippery2(data[1]?.data.area_pit_slippery);
        setSizeCoal2(data[1]?.data.size_coal);
        setCleaning2(data[1]?.data.cleaning);
        setKontaminasi2(data[1]?.data.kontaminasi);
        setDirtyCoal2(data[1]?.data.kontaminasi_dirty_coal);
        // Kantongan Air: Belum ada datanya
        setKelayakanAkses2(data[1]?.data.akses_front_coal);
        setMetodeLoading2(data[1]?.data.metode_loading);

        // Kolom 3
        setPit3(data[2]?.data.pit);
        setSeam3(data[2]?.data.seam);
        setCn3(data[2]?.data.cn_unit);
        setDtPlan3(data[2]?.data.dt_plan);
        setDtActual3(data[2]?.data.dt_actual);
        setLoadingStart1c(data[2]?.data.loading_start_1);
        setLoadingStart2c(data[2]?.data.loading_start_2);
        setLoadingStop1c(data[2]?.data.loading_stop_1);
        setLoadingStop2c(data[2]?.data.loading_stop_2);
        setJalanHaulingHujan3(data[2]?.data.jalan_hauling_hujan);
        setJalanHaulingSlippery3(data[2]?.data.jalan_hauling_slippery);
        setAreaPitHujan3(data[2]?.data.area_pit_hujan);
        setAreaPitSlippery3(data[2]?.data.area_pit_slippery);
        setSizeCoal3(data[2]?.data.size_coal);
        setCleaning3(data[2]?.data.cleaning);
        setKontaminasi3(data[2]?.data.kontaminasi);
        setDirtyCoal3(data[2]?.data.kontaminasi_dirty_coal);
        // Kantongan Air: Belum ada datanya
        setKelayakanAkses3(data[2]?.data.akses_front_coal);
        setMetodeLoading3(data[2]?.data.metode_loading);

        // Kolom 4
        setPit4(data[3]?.data.pit);
        setSeam4(data[3]?.data.seam);
        setCn4(data[3]?.data.cn_unit);
        setDtPlan4(data[3]?.data.dt_plan);
        setDtActual4(data[3]?.data.dt_actual);
        setLoadingStart1d(data[3]?.data.loading_start_1);
        setLoadingStart2d(data[3]?.data.loading_start_2);
        setLoadingStop1d(data[3]?.data.loading_stop_1);
        setLoadingStop2d(data[3]?.data.loading_stop_2);
        setJalanHaulingHujan4(data[3]?.data.jalan_hauling_hujan);
        setJalanHaulingSlippery4(data[3]?.data.jalan_hauling_slippery);
        setAreaPitHujan4(data[3]?.data.area_pit_hujan);
        setAreaPitSlippery4(data[3]?.data.area_pit_slippery);
        setSizeCoal4(data[3]?.data.size_coal);
        setCleaning4(data[3]?.data.cleaning);
        setKontaminasi4(data[3]?.data.kontaminasi);
        setDirtyCoal4(data[3]?.data.kontaminasi_dirty_coal);
        // Kantongan Air: Belum ada datanya
        setKelayakanAkses4(data[3]?.data.akses_front_coal);
        setMetodeLoading4(data[3]?.data.metode_loading);

        // Kolom 5
        setPit5(data[4]?.data.pit);
        setSeam5(data[4]?.data.seam);
        setCn5(data[4]?.data.cn_unit);
        setDtPlan5(data[4]?.data.dt_plan);
        setDtActual5(data[4]?.data.dt_actual);
        setLoadingStart1e(data[4]?.data.loading_start_1);
        setLoadingStart2e(data[4]?.data.loading_start_2);
        setLoadingStop1e(data[4]?.data.loading_stop_1);
        setLoadingStop2e(data[4]?.data.loading_stop_2);
        setJalanHaulingHujan5(data[4]?.data.jalan_hauling_hujan);
        setJalanHaulingSlippery5(data[4]?.data.jalan_hauling_slippery);
        setAreaPitHujan5(data[4]?.data.area_pit_hujan);
        setAreaPitSlippery5(data[4]?.data.area_pit_slippery);
        setSizeCoal5(data[4]?.data.size_coal);
        setCleaning5(data[4]?.data.cleaning);
        setKontaminasi5(data[4]?.data.kontaminasi);
        setDirtyCoal5(data[4]?.data.kontaminasi_dirty_coal);
        // Kantongan Air: Belum ada datanya
        setKelayakanAkses5(data[4]?.data.akses_front_coal);
        setMetodeLoading5(data[4]?.data.metode_loading);
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
                    C/N UNIT: {cn2}
                  </th>
                  <th
                    scope="col-3"
                    width="14%"
                    className="header-table-coal text-start"
                  >
                    C/N UNIT: {cn3}
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
                  <th
                    scope="col-3"
                    width="14%"
                    className="header-table-coal text-start"
                  >
                    PIT: {pit1}
                    <br />
                    SEAM: {seam1}
                  </th>
                  <th
                    scope="col-3"
                    width="14%"
                    className="header-table-coal text-start"
                  >
                    PIT: {pit2}
                    <br />
                    SEAM: {seam2}
                  </th>
                  <th
                    scope="col-3"
                    width="14%"
                    className="header-table-coal text-start"
                  >
                    PIT: {pit3}
                    <br />
                    SEAM: {seam3}
                  </th>
                  <th
                    scope="col-3"
                    width="14%"
                    className="header-table-coal text-start"
                  >
                    PIT: {pit4}
                    <br />
                    SEAM: {seam4}
                  </th>
                  <th
                    scope="col-3"
                    width="14%"
                    className="header-table-coal text-start"
                  >
                    PIT: {pit5}
                    <br />
                    SEAM: {seam5}
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
                    <br /> {dt_plan2} <br /> {dt_actual2}
                  </td>
                  <td className="text-center">
                    {" "}
                    <br /> {dt_plan3} <br /> {dt_actual3}
                  </td>
                  <td className="text-center">
                    {" "}
                    <br /> {dt_plan4} <br /> {dt_actual4}
                  </td>
                  <td className="text-center">
                    {" "}
                    <br /> {dt_plan5} <br /> {dt_actual5}
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
                  <td className="text-center text-sm">
                    {" "}
                    <br /> {loading_start1b} - {loading_start2b} <br />{" "}
                    {loading_stop1b} - {loading_stop2b}{" "}
                  </td>
                  <td className="text-center text-sm">
                    {" "}
                    <br /> {loading_start1c} - {loading_start2c} <br />{" "}
                    {loading_stop1c} - {loading_stop2c}{" "}
                  </td>
                  <td className="text-center text-sm">
                    {" "}
                    <br /> {loading_start1d} - {loading_start2d} <br />{" "}
                    {loading_stop1d} - {loading_stop2d}{" "}
                  </td>
                  <td className="text-center text-sm">
                    {" "}
                    <br /> {loading_start1e} - {loading_start2e} <br />{" "}
                    {loading_stop1e} - {loading_stop2e}{" "}
                  </td>
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
                  <td className="text-center text-sm">
                    <br />
                    {jalan_hauling_hujan2} - {jalan_hauling_slippery2}
                  </td>
                  <td className="text-center text-sm">
                    <br />
                    {jalan_hauling_hujan3} - {jalan_hauling_slippery3}
                  </td>
                  <td className="text-center text-sm">
                    <br />
                    {jalan_hauling_hujan4} - {jalan_hauling_slippery4}
                  </td>
                  <td className="text-center text-sm">
                    <br />
                    {jalan_hauling_hujan5} - {jalan_hauling_slippery5}
                  </td>
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
                    {area_pit_hujan2} - {area_pit_slippery2}
                  </td>
                  <td className="text-center text-sm">
                    <br />
                    {area_pit_hujan3} - {area_pit_slippery3}
                  </td>
                  <td className="text-center text-sm">
                    <br />
                    {area_pit_hujan4} - {area_pit_slippery4}
                  </td>
                  <td className="text-center text-sm">
                    <br />
                    {area_pit_hujan5} - {area_pit_slippery5}
                  </td>
                  <td className="text-center text-sm"></td>
                </tr>
              </tbody>
              {/* Size Coal */}
              <tbody className="text-start">
                <tr>
                  <td>Size Coal:</td>
                  <td className="text-center">{size_coal1}</td>
                  <td className="text-center">{size_coal2}</td>
                  <td className="text-center">{size_coal3}</td>
                  <td className="text-center">{size_coal4}</td>
                  <td className="text-center">{size_coal5}</td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
              {/* Cleaning */}
              <tbody className="text-start">
                <tr>
                  <td>Cleaning:</td>
                  <td className="text-center">{cleaning1}</td>
                  <td className="text-center">{cleaning2}</td>
                  <td className="text-center">{cleaning3}</td>
                  <td className="text-center">{cleaning4}</td>
                  <td className="text-center">{cleaning5}</td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
              {/* Kontaminasi */}
              <tbody className="text-start">
                <tr>
                  <td>Kontaminasi OB:</td>
                  <td className="text-center">{kontaminasi1}</td>
                  <td className="text-center">{kontaminasi2}</td>
                  <td className="text-center">{kontaminasi3}</td>
                  <td className="text-center">{kontaminasi4}</td>
                  <td className="text-center">{kontaminasi5}</td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
              {/* Kontaminasi Dirty Coal */}
              <tbody className="text-start">
                <tr>
                  <td>Kontaminasi dirty coal:</td>
                  <td className="text-center">{kontaminasi_dirty_coal1}</td>
                  <td className="text-center">{kontaminasi_dirty_coal2}</td>
                  <td className="text-center">{kontaminasi_dirty_coal3}</td>
                  <td className="text-center">{kontaminasi_dirty_coal4}</td>
                  <td className="text-center">{kontaminasi_dirty_coal5}</td>
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
                  <td className="text-center">{kelayakan_akses2}</td>
                  <td className="text-center">{kelayakan_akses3}</td>
                  <td className="text-center">{kelayakan_akses4}</td>
                  <td className="text-center">{kelayakan_akses5}</td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
              {/* Metode Loading */}
              <tbody className="text-start">
                <tr>
                  <td>Metode loading:</td>
                  <td className="text-center">{metode_loading1}</td>
                  <td className="text-center">{metode_loading2}</td>
                  <td className="text-center">{metode_loading3}</td>
                  <td className="text-center">{metode_loading4}</td>
                  <td className="text-center">{metode_loading5}</td>
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
