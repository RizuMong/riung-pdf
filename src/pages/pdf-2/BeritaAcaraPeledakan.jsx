import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import { Table } from "react-bootstrap";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const BeritaAcaraPeledakan = () => {
  const [loading, setLoading] = useState(true);

  // Data luar
  const [data, setData] = useState({
    jobsite: "",
    nomor_dokumen: "",
    lokasi: "",
    tanggal: "",
    jam: "",
    juru_ledak: "",
    diketahui_oleh_polisi: "",
    diketahui_oleh_satpam: "",
    disetujui_oleh_group_leader: "",
    disetujui_oleh_kepala_gudang: "",
    disetujui_oleh_kepala_teknik: "",
  });

  // Data Detail
  const [detail, setDetail] = useState({
    alasan_booster: "",
    alasan_elec_det: "",
    alasan_emulsion: "",
    alasan_exel_25: "",
    alasan_exel_42: "",
    alasan_exel_65: "",
    alasan_exel_ms_d_12: "",
    alasan_jumlah_lubang: "",
    alasan_power_gel: "",
    dikembalikan_ammonium_nitrate: 0,
    dikembalikan_booster: 0,
    dikembalikan_emulsion: 0,
    dikembalikan_dynamite: 0,
    dikembalikan_elec_det: 0,
    dikembalikan_exel_17: 0,
    dikembalikan_exel_25: 0,
    dikembalikan_exel_42: 0,
    dikembalikan_exel_65: 0,
    dikembalikan_exel_ms_d_12: 0,
    dikembalikan_lubang: 0,
    dikembalikan_power_gel: 0,
    ditambah_ammonium_nitrate: 0,
    ditambah_booster: 0,
    ditambah_dynamite: 0,
    ditambah_elec_det: 0,
    ditambah_emulsion: 0,
    ditambah_exel_17: 0,
    ditambah_exel_25: 0,
    ditambah_exel_42: 0,
    ditambah_exel_65: 0,
    ditambah_exel_ms_d_12: 0,
    ditambah_jumlah_lubang: 0,
    ditambah_power_gel: 0,
    exel_17_ms: 0,
    exel_25_ms: 0,
    exel_42_ms: 0,
    exel_65_ms: 0,
    pelaksanaan_ammonium_nitrate: 0,
    pelaksanaan_booster: 0,
    pelaksanaan_dynamite: 0,
    pelaksanaan_emulsion: 0,
    pelaksaaan_elec_det: 0,
    pelaksanaan_exel_17: 0,
    pelaksanaan_exel_25: 0,
    pelaksanaan_exel_42: 0,
    pelaksanaan_exel_65: 0,
    pelaksanaan_exel_ms_d_12: 0,
    pelaksanaan_jumlah_lubang: 0,
    pelaksanaan_power_gel: 0,
  });

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/berita-acara-peledakan",
        {
          data: {
            id_berita_acara_peledakan: queryParams.get("id_berita_acara_peledakan"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
          },
        }
      )
      .then((res) => {
        const { data } = res;

        setData({
          jobsite: data.jobsite,
          nomor_dokumen: data.nomor_dokumen,
          lokasi: data.lokasi,
          tanggal: data.tanggal,
          jam: data.jam,
          juru_ledak: data.juru_ledak,
          diketahui_oleh_polisi: data.diketahui_oleh_polisi,
          diketahui_oleh_satpam: data.diketahui_oleh_satpam,
          disetujui_oleh_group_leader: data.disetujui_oleh_group_leader,
          disetujui_oleh_kepala_gudang: data.disetujui_oleh_kepala_gudang,
          disetujui_oleh_kepala_teknik: data.disetujui_oleh_kepala_teknik,
        });

        setDetail((prevState) => ({
          ...prevState,
          alasan_booster: data.detail.alasan_booster,
          alasan_elec_det: data.detail.alasan_elec_det,
          alasan_emulsion: data.detail.alasan_emulsion,
          alasan_exel_25: data.detail.alasan_exel_25,
          alasan_exel_42: data.detail.alasan_exel_42,
          alasan_exel_65: data.detail.alasan_exel_65,
          alasan_exel_ms_d_12: data.detail.alasan_exel_ms_d_12,
          alasan_jumlah_lubang: data.detail.alasan_jumlah_lubang,
          alasan_power_gel: data.detail.alasan_power_gel,
          dikembalikan_ammonium_nitrate:
            data.detail.dikembalikan_ammonium_nitrate,
          dikembalikan_booster: data.detail.dikembalikan_booster,
          dikembalikan_emulsion: data.detail.dikembalikan_emulsion,
          dikembalikan_dynamite: data.detail.dikembalikan_dynamite,
          dikembalikan_elec_det: data.detail.dikembalikan_elec_det,
          dikembalikan_exel_17: data.detail.dikembalikan_exel_17,
          dikembalikan_exel_25: data.detail.dikembalikan_exel_25,
          dikembalikan_exel_42: data.detail.dikembalikan_exel_42,
          dikembalikan_exel_65: data.detail.dikembalikan_exel_65,
          dikembalikan_exel_ms_d_12: data.detail.dikembalikan_exel_ms_d_12,
          dikembalikan_lubang: data.detail.dikembalikan_lubang,
          dikembalikan_power_gel: data.detail.dikembalikan_power_gel,
          ditambah_ammonium_nitrate: data.detail.ditambah_ammonium_nitrate,
          ditambah_booster: data.detail.ditambah_booster,
          ditambah_dynamite: data.detail.ditambah_dynamite,
          ditambah_elec_det: data.detail.ditambah_elec_det,
          ditambah_emulsion: data.detail.ditambah_emulsion,
          ditambah_exel_17: data.detail.ditambah_exel_17,
          ditambah_exel_25: data.detail.ditambah_exel_25,
          ditambah_exel_42: data.detail.ditambah_exel_42,
          ditambah_exel_65: data.detail.ditambah_exel_65,
          ditambah_exel_ms_d_12: data.detail.ditambah_exel_ms_d_12,
          ditambah_jumlah_lubang: data.detail.ditambah_jumlah_lubang,
          ditambah_power_gel: data.detail.ditambah_power_gel,
          exel_17_ms: data.detail.exel_17_ms,
          exel_25_ms: data.detail.exel_25_ms,
          exel_42_ms: data.detail.exel_42_ms,
          exel_65_ms: data.detail.exel_65_ms,
          pelaksanaan_ammonium_nitrate:
            data.detail.pelaksanaan_ammonium_nitrate,
          pelaksanaan_booster: data.detail.pelaksanaan_booster,
          pelaksanaan_dynamite: data.detail.pelaksanaan_dynamite,
          pelaksanaan_emulsion: data.detail.pelaksanaan_emulsion,
          pelaksaaan_elec_det: data.detail.pelaksaaan_elec_det,
          pelaksanaan_exel_17: data.detail.pelaksanaan_exel_17,
          pelaksanaan_exel_25: data.detail.pelaksanaan_exel_25,
          pelaksanaan_exel_42: data.detail.pelaksanaan_exel_42,
          pelaksanaan_exel_65: data.detail.pelaksanaan_exel_65,
          pelaksanaan_exel_ms_d_12: data.detail.pelaksanaan_exel_ms_d_12,
          pelaksanaan_jumlah_lubang: data.detail.pelaksanaan_jumlah_lubang,
          pelaksanaan_power_gel: data.detail.pelaksanaan_power_gel,
        }));

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
        <p className="text-end fst-italic text-sm">FRM-OPR-014</p>
        <div className="border border-3 border-dark">
          <div className="p-3">
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
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE{" "}
                        {data.jobsite}
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-8">
                    <h1 className="header-drill mb-3">
                      BERITA ACARA PELEDAKAN
                    </h1>
                    <h5 className="text-center">NO : {data.nomor_dokumen}</h5>
                  </th>
                </thead>
              </table>
              <hr className="w-100 solid" />

              {/* Header Content */}
              <div className="mb-2">
                <p>Telah dilaksanakan peledakan,</p>
                <p>
                  Dilokasi:
                  <span className="text-black">{data.lokasi}</span>
                </p>
                <p>
                  Pada tanggal:{" "}
                  <span className="text-black">{data.tanggal}</span>
                </p>
                <p>
                  Pada jam: <span className="text-black">{data.jam} WIB</span>
                </p>
                <p>
                  Nama juru ledak:{" "}
                  <span className="text-black">{data.juru_ledak}</span>
                </p>
              </div>

              <Table responsive bordered>
                <thead>
                  <tr>
                    <th
                      rowSpan={2}
                      width="3%"
                      className="text-center align-middle fw-normal"
                    >
                      No
                    </th>
                    <th
                      rowSpan={2}
                      width="30%"
                      className="text-center align-middle fw-normal"
                    >
                      Subjek
                    </th>
                    <th
                      rowSpan={2}
                      width="5%"
                      className="text-center align-middle fw-normal"
                    >
                      Satuan
                    </th>
                    <th
                      rowSpan={2}
                      width="10%"
                      className="text-center align-middle fw-normal"
                    >
                      Pelaksanaan
                    </th>
                    <th
                      colSpan={2}
                      width="30%"
                      className="text-center align-middle fw-normal"
                    >
                      Penyimpangan Rencana
                    </th>
                    <th
                      rowSpan={2}
                      width="22"
                      className="text-center align-middle fw-normal"
                    >
                      Alasan Penyimpangan
                    </th>
                  </tr>
                  <tr>
                    <th
                      width="11%"
                      className="text-center align-middle fw-normal"
                    >
                      Ditambah
                    </th>
                    <th
                      width="11%"
                      className="text-center align-middle fw-normal"
                    >
                      Dikembalikan
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>1</td>
                    <td className="text-start">Jumlah lubang</td>
                    <td>Lubang</td>
                    <td className="text-black align-middle">
                      {detail?.pelaksanaan_jumlah_lubang}
                    </td>
                    <td>{detail?.ditambah_jumlah_lubang}</td>
                    <td>{detail?.dikembalikan_lubang}</td>
                    <td>{detail?.alasan_jumlah_lubang}</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="text-start">Ammonium Nitrate</td>
                    <td>kg</td>
                    <td className="text-black">
                      {detail?.pelaksanaan_ammonium_nitrate}
                    </td>
                    <td>{detail?.ditambah_ammonium_nitrate}</td>
                    <td>{detail?.dikembalikan_ammonium_nitrate}</td>
                    <td>{detail?.alasan_ammonium_nitrate}</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td className="text-start">Emulsion</td>
                    <td>kg</td>
                    <td className="text-black">
                      {detail?.pelaksanaan_emulsion}
                    </td>
                    <td>{detail?.ditambah_emulsion}</td>
                    <td>{detail?.dikembalikan_ammonium_nitrate}</td>
                    <td>{detail?.alasan_emulsion}</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td className="text-start">Dynamite</td>
                    <td>kg</td>
                    <td className="text-black">
                      {detail?.pelaksanaan_dynamite}
                    </td>
                    <td>{detail?.ditambah_dynamite}</td>
                    <td>{detail?.dikembalikan_emulsion}</td>
                    <td>{detail?.alasan_dynamite}</td>
                  </tr>
                  <tr className="align-middle">
                    <td>5</td>
                    <td className="text-start">
                      Electric Detonator No. 8 Instantaneous
                    </td>
                    <td>Pcs</td>
                    <td className="text-black">{detail.pelaksaaan_elec_det}</td>
                    <td>{detail.ditambah_elec_det}</td>
                    <td>{detail.dikembalikan_elec_det}</td>
                    <td>{detail.alasan_elec_det}</td>
                  </tr>
                  <tr className="align-middle">
                    <td rowSpan={5}>6</td>
                    <td className="text-start">
                      <p>MS Connector:</p>
                      <p>EXEL TLD 17 {detail?.exel_17_ms} MS</p>
                    </td>
                    <td>EA</td>
                    <td className="text-black">{detail?.pelaksanaan_exel_17}</td>
                    <td>{detail?.ditambah_exel_17}</td>
                    <td>{detail?.dikembalikan_exel_17}</td>
                    <td>{detail?.alasan_17_ms}</td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-start">
                      <p>MS Connector:</p>
                      <p>EXEL TLD 25 {detail?.exel_25_ms} MS</p>
                    </td>
                    <td>EA</td>
                    <td className="text-black">{detail?.pelaksanaan_exel_25}</td>
                    <td>{detail?.ditambah_exel_25}</td>
                    <td>{detail?.dikembalikan_exel_25}</td>
                    <td>{detail?.alasan_exel_25}</td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-start">
                      <p>MS Connector:</p>
                      <p>EXEL TLD 42 {detail?.exel_42_ms} MS</p>
                    </td>
                    <td>EA</td>
                    <td className="text-black">{detail?.pelaksanaan_exel_42}</td>
                    <td>{detail?.ditambah_exel_42}</td>
                    <td>{detail?.dikembalikan_exel_42}</td>
                    <td>{detail?.alasan_exel_42}</td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-start">
                      <p>MS Connector:</p>
                      <p>EXEL TLD 65 {detail?.exel_65_ms} MS</p>
                    </td>
                    <td>EA</td>
                    <td className="text-black">{detail?.pelaksanaan_exel_65}</td>
                    <td>{detail?.ditambah_exel_65}</td>
                    <td>{detail?.dikembalikan_exel_65}</td>
                    <td>{detail?.alasan_exel_65}</td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-start">
                      <p>MS Connector:</p>
                      <p>EXEL MS D 12. 12 M</p>
                    </td>
                    <td>EA</td>
                    <td className="text-black">{detail?.pelaksanaan_exel_ms_d_12}</td>
                    <td>{detail?.ditambah_exel_ms_d_12}</td>
                    <td>{detail?.dikembalikan_exel_ms_d_12}</td>
                    <td>{detail?.alasan_exel_ms_d_12}</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td className="text-start">Booster 400 gr</td>
                    <td>EA</td>
                    <td className="text-black">{detail?.pelaksanaan_booster}</td>
                    <td>{detail?.ditambah_booster}</td>
                    <td>{detail?.dikembalikan_booster}</td>
                    <td>{detail?.alasan_booster}</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td className="text-start">Power Gel</td>
                    <td>kg</td>
                    <td className="text-black">{detail?.pelaksanaan_power_gel}</td>
                    <td>{detail?.ditambah_power_gel}</td>
                    <td>{detail?.dikembalikan_power_gel}</td>
                    <td>{detail?.alasan_power_gel}</td>
                  </tr>
                </tbody>
              </Table>

              {/* Content Bottom */}
              <Table responsive bordered>
                <thead>
                  <tr className="text-center align-middle">
                    <th rowSpan={5} className="fw-normal">
                      <p>Dibuat Oleh,</p>
                      <p>JURU LEDAK</p>
                      <p className="mt-5">(Heri. P)</p>
                    </th>
                    <th className="fw-normal" colSpan={3}>
                      Diketahui oleh,
                    </th>
                    <th className="fw-normal" colSpan={3}>
                      Disetujui oleh,
                    </th>
                  </tr>
                  <tr className="text-center align-middle">
                    <th className="fw-normal">JABATAN</th>
                    <th className="fw-normal">NAMA</th>
                    <th className="fw-normal">Tanda Tangan</th>
                    <th className="fw-normal">JABATAN</th>
                    <th className="fw-normal">NAMA</th>
                    <th className="fw-normal">Tanda Tangan</th>
                  </tr>
                  <tr className="text-center align-middle">
                    <th className="fw-normal">POLISI</th>
                    <th className="fw-normal">{data.diketahui_oleh_polisi}</th>
                    <th className="fw-normal"></th>
                    <th className="fw-normal">Kepala Teknik Tamban</th>
                    <th className="fw-normal">
                      {data.disetujui_oleh_kepala_teknik}
                    </th>
                    <th className="fw-normal"></th>
                  </tr>
                  <tr className="text-center align-middle">
                    <th className="fw-normal">SATPAM</th>
                    <th className="fw-normal">{data.diketahui_oleh_satpam}</th>
                    <th className="fw-normal"></th>
                    <th className="fw-normal">Kepala Gudang Handak</th>
                    <th className="fw-normal">
                      {data.disetujui_oleh_kepala_gudang}
                    </th>
                    <th className="fw-normal"></th>
                  </tr>
                  <tr className="text-center align-middle">
                    <th className="fw-normal"></th>
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
        <p className="text-center text-sm">
          Distribusi : Asli:Ka.Gudang Handak, Red:Ka.Teknik, Yellow : Eng.Dept.,
          Green: Polisi, Blue: Satpam
        </p>
      </div>
    </div>
  );
};

export default WithRouter(BeritaAcaraPeledakan);
