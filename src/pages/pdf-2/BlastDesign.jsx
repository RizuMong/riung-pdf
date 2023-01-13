import React from "react";
import { WithRouter } from "../../utils/Navigation";

import Img_Sketsa from "../../assets/img_sketsa.jpg"
import Img_TTD from "../../assets/img_ttd.png"
import lubang1 from "../../assets/lubang_1.jpg"
import lubang2 from "../../assets/lubang_2.jpg"
import lubang3 from "../../assets/lubang_3.jpg"
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const BlastDesign = () => {
  return (
    <div className="container-fluid">
    <div className="mt-1 mb-1">
      <p className="text-end fst-italic">FRM-OPR-012</p>
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
                  <h1 className="header-drill mb-6">BLAST DESIGN</h1>
                </th>
                <div className="vr" style={{ height: 100 }}></div>
                <th className="col-3">
                  <div className="mb-2">
                    <p className="mb-2 px-2 fw-bold text-alat fs-6 pb-2">
                      WAKTU PELEDAKAN
                    </p>
                    <p className="mb-2 px-2 fw-normal text-alat border-bottom border-1 pb-2">
                      Tanggal:{" "}
                    </p>
                    <p className="mb-2 px-2 fw-normal text-alat border-bottom border-1 pb-1">
                      Jam:{" "}
                    </p>
                  </div>
                </th>
              </thead>
            </table>

            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{width: "40%"}}>
                      <h5 className="fs-6 fw-semibold p-1">LOKASI <span className="fst-italic">DRILLING</span></h5>
                      <div className="p-1 fs-6 fw-normal">
                        <p className="px-3">PIT: EAST KAWI</p>
                        <p className="px-3">BLOK: -</p>
                        <p className="px-3">STRIP: -</p>
                        <p className="px-3">ELEV.: 183</p>
                        <p className="px-3 pb-1">RL: 175</p>
                      </div>
                    </th>
                    <th rowSpan={3} style={{verticalAlign: "top", width: "50%"}} className="fw-semibold">
                      <h5 className="fs-6 p-1 fw-semibold">SKETSA</h5>
                      <img src={Img_Sketsa} alt="Gambar Sketsa" width="1000px" />
                    </th>
                   
                  </tr>
                 
                  <tr>
                    <th style={{width: "40%"}}>
                      <h5 className="fs-6 fw-semibold p-1">GEOMETRI PELEDAKAN:</h5>
                      <div className="d-flex gap-4 pb-1">
                        <div className="p-1 fs-6 fw-normal">
                          <p className="px-3 text-sm">Hole Diameter : 6 ¾ Inch</p>
                          <p className="px-3 text-sm">Burden : 6 M</p>
                          <p className="px-3 text-sm">Steaming : 3.5 M</p>
                          <p className="px-3 text-sm">Delay Pattern : Echelon</p>
                        </div>
                        <div className="p-1 fs-6 fw-normal">
                          <p className="px-3 text-sm">Depth : 8 M</p>
                          <p className="px-3 text-sm">Spacing : 7 M</p>
                          <p className="px-3 text-sm">Sub drill : 0.5 M</p>
                          <p className="px-3 text-sm">Total Holes : 70</p>
                        </div>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <th style={{width: "40%"}}>
                      <h5 className="fs-6 fw-semibold p-1">BAHAN PELEDAK YANG AKAN DIGUNAKAN</h5>
                      <p className="px-3 text-sm">Ammonium Nitrate: 4.800 Kg</p>
                      <p className="px-3 text-sm pb-3">Emulsion: - Kg</p>

                      <p className="px-3 text-sm pb-3">Primer (Boster): 70</p>

                      <p className="px-3 text-sm pb-3">Electric Detonator: 1 pcs</p>

                      <p className="px-3 text-sm pb-1">Surface Delay TLD:</p>
                        <div>
                          <p className="px-3 text-sm px-5 pb-2">Exel 17 ms 9 M : 20 pcs</p>
                          <p className="px-3 text-sm px-5 pb-2">Exel 25 ms 9 M : 50 pcs</p>
                          <p className="px-3 text-sm px-5 pb-2">Exel 42 ms …M : ……… pcs</p>
                          <p className="px-3 text-sm px-5 pb-2">Exel 65 ms …M : ……… pcs</p>
                        </div>

                      <div className="d-flex gap-4 pb-1">
                        <div className="p-1 fs-6 fw-normal">
                          <p className="px-3 text-sm">Inhole Delay :</p>
                          <p className="px-3 text-sm">Exel Detonator D 500 , 9 M</p>
                          <p className="px-3 text-sm">Exel Detonator D …., … M</p>
                          <p className="px-3 text-sm">Exel Detonator D …., … M</p>
                        </div>
                        <div className="p-1 fs-6 fw-normal pt-4">
                          <p className="px-3 text-sm">: 70 Pcs</p>
                          <p className="px-3 text-sm">: ……… Pcs</p>
                          <p className="px-3 text-sm">: ……… Pcs</p>
                        </div>
                      </div>
                      <p className="px-3 text-sm">Cordtex : ……… Mtr</p>
                    </th>
                  </tr> 
                  
                  <tr style={{width: "40%"}}>
                    <th className="text-center d-flex justify-content-evenly gap-5">
                      <div className="mt-5 mb-5">
                        <p className="fw-normal">Dibuat Oleh,</p>
                        <img src={Img_TTD} alt="TTD" width="100px"/>
                        <p className="fw-normal">(M. Arif)</p>
                        <p>Drill & Blast Eng</p>
                      </div>
                      <div className="mb-5 mt-5">
                        <p className="fw-normal">Dibuat Oleh,</p>
                        <img src={Img_TTD} alt="TTD" width="100px"/>
                        <p className="fw-normal">(M. Arif)</p>
                        <p>Drill & Blast Eng</p>
                      </div>
                    </th>
                    <th style={{verticalAlign: "middle"}}>
                      <div className="d-flex justify-content-between px-5">
                        <div className="fw-normal">
                          <p>Keterangan:</p>
                          <p>Kode Kondisi Lubang</p>
                          <div className="d-flex gap-3 pb-3">
                            <img src={lubang1} alt="Lubang Satu" width="22px" height="24px" />
                            <p>Lubang Kering</p>
                          </div>
                          <div className="d-flex gap-3 pb-3">
                            <img src={lubang2} alt="Lubang Satu" width="22px" height="24px" />
                            <p>Lubang Basah</p>
                          </div>
                          <div className="d-flex gap-2">
                            <img src={lubang3} alt="Lubang Satu" width="32px" height="32px" />
                            <p>Lubang Rusak</p>
                          </div>
                        </div>
                        <div>
                          <table className="table table-bordered">
                            <thead className="text-center">
                              <tr>
                                <th className="fw-normal" colspan={2}>Vol. By formula (BCM)</th>
                              </tr>
                              <tr>
                                <th className="fw-normal">Plan</th>
                                <th className="fw-normal">Actual</th>
                              </tr>
                              <tr>
                                <th className="fw-normal text-danger fs-5">23.500</th>
                                <th className="fw-normal text-danger fs-5">23.520</th>
                              </tr>
                              <tr>
                                <th className="fw-normal" colspan={2}>Powder Faktor (Kg / BCM)</th>
                              </tr>
                              <tr>
                                <th className="fw-normal">Plan</th>
                                <th className="fw-normal">Actual</th>
                              </tr>
                              <tr>
                                <th className="fw-normal text-danger fs-5">0.23</th>
                                <th className="fw-normal text-danger fs-5">0.20</th>
                              </tr>
                            </thead>
                          </table>
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

export default WithRouter(BlastDesign);
