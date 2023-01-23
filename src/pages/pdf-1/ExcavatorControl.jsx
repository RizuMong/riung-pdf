import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ExcavatorControl = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  const [penerima, setPenerima] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/excavator-control",
        {
          _id: "63bf84a460a970d4e54ac862",
          company_id: 23946,
          created_at: 1673495716571,
          created_by: 163623,
          date: 1673136000000,
          id: "uE1G_B2Vg",
          id_excon: "uE1G_B2Vg",
          lokasi: "testing",
          lokasi_pkh_id: "fr5MlB2Vg",
          pkh_id: "iQFMlfhVg",
          shift: "Shift 1",
          updated_at: 1674390296971,
          updated_by: 163623,
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        if (res.data && res.data[0] && res.data[0].jobsite) {
          setJobsite(res.data[0].jobsite);
        }
        if (res.data && res.data[0] && res.data[0].tanggal) {
          setTanggal(res.data[0].tanggal);
        }
        if (res.data && res.data[0] && res.data[0].shift) {
          setShift(res.data[0].shift);
        }
        if (res.data && res.data[0] && res.data[0].penerima) {
          setPenerima(res.data[0].penerima);
        }
        console.log(res.data[0].penerima);
        console.log({
          line: data[0].line,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM – OPR - 002</p>
        <div className="border border-2 border-dark">
          <div className="p-3">
            {/* Header */}
            <div className="row align-items-center">
              <div className="col-4">
                <div className="d-flex gap-3 align-items-center">
                  <img
                    src={LogoRiung}
                    width="100"
                    height="60"
                    alt="Logo RIUNG"
                  />
                  <h5 className="fw-bold fs-6">
                    PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE{" "}
                    {jobsite}
                  </h5>
                </div>
              </div>
              <div className="col-5">
                <h1 className="header-excavator fw-bold px-5">
                  EXCAVATOR CONTROL
                </h1>
              </div>
              <div className="col-3 mb-2">
                <p className="mb-2 px-2 fw-semibold text-alat">
                  Date : {tanggal}
                </p>
                <p className="mb-2 px-2 fw-semibold text-alat">
                  Shift : {shift}
                </p>
                <p className="mb-2 px-2 fw-semibold text-alat">PIT : </p>
              </div>
            </div>

            {/* Content Table */}
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th width="10%" className="table-dark">Jam</th>
                  <th width="10%">CN Loader</th>
                  <th width="10%">Productivity</th>
                  <th width="10%">Minutes</th>
                  <th width="10%">Production</th>
                  <th width="25%">Problem</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((item, index) => (
                  <>
                    <tr key={index}>
                      <td>{item.line.jam}</td>
                      <td>{item.line.cn_loader}</td>
                      <td>{item.line.productivity}</td>
                      <td>{item.line.minute}</td>
                      <td>{item.line.production}</td>
                      <td>Problem</td>
                      <td>{item.line.action}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row justify-content-center">
                <div className="col-9 d-flex gap-5">
                  <p className="fw-bold mt-6">Productivity =</p>
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <p className="fw-bold pl-3">60</p>
                      <hr className="" />
                      <p className="fw-bold pl-2">Minutes</p>
                    </div>
                    <p className="fw-bold">x Production</p>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <p>Dibuat oleh,</p>
                  <p className="mt-5 border-bottom border-dark border-3 w-100">
                    ({penerima})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(ExcavatorControl);
