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
  const [sketsa, setSketsa] = useState([]);
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
          // id_logbook: "pGyKbGC4g",
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setSketsa(data.sketsa);
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
      <div>
        <div>
          <div className="row align-items-center"></div>

          {/* Table Content */}
          <div className="table-responsive">
            {/* Header Table */}
            <Table className="table">
              <thead>
                <th className="col-3">
                  {" "}
                  <div className="d-flex gap-3 mb">
                    <img
                      className="pl-2 img-logbook-header"
                      src={LogoRiung}
                      alt="Logo RIUNG"
                    />
                    <h5 className="text-table-logbook fw-bold">
                      PT Riung Mitra Lestari Production Department Jobsite:{" "}
                      {datas.jobsite}
                    </h5>
                  </div>
                </th>
                <div className="vr height-header-logbook"></div>
                <th className="col-6">
                  <h4 className="header-report-logbook mb-3 fw-semibold">
                    LOG BOOK SECTION HEAD REPORT
                  </h4>
                </th>
                <div className="vr height-header-logbook"></div>
                <th className="col-3">
                  <div>
                    <p className="px-1 fw-normal align-middle text-table-logbook">
                      No. Dokumen:{" "}
                      <span className="fw-semibold fst-italic text-table-logbook">
                        FRM-OPR - 006
                      </span>
                    </p>
                    {/* <hr className="w-100" /> */}
                    <p className="px-1 fw-normal align-middle text-table-logbook">
                      Hari / Tanggal: {datas.tanggal}
                    </p>
                    {/* <hr className="w-100" /> */}
                    <p className="px-1 fw-normal align-middle text-table-logbook">
                      Halaman:{" "}
                    </p>
                    {/* <hr className="w-100" /> */}
                  </div>
                </th>
              </thead>
            </Table>
            <table className="table table-bordered caption-top">
              <thead className="text-center">
                <tr>
                  <th width="2%" className="text-table-logbook align-middle">
                    NO
                  </th>
                  <th width="8%" className="text-table-logbook align-middle">
                    LOKASI
                  </th>
                  <th width="5%" className="text-table-logbook align-middle">
                    C/N HAULER
                  </th>
                  <th width="5%" className="text-table-logbook align-middle">
                    C/N LOADER
                  </th>
                  <th width="5%" className="text-table-logbook align-middle">
                    C/N SUPPORT
                  </th>
                  <th width="20%" className="text-table-logbook align-middle">
                    AKTIVITAS
                  </th>
                  <th width="14%" className="text-table-logbook align-middle">
                    SKETSA
                  </th>
                  <th width="5%" className="text-table-logbook align-middle">
                    STATUS PKH
                  </th>
                  <th width="14%" className="text-table-logbook align-middle">
                    PROBLEM
                  </th>
                  <th width="10%" className="text-table-logbook align-middle">
                    CORRECTIVE ACTION
                  </th>
                  <th
                    width="5%"
                    className="text-table-logbook align-middle"
                  ></th>
                </tr>
              </thead>

              <tbody className="text-center">
                {datas.line?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-sm text-table-logbook fw-normal align-middle">
                        {index + 1}
                      </td>
                      <td className="text-sm text-table-logbook fw-normal align-middle">
                        {item?.lokasi}
                      </td>
                      <td className="text-sm text-table-logbook fw-normal align-middle">
                        {item?.cn_hauler}
                      </td>
                      <td className="text-sm text-table-logbook fw-normal align-middle">
                        {item?.cn_loader}
                      </td>
                      <td className="text-sm text-table-logbook fw-normal align-middle">
                        {item?.cn_support}
                      </td>
                      <td
                        align="justify"
                        className="text-sm text-table-logbook fw-normal align-middle text-akivitas-logbook"
                      >
                        {item?.aktivitas}
                      </td>

                      <td className="text-sm text-table-logbook fw-normal align-middle">
                        <img src={item?.sketsa_detail} width="150" />
                      </td>
                      <td className="text-sm text-table-logbook fw-normal align-middle">
                        {item?.status_pkh}
                      </td>
                      <td className="text-sm text-table-logbook fw-normal align-middle">
                        {item?.problem}
                      </td>
                      <td className="text-sm text-table-logbook fw-normal align-middle">
                        {item?.corrective_action}
                      </td>
                      <td className="text-sm text-table-logbook fw-normal align-middle">
                        {item?.paraf}
                      </td>
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
                    className="table-dark align-middle text-table-logbook"
                  >
                    UNIT BREAK DOWN
                  </th>
                  <th
                    width="15%"
                    scope="col"
                    className="table-dark align-middle text-table-logbook"
                  >
                    UNIT STB
                  </th>
                  <th
                    width="70%"
                    scope="col"
                    className="table-dark align-middle text-table-logbook"
                  >
                    CATATAN
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <td
                  align="justify"
                  className="px-1 text-sm text-table-logbook fw-normal border border-1 align-middle"
                >
                  {datas?.unit_breakdown}
                </td>
                <td
                  align="justify"
                  className="px-1 text-sm text-table-logbook fw-normal border border-1 align-middle"
                >
                  {datas?.unit_stb}
                </td>
                <td
                  align="justify"
                  className="px-1 text-sm text-table-logbook fw-normal border border-1 align-middle"
                >
                  {datas?.catatan}
                </td>
              </tbody>
            </Table>
          </div>

          {/* <hr className="w-100 solid m-0" /> */}

          {/* Content Bottom */}
          <div className="container px-5 pt-3">
            <div className="row align-items-center">
              <div className="col-4 text-center gap-5 text-table-logbook">
                <p className="fw-bold">Diserahkan Oleh,</p>
                <img src={ttd?.ttd_diserahkan} width="100" />
                <p className="fw-bold">({datas?.diserahkan_oleh})</p>
                <p className="fw-bold">Section Shift 1</p>
              </div>
              <div className="col-4 text-center gap-5 text-table-logbook">
                <p className="fw-bold">Diterima Oleh,</p>
                <img src={ttd?.ttd_diterima} width="100 text-table-logbook" />
                <p className="fw-bold">({datas?.diterima_oleh})</p>
                <p className="fw-bold">Section Shift 2</p>
              </div>
              <div className="col-4 text-center text-table-logbook">
                <p className="fw-bold">Diketahui,</p>
                <img src={ttd?.ttd_diketahui} width="100" />
                <p className="fw-bold">({datas?.diketahui})</p>
                <p className="fw-bold">{ttd?.jabatan_diketahui}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {sketsa &&
        sketsa.map((item, index) => (
          <div key={index}>
            <img width="1000" src={item?.url} alt={item?.name} />
            <br />
          </div>
        ))}
    </div>
  );
};

export default WithRouter(LogBookSectionReport);