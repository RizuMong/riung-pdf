import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DaftarPeriksaLeader = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [shift, setShift] = useState("");
  const [diperiksa, setDiperiksa] = useState("");
  const [disetujui, setDisetujui] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/daftar-periksa/group-leader",
        {
          data: {
            _id: "63ecafe7269f8a3681aae579",
            id: "WrA4zp14g",
            id_dpgl: "WrA4zp14g",
            lokasi_pkh_id: "eMvVzt1Vg",
            pkh_id: "qBI4ztJVR",
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);

        setJobsite(res?.data[0]?.jobsite);
        setTanggal(res?.data[0]?.tanggal);
        setShift(res?.data[0]?.shift);
        setLokasi(res?.data[0]?.lokasi);
        setDiperiksa(res?.data[0]?.diperiksa);
        setDisetujui(res?.data[0]?.disetujui);

        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <div className="border border-2 border-dark">
          <div className="p-3">
            {/* Header */}
            {/* Header Table */}
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <th className="col-4">
                    {" "}
                    <div className="d-flex gap-3 mb-6">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold text-serif fs-5">
                        PT. RIUNG MITRA LESTARI <br /> JOB SITE : {jobsite}
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 95 }}></div>
                  <th className="col-5">
                    <h1 className="header-production-control mb-4">
                      DAFTAR PERIKSA <br /> GROUP LEADER
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 95 }}></div>
                  <th className="col-3">
                    <div className="mb-0">
                      <p className="px-2 fw-normal text-serif text-alat border-bottom">
                        No. Dokumen:{" "}
                        <span className="fw-bold">FRM-OPR-005</span>
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Hari/Tanggal/Shift: {tanggal} / {shift}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Lokasi: {lokasi}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Halaman:{" "}
                      </p>
                    </div>
                  </th>
                </thead>
              </table>
            </div>

            <hr className="w-100 mb-3 mt-2 solid" />
            {/* Content Table */}
            {/* Loading Area */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  1. LOADING AREA
                </caption>
                <thead className="text-center">
                  <tr>
                    <th colSpan={4} scope="col" className="text-serif fs-5">
                      Kondisi Area
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Alat Penunjang
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Survey
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Material
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">Grade sesuai standar</td>
                    <td className="text-serif text-sm">
                      Lebar & tinggi sesuai standar
                    </td>
                    <td className="text-serif text-sm">
                      Rata & bebas material lepa
                    </td>
                    <td className="text-serif text-sm">Bebas genangan air</td>
                    <td className="text-serif text-sm">Bulldozer</td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sesuai standar
                    </td>
                    <td className="text-serif text-sm">Patok Ada & jelas</td>
                    <td className="text-serif text-sm">
                      Penggalian sesuai patok
                    </td>
                    <td className="text-serif text-sm">Aman dari longsor</td>
                    <td className="text-serif text-sm">
                      Cukup Penerangan (Malam Hari)
                    </td>
                    <td className="text-serif text-sm">
                      Sudah di blasting / ripping
                    </td>
                    <td className="text-serif text-sm">
                      Volume cukup untuk 1 shift
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Jalan */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  2. JALAN
                </caption>
                <thead className="text-center">
                  <tr>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Kondisi Area
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Alat Penunjang
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Survey
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Lebar, grade & super elevasi sesuai standar
                    </td>
                    <td className="text-serif text-sm">
                      Rata & bebas material lepas
                    </td>
                    <td className="text-serif text-sm">Bebas debu</td>

                    <td className="text-serif text-sm">Grader</td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sesuai standar
                    </td>

                    <td className="text-serif text-sm">
                      Aman dari resiko (longsor/insiden)
                    </td>
                    <td className="text-serif text-sm">
                      Ada safety berm di area riskan
                    </td>
                    <td className="text-serif text-sm">
                      Rambu ada/jelas di area riskan
                    </td>
                    <td className="text-serif text-sm">
                      Operator/driver mematuhi rambu
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Dumping Area */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  3. DUMPING AREA
                </caption>
                <thead className="text-center">
                  <tr>
                    <th colSpan={4} scope="col" className="text-serif fs-5">
                      Kondisi Area
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Alat Penunjang
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Survey
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Jalan dan area dumping rata
                    </td>
                    <td className="text-serif text-sm">Bebas debu</td>
                    <td className="text-serif text-sm">Bebas genangan air</td>
                    <td className="text-serif text-sm">Lebar sesuai standar</td>

                    <td className="text-serif text-sm">Bulldozer</td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sesuai standar
                    </td>

                    <td className="text-serif text-sm">Patok ada/jelas</td>
                    <td className="text-serif text-sm">
                      Alokasi material sesuai patok
                    </td>

                    <td className="text-serif text-sm">Aman dari longsor</td>
                    <td className="text-serif text-sm">Cukup penerangan</td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Drainage & Dewatering */}
            <div className="row align-items-center">
              <div className="col-5 table-responsive">
                <table class="table table-bordered caption-top mt-2">
                  <caption className="text-black text-serif header-leader">
                    4. DRAINAGE
                  </caption>
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="text-serif text-sm">
                        Ada saluran air di Pit dan berfungsi
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Ada saluran air di jalan utama dan berfungsi
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Besar gorong gorong sesuai debit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="text-serif text-sm fw-bold">Ya</td>
                      <td className="text-serif text-sm fw-bold">Tidak</td>
                      <td className="text-serif text-sm fw-bold">Ya</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-7 table-responsive">
                <table class="table table-bordered caption-top mt-2">
                  <caption className="text-black text-serif header-leader">
                    5. DEWATERING
                  </caption>
                  <thead className="text-center">
                    <tr>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Semua sump berfungsi
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Semua pompa berfungsi
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Instalasi pompa Aman dari bocor
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Cukup penerangan
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Sediment pond berfungsi
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Air dari tambang masuk sediment pond
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Air dari tambang aman untuk lingkungan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="text-serif text-sm fw-bold">Ya</td>
                      <td className="text-serif text-sm fw-bold">Tidak</td>
                      <td className="text-serif text-sm fw-bold">Ya</td>
                      <td className="text-serif text-sm fw-bold">Ya</td>
                      <td className="text-serif text-sm fw-bold">Tidak</td>
                      <td className="text-serif text-sm fw-bold">Ya</td>
                      <td className="text-serif text-sm fw-bold">Ya</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Komoditas & Stockpile */}

            {/* Table & Section Bottom */}
            <div className="row align-items-center mb-5">
              <div className="col-4 table-responsive">
                <table class="table table-bordered caption-top mt-2">
                  <caption className="text-black text-serif header-leader">
                    6. KOMODITAS
                  </caption>
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="text-serif text-sm">
                        bersih dan bebas kontaminasi
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Type / kwalitas Sesuai rencana
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Volume / tonase cukup Untuk 1 shift
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="text-serif text-sm fw-bold">Ya</td>
                      <td className="text-serif text-sm fw-bold">Tidak</td>
                      <td className="text-serif text-sm fw-bold">Ya</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-4 table-responsive">
                <table class="table table-bordered caption-top mt-2">
                  <caption className="text-black text-serif header-leader">
                    7. STOCKPILE
                  </caption>
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="text-serif text-sm">
                        Balance material sudah dihitung
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Kondisi baik dan siap operasi
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Cukup penerangan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="text-serif text-sm fw-bold">Ya</td>
                      <td className="text-serif text-sm fw-bold">Tidak</td>
                      <td className="text-serif text-sm fw-bold">Ya</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Tanda Tangan */}
              <div className="col-4 px-5">
                <div className="d-flex gap-5">
                  <div className="text-center gap-5">
                    <p className="fw-normal text-serif fw-semibold">
                      Diperiksa oleh,
                    </p>
                    <p className="mt-4">{diperiksa}</p>
                    <p className="border-top border-dark text-serif fw-semibold">
                      Group Leader
                    </p>
                  </div>
                  <div className="text-center gap-5">
                    <p className="fw-normal text-serif fw-semibold">
                      Disetujui oleh,
                    </p>
                    <p className="mt-4">{disetujui}</p>
                    <p className="border-top border-dark text-serif fw-semibold">
                      Section Head
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* PICA */}
            <div className="mb-3 mt-5 w-75">
              <h5 className="header-leader text-serif">8. CATATAN</h5>
              <p className="border-bottom border-dark">Content...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(DaftarPeriksaLeader);
