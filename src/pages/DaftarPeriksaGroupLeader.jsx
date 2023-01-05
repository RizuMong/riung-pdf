import React from "react";
import { WithRouter } from "../utils/Navigation";

import LogoRiung from "../assets/logo-riung.jpg";
import "../styles/App.css";

const DaftarPeriksaGroupLeader = () => {
  return (
    <div className="container-fluid px-5 pb-5">
      <div className="mt-2">
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
                      className="pl-2"
                      src={LogoRiung}
                      width="120"
                      height="60"
                      alt="Logo RIUNG"
                    />
                    <h5 className="fw-bold text-serif">
                      PT. RIUNG MITRA LESTARI <br /> JOB SITE : KRASSI
                    </h5>
                  </div>
                </th>
                <div className="vr" style={{ height: 100 }}></div>
                <th className="col-5">
                  <h1 className="header-production-control mb-3">
                    DAFTAR PERIKSA <br /> GROUP LEADER OPEN CHANNEL
                  </h1>
                </th>
                <div className="vr" style={{ height: 100 }}></div>
                <th className="col-3">
                  <div className="mb-4">
                    <p className="mb-3 px-2 fw-semibold text-alat">
                      Hari/Tanggal:{" "}
                    </p>
                    <p className="px-2 fw-semibold text-alat">Shift: </p>
                  </div>
                </th>
              </thead>
            </table>

            <hr className="w-100 mb-3 mt-2 solid" />
            {/* Content Table */}
            {/* Table Kegiatatan */}
            <table class="table table-bordered caption-top mt-4">
              <caption className="text-black fw-semibold">Kegiatan</caption>
              <thead className="text-center">
                <tr>
                  <th scope="col">Lokasi (Km)</th>
                  <th scope="col">Kondisi Jalan</th>
                  <th scope="col">Metode Perbaikan</th>
                  <th colSpan={2} scope="col">
                    Waktu Pengerjaan
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <th scope="row">1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            {/* Table & Section Bottom */}
            <div className="row align-items-center">
              <div className="col-8">
                <table class="table table-bordered caption-top mt-4">
                  <caption className="text-black text-serif header-leader">
                    6. TIME SHEET DAY WORK & PELAPORAN PEMAKAIAN FUEL
                  </caption>
                  <thead className="text-center">
                    <tr>
                      <th colSpan={3} scope="col" className="text-serif fs-5">
                        Penulisan & tanda tangan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="text-serif text-sm">
                        Penulisan area kerja, HM, jam kerja sesuai prosedure max
                        10 jam
                      </td>
                      <td className="text-serif text-sm">
                        Penanda tanganan time sheet sudah dilaksanakan
                      </td>
                      <td className="text-serif text-sm">
                        Pelaporan ke logistik tentang pemakaian fuel unit open
                        channel sudah dilaksanakan
                      </td>
                    </tr>
                    <tr>
                      <td className="text-serif text-sm fw-semibold">Ya</td>
                      <td className="text-serif text-sm fw-semibold">Tidak</td>
                      <td className="text-serif text-sm fw-semibold">Ya</td>
                    </tr>
                  </tbody>
                </table>

                {/* PICA */}
                <div className="mb-3 mt-5">
                  <h5 className="header-leader text-serif">7. PICA</h5>
                  <p className="border-bottom border-dark">Content...</p>
                </div>
              </div>

              {/* Tanda Tangan */}
              <div className="col-4 px-5">
                <div className="d-flex gap-5">
                  <div className="text-center gap-5">
                    <p className="fw-normal text-serif fw-semibold">
                      Diperiksa oleh,
                    </p>
                    <p className="mt-5 border-top border-dark text-serif fw-semibold">
                      Group Leader
                    </p>
                  </div>
                  <div className="text-center gap-5">
                    <p className="fw-normal text-serif fw-semibold">
                      Disetujui oleh,
                    </p>
                    <p className="mt-5 border-top border-dark text-serif fw-semibold">
                      Section Head
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(DaftarPeriksaGroupLeader);
