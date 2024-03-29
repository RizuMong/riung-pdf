import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ExcavatorControl = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  const [penerima, setPenerima] = useState("");
  const [pit, setPit] = useState("");
  const [ttd_dibuat_oleh, setTTD] = useState("");


  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/excavator-control-page",
        {
          id_excon: queryParams.get("id_excon"),
          lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
          pkh_id: queryParams.get("pkh_id"),
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
        setPenerima(res.data[0]?.penerima);
        setPit(res.data[0]?.pit);
        setTTD(res.data[0]?.ttd_dibuat_oleh)
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
        <p className="text-end fst-italic text-sm">FRM – OPR - 002</p>
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
                <p className="mb-2 px-2 fw-semibold text-alat">PIT : {pit}</p>
              </div>
            </div>

            {/* Content Table */}
            <Table responsive bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th width="10%" className="table-dark align-middle">
                    Jam
                  </th>
                  <th width="10%" className="align-middle">
                    CN Loader
                  </th>
                  <th width="10%" className="align-middle">
                    Productivity
                  </th>
                  <th width="10%" className="align-middle">
                    Minutes
                  </th>
                  <th width="10%" className="align-middle">
                    Production
                  </th>
                  <th width="10%" className="align-middle">
                    Problem
                  </th>
                  <th width="25%" className="align-middle">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {datas &&
                  datas?.map((item, index) => (
                    <tr className="align-middle" key={index}>
                      <td>{item?.line.jam}</td>
                      <td>{item?.line.cn_loader}</td>
                      <td>{item?.line.actual_productivity}</td>
                      <td>{item?.line.minute}</td>
                      <td>{item?.line.production}</td>
                      {/* <td>
                        {item?.line.problem_rmgm ||
                          item?.line.problem_rbms ||
                          item?.line.problem_rebh ||
                          item?.line.problem_rhml ||
                          item?.line.problem_rmip ||
                          item?.line.problem_rmtu ||
                          item?.line.problem_rsmu}
                      </td> */}
                      <td>{item?.line.problem}</td>
                      <td>{item?.line.action}</td>
                    </tr>
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
                  <img src={ttd_dibuat_oleh} width="100" />
                  <p className="border-bottom border-dark border-3 w-100">
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
