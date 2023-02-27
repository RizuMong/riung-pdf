import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const BlastingReport = () => {
  const [dataluar, setDataLuar] = useState({});
  const [data, setData] = useState({});
  const [detail, setDetail] = useState([]);

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/blasting-report",
        {
          data: {
            id_blasting_report: "OBxLcPJVR",
            lokasi_pkh_id: "fKdYcP14g",
          },
        }
      )
      .then((res) => {
        const { data } = res;

        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM-OPR-012</p>
        <div className="border border-3 border-dark">
          <div className="p-2">
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
                <thead>
                  <th className="col-4">
                    {" "}
                    <div className="d-flex gap-3 align-items-center mb-3">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold header-pt2">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                        MGM
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-5">
                    <h1 className="header-drill mb-6">BLASTING REPORT</h1>
                  </th>
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-3 align-bottom">
                    <div className="mb-2">
                      <p className="mb-2 px-2 fw-normal text-alat border-bottom border-1 pb-2">
                        PIT: <span className="text-black">EAST KAWI</span>
                      </p>
                      <p className="mb-2 px-2 fw-normal text-alat border-bottom border-1 mr-2 pt-2">
                        SHIFT: <span className="text-black">1</span>
                      </p>
                    </div>
                  </th>
                </thead>
              </table>

              {/* Content Bottom */}
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th width="40%">
                        <div className="p-1 fs-6 fw-normal text-pdf-1">
                          <p className="px-3 text-pdf-1">
                            Date : 8 / 11 / 2022
                          </p>
                          <p className="px-3 text-pdf-1">Time : 12:30 WIB</p>
                          <p className="px-3 text-pdf-1">
                            Location : Ekspose Seam 5
                          </p>
                          <p className="px-3 text-pdf-1">Elevation : 175</p>
                          <p className="px-3 text-pdf-1">Total Unit Bor : 1</p>
                          <p className="px-3 text-pdf-1">
                            Hole diameter : 6 ¾ inch
                          </p>
                          <p className="px-3 text-pdf-1">
                            Depth hole : 8 meter
                          </p>
                          <p className="px-3 text-pdf-1">Number of hole : 70</p>
                        </div>
                      </th>
                      {/* Image */}
                      <th
                        width="30%"
                        rowSpan={3}
                        className="fw-semibold align-top"
                      >
                        {/* <img
                          src={Img_Sketsa}
                          alt="Gambar Sketsa"
                          width="1000px"
                        /> */}
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <div className="p-1 fs-6 fw-normal text-pdf-1">
                          <p className="px-3 text-pdf-1">Row : 4 </p>
                          <p className="px-3 text-pdf-1">Burden : 6 Meter</p>
                          <p className="px-3 text-pdf-1">Spacing : 7 Meter</p>
                          <p className="px-3 text-pdf-1">
                            Subdrill : 0.5 Meter
                          </p>
                          <p className="px-3 text-pdf-1">Stemming: 3.5 Meter</p>
                          <p className="px-3 text-pdf-1">Volume</p>
                          <p className="px-4 text-pdf-1">- Plan : 23.500 Bcm</p>
                          <p className="px-4 text-pdf-1">
                            - Aktual : 23. 520 Bcm
                          </p>
                          <p className="px-4 text-pdf-1">- Recovery : ...%</p>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th rowSpan={2}>
                        <h5 className="fs-6 text-decoration-underline fw-semibold p-1">
                          EXPLOSIVE USAGE :
                        </h5>
                        <p className="px-2 fw-normal text-pdf-1">
                          Primer (Boster) : 35 Kg
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Ammonium Nitrate : 4.800 Kg
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Emulsion : - Kg
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Electric Detonator : 1 pcs
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Surface Delay TLD :
                        </p>
                        <p className="px-3 fw-normal text-pdf-1">
                          Exel 17 ms : 20 pcs
                        </p>
                        <p className="px-3 fw-normal text-pdf-1">
                          Exel 25 ms : 50 pcs
                        </p>
                        <p className="px-3 fw-normal text-pdf-1">
                          Exel 42 ms : ……………. pcs
                        </p>
                        <p className="px-3 fw-normal text-pdf-1">
                          Exel 65 ms : ……………. pcs
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Detonating Cord : …………….. Mtr
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          DTH12M : …………….. pcs
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Powder Factor : 0.20 Kg/Bcm
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Blasting Ratio : 4.9 Bcm/Kg
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <th className="align-middle">
                        <div className="d-flex justify-content-between">
                          <div className="px-3">
                            <div className="px-2">
                              <p className="fw-normal">
                                Fragmentasi : 9 % &gt; 60cm
                              </p>
                              <p className="fw-normal pl-5">
                                BAIK ({">"}60cm : 0-10%)
                              </p>
                              <p className="fw-normal pl-5">
                                JELEK (&gt;60cm : &gt;10%)
                              </p>
                            </div>
                            {/* Data Others */}
                            <div className="p-2">
                              <p className="fw-normal">Others :</p>
                              <div className="d-flex gap-5">
                                <ul className="fw-normal">
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">✓</p>
                                    <p>misfire</p>
                                  </div>
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">✓</p>
                                    <p>toe</p>
                                  </div>
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">✓</p>
                                    <p>backbreak</p>
                                  </div>
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">✓</p>
                                    <p>heave effect</p>
                                  </div>
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">✓</p>
                                    <p>vibration</p>
                                  </div>
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">✓</p>
                                    <p>air wave</p>
                                  </div>
                                </ul>
                                <p className="text-decoration-underline fw-normal">
                                  Note:
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="px-5 border-start border-1">
                            <div className="d-flex gap-5">
                              <div className="mt-5 mb-5 text-center">
                                <p className="fw-normal">Dibuat Oleh,</p>
                                <p className="fw-normal mt-5">(M. Arif)</p>
                                <p className="text-lg fw-semibold">
                                  Drill & Blast Eng
                                </p>
                              </div>
                              <div className="mb-5 mt-5 text-center">
                                <p className="fw-normal">Dibuat Oleh,</p>
                                <p className="fw-normal mt-5">(M. Arif)</p>
                                <p className="text-lg fw-semibold">
                                  Drill & Blast Eng
                                </p>
                              </div>
                            </div>
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

export default WithRouter(BlastingReport);
