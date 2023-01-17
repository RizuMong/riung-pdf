import React from "react";
import { WithRouter } from "../../utils/Navigation";

import lubang1 from "../../assets/lubang_1.jpg";
import lubang2 from "../../assets/lubang_2.jpg";
import lubang3 from "../../assets/lubang_3.jpg";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const PemeriksaanKondisiLubangLedak = () => {
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
                      <p className="mb-2 px-2 text-serif fw-normal align-middle text-alat border-bottom border-1 pb-2">
                        PIT: <span className="text-black">EAST KAWI</span>
                      </p>
                      <p className="mb-2 px-2 text-serif fw-normal align-middle text-alat border-bottom border-1 pb-2">
                        TANGGAL:{" "}
                        <span className="text-black">8 - 11 - 2022</span>
                      </p>
                      <p className="mb-2 px-2 text-serif fw-normal align-middle text-alat border-bottom border-1 pb-1">
                        SHIFT: <span className="text-black">1</span>
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
                      <th width="60%" rowSpan={15}>
                        
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
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Strip</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">RL</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Dia Hole</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Spacing</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Burden</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Total Hole</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Wet</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Dry</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th className="fw-normal">Broken</th>
                      <th></th>
                      <th></th>
                      <th></th>
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
                        <h5>CATATAN:</h5>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={4} className="fw-normal text-center">
                        <div className="d-flex gap-5 justify-content-evenly">
                          <div>
                            <p className="fw-normal">Dibuat Oleh,</p>
                            <p className="fw-normal mt-5">(M. Arif)</p>
                            <p>Drill & Blast Eng</p>
                          </div>
                          <div>
                            <p className="fw-normal">Dibuat Oleh,</p>
                            <p className="fw-normal mt-5">(M. Arif)</p>
                            <p>Drill & Blast Eng</p>
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
