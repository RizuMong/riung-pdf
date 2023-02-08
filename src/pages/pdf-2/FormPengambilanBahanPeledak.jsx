import React from "react";
import { WithRouter } from "../../utils/Navigation";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const FormPengambilanBahanPeledak = () => {
  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <div className="border border-2 border-dark">
          <div className="p-2">
            {/* Header */}
            <div className="d-flex gap-3 align-items-center">
              <img
                className="pl-2"
                src={LogoRiung}
                width="120"
                height="60"
                alt="Logo RIUNG"
              />
              <h5 className="fw-bold text-lg">
                PT. RIUNG MITRA LESTARI <br /> JOB SITE : MGM
              </h5>
            </div>

            <div className="d-flex justify-content-center py-5">
              <h2 className="border p-2 w-75 text-center fw-normal">
                FORMULIR PENGAMBILAN BAHAN PELEDAK
              </h2>
            </div>

            <hr className="w-100 solid" />

            {/* Table Header */}
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="fw-normal">
                      TANGGAL :{" "}
                      <span className="text-black">8 - 11 - 2022</span>
                    </th>
                    <th className="fw-normal">
                      PETUGAS GUDANG :{" "}
                      <span className="text-black">Prihanto</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="fw-normal">
                      PENGAMBIL : <span className="text-black">Heri. P</span>
                    </th>
                    <th className="fw-normal">LOKASI: El: 183 RL: 175</th>
                  </tr>
                  <tr>
                    <th className="fw-normal">
                      DRIVER : <span className="text-black">Adi</span>
                    </th>
                    <th className="fw-normal">
                      PEMOHON : <span className="text-black">Heri. P</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="fw-normal">
                      NOMOR MOBIL :{" "}
                      <span className="text-black">RML - PRO 01</span>
                    </th>
                    <th className="fw-normal">
                      JAM : <span className="text-black">07:00 WIB </span>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>

            {/* Table Content */}
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr className="text-center">
                    <th rowSpan={3} className="fw-normal align-middle">
                      Nomor
                    </th>
                    <th rowSpan={3} className="fw-normal align-middle">
                      Ammonium Nitrate (kg)
                    </th>
                    <th rowSpan={3} className="fw-normal align-middle">
                      Primer Booster (pcs)
                    </th>
                    <th rowSpan={3} className="fw-normal align-middle">
                      Power Gel (kg)
                    </th>
                    <th rowSpan={3} className="fw-normal align-middle">
                      Electric Det. No.8 Inst. (EA)
                    </th>
                    <th colSpan={5} className="fw-normal align-middle">
                      MS CONNECTOR
                    </th>
                  </tr>
                  <tr className="text-center">
                    <th className="fw-normal align-middle">EXEL TLD</th>
                    <th className="fw-normal align-middle"> EXEL TLD</th>
                    <th className="fw-normal align-middle">EXEL TLD</th>
                    <th className="fw-normal align-middle">RAYDET MS</th>
                    <th className="fw-normal align-middle"> DET. CORDS</th>
                  </tr>
                  <tr className="text-center">
                    <th className="fw-normal align-middle">.. MS (EA)</th>
                    <th className="fw-normal align-middle">.. MS (EA)</th>
                    <th className="fw-normal align-middle">.. MS (EA)</th>
                    <th className="fw-normal align-middle"> DET. 12M (EA)</th>
                    <th className="fw-normal align-middle">(M)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="fw-normal">Data</td>
                    <td className="fw-normal">Data</td>
                    <td className="fw-normal">Data</td>
                    <td className="fw-normal">Data</td>
                    <td className="fw-normal">Data</td>
                    <td className="fw-normal">Data</td>
                    <td className="fw-normal">Data</td>
                    <td className="fw-normal">Data</td>
                    <td className="fw-normal">Data</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Content Bottom */}
            <Table responsive bordered>
              <thead>
                <tr className="text-center align-middle">
                  <th rowSpan={5} className="fw-normal">
                    <p>Pemohon,</p>
                    <p>Jabatan: Drill & Blast GL</p>
                    <p className="mt-5">(Heri. P)</p>
                  </th>
                  <th className="fw-normal">Disetujui,</th>
                  <th className="fw-normal">NAMA</th>
                  <th className="fw-normal">Tanda Tangan</th>
                  <th className="fw-normal">Diketahui,</th>
                  <th className="fw-normal">NAMA</th>
                  <th className="fw-normal">Tanda Tangan</th>
                </tr>
                <tr className="text-center align-middle">
                  <th className="fw-normal">KEPALA TEKNIK</th>
                  <th className="fw-normal"></th>
                  <th className="fw-normal"></th>
                  <th className="fw-normal">POLISI</th>
                  <th className="fw-normal"></th>
                  <th className="fw-normal"></th>
                </tr>
                <tr className="text-center align-middle">
                  <th className="fw-normal">KEP.Gudang Handak</th>
                  <th className="fw-normal"></th>
                  <th className="fw-normal"></th>
                  <th className="fw-normal">SATPAM</th>
                  <th className="fw-normal"></th>
                  <th className="fw-normal"></th>
                </tr>
                <tr className="text-center align-middle">
                  <th className="fw-normal">Dikawal,</th>
                  <th className="fw-normal">NAMA</th>
                  <th className="fw-normal">Tanda Tangan</th>
                  <th className="fw-normal">Diterima,</th>
                  <th className="fw-normal">NAMA</th>
                  <th className="fw-normal"> Tanda Tangan</th>
                </tr>
                <tr className="text-center align-middle">
                  <th className="fw-normal">POLISI</th>
                  <th className="fw-normal"></th>
                  <th className="fw-normal"></th>
                  <th className="fw-normal">Drill & Blast Group Leader</th>
                  <th className="fw-normal"></th>
                  <th className="fw-normal"></th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(FormPengambilanBahanPeledak);
