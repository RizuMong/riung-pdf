import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const LogBookSectionReport = ({}) => {
  const [datas, setDatas] = useState([]);
  const [ttd, setTTD] = useState({
    ttd_diketahui: "",
    ttd_diserahkan: "",
    ttd_diterima: "",
    jabatan_diketahui: "",
  });
  const [loading, setLoading] = useState(true);

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/logbook",
        {
          id_logbook: queryParams.get("id_logbook"),
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setTTD({
          ttd_diketahui: data.ttd_diketahui,
          ttd_diserahkan: data.ttd_diserahkan,
          ttd_diterima: data.ttd_diterima,
          jabatan_diketahui: data.jabatan_diketahui,
        });
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
    <div className="container-fluid">
      <div className="">
        <div className="border border-3 border-dark">
          <div className="p-1">
            <div className="row align-items-center">
              {/* Header Table */}
              <Table responsive bordered className="table">
                <thead>
                  <th className="col-3">
                    {" "}
                    <div className="d-flex gap-3 mb-4">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="84"
                        height="40"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold text-lg">
                        PT Riung Mitra Lestari Production Department Jobsite:{" "}
                        {datas.jobsite}
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-6">
                    <h1 className="header-report-production mb-6 fw-semibold">
                      LOG BOOK SECTION HEAD REPORT
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
                    <div className="mb-1">
                      <p className="mb-2 px-2  fw-normal align-middle text-alat">
                        No. Dokumen:{" "}
                        <span className="fw-semibold fst-italic">
                          FRM-OPR - 006
                        </span>
                      </p>
                      <hr className="w-100" />
                      <p className="mb-2 px-2  fw-normal align-middle text-alat">
                        Hari / Tanggal: {datas.tanggal}
                      </p>
                      <hr className="w-100" />
                      <p className="mb-2 px-2  fw-normal align-middle text-alat">
                        Halaman:{" "}
                      </p>
                      <hr className="w-100" />
                    </div>
                  </th>
                </thead>
              </Table>
            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}
            <div className="table-responsive">
              <table className="table table-bordered caption-top mt-2">
                <thead className="text-center">
                  <tr>
                    <th width="3%" scope="col" className="fs-6 align-middle">
                      NO
                    </th>
                    <th width="10%" scope="col" className="fs-6 align-middle">
                      LOKASI
                    </th>
                    <th width="5%" scope="col" className="fs-6 align-middle">
                      C/N HAULER
                    </th>
                    <th width="5%" scope="col" className="fs-6 align-middle">
                      C/N LOADER
                    </th>
                    <th width="5%" scope="col" className="fs-6 align-middle">
                      C/N SUPPORT
                    </th>
                    <th width="22%" scope="col" className="fs-6 align-middle">
                      AKTIVITAS
                    </th>
                    <th width="14%" scope="col" className="fs-6 align-middle">
                      SKETSA
                    </th>
                    <th width="5%" scope="col" className="fs-6 align-middle">
                      STATUS PKH
                    </th>
                    <th width="15%" scope="col" className="fs-6 align-middle">
                      PROBLEM
                    </th>
                    <th width="10%" scope="col" className="fs-6 align-middle">
                      CORRECTIVE ACTION
                    </th>
                    <th width="5%" scope="col" className="fs-6 align-middle">
                      PARAF
                    </th>
                  </tr>
                </thead>

                <tbody className="text-center">
                  {datas.line?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-sm fw-normal align-middle">{index + 1}</td>
                        <td className="text-sm fw-normal align-middle">{item?.lokasi}</td>
                        <td className="text-sm fw-normal align-middle">{item?.cn_hauler}</td>
                        <td className="text-sm fw-normal align-middle">{item?.cn_loader}</td>
                        <td className="text-sm fw-normal align-middle">
                          {item?.cn_support}
                        </td>
                        <td className="text-sm fw-normal align-middle text-akivitas-logbook">
                          {item?.aktivitas}
                        </td>
                        <td className="text-sm fw-normal align-middle">
                          <img
                            src={item?.sketsa.url}
                            alt={item?.sketsa.name}
                            width="150"
                          />
                        </td>
                        <td className="text-sm fw-normal align-middle">
                          {item?.status_pkh}
                        </td>
                        <td className="text-sm fw-normal align-middle">{item?.problem}</td>
                        <td className="text-sm fw-normal align-middle">
                          {item?.corrective_action}
                        </td>
                        <td className="text-sm fw-normal align-middle">{item?.paraf}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <Table responsive bordered className="table table-bordered">
                <thead className="text-center">
                  <tr>
                    <th
                      width="15%"
                      scope="col"
                      className="fs-6 table-dark align-middle"
                    >
                      UNIT BREAK DOWN
                    </th>
                    <th
                      width="15%"
                      scope="col"
                      className="fs-6 table-dark align-middle"
                    >
                      UNIT STB
                    </th>
                    <th width="70%" scope="col" className="fs-6 align-middle">
                      CATATAN
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <td className="text-sm fw-semibold border border-1 align-middle">
                    {datas?.unit_breakdown}
                  </td>
                  <td className="text-sm fw-semibold border border-1 align-middle">
                    {datas?.unit_stb}
                  </td>
                  <td className="text-sm fw-semibold border border-1 align-middle">
                    {datas?.catatan}
                    <br />
                    <br />
                  </td>
                </tbody>
              </Table>
            </div>

            <hr className="w-100 solid m-0" />

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Diserahkan Oleh,</p>
                  <img src={ttd?.ttd_diserahkan} width="100" />
                  <p className="fw-bold">({datas?.diserahkan_oleh})</p>
                  <p className="fw-bold">Section Shift 1</p>
                </div>
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Diterima Oleh,</p>
                  <img src={ttd?.ttd_diterima} width="100" />
                  <p className="fw-bold">({datas?.diterima_oleh})</p>
                  <p className="fw-bold">Section Shift 2</p>
                </div>
                <div className="col-4 text-center">
                  <p className="fw-bold">Diketahui,</p>
                  <img src={ttd?.ttd_diketahui} width="100" />
                  <p className="fw-bold">({datas?.diketahui})</p>
                  <p className="fw-bold">{ttd?.jabatan_diketahui}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(LogBookSectionReport);
