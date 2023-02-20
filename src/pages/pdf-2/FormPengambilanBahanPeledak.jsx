import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const FormPengambilanBahanPeledak = () => {
  const [datas, setDatas] = useState([]);
  const [dikawal, setDikawal] = useState("");
  const [diketahui, setDiketahui] = useState("");
  const [disetujui, setDisetujui] = useState("");
  const [diterima, setDiterima] = useState("");
  const [driver, setDriver] = useState("");
  const [jam, setJam] = useState("");
  const [jobsite, setJobsite] = useState("");
  const [lokasi_el_obj, setLokasiEL] = useState("");
  const [lokasi_rl_obj, setLokasiRL] = useState("");
  const [nomor_mobil, setNomorMobil] = useState("");
  const [pemohon, setPemohon] = useState("");
  const [pengambil, setPengambil] = useState("");
  const [petugas_gudang, setPetugasGudang] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [tableData, setTableData] = useState([]);

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/formulir-pengambilan-bahan-peledak",
        {
          data: {
            _id: queryParams.get("_id"),
            id: queryParams.get("id"),
            id_pengambilan_bahan_peledak: queryParams.get(
              "id_pengambilan_bahan_peledak"
            ),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            pkh_id: queryParams.get("pkh_id"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);

        //Data Luar
        setDikawal(res?.data[0]?.dikawal);
        setDiketahui(res?.data[0]?.diketahui);
        setDisetujui(res?.data[0]?.disetujui);
        setDiterima(res?.data[0]?.diterima);
        setDriver(res?.data[0]?.driver);
        setJam(res?.data[0]?.jam);
        setJobsite(res?.data[0]?.jobsite);
        setLokasiEL(res?.data[0]?.lokasi_el_obj);
        setLokasiRL(res?.data[0]?.lokasi_rl_obj);
        setNomorMobil(res?.data[0]?.nomor_mobil);
        setPemohon(res?.data[0]?.pemohon);
        setPengambil(res?.data[0]?.pengambil);
        setPetugasGudang(res?.data[0]?.petugas_gudang);
        setTanggal(res?.data[0]?.tanggal);

        if (res && Array.isArray(res.data) && res.data[0].line) {
          const data = res.data[0].line.map((item, index) => {
            const {
              ammonium_nitrate,
              electic_det,
              exel_17,
              exel_25,
              exel_42,
              exel_65,
              power_gel,
              prime_booster,
              ray_det_ms,
            } = item;

            return {
              id: index,
              ammonium_nitrate,
              electic_det,
              exel_17,
              exel_25,
              exel_42,
              exel_65,
              power_gel,
              prime_booster,
              ray_det_ms,
            };
          });
          setTableData(data);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

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
                PT. RIUNG MITRA LESTARI <br /> JOB SITE : {jobsite}
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
                      TANGGAL : <span className="text-black">{tanggal}</span>
                    </th>
                    <th className="fw-normal">
                      PETUGAS GUDANG :{" "}
                      <span className="text-black">{petugas_gudang}</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="fw-normal">
                      PENGAMBIL :{" "}
                      <span className="text-black">{pengambil}</span>
                    </th>
                    <th className="fw-normal">
                      LOKASI: El: {lokasi_el_obj} RL: {lokasi_rl_obj}
                    </th>
                  </tr>
                  <tr>
                    <th className="fw-normal">
                      DRIVER : <span className="text-black">{driver}</span>
                    </th>
                    <th className="fw-normal">
                      PEMOHON : <span className="text-black">{pemohon}</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="fw-normal">
                      NOMOR MOBIL :{" "}
                      <span className="text-black">{nomor_mobil}</span>
                    </th>
                    <th className="fw-normal">
                      JAM : <span className="text-black">{jam}</span>
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
                  {tableData.map((item) => (
                    <tr className="text-center" key={item?.id}>
                      <td>{item?.id + 1}</td>
                      <td>{item?.ammonium_nitrate}</td>
                      <td>{item?.electic_det}</td>
                      <td>{item?.exel_17}</td>
                      <td>{item?.exel_25}</td>
                      <td>{item?.exel_42}</td>
                      <td>{item?.exel_65}</td>
                      <td>{item?.power_gel}</td>
                      <td>{item?.prime_booster}</td>
                      <td>{item?.ray_det_ms}</td>
                    </tr>
                  ))}
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
                    <p className="mt-5">({pemohon})</p>
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
                  <th className="fw-normal">{disetujui}</th>
                  <th className="fw-normal"></th>
                  <th className="fw-normal">POLISI</th>
                  <th className="fw-normal">{diketahui}</th>
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
                  <th className="fw-normal">Tanda Tangan</th>
                </tr>
                <tr className="text-center align-middle">
                  <th className="fw-normal">POLISI</th>
                  <th className="fw-normal">{dikawal}</th>
                  <th className="fw-normal"></th>
                  <th className="fw-normal">Drill & Blast Group Leader</th>
                  <th className="fw-normal">{diterima}</th>
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
