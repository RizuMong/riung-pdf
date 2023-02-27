import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const CheckAktivitasPeledakan = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [jam, setJam] = useState("");
  const [dibuat, setDibuat] = useState("");
  const [diketahui, setDiketahui] = useState("");
  const [rl, setRl] = useState("");
  const [loading, setLoading] = useState(true);

  // Data Sebelum 1
  const [q1_sebelum1a, setQ1Sebelum1a] = useState("");
  const [q1_sebelum2a, setQ1Sebelum2a] = useState("");
  const [keterangan_sebelum1a, setKeteranganSebelum1a] = useState("");

  // Data Sebelum 2
  const [q1_sebelum1b, setQ1Sebelum1b] = useState("");
  const [q1_sebelum2b, setQ1Sebelum2b] = useState("");
  const [keterangan_sebelum1b, setKeteranganSebelum1b] = useState("");

  // Data Sebelum 3
  const [q1_sebelum1c, setQ1Sebelum1c] = useState("");
  const [q1_sebelum2c, setQ1Sebelum2c] = useState("");
  const [keterangan_sebelum1c, setKeteranganSebelum1c] = useState("");

  // Data Sebelum 4
  const [q1_sebelum1d, setQ1Sebelum1d] = useState("");
  const [q1_sebelum2d, setQ1Sebelum2d] = useState("");
  const [keterangan_sebelum1d, setKeteranganSebelum1d] = useState("");

  // Data Sebelum 5
  const [q1_sebelum1e, setQ1Sebelum1e] = useState("");
  const [q1_sebelum2e, setQ1Sebelum2e] = useState("");
  const [keterangan_sebelum1e, setKeteranganSebelum1e] = useState("");

  // Data Sebelum 6
  const [q1_sebelum1f, setQ1Sebelum1f] = useState("");
  const [q1_sebelum2f, setQ1Sebelum2f] = useState("");
  const [keterangan_sebelum1f, setKeteranganSebelum1f] = useState("");

  // Data Sebelum 7
  const [q1_sebelum1g, setQ1Sebelum1g] = useState("");
  const [q1_sebelum2g, setQ1Sebelum2g] = useState("");
  const [keterangan_sebelum1g, setKeteranganSebelum1g] = useState("");

  // Data Sebelum 8
  const [q1_sebelum1h, setQ1Sebelum1h] = useState("");
  const [q1_sebelum2h, setQ1Sebelum2h] = useState("");
  const [keterangan_sebelum1h, setKeteranganSebelum1h] = useState("");

  // Data Sebelum 9
  const [q1_sebelum1i, setQ1Sebelum1i] = useState("");
  const [q1_sebelum2i, setQ1Sebelum2i] = useState("");
  const [keterangan_sebelum1i, setKeteranganSebelum1i] = useState("");

  // Data Sebelum 10
  const [q1_sebelum1j, setQ1Sebelum1j] = useState("");
  const [q1_sebelum2j, setQ1Sebelum2j] = useState("");
  const [keterangan_sebelum1j, setKeteranganSebelum1j] = useState("");

  // Data Sebelum 11
  const [q1_sebelum1k, setQ1Sebelum1k] = useState("");
  const [q1_sebelum2k, setQ1Sebelum2k] = useState("");
  const [keterangan_sebelum1k, setKeteranganSebelum1k] = useState("");

  // Data Sebelum 12
  const [q1_sebelum1l, setQ1Sebelum1l] = useState("");
  const [q1_sebelum2l, setQ1Sebelum2l] = useState("");
  const [keterangan_sebelum1l, setKeteranganSebelum1l] = useState("");

  // Data Sebelum 13
  const [q1_sebelum1m, setQ1Sebelum1m] = useState("");
  const [q1_sebelum2m, setQ1Sebelum2m] = useState("");
  const [keterangan_sebelum1m, setKeteranganSebelum1m] = useState("");

  // Data Sebelum 14
  const [q1_sebelum1n, setQ1Sebelum1n] = useState("");
  const [q1_sebelum2n, setQ1Sebelum2n] = useState("");
  const [keterangan_sebelum1n, setKeteranganSebelum1n] = useState("");

  // Data Sebelum 15
  const [q1_sebelum1o, setQ1Sebelum1o] = useState("");
  const [q1_sebelum2o, setQ1Sebelum2o] = useState("");
  const [keterangan_sebelum1o, setKeteranganSebelum1o] = useState("");

  // Data Setelah 11
  const [q1_setelah1a, setQ1Setelah1a] = useState("");
  const [q1_setelah2a, setQ1Setelah2a] = useState("");
  const [keterangan_setelah1, setKeteranganSetelah1] = useState("");

  // Data Setelah 2
  const [q1_setelah1b, setQ1Setelah1b] = useState("");
  const [q1_setelah2b, setQ1Setelah2b] = useState("");
  const [keterangan_setelah2, setKeteranganSetelah2] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/checklist-aktivitas-peledakan",
        {
          data: {
            _id: queryParams.get("_id"),
            id: queryParams.get("id"),
            id_checklist_peledakan: queryParams.get("id_checklist_peledakan"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);

        // Data Luar
        setJam(res?.data[0]?.jam);
        setJobsite(res?.data[0]?.jobsite);
        setTanggal(res?.data[0]?.tanggal);
        setLokasi(res?.data[0]?.lokasi);
        setDibuat(res?.data[0]?.dibuat_oleh);
        setDiketahui(res?.data[0]?.diketahui_oleh);
        setRl(res?.data[0]?.rl);

        // Cek apabila datanya false maka kosong kalau true akan muncul ceklis
        const checkerTrue = (data, set) => {
          if (data == false) {
            set(" ");
            return 1;
          } else if (data) {
            set("✓");
            return 1;
          }
          set("X");
          return 1;
        };

        // Kebalikan fungsi diatas
        const checkerFalse = (data, set) => {
          if (data == true) {
            set(" ");
            return 1;
          } else if (data) {
            set("✓");
            return 1;
          }
          set("✓");
          return 1;
        };

        // Sebelum 1
        checkerTrue(res?.data[0].data.q1_sebelum, setQ1Sebelum1a);
        checkerFalse(res?.data[0].data.q1_sebelum, setQ1Sebelum2a);
        setKeteranganSebelum1a(res.data[0].data.keterangan_q1_sebelum);

        // Sebelum 2
        checkerTrue(res?.data[0].data.q2_sebelum, setQ1Sebelum1b);
        checkerFalse(res?.data[0].data.q2_sebelum, setQ1Sebelum2b);
        setKeteranganSebelum1b(res.data[0].data.keterangan_q2_sebelum);

        // Sebelum 3
        checkerTrue(res?.data[0].data.q3_sebelum, setQ1Sebelum1c);
        checkerFalse(res?.data[0].data.q3_sebelum, setQ1Sebelum2c);
        setKeteranganSebelum1c(res.data[0].data.keterangan_q3_sebelum);

        // Sebelum 4
        checkerTrue(res?.data[0].data.q4_sebelum, setQ1Sebelum1d);
        checkerFalse(res?.data[0].data.q4_sebelum, setQ1Sebelum2d);
        setKeteranganSebelum1d(res.data[0].data.keterangan_q4_sebelum);

        // Sebelum 5
        checkerTrue(res?.data[0].data.q5_sebelum, setQ1Sebelum1e);
        checkerFalse(res?.data[0].data.q5_sebelum, setQ1Sebelum2e);
        setKeteranganSebelum1e(res.data[0].data.keterangan_q5_sebelum);

        // Sebelum 6
        checkerTrue(res?.data[0].data.q6_sebelum, setQ1Sebelum1f);
        checkerFalse(res?.data[0].data.q6_sebelum, setQ1Sebelum2f);
        setKeteranganSebelum1f(res.data[0].data.keterangan_q6_sebelum);

        // Sebelum 7
        checkerTrue(res?.data[0].data.q7_sebelum, setQ1Sebelum1g);
        checkerFalse(res?.data[0].data.q7_sebelum, setQ1Sebelum2g);
        setKeteranganSebelum1g(res.data[0].data.keterangan_q7_sebelum);

        // Sebelum 8
        checkerTrue(res?.data[0].data.q8_sebelum, setQ1Sebelum1h);
        checkerFalse(res?.data[0].data.q8_sebelum, setQ1Sebelum2h);
        setKeteranganSebelum1h(res.data[0].data.keterangan_q8_sebelum);

        // Sebelum 9
        checkerTrue(res?.data[0].data.q9_sebelum, setQ1Sebelum1i);
        checkerFalse(res?.data[0].data.q9_sebelum, setQ1Sebelum2i);
        setKeteranganSebelum1i(res.data[0].data.keterangan_q9_sebelum);

        // Sebelum 10
        checkerTrue(res?.data[0].data.q10_sebelum, setQ1Sebelum1j);
        checkerFalse(res?.data[0].data.q10_sebelum, setQ1Sebelum2j);
        setKeteranganSebelum1j(res.data[0].data.keterangan_q10_sebelum);

        // Sebelum 11
        checkerTrue(res?.data[0].data.q11_sebelum, setQ1Sebelum1k);
        checkerFalse(res?.data[0].data.q11_sebelum, setQ1Sebelum2k);
        setKeteranganSebelum1k(res.data[0].data.keterangan_q11_sebelum);

        // Sebelum 12
        checkerTrue(res?.data[0].data.q12_sebelum, setQ1Sebelum1l);
        checkerFalse(res?.data[0].data.q12_sebelum, setQ1Sebelum2l);
        setKeteranganSebelum1l(res.data[0].data.keterangan_q12_sebelum);

        // Sebelum 13
        checkerTrue(res?.data[0].data.q13_sebelum, setQ1Sebelum1m);
        checkerFalse(res?.data[0].data.q13_sebelum, setQ1Sebelum2m);
        setKeteranganSebelum1m(res.data[0].data.keterangan_q13_sebelum);

        // Sebelum 14
        checkerTrue(res?.data[0].data.q14_sebelum, setQ1Sebelum1n);
        checkerFalse(res?.data[0].data.q14_sebelum, setQ1Sebelum2n);
        setKeteranganSebelum1n(res.data[0].data.keterangan_q4_sebelum);

        // Sebelum 15
        checkerTrue(res?.data[0].data.q15_sebelum, setQ1Sebelum1o);
        checkerFalse(res?.data[0].data.q15_sebelum, setQ1Sebelum2o);
        setKeteranganSebelum1o(res.data[0].data.keterangan_q15_sebelum);

        // Setelah 1
        checkerTrue(res?.data[0].data.q1_setelah, setQ1Setelah1a);
        checkerFalse(res?.data[0].data.q1_setelah, setQ1Setelah2a);
        setKeteranganSetelah1(res.data[0].data.keterangan_q1_setelah);

        // Setelah 2
        checkerTrue(res?.data[0].data.q2_setelah, setQ1Setelah1b);
        checkerFalse(res?.data[0].data.q2_setelah, setQ1Setelah2b);
        setKeteranganSetelah2(res.data[0].data.keterangan_q2_setelah);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false)
      });
  };

  if (loading) {
    return (
      <div class="text-center pt-5">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

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
                        PT. RIUNG MITRA LESTARI <br /> JOB SITE : {jobsite}
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
                        Tanggal: {tanggal}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Jam: {jam}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Lokasi: {lokasi}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        RL: {rl}
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
                  <td className="text-sm align-middle">1</td>
                  <td className="text-sm align-middle text-start">
                    <span className="fs-6 fw-semibold">
                      A. SEBELUM BLASTING
                    </span>
                    <p>
                      Apakah kondisi dan kedalaman lubang tembak sudah
                      diperiksa?
                    </p>
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1a}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum2a}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1a}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">2</td>
                  <td className="text-sm align-middle text-start">
                    Apakah informasi peledakan dan bendera merah sudah dipasang
                    pada jalan/akses menuju tambang?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1b}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum2b}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1b}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">3</td>
                  <td className="text-sm align-middle text-start">
                    Apakah Informasi akan adanya peledakan sudah diinformasikan
                    ke semua karyawan minimal 1 jam sebelumnya?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1c}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum2c}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1c}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">4</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah lokasi peledakan sudah diberi tanda peringatan
                    sehingga orang yang tidak berkepentingan dilarang memasuki
                    lokasi peledakan ?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1d}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum2d}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1d}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">5</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah Mobile Mixing Unit untuk membuat ANFO telah diperiksa
                    dan dicoba ? Apakah persediaan solar mencukupi ?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1e}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum2e}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1e}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">6</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah perlengkapan dan peralatan telah disiapkan di lokasi
                    peledakan?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1f}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {" "}
                    {q1_sebelum2f}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1f}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">7</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah lubang tembak sudah diisi semua dengan bahan peledak
                    sesuai dengan blast design?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1g}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {" "}
                    {q1_sebelum2g}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1e}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">8</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah semua lubang tembak sudah dirangkai dengan benar
                    berdasarkan blast design/delay pattern?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1h}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {" "}
                    {q1_sebelum2h}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1h}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">9</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah sirine tanda evakuasi sudah dibunyikan?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1i}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {" "}
                    {q1_sebelum2i}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1i}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">10</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah semua alat atau unit dan personel sudah menuju tempat
                    yang aman ?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1j}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {" "}
                    {q1_sebelum2j}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1j}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">11</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah semua jalan yang menuju lokasi peledakkan sudah
                    diblokir dan dijaga oleh pengawas peledakkan sehingga tidak
                    memungkinkan ada orang yang lewat ?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1k}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {" "}
                    {q1_sebelum2k}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1k}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">12</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah semua pengawas peledakan pada chanel radio khusus
                    untuk kebutuhan peledakan, dan mudah dihubungi?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1l}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {" "}
                    {q1_sebelum2l}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1l}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">13</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah lokasi peledakan sudah dicek ulang dan dipastikan
                    bahwa sudah tidak ada alat atau unit & manusia yang masih
                    berada dilokasi peledakan?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1m}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {" "}
                    {q1_sebelum2m}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1m}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">14</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah pengecekan ke setiap bloker telah dilakukan?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1n}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {" "}
                    {q1_sebelum2n}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1n}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">15</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah sirine tanda peledakan sudah dibunyikan?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_sebelum1o}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {" "}
                    {q1_sebelum2o}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_sebelum1o}
                  </td>
                </tr>
                {/* Setelah */}
                <tr>
                  <td className="text-sm align-middle">1</td>
                  <td className="text-sm align-middle text-start">
                    <span className="fs-6 fw-semibold">
                      B. SETELAH BLASTING
                    </span>
                    <p>Apakah dari hasil blasting aman dari misfire?</p>
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_setelah1a}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_setelah2a}
                  </td>
                  <td className="text-sm align-middle">
                    {keterangan_setelah1}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm align-middle">2</td>
                  <td className="text-sm align-middle text-start">
                    {" "}
                    Apakah sirine tanda selesai aktivitas blasting sudah
                    dibunyikan?
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_setelah1b}
                  </td>
                  <td className="text-sm align-middle fw-bold fs-5">
                    {q1_setelah2b}
                  </td>
                  <td className="text-sm align-middle">
                    {" "}
                    {keterangan_setelah2}
                  </td>
                </tr>
              </tbody>
            </Table>

            {/* Content Bottom */}
            <div className="container px-5 pt-3 pb-4">
              <div className="row align-items-center">
                <div className="col-6 text-center gap-5">
                  <p className="fw-normal">Dibuat oleh,</p>
                  <p className="mt-5">({dibuat})</p>
                  <p className="fw-semibold">Blaster</p>
                </div>
                <div className="col-6 text-center gap-5">
                  <p className="fw-normal">Diketahui Oleh,</p>
                  <p className="mt-5">({diketahui})</p>
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
