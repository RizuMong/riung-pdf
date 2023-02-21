import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Img_Sketsa from "../../assets/img_sketsa.jpg";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DrillDesign = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  // const [kepada, setKepada] = useState("");
  const [dibuat, setDibuat] = useState("");
  const [diketahui, setDiketahui] = useState("");

  // Lokasi Drilling

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
            _id: "63f17a86bc9ece316709304e",
            id: "gMAY5P14g",
            id_drill_design: "gMAY5P14g",
            lokasi_pkh_id: "fKdYcP14g",
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);

        setJobsite(res.data[0]?.jobsite);
        setTanggal(res.data[0]?.tanggal);
        setShift(res.data[0]?.shift);
        // setKepada(res.data[0]?.kepada)
        setDibuat(res.data[0]?.dibuat_oleh);
        setDiketahui(res.data[0]?.diketahui_oleh);

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
                        Hari/Tanggal: {tanggal}
                      </p>
                      <div className="d-flex">
                        <p className="mb-2 px-2 fw-semibold text-alat border-bottom border-1">
                          Shift: {shift}
                        </p>
                        <p className="mb-2 px-2 fw-semibold text-alat border-bottom border-start border-1 w-50">
                          Hal:  {" "} /
                        </p>
                      </div>
                      <p className="mb-2 px-2 fw-semibold text-alat border-bottom border-1">
                        Kepada:{" "}
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
                          <p className="px-3">PIT: EAST KAWI</p>
                          <p className="px-3">BLOK: -</p>
                          <p className="px-3">STRIP: -</p>
                          <p className="px-3">ELEV.: 183</p>
                          <p className="px-3">RL: 175</p>
                        </div>
                      </th>
                      <th
                        rowSpan={3}
                        style={{ verticalAlign: "top", width: "60%" }}
                        className="fw-semibold"
                      >
                        <h5 className="fs-6 p-1 fw-semibold">SKETSA</h5>
                        {/* <img
                          src={Img_Sketsa}
                          alt="Gambar Sketsa"
                          width="60px"
                        /> */}
                      </th>
                    </tr>
                    <tr>
                      <th style={{ width: "30%" }}>
                        <h5 className="fs-6 fw-semibold p-1">
                          DIMENSI <span className="fst-italic">DRILLING</span>
                        </h5>
                        <div className="p-1 fs-6 fw-normal">
                          <p className="px-3">BURDEN: 6 (m)</p>
                          <p className="px-3">SPACING : 7 (m)</p>
                          <p className="px-3">HOLE DIAMETER : 6 3/4 (inch)</p>
                          <p className="px-3">HOLE DEPTH : 8 (m)</p>
                          <p className="px-3">STEMMING : 3.5 (m)</p>
                          <p className="px-3">SUBDRILL : 0.5 (m)</p>
                          <p className="px-3">INCLINATION : - (derajat)</p>
                          <p className="px-3">PATTERN : Echelon</p>
                          <p className="px-3">ROW : 4</p>
                          <p className="px-3">No. Of Hole : 70</p>
                          <p className="px-3">VOLUME : 23.520 (Bcm)</p>
                        </div>
                        <h5 className="fs-6 fw-semibold p-1">
                          UNIT C/N: DR 103
                        </h5>
                      </th>
                    </tr>
                    <tr>
                      <th className="text-center d-flex justify-content-evenly gap-5">
                        <div className="mt-5 mb-5">
                          <p className="fw-normal">Dibuat Oleh,</p>
                          <p className="fw-normal mt-5">({dibuat})</p>
                          <p>Drill & Blast Eng</p>
                        </div>
                        <div className="mb-5 mt-5">
                          <p className="fw-normal">Diketahui Oleh,</p>
                          <p className="fw-normal mt-5">({diketahui})</p>
                          <p>Prod Dept/Sect Head</p>
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
