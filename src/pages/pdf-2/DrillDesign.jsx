import React from "react";
import { WithRouter } from "../../utils/Navigation";

import Img_Sketsa from "../../assets/img_sketsa.jpg"
import Img_TTD from "../../assets/img_ttd.png"
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DrillDesign = () => {
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
                    <h1 className="header-drill mb-6">DRILL DESIGN</h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat border-bottom border-1 pb-2">
                        Hari/Tanggal:{" "}
                      </p>
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat border-bottom border-1 pb-2">
                        Shift:{" "}
                      </p>
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat border-bottom border-1 pb-1">
                        Halaman:{" "}
                      </p>
                    </div>
                  </th>
                </thead>
              </table>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{width: "30%"}}>
                        <h5 className="fs-6 fw-semibold p-1">LOKASI <span className="fst-italic">DRILLING</span></h5>
                        <div className="p-1 fs-6 fw-normal">
                          <p className="px-3">PIT: EAST KAWI</p>
                          <p className="px-3">BLOK: -</p>
                          <p className="px-3">STRIP: -</p>
                          <p className="px-3">ELEV.: 183</p>
                          <p className="px-3">RL: 175</p>
                        </div>
                      </th>
                      <th rowSpan={3} style={{verticalAlign: "top", width: "60%"}} className="fw-semibold">
                        <h5 className="fs-6 p-1 fw-semibold">SKETSA</h5>
                        <img src={Img_Sketsa} alt="Gambar Sketsa" width="1000px" />
                      </th>
                    </tr>
                    <tr>
                    <th style={{width: "30%"}}>
                        <h5 className="fs-6 fw-semibold p-1">DIMENSI <span className="fst-italic">DRILLING</span></h5>
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
                        <h5 className="fs-6 fw-semibold p-1">UNIT C/N: DR 103</h5>
                      </th>
                    </tr>
                    <tr>
                      <th className="text-center d-flex justify-content-evenly gap-5">
                        <div className="mt-5 mb-5">
                          <p className="fw-normal">Dibuat Oleh,</p>
                          <p className="fw-normal mt-5">(M. Arif)</p>
                          <p>Drill & Blast Eng</p>
                        </div>
                        <div className="mb-5 mt-5">
                          <p className="fw-normal">Dibuat Oleh,</p>
                          <p className="fw-normal mt-5">(M. Arif)</p>
                          <p>Drill & Blast Eng</p>
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
