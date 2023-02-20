import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung3.jpg";
import "../../styles/App.css";

const FormKehadiran = () => {
  const [datas, setDatas] = useState([]);

  // const windowUrl = window.location.search;
  // const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/daftar-hadir",
        {
          data: {
            _id: "63ef2d3d269f8a3681706143",
            id: "gxPwrJ1VR",
            id_daftar_hadir: "gxPwrJ1VR",
          },
        }
      )
      .then((res) => {
        const { data } = res;

        setDatas(res);

        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between mt-1">
        <div> {/* Empty */} </div>
        <div className="pl-1">
          <img src={LogoRiung} alt="Logo Riung Ops" width="140" height="56" />
        </div>
        <div className="text-end">
          <p>FRM-MRGA-006</p>
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
              <th className="fw-semibold text-sm">Judul:</th>
            </tr>
            <tr>
              <th className="fw-semibold text-sm">Tanggal:</th>
            </tr>
            <tr>
              <th className="fw-semibold text-sm">Tempat:</th>
            </tr>
            <tr>
              <th className="fw-semibold text-sm">Fasilitator:</th>
            </tr>
            <tr>
              <th className="fw-semibold text-sm">Notulen:</th>
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
              <th className="fw-semibold">Nama / Name</th>
              <th className="fw-semibold">Dept / Seksi</th>
              <th className="fw-semibold">Jabatan</th>
              <th className="fw-semibold">Tandatangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <th className="fw-normal">1</th>
              <th className="fw-normal">Data</th>
              <th className="fw-normal">Data</th>
              <th className="fw-normal">Data</th>
              <th className="fw-normal">Data</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithRouter(FormKehadiran);
