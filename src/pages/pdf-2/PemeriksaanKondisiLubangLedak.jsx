import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import lubang1 from "../../assets/lubang_1.jpg";
import lubang2 from "../../assets/lubang_2.jpg";
import lubang3 from "../../assets/lubang_3.jpg";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const PemeriksaanKondisiLubangLedak = () => {
  const [datas, setDatas] = useState([]);

  // Data Header
  const [pit, setPit] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  const [disetujui, setDisetujui] = useState("");
  const [dibuat, setDibuat] = useState("");
  const [sketsa, setSketsa] = useState("");
  const [catatan, setCatatan] = useState("");

  // Hasil Pemeriksaan
  const [plan_rl, setPlanRl] = useState("");
  const [actual_rl, setActual_rl] = useState("");
  const [keterangan_rl, setKeterangan_rl] = useState("");

  const [plan_diameter, setDiameter] = useState("");
  const [actual_diameter_hole, setActualDiameterHole] = useState("");
  const [keterangan_diameter, setKeteranganDiameter] = useState("");

  const [plan_spacing, setPlanSpacing] = useState("");
  const [actual_spacing, setActualSpacing] = useState("");
  const [keterangan_spacing, setKeteranganSpacing] = useState("");

  const [plan_burden, setPlanBurden] = useState("");
  const [actual_burden, setActualBurden] = useState("");
  const [keterangan_burden, setKeteranganBurden] = useState("");

  const [plan_total_hole, setTotalHole] = useState("");
  const [actual_total_hole, setActualTotalHole] = useState("");
  const [keterangan_total_hole, setKeteranganTotalHole] = useState("");

  const [actual_wet, setActualWet] = useState("");
  const [keterangan_wet, setKeteranganWet] = useState("");

  const [actual_dry, setActualDry] = useState("");
  const [keterangan_dry, setKeteranganDry] = useState("");

  const [actual_broken, setActualBroker] = useState("");
  const [keterangan_broken, setKeteranganBroken] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/pemeriksaan-kondisi-kedalaman-lubang-ledak",
        {
          data: {
            _id: queryParams.get("_id"),
            id: queryParams.get("id"),
            id_pemeriksaan_kondisi_kedalaman_lubang_ledak: queryParams.get(
              "id_pemeriksaan_kondisi_kedalaman_lubang_ledak"
            ),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            pkh_id: queryParams.get("pkh_id"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);

        setPit(res.data[0].pit);
        setTanggal(res.data[0].tanggal);
        setShift(res.data[0].shift);
        setDisetujui(res.data[0].disetujui_oleh);
        setDibuat(res.data[0].dibuat_oleh);
        setSketsa(res.data[0].data.sketsa);
        setCatatan(res.data[0].data.catatan);

        // Hasil Pemeriksaan
        setPlanRl(res.data[0].data.plan_rl);
        setActual_rl(res.data[0].data.actual_rl);
        setKeterangan_rl(res.data[0].data.keterangan_rl);

        setDiameter(res.data[0].data.plan_diameter);
        setActualDiameterHole(res.data[0].data.actual_diameter_hole);
        setKeteranganDiameter(res.data[0].data.keterangan_diameter);

        setPlanSpacing(res.data[0].data.plan_spacing);
        setActualSpacing(res.data[0].data.actual_spacing);
        setKeteranganSpacing(res.data[0].data.keterangan_spacing);

        setPlanBurden(res.data[0].data.plan_burden);
        setActualBurden(res.data[0].data.actual_burden);
        setKeteranganBurden(res.data[0].data.keterangan_burden);

        setTotalHole(res.data[0].data.plan_total_hole);
        setActualTotalHole(res.data[0].data.actual_total_hole);
        setKeteranganTotalHole(res.data[0].data.keterangan_total_hole);

        setActualWet(res.data[0].data.actual_wet);
        setKeteranganWet(res.data[0].data.keterangan_wet);

        setActualDry(res.data[0].data.actual_dry);
        setKeteranganDry(res.data[0].data.keterangan_dry);

        setActualBroker(res.data[0].data.actual_broken);
        setKeteranganBroken(res.data[0].data.keterangan_broken);

        console.log(res.data[0].data.plan_rl_obj);
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM-OPR-007</p>
        <div className="border border-3 border-dark">
          <div className="p-3">
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
                <thead>
                  <th className="col-4">
                    {" "}
                    <div className="d-flex gap-3 align-items-center mb-4">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold header-pt">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                        MGM
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-5">
                    <h1 className="header-drill2 mb-5">
                      PEMERIKSAAN KONDISI & KEDALAMAN LUBANG LEDAK
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 fw-normal align-middle text-alat border-bottom border-1 pb-2">
                        PIT: <span className="text-black">{pit}</span>
                      </p>
                      <p className="mb-2 px-2 fw-normal align-middle text-alat border-bottom border-1 pb-2">
                        TANGGAL: <span className="text-black">{tanggal}</span>
                      </p>
                      <p className="mb-2 px-2 fw-normal align-middle text-alat border-bottom border-1 pb-1">
                        SHIFT: <span className="text-black">{shift}</span>
                      </p>
                    </div>
                  </th>
                </thead>
              </table>

              {/* Content */}
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-center align-middle">
                      {/* <th>Sketsa</th> */}
                      <th width="60%" rowSpan={15}>
                        <img src={sketsa} alt="Gambar Sketsa" width="300" />
                      </th>
                      <th width="16%">HASIL PEMERIKSAAN</th>
                      <th width="5%">PLAN</th>
                      <th width="5%">ACTUAL</th>
                      <th width="12%">KETERANGAN</th>
                    </tr>
                    <tr>
                      <th>LOKASI</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Blok</th>
                      <th className="fw-normal"></th>
                      <th className="fw-normal"></th>
                      <th className="fw-normal"></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Strip</th>
                      <th className="fw-normal"></th>
                      <th className="fw-normal"></th>
                      <th className="fw-normal"></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">RL</th>
                      <th className="fw-normal text-center">{plan_rl}</th>
                      <th className="fw-normal text-center">{actual_rl}</th>
                      <th className="fw-normal text-center">{keterangan_rl}</th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Dia Hole</th>
                      <th className="fw-normal text-center">{plan_diameter}</th>
                      <th className="fw-normal text-center">
                        {actual_diameter_hole}
                      </th>
                      <th className="fw-normal text-center">
                        {keterangan_diameter}
                      </th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Spacing</th>
                      <th className="fw-normal text-center">{plan_spacing}</th>
                      <th className="fw-normal text-center">
                        {actual_spacing}
                      </th>
                      <th className="fw-normal text-center">
                        {keterangan_spacing}
                      </th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Burden</th>
                      <th className="fw-normal text-center">{plan_burden}</th>
                      <th className="fw-normal text-center">{actual_burden}</th>
                      <th className="fw-normal text-center">
                        {keterangan_burden}
                      </th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Total Hole</th>
                      <th className="fw-normal text-center">
                        {plan_total_hole}
                      </th>
                      <th className="fw-normal text-center">
                        {actual_total_hole}
                      </th>
                      <th className="fw-normal text-center">
                        {keterangan_total_hole}
                      </th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Wet</th>
                      <th className="fw-normal text-center"></th>
                      <th className="fw-normal text-center">{actual_wet}</th>
                      <th className="fw-normal text-center">
                        {keterangan_wet}
                      </th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Dry</th>
                      <th className="fw-normal text-center"></th>
                      <th className="fw-normal text-center">{actual_dry}</th>
                      <th className="fw-normal text-center">
                        {keterangan_dry}
                      </th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Broken</th>
                      <th className="fw-normal text-center"></th>
                      <th className="fw-normal text-center">{actual_broken}</th>
                      <th className="fw-normal text-center">
                        {keterangan_broken}
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={4} className="fw-normal">
                        {" "}
                        <div className="fw-normal">
                          <p>Keterangan:</p>
                          <p className="mt-2">Kode Kondisi Lubang</p>
                          <div className="d-flex gap-3 pb-2">
                            <img
                              src={lubang1}
                              alt="Lubang Satu"
                              width="22px"
                              height="24px"
                            />
                            <p>Lubang Kering</p>
                          </div>
                          <div className="d-flex gap-3 pb-2">
                            <img
                              src={lubang2}
                              alt="Lubang Satu"
                              width="22px"
                              height="24px"
                            />
                            <p>Lubang Basah</p>
                          </div>
                          <div className="d-flex gap-2">
                            <img
                              src={lubang3}
                              alt="Lubang Satu"
                              width="32px"
                              height="32px"
                            />
                            <p>Lubang Rusak</p>
                          </div>
                          <div className="d-flex gap-2 px-1">
                            <p>D</p>
                            <p>Actual Depth (m)</p>
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={4} className="fw-normal">
                        <h5>CATATAN: {catatan}</h5>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={4} className="fw-normal text-center">
                        <div className="d-flex gap-5 justify-content-evenly">
                          <div>
                            <p className="fw-normal">Dibuat Oleh,</p>
                            <p className="fw-normal mt-5">({dibuat})</p>
                            <p className="fw-bold">Checker</p>
                          </div>
                          <div>
                            <p className="fw-normal">Dibuat Oleh,</p>
                            <p className="fw-normal mt-5">({disetujui})</p>
                            <p className="fw-bold">Drill & Blast Eng</p>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(PemeriksaanKondisiLubangLedak);
