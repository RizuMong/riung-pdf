import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung3.jpg";
import "../../styles/App.css";

const LembarPica = () => {
  const [bagian, setBagian] = useState("");
  const [jobsite, setJobsite] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [proses, setProses] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [disahkan_oleh, setDisahkan_oleh] = useState("");
  const [disiapkan_oleh, setDisiapkan_oleh] = useState("");
  const [tablePICA, setTablePICA] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ttd_disahkan, setDisahkan] = useState("")
  const [ttd_disiapkan, setDisiapkan] = useState("")

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post("https://api-oos.jojonomic.com/23946/rios/generate-pdf/pica", {
        data: {
          id_pica: queryParams.get("id_pica")
        },
      })
      .then((res) => {
        const { data } = res;

        setBagian(data.bagian);
        setJobsite(data.jobsite);
        setLokasi(data.lokasi);
        setProses(data.proses);
        setStart_date(data.start_date);
        setEnd_date(data.end_date);
        setDisahkan_oleh(data.disahkan_oleh);
        setDisiapkan_oleh(data.disiapkan_oleh);
        setDisahkan(data.ttd_disahkan)
        setDisiapkan(data.ttd_disiapkan)

        // Data PICA
        if (res && res.data.pica) {
          const result = res.data.pica.map((item, index) => {
            const {
              cause,
              corrective_prevention_action,
              due_date,
              pic,
              pic_non_user,
              problem,
              status,
            } = item;
            return {
              id: index,
              cause,
              corrective_prevention_action,
              due_date,
              pic,
              pic_non_user,
              problem,
              status,
            };
          });
          setTablePICA(result);
        }
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
    <div className="border border-2 border-dark p-1">
      {/* Header Form */}
      <header className="mt-1">
        <div className="d-flex justify-content-center">
          <img src={LogoRiung} alt="Logo Riung Ops" width="140" height="56" />
        </div>
        <h1 className="text-center fs-4">
          LEMBAR <span className="text-danger">PICA</span>
        </h1>
        <h2 className="text-center fs-5 fw-normal">
          (PROBLEM IDENTIFICATION, CORRECTIVE - PREVENTION ACTION)
        </h2>
      </header>

      {/* Header */}
      <div className="mt-2">
        <pre className="text-normal m-0">Jobsite : {jobsite}</pre>
        <pre className="text-normal m-0">Bagian / Departemen : {bagian}</pre>
        <div className="d-flex justify-content-between">
          <pre className="text-normal m-0">Proses / Kegiatan : {proses}</pre>
          <p className="text-sm">FRM-MRE-001</p>
        </div>
        <div className="d-flex justify-content-between">
          <pre className="text-normal m-0">
            Periode : {start_date} - {end_date}
          </pre>
          <p>Rev. 1</p>
        </div>
      </div>

      {/* Table Content (Missing Width Table)*/}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-abu">
            <tr className="text-center">
              <th>NO</th>
              <th>PROBLEM</th>
              <th>CAUSE / IDENTIFICATION</th>
              <th>CORRECTIVE - PREVENTION ACTION</th>
              <th>PIC</th>
              <th>DUE DATE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {tablePICA?.map((item) => (
              <tr className="text-center">
                <td>{item?.id + 1}</td>
                <td className="text-start">{item?.problem}</td>
                <td className="text-start">{item?.cause}</td>
                <td className="text-start">
                  {item?.corrective_prevention_action}
                </td>
                <td>{item?.pic || item?.pic_non_user}</td>
                <td>{item?.due_date}</td>
                <td>{item?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Content Bottom */}
      <div className="d-flex justify-content-between px-5 mt-4">
        <div className="mt-2 align-content-center">
          <p>Disahkan oleh,</p>
          <img src={ttd_disahkan} width="100" />
          <p className="text-center border-bottom border-1 border-dark">
            ({disahkan_oleh})
          </p>
        </div>
        <div>
          <p>
            {lokasi}, {start_date}
          </p>
          <p>Disiapkan oleh,</p>
          <img src={ttd_disiapkan} width="100" />
          <p className="text-center border-bottom border-1 border-dark">
            ({disiapkan_oleh})
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(LembarPica);
