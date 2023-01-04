import React from "react";
import { WithRouter } from "../utils/Navigation";

import Table from "react-bootstrap/Table";
import LogoRiung from "../assets/logo-riung.jpg";
import "../styles/App.css";

const DaftarPeriksaAlatAngkut = () => {
  return (
    <div className="container px-5 pb-5">
      <div className="mt-2">
        <p className="text-end fst-italic">FRM-OPR-018</p>
        <div className="border border-3 border-dark">
          <div className="p-3">
            <div className="row align-items-center">
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
                      <h5 className="fw-bold header-pt">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                        ...........................
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-5">
                    <h1 className="header-alat-angkut mb-4">
                      DAFTAR PERIKSA KONTAMINASI ALAT ANGKUT BATUBARA
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                        Hari/Tanggal:{" "}
                      </p>
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                        Shift:{" "}
                      </p>
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                        Halaman:{" "}
                      </p>
                    </div>
                  </th>
                </thead>
              </table>
            </div>
            <hr className="w-100" />

            {/* Table Content */}
            <Table bordered hover className="text-center mt-3">
              <thead>
                <tr>
                  <th scope="col" className="header-table">
                    NO
                  </th>
                  <th scope="col" colSpan={2} className="header-table">
                    PEMERIKSAAN
                  </th>
                  <th scope="col" colSpan={10} className="header-table">
                    C/N UNIT
                  </th>
                </tr>
              </thead>
              <tbody className="text-start">
                <tr>
                  <td className="text-center">1</td>
                  <td className="fw-semibold">
                    Apakah penyanggah mud guard utuh & baik
                  </td>
                  <td>Small dump truck</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                  <td>Data</td>
                </tr>
              </tbody>
            </Table>

            <hr className="w-100" />

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p>Pemeriksaan tersebut sudah dilakukan dengan benar Oleh,</p>
                  <p className="mt-5">(__________________)</p>
                  <p> Prod. Group Leader</p>
                </div>
                <div className="col-4 align-self-end">
                  <p className="text-base">
                    Distribusi : Asli : Production Dept., Yellow : Customer
                  </p>
                </div>
                <div className="col-4 text-center">
                  <p>Mengetahui,</p>
                  <p className="mt-5">(__________________)</p>
                  <p>Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(DaftarPeriksaAlatAngkut);
