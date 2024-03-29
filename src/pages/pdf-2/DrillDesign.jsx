import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DrillDesign = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  const [kepada, setKepada] = useState("");
  const [dibuat, setDibuat] = useState("");
  const [diketahui, setDiketahui] = useState("");
  const [loading, setLoading] = useState(true);
  const [ttd, setTTD] = useState({
    ttd_dibuat_oleh: "",
    ttd_diketahui_oleh: "",
    jabatan_dibuat_oleh: "",
    jabatan_diketahui_oleh: "",
  });

  // Lokasi Drilling
  const [pit, setPit] = useState("");
  const [blok, setBlok] = useState("");
  const [strip, setStrip] = useState("");
  const [elevation, setElevation] = useState("");
  const [drilling_rl, setDrilling_rl] = useState("");

  // Dimensi Drilling
  const [cn_unit, setCn_unit] = useState("");
  const [hole_diameter, setHole_diameter] = useState("");
  const [burden, setBurden] = useState("");
  const [spacing, setSpacing] = useState("");
  const [hole_depth, setHole_depth] = useState("");
  const [stemming, setStemming] = useState("");
  const [subdrill, setSubdrill] = useState("");
  const [inclination, setInclination] = useState("");
  const [pattern, setPattern] = useState("");
  const [no_of_hole, setNo_of_hole] = useState("");
  const [volume, setVolume] = useState("");
  const [sketsa, setSketsa] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/drill-design",
        {
          data: {
            id_drill_design: queryParams.get("id_drill_design"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setJobsite(data[0]?.jobsite);
        setTanggal(data[0]?.tanggal);
        setShift(data[0]?.shift);
        setKepada(data[0]?.kepada);
        setDibuat(data[0]?.dibuat_oleh);
        setDiketahui(data[0]?.diketahui_oleh);
        setTTD({
          ttd_dibuat_oleh: data[0]?.ttd_dibuat_oleh,
          ttd_diketahui_oleh: data[0]?.ttd_diketahui_oleh,
          jabatan_dibuat_oleh: data[0]?.jabatan_dibuat_oleh,
          jabatan_diketahui_oleh: data[0]?.jabatan_diketahui_oleh,
        });

        // Lokasi Drilling
        setPit(data[0]?.pit);
        setBlok(data[0]?.blok);
        setStrip(data[0]?.strip);
        setElevation(data[0]?.elevation);
        setDrilling_rl(data[0]?.drilling_rl);

        // Dimensi Drilling
        setCn_unit(data[0]?.cn_unit);
        setHole_diameter(data[0]?.hole_diameter);
        setBurden(data[0]?.burden);
        setSpacing(data[0]?.spacing);
        setHole_depth(data[0]?.hole_depth);
        setStemming(data[0]?.stemming);
        setSubdrill(data[0]?.subdrill);
        setInclination(data[0]?.inclination);
        setPattern(data[0]?.pattern);
        setNo_of_hole(data[0]?.no_of_hole);
        setVolume(data[0]?.volume);
        setSketsa(data[0]?.sketsa || "");
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
      <div class="text-center pt-5">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

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
                        className="pl-2 logo-riung"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold header-pt2">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE{" "}
                        {jobsite}
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-5">
                    <h4 className="header-drill mb-6">DRILL DESIGN</h4>
                  </th>
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 fw-semibold text-alat border-bottom border-1">
                        Hari/Tanggal:{" "}
                        <span className="fw-normal">{tanggal}</span>
                      </p>
                      <div className="d-flex">
                        <p className="mb-2 px-2 fw-semibold text-alat border-bottom border-1">
                          Shift: <span className="fw-normal">{shift}</span>
                        </p>
                        <p className="mb-2 px-2 fw-semibold text-alat border-bottom border-start border-1 w-50">
                          Hal: /
                        </p>
                      </div>
                      <p className="mb-2 px-2 fw-semibold text-alat border-bottom border-1">
                        Kepada: <span className="fw-normal">{kepada}</span>
                      </p>
                    </div>
                  </th>
                </thead>
              </table>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: "30%" }}>
                        <h5 className="fs-6 fw-semibold p-1">
                          LOKASI <span className="fst-italic">DRILLING</span>
                        </h5>
                        <div className="p-1 fs-6 fw-normal">
                          <p className="px-3">PIT: {pit}</p>
                          <p className="px-3">BLOK: {blok}</p>
                          <p className="px-3">STRIP: {strip}</p>
                          <p className="px-3">ELEV.: {elevation}</p>
                          <p className="px-3">RL: {drilling_rl}</p>
                        </div>
                      </th>
                      <th
                        rowSpan={3}
                        style={{ verticalAlign: "top", width: "60%" }}
                        className="fw-semibold"
                      >
                        <h5 className="fs-6 p-1 fw-semibold">SKETSA</h5>
                        <img src={sketsa} width="600px" />
                      </th>
                    </tr>
                    <tr>
                      <th style={{ width: "30%" }}>
                        <h5 className="fs-6 fw-semibold p-1">
                          DIMENSI <span className="fst-italic">DRILLING</span>
                        </h5>
                        <div className="p-1 fs-6 fw-normal">
                          <p className="px-3">BURDEN: {burden} (m)</p>
                          <p className="px-3">SPACING : {spacing} (m)</p>
                          <p className="px-3">
                            HOLE DIAMETER : {hole_diameter} (m)
                          </p>
                          <p className="px-3">HOLE DEPTH : {hole_depth} (m)</p>
                          <p className="px-3">STEMMING : {stemming} (m)</p>
                          <p className="px-3">SUBDRILL : {subdrill} (m)</p>
                          <p className="px-3">
                            INCLINATION : {inclination} (derajat)
                          </p>
                          <p className="px-3">PATTERN : {pattern}</p>
                          <p className="px-3">ROW : </p>
                          <p className="px-3">No. Of Hole : {no_of_hole}</p>
                          <p className="px-3">VOLUME : {volume} (Bcm)</p>
                        </div>
                        <h5 className="fs-6 fw-semibold p-1">
                          UNIT C/N: {cn_unit}
                        </h5>
                      </th>
                    </tr>
                    <tr>
                      <th className="text-center d-flex justify-content-evenly gap-5">
                        <div className="mt-5 mb-5">
                          <p className="fw-normal dibuat">Dibuat Oleh,</p>
                          <img src={ttd.ttd_dibuat_oleh} width="100" />
                          <p>({dibuat})</p>
                          <p className="dibuat">{ttd?.jabatan_dibuat_oleh}</p>
                        </div>
                        <div className="mb-5 mt-5">
                          <p className="fw-normal dibuat">Diketahui Oleh,</p>
                          <img src={ttd.ttd_diketahui_oleh} width="100" />
                          <p>({diketahui})</p>
                          <p className="diketahui">
                            {ttd?.jabatan_diketahui_oleh}
                          </p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(DrillDesign);
