import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung3.jpg";
import "../../styles/App.css";

const FormKehadiran = () => {
  const [datas, setDatas] = useState([]);
  const [judul, setJudul] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [tempat, setTempat] = useState("");
  const [fasilitator, setFasilitator] = useState("");
  const [notulen, setNotulen] = useState("");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ttd, setTTD] = useState("");

  
  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/daftar-hadir-peserta",
        {
          data: {
            id_daftar_hadir: queryParams.get("id_daftar_hadir"),
          }
        }
      )
      .then((res) => {
        const { data } = res;

        setDatas(data);
        setJudul(res.data?.judul);
        setTanggal(res.data?.tanggal);
        setTempat(res.data?.tempat);
        setFasilitator(res.data?.fasilitator);
        setNotulen(res.data?.notulen);

        if (res && res.data.list[0]) {
          const result = res.data.list.map((item, index) => {
            const { dept, jabatan, peserta, peserta_text } = item;
            return {
              id: index,
              dept,
              jabatan,
              peserta,
              peserta_text,
            };
          });
          setTableData(result);
        }

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
      {/* Header */}
      <div className="d-flex justify-content-between mt-1">
        <div> {/* Empty */} </div>
        <div className="pl-1">
          <img src={LogoRiung} alt="Logo Riung Ops" width="140" height="56" />
        </div>
        <div className="text-end">
          <p>FRM-HRGA-006</p>
          <p>Rev. 01</p>
        </div>
      </div>
      <div className="border border-1 bg-info mt-3">
        <h5 className="text-white text-center m-0 my-3 fs-5">
          FORMULIR KEHADIRAN
        </h5>
      </div>

      {/* Table Header */}
      <div className="table-responsive mt-2">
        <table className="table table-bordered">
          <thead className="bg-table-form">
            <tr>
              <th className="fw-semibold text-sm">Judul: {judul}</th>
            </tr>
            <tr>
              <th className="fw-semibold text-sm">Tanggal: {tanggal}</th>
            </tr>
            <tr>
              <th className="fw-semibold text-sm">Tempat: {tempat}</th>
            </tr>
            <tr>
              <th className="fw-semibold text-sm">
                Fasilitator: {fasilitator}
              </th>
            </tr>
            <tr>
              <th className="fw-semibold text-sm">Notulen: {notulen}</th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Table Content Missing Width Table */}
      <div className="table-responsive mt-2">
        <table className="table table-bordered border-dark">
          <thead className="bg-table-form">
            <tr className="text-center">
              <th className="fw-semibold">No</th>
              <th className="fw-semibold">NRP - Nama</th>
              <th className="fw-semibold">Dept / Seksi</th>
              <th className="fw-semibold">Jabatan</th>
              <th className="fw-semibold">Tandatangan</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item) => (
              <tr key={item.id} className="text-center" style={{ height: 30 }}>
                <th className="fw-normal align-middle">{item.id + 1}</th>
                <th className="fw-normal align-middle">{item?.peserta || item?.peserta_text}</th>
                <th className="fw-normal align-middle">{item?.dept}</th>
                <th className="fw-normal align-middle">{item?.jabatan}</th>
                <th className="fw-normal align-middle">{item?.ttd_peserta}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithRouter(FormKehadiran);
