import React from "react";
import { WithRouter } from "../utils/Navigation";

import Table from "react-bootstrap/Table";
import LogoRiung from "../assets/logo-riung.jpg";
import "../styles/App.css";

const RoadMaintenanceHandover = () => {
  return (
    <div className="container px-5 pb-5">
      <div className="mt-2">
        <p className="text-end fst-italic">FRM – OPR - 016</p>
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
                    <h5 className="fw-bold header-road">
                      PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                      ...........................
                    </h5>
                  </div>
                </th>
                <div className="vr" style={{ height: 100 }}></div>
                <th className="col-5">
                  <h1 className="header-production-control mb-3">
                    ROAD MAINTENANCE HANDOVER
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

            {/* Table Material ( Patching / resheeting ) */}
            <table class="table table-bordered caption-top mt-5">
              <caption className="text-black fw-semibold">
                Material ( Patching / resheeting )
              </caption>
              <thead className="text-center">
                <tr>
                  <th
                    rowSpan={2}
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                  >
                    Jenis Material
                  </th>
                  <th
                    rowSpan={2}
                    scope="col"
                    style={{ verticalAlign: "middle" }}
                  >
                    Jenis Pekerjaan
                  </th>
                  <th scope="col">Pengangkutan</th>
                  <th colSpan={2} scope="col">
                    Hasil Patching / Resheeting
                  </th>
                </tr>
                <tr>
                  <th scope="col">Total Rit</th>
                  <th scope="col">
                    Kubikasi (M<sup>3</sup>)
                  </th>
                  <th scope="col">Panjang</th>
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

            {/* Table A2B & Water Trailler */}
            <table class="table table-bordered caption-top mt-5">
              <caption className="text-black fw-semibold">
                A2B & Water Trailler
              </caption>
              <thead className="text-center">
                <tr>
                  <th scope="col">C/N Unit</th>
                  <th scope="col">Lokasi (Km)</th>
                  <th scope="col">Aktivitas</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <th scope="row">1</th>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            {/* Catatan Problem */}
            <div className="w-100 p-2 border h-100 mt-5 mb-5">
              <p className="fw-semibold">Catatan Problem:</p>
            </div>

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p className="fw-normal">Dibuat oleh,</p>
                  <p className="mt-5">(Pit Service Group Leader)</p>
                </div>
                <div className="col-4 text-center gap-5">
                  <p className="fw-normal">Diserahkan,</p>
                  <p className="mt-5">(Prod. Section Head)</p>
                </div>
                <div className="col-4 text-center">
                  <p className="fw-normal">Diterima,</p>
                  <p className="mt-5">(Pit Service Group Leader)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(RoadMaintenanceHandover);
