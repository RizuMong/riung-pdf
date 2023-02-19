import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const RoadMaintenanceHandover = () => {
  const [datas, setDatas] = useState([]);

  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  const [catatan, setCatatan] = useState("");
  const [dibuat, setDibuat] = useState("");
  const [diserahkan, setDiserahkan] = useState("");
  const [diterima, setDiterima] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/road-maintenance/handover",
        {
          data: {
            _id: queryParams.get("_id"),
            id: queryParams.get("id"),
            id_horm: queryParams.get("id_horm"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            pkh: queryParams.get("pkh"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);

        setJobsite(res?.data[0]?.jobsite);
        setTanggal(res?.data[0]?.tanggal);
        setShift(res?.data[0]?.shift);
        setDibuat(res?.data[0]?.dibuat_oleh);
        setDiserahkan(res?.data[0]?.diserahkan_oleh);
        setDiterima(res?.data[0]?.diterima_oleh);
        setCatatan(res?.data[0]?.catatan_problem);

        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic text-sm">FRM – OPR - 016</p>
        <div className="border border-2 border-dark">
          <div className="p-3">
            {/* Header */}
            {/* Header Table */}
            <table className="table">
              <thead>
                <th className="col-4">
                  {" "}
                  <div className="d-flex gap-3 mb-2 align-items-center">
                    <img
                      className="pl-2"
                      src={LogoRiung}
                      width="120"
                      height="60"
                      alt="Logo RIUNG"
                    />
                    <h5 className="fw-bold header-road text-base">
                      PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE{" "}
                      {jobsite}
                    </h5>
                  </div>
                </th>
                <div className="vr" style={{ height: 70 }}></div>
                <th className="col-5">
                  <h1 className="header-road-handover mb-4">
                    ROAD MAINTENANCE HANDOVER
                  </h1>
                </th>
                <div className="vr" style={{ height: 70 }}></div>
                <th className="col-3">
                  <div className="mb-3">
                    <p className="mb-3 px-2 fw-semibold text-alat">
                      Hari/Tanggal: {tanggal}
                    </p>
                    <p className="px-2 fw-semibold text-alat">Shift: {shift}</p>
                  </div>
                </th>
              </thead>
            </table>

            <hr className="w-100 mb-3 mt-2 solid" />
            {/* Content Table */}
            {/* Table Kegiatatan */}
            <table class="table table-bordered caption-top mt-3">
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
              {datas?.map((item, index) => (
                <tbody className="text-center">
                  <tr key={index}>
                    <td>{item?.data?.lokasi_kegiatan}</td>
                    <td>{item?.data?.kondisi_jalan}</td>
                    <td>{item?.data?.metode_perbaikan}</td>
                    <td>{item?.data?.waktu_mulai}</td>
                    <td>{item?.data?.waktu_selesai}</td>
                  </tr>
                </tbody>
              ))}
            </table>

            {/* Table Material ( Patching / resheeting ) */}
            <table class="table table-bordered caption-top mt-3">
              <caption className="text-black fw-semibold">
                Material ( Patching / resheeting )
              </caption>
              <thead className="text-center">
                <tr>
                  <th rowSpan={2} scope="col" className="align-middle">
                    Jenis Material
                  </th>
                  <th rowSpan={2} scope="col" className="align-middle">
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
              {datas?.map((item, index) => (
                <tbody className="text-center">
                  <tr key={index}>
                    <td>{item?.data?.jenis_material}</td>
                    <td></td>
                    <td>{item?.data?.pengangkutan_rit}</td>
                    <td>{item?.data?.hasil_kubikasi}</td>
                    <td>{item?.data?.hasil_panjang}</td>
                  </tr>
                </tbody>
              ))}
            </table>

            {/* Table A2B & Water Trailler */}
            <table class="table table-bordered caption-top mt-3">
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
              {datas?.map((item, index) => (
                <tbody className="text-center">
                  <tr key={index}>
                    <th>{item?.data.cn_unit}</th>
                    <td>{item?.data.lokasi_a2b}</td>
                    <td>{item?.data.aktivitas_a2b}</td>
                  </tr>
                </tbody>
              ))}
            </table>

            {/* Catatan Problem */}
            <div className="w-100 p-2 border h-100 mt-3 mb-3">
              <p className="fw-semibold fs-6">
                Catatan Problem: <span className="fw-normal">{catatan}</span>
              </p>
            </div>

            {/* Content Bottom */}
            <div className="container px-5 mt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p className="fw-normal">Dibuat oleh,</p>
                  <p className="mt-5">({dibuat})</p>
                </div>
                <div className="col-4 text-center gap-5">
                  <p className="fw-normal">Diserahkan,</p>
                  <p className="mt-5">({diserahkan})</p>
                </div>
                <div className="col-4 text-center">
                  <p className="fw-normal">Diterima,</p>
                  <p className="mt-5">({diterima})</p>
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
