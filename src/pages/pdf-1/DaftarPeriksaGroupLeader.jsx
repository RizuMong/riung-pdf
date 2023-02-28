import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DaftarPeriksaGroupLeader = () => {
  const [data, setData] = useState({
    jobsite: "",
    tanggal: "",
    lokasi: "",
    shift: "",
    diperiksa: "",
    disetujui: "",
  });
  const [loading, setLoading] = useState(true);

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/daftar-periksa/group-leader-open-channel",
        {
          data: {
            id_dpgl_open_channel: "8hxsn8AVg",
            lokasi_pkh_id: "sicsn8A4R",
            pkh_id: "O6dynUAVR",
          },
        }
      )
      .then((res) => {
        const { data } = res;

        setData({
          jobsite: data.jobsite,
          tanggal: data.tanggal,
          lokasi: data.lokasi,
          shift: data.shift,
          diperiksa: data.diperiksa,
          disetujui: data.disetujui,
        });

        console.log(data);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="text-center pt-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

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
                    <div className="d-flex gap-3 mb-4 align-items-center">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold text-serif header-pt">
                        PT. RIUNG MITRA LESTARI <br /> JOB SITE : {data.jobsite}
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 95 }}></div>
                  <th className="col-5">
                    <h1 className="header-production-control mb-4">
                      DAFTAR PERIKSA <br /> GROUP LEADER OPEN CHANNEL
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 95 }}></div>
                  <th className="col-3">
                    <div className="margin-dpgl">
                      <p className="px-2 fw-normal text-serif text-alat border-bottom">
                        No. Dokumen:{" "}
                        <span className="fw-normal">FRM-OPR-020</span>
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Hari/Tanggal/Shift: {data.tanggal} / {data.shift}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Lokasi: {data.lokasi}
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
            {/* JALAN/ACCES LV & ORANG & UNIT */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-0">
                <caption className="text-black text-serif header-leader">
                  1. JALAN/ACCES LV & ORANG & UNIT
                </caption>
                <thead className="text-center">
                  <tr>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Kondisi Jalan LV
                    </th>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Kondisi Jalan orang / Operator
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Lebar, grade, super elevasi sudah sesuai standar
                    </td>
                    <td className="text-serif text-sm">
                      Rata dan bebas dari material lepas
                    </td>
                    <td className="text-serif text-sm">Bebas debu</td>
                    <td className="text-serif text-sm">
                      Lewat jalan pintas terdekat yang sudah ada
                    </td>
                    <td className="text-serif text-sm">
                      Sudah ada batang kayu untuk melintas channel
                    </td>
                    <td className="text-serif text-sm">
                      Aman dari resiko longsor
                    </td>
                    <td className="text-serif text-sm">
                      Driver sudah mematuhi rambu-rambu
                    </td>
                    <td className="text-serif text-sm">
                      Batang kayu sudah dipasang dua batang setiap lintasan
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
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Lanjutan*/}
            <div className="table-responsive">
              <table class="table table-bordered mt-2">
                <thead className="text-center">
                  <tr>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Kondisi jalan Unit Exc Standar
                    </th>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Jalur track unit standar diatas gambut kering aman tanpa
                      matting
                    </td>
                    <td className="text-serif text-sm">
                      Jalur track unit standar diarea gambut basah sudah ada
                      matting
                    </td>
                    <td className="text-serif text-sm">
                      Jalur track unit standar diarea soil-lumpur sudah ada
                      matting
                    </td>
                    <td className="text-serif text-sm">
                      Aman dari amblas pada jalur yang tidak ada matting
                    </td>
                    <td className="text-serif text-sm">
                      Jalur dengan matting dipasang dengan jarak 1 m atau kurang
                      dan tidak lapuk
                    </td>
                    <td className="text-serif text-sm">
                      Operator mengoperasikan unit saat
                    </td>
                  </tr>
                  <tr>
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

            {/* Peralatan */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  2. PERALATAN
                </caption>
                <thead className="text-center">
                  <tr>
                    <th scope="col-2" className="text-serif fs-5 align-middle">
                      Kondisi unit Sarana/LV
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Kondisi Unit Kerja
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Kondisi Stock Fuel & Drum
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm align-middle">
                      Status unit LV ready
                    </td>
                    <td className="text-serif text-sm">
                      Exc long arm standar sudah dipastikan status ready
                    </td>
                    <td className="text-serif text-sm">
                      Exc Amphibi sudah dipastikan status ready
                    </td>
                    <td className="text-serif text-sm">
                      Aman dari bocoran body, hose, valve dan gantungan drum
                      tidak patah
                    </td>
                    <td className="text-serif text-sm">Di isi sesuai jadwal</td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* LAND CLEARING */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  3. LAND CLEARING
                </caption>
                <thead className="text-center">
                  <tr>
                    <th
                      colSpan={3}
                      scope="col-2"
                      className="text-serif fs-5"
                      style={{ verticalAlign: "middle" }}
                    >
                      Unit Kerja
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5"
                      style={{ verticalAlign: "middle" }}
                    >
                      Survey
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5"
                      style={{ verticalAlign: "middle" }}
                    >
                      Kondisi Area Kerja
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Lokasi unit sudah sesuai peruntukan
                    </td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sesuai standar
                    </td>
                    <td className="text-serif text-sm">
                      Jalur land clearing sesuai pita survey
                    </td>
                    <td className="text-serif text-sm">
                      Patok sudah terpasang & jelas sebagai batas pinggir atau
                      center line
                    </td>
                    <td className="text-serif text-sm">
                      Pemasangan patok sudah dipastikan benar / GPS
                    </td>
                    <td className="text-serif text-sm">
                      Sudah dipastikan kondisi area gambut, berair, kering, atau
                      top soil
                    </td>
                    <td className="text-serif text-sm">
                      Sudah dipastikan area kerja tidak bersinggungan dengan
                      masyarakat
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Lanjutan */}
            <div className="table-responsive">
              <table class="table table-bordered mt-2">
                <thead className="text-center">
                  <tr>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Aman dari resiko longsor
                    </td>
                    <td className="text-serif text-sm">
                      Khusus Exc long arm standar sudah dipasang wire mesh
                    </td>
                    <td className="text-serif text-sm">
                      Pohon kayu kering sudah dirobohkan lebih dulu jika ada
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* PENGGALIAN CHANNEL */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  4. PENGGALIAN CHANNEL
                </caption>
                <thead className="text-center">
                  <tr>
                    <th
                      colSpan={3}
                      scope="col-2"
                      className="text-serif fs-5"
                      style={{ verticalAlign: "middle" }}
                    >
                      Kondisi Area Kerja
                    </th>
                    <th
                      colSpan={3}
                      scope="col-2"
                      className="text-serif fs-5"
                      style={{ verticalAlign: "middle" }}
                    >
                      Unit Kerja/Alat
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Awal penggalian sudah ditentukan harus diawali dari arah
                      channel primer
                    </td>
                    <td className="text-serif text-sm">
                      Dudukan unit track standar sudah terpasang matting
                    </td>
                    <td className="text-serif text-sm">
                      Unit amphibi melakukan Penggalian dari genangan menuju
                      saluran primer
                    </td>
                    <td className="text-serif text-sm">
                      Alokasi / penempatan unit sudah sesuai peruntukan
                    </td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sudah sesuai standar
                    </td>
                    <td className="text-serif text-sm">
                      Operator melakukan penggalian sudah sesuai pita survey
                    </td>
                  </tr>
                  <tr>
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
            {/* Lanjutan */}
            <div className="table-responsive">
              <table class="table table-bordered mt-2">
                <thead className="text-center">
                  <tr>
                    <th colSpan={4} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Aman dari resiko longsor
                    </td>
                    <td className="text-serif text-sm">
                      Jalur track unit standar sudah sipasang mating dan aman
                    </td>
                    <td className="text-serif text-sm">
                      Operator melakukan proses penggalian sudah sesuai prosedur
                    </td>
                    <td className="text-serif text-sm">
                      Lampu kerja unit untuk operasi malam hari sudah lengkap
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Tidak</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                    <td className="text-serif text-sm fw-bold">Ya</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* PERAWATAN CHANNEL / MAINTENANCE & PENDALAMAN */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  5. PERAWATAN CHANNEL/MAINTENANCE & PENDALAMAN
                </caption>
                <thead className="text-center">
                  <tr>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Kondisi Area Kerja
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Unit Kerja
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Sudah dipastikan kedalaman channel belum sesuai permintaan
                      (RL)
                    </td>
                    <td className="text-serif text-sm">
                      Masih adanya genangan air dalam saluran
                    </td>
                    <td className="text-serif text-sm">
                      Alokasi/penempatan unit sudah sesuai peruntukan
                    </td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sudah sesuai prosedur
                    </td>
                    <td className="text-serif text-sm">
                      Aman dari resiko longsor
                    </td>
                    <td className="text-serif text-sm">
                      Lampu kerja unit untuk operasi malam sudah lengkap
                    </td>
                  </tr>
                  <tr>
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

            {/* Table & Section Bottom */}
            <div className="row align-items-center mb-5">
              <div className="col-8">
                <table class="table table-bordered caption-top mt-2">
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
                  <p className="border-bottom border-dark">-</p>
                  <p className="border-bottom border-dark">-</p>
                  <p className="border-bottom border-dark">-</p>
                </div>
              </div>

              {/* Tanda Tangan */}
              <div className="col-4 px-5">
                <div className="d-flex gap-5">
                  <div className="text-center gap-5">
                    <p className="fw-normal text-serif fw-semibold">
                      Diperiksa oleh,
                    </p>
                    <p className="mt-5 text-serif fw-normal">
                      {data.diperiksa}
                    </p>
                    <p className="border-top border-dark text-serif fw-semibold">
                      Group Leader
                    </p>
                  </div>
                  <div className="text-center gap-5">
                    <p className="fw-normal text-serif fw-semibold">
                      Disetujui oleh,
                    </p>
                    <p className="mt-5 text-serif fw-normal">
                      {data.diperiksa}
                    </p>
                    <p className="border-top border-dark text-serif fw-semibold">
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
