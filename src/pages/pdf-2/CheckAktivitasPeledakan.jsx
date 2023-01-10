import React from "react";
import { WithRouter } from "../../utils/Navigation";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const CheckAktivitasPeledakan = () => {
  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <div className="border border-2 border-dark">
          <div className="p-2">
            {/* Header */}
            {/* Header Table */}
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <th className="col-4">
                    {" "}
                    <div className="d-flex gap-3 ">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold text-xl mb-6">
                        PT. RIUNG MITRA LESTARI <br /> JOB SITE : MGM
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-5">
                    <h1 className="header-check fw-semibold text-serif mb-7">
                      CHECK LIST AKTIVITAS PELEDAKAN
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
                    <div className="">
                      <p className="px-2 fw-normal text-serif text-alat border-bottom">
                        Tanggal:{" "}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Jam:{" "}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Lokasi:{" "}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        RL:{" "}
                      </p>
                    </div>
                  </th>
                </thead>
              </table>
            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}
            <Table responsive bordered>
              <thead className="text-center">
                <tr>
                  <th
                    style={{ verticalAlign: "middle", width: "5%" }}
                    rowSpan={2}
                    className="fw-semibold"
                  >
                    No.
                  </th>
                  <th
                    style={{ verticalAlign: "middle", width: "50%" }}
                    rowSpan={2}
                    className="fw-semibold"
                  >
                    ITEM PEMERIKSAAN
                  </th>
                  <th
                    style={{ verticalAlign: "middle", width: "10%" }}
                    colSpan={2}
                    className="fw-semibold"
                  >
                    Telah Dikerjakan
                  </th>
                  <th
                    style={{ verticalAlign: "middle", width: "30%" }}
                    rowSpan={2}
                    className="fw-semibold"
                  >
                    Keterangan
                  </th>
                </tr>
                <tr>
                  <th>YA</th>
                  <th>TIDAK</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    1
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    <span className="fs-6 fw-semibold">
                      A. SEBELUM BLASTING
                    </span>
                    <p>
                      Apakah kondisi dan kedalaman lubang tembak sudah
                      diperiksa?
                    </p>
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    2
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    Apakah informasi peledakan dan bendera merah sudah dipasang
                    pada jalan/akses menuju tambang?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    3
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    Apakah Informasi akan adanya peledakan sudah diinformasikan
                    ke semua karyawan minimal 1 jam sebelumnya?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    4
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah lokasi peledakan sudah diberi tanda peringatan
                    sehingga orang yang tidak berkepentingan dilarang memasuki
                    lokasi peledakan ?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    5
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah Mobile Mixing Unit untuk membuat ANFO telah diperiksa
                    dan dicoba ? Apakah persediaan solar mencukupi ?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    6
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah perlengkapan dan peralatan telah disiapkan di lokasi
                    peledakan?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    7
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah lubang tembak sudah diisi semua dengan bahan peledak
                    sesuai dengan blast design ?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    8
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah semua lubang tembak sudah dirangkai dengan benar
                    berdasarkan blast design/delay pattern?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    9
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah sirine tanda evakuasi sudah dibunyikan?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    10
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah semua alat atau unit dan personel sudah menuju tempat
                    yang aman ?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    11
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah semua jalan yang menuju lokasi peledakkan sudah
                    diblokir dan dijaga oleh pengawas peledakkan sehingga tidak
                    memungkinkan ada orang yang lewat ?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    12
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah semua pengawas peledakan pada chanel radio khusus
                    untuk kebutuhan peledakan, dan mudah dihubungi?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    13
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah lokasi peledakan sudah dicek ulang dan dipastikan
                    bahwa sudah tidak ada alat atau unit & manusia yang masih
                    berada dilokasi peledakan?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    14
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah pengecekan ke setiap bloker telah dilakukan?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    15
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah sirine tanda peledakan sudah dibunyikan?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                {/* Setelah */}
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    1
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    <span className="fs-6 fw-semibold">
                      B. SETELAH BLASTING
                    </span>
                    <p>Apakah dari hasil blasting aman dari misfire?</p>
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    2
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm text-start"
                  >
                    {" "}
                    Apakah sirine tanda selesai aktivitas blasting sudah
                    dibunyikan?
                  </td>
                  <td style={{ verticalAlign: "middle" }} className="text-sm">
                    YA
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-sm"
                  ></td>
                </tr>
              </tbody>
            </Table>

            {/* Content Bottom */}
            <div className="container px-5 pt-3 pb-4">
              <div className="row align-items-center">
                <div className="col-6 text-center gap-5">
                  <p className="fw-normal">Dibuat oleh,</p>
                  <p className="mt-5">(Heri P)</p>
                  <p className="fw-semibold">Blaster</p>
                </div>
                <div className="col-6 text-center gap-5">
                  <p className="fw-normal">Diserahkan,</p>
                  <p className="mt-5">(Wilda. S)</p>
                  <p className="fw-semibold">Drill & Blasting GL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(CheckAktivitasPeledakan);
