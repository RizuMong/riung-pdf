import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import { Table } from "react-bootstrap";
import LogoRiung from "../../assets/logo-riung2.jpg";
import "../../styles/App.css";

const WorkOrderActionReport = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    // Data Luar
    jobsite: "",
    penerima_work_order: "",
    start_periode: "",
    end_periode: "",
    diorder_oleh: "",
    nomor_dokumen: "",

    // Data Eng (Target)
    target_overburden_bcm: 0,
    target_coal_ton: 0,
    attachment: "",
    tanggal_diterima_eng: "",
    catatan_eng: "",
    diterima_oleh_eng: "",

    // Data Prod (Actual)
    actual_overburden: 0,
    actual_coal: 0,
    tanggal_diterima_prod: "",
    catatan_prod: "",
    diterima_oleh_prod: "",
    dilaporkan_oleh: "",
  });
  const [detail, seDetail] = useState([]);
  const [attachment, seAttachment] = useState([]);
  const [evidence, SetEvidence] = useState([]);

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/work-order-v2",
        {
          data: {
            // id_work_order: "q_PyODB4R",
            id_work_order: queryParams.get("id_work_order")
          },
        }
      )
      .then((res) => {
        const { data } = res;

        setData({
          // Data Luar
          jobsite: data.jobsite,
          penerima_work_order: data.penerima_work_order,
          start_periode: data.start_periode.split(" ")[0],
          end_periode: data.end_periode,
          diorder_oleh: data.diorder_oleh,
          nomor_dokumen: data.nomor_dokumen,

          // Data Eng (Target)
          target_overburden_bcm: data.target_overburden_bcm,
          target_coal_ton: data.target_coal_ton,
          tanggal_diterima_eng: data.tanggal_diterima_eng,
          catatan_eng: data.catatan_eng,
          diterima_oleh_eng: data.diterima_oleh_eng,

          // Data Prod (Actual)
          actual_overburden: data.actual_overburden,
          actual_coal: data.actual_coal,
          tanggal_diterima_prod: data.tanggal_diterima_prod,
          catatan_prod: data.catatan_prod,
          diterima_oleh_prod: data.diterima_oleh_prod,
          dilaporkan_oleh: data.dilaporkan_oleh,
        });

        if (data && data.attachment) {
          seAttachment(data?.attachment);
        }
        if (data && data.evidence) {
          SetEvidence(data?.evidence);
        }
        seDetail(data?.detail);
      })
      .catch((err) => {
        // alert(err);
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
      <div className="mt-1 mb-1">
        <p className="text-end fs-6 fst-italic">Form Eng 024</p>
        <div className="border border-3 border-dark">
          <div className="p-1">
            <div className="row align-items-center">
              {/* Header Table */}
              <Table className="table">
                <thead>
                  <th className="col-3">
                    {" "}
                    <div className="d-flex gap-3 mb-4">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="290"
                        height="40"
                        alt="Logo RIUNG"
                      />
                    </div>
                  </th>
                  <div className="vr" style={{ height: 70 }}></div>
                  <th className="col-6">
                    <h1 className="header-report-production mb-4 fw-semibold">
                      WORK ORDER & ACTION REPORT
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 70 }}></div>
                  <th className="col-2">
                    <div className="mb-1">
                      <p className="mb-2 px-2  fw-normal text-alat">
                        NO. :{" "}
                        <span className="fw-normal">{data.nomor_dokumen}</span>
                      </p>
                      <hr className="w-100" />
                      <p className="mb-2 px-2 fw-normal text-alat">
                        PERIODE : {data.start_periode} - {data.end_periode}
                      </p>
                      <hr className="w-100" />
                    </div>
                  </th>
                  <div className="vr" style={{ height: 70 }}></div>
                  <th className="col-2 pl-2">
                    <div className="mb-3">
                      <p className="mb-2 px-2 fw-normal text-alat">HALAMAN</p>
                      <p className="fw-normal text-alat pl-4">1</p>
                    </div>
                  </th>
                </thead>
              </Table>
            </div>

            <hr className="w-100 solid m-0" />

            {/* Head Table Content */}
            <Table responsive bordered className="m-0">
              <thead className="text-center">
                <tr>
                  <th
                    colSpan={2}
                    scope="col-3"
                    className="header-table-action border-end"
                    style={{ width: "50%", verticalAlign: "middle" }}
                  >
                    PEMERIKSAAN
                  </th>
                  <th
                    colSpan={2}
                    scope="col-3"
                    className="header-table-action"
                    style={{ width: "50%", verticalAlign: "middle" }}
                  >
                    ACTION REPORT
                  </th>
                </tr>
                <tr>
                  <th scope="col-3" className="header-table-coal text-start ">
                    KEPADA: Prod & TDC Dept. Head
                  </th>
                  <th
                    scope="col-3"
                    className="header-table-coal text-start border-end"
                  >
                    DEPT. : Production & TDC
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    KEPADA: Engineering Dept. Head
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    Dept. Engineering
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan={2}
                    scope="col-3"
                    className="header-table-coal text-start border-end"
                  >
                    TEMBUSAN: Project Manager
                  </th>
                  <th
                    colSpan={2}
                    scope="col-3"
                    className="header-table-coal text-start"
                  >
                    TEMBUSAN: Project Manager
                  </th>
                </tr>
              </thead>
            </Table>

            {/* Table Satu Jangan Dipisah*/}
            <Table responsive bordered className="table-bordered">
              <thead>
                <tr className="fw-bold text-center align-middle">
                  <th width="2%">NO</th>
                  <th width="25%">URAIAN PEKERJAAN</th>
                  <th width="8%">LOKASI</th>
                  <th width="15%">TARGET WAKTU</th>
                  <th width="30%">URAIAN PEKERJAAN</th>
                  <th width="20%">KETERANGAN</th>
                </tr>
              </thead>
              <tr>
                <td className="text-sm text-center border border-1">(1)</td>
                <td className="text-sm border border-1">
                  {" "}
                  Target Include Rain & Slippery:
                  <br />
                  OB: {data?.target_overburden_bcm} Bcm
                  <br />
                  Coal: {data?.target_coal_ton} Ton
                </td>
                <td className="text-sm border border-1 text-center fw-semibold">
                  {data?.jobsite}
                </td>
                <td className="text-sm border border-1 text-center fw-semibold"></td>
                <td className="text-sm border border-1 text-start">
                  {" "}
                  Actual Production OB:
                  <br />
                  OB: {data?.actual_overburden} Bcm
                  <br />
                  Coal: {data?.actual_coal} Ton
                </td>
                <td className="text-sm border-0 text-center fw-semibold">
                  {evidence &&
                    evidence?.map((item) => (
                      <img width="150" src={item?.url} alt={item?.name} /> 
                    ))}
                </td>
              </tr>
              {/* Mapping Data */}
              {detail?.map((item, index) => (
                <tbody className="text-center text-sm">
                  <td className="border border-1">({index + 2})</td>
                  <td className="border border-1 text-start">
                    {item?.hasil_target}
                  </td>
                  <td className="border border-1 fw-semibold">
                    {item?.lokasi}
                  </td>
                  <td className="border border-1 fw-semibold">
                    {item?.target_waktu}
                  </td>
                  <td className="border border-1 text-start">
                    {item?.hasil_actual}
                  </td>
                  <td className="border-0"></td>
                </tbody>
              ))}
            </Table>

            {/* Catatan */}
            <Table className="m-0">
              <thead>
                <tr>
                  {/* <th className="text-sm fw-normal">
                    GAMBAR ACUAN YANG DIGUNAKAN NO:
                  </th> */}
                  <th
                    width="50%"
                    className="fw-semibold border-start border-1 align-top"
                    rowSpan={2}
                    colSpan={2}
                  >
                    CATATAN:{" "}
                    <span className="text-sm fw-normal">
                      {data.catatan_eng}
                    </span>
                  </th>
                </tr>
                <tr>
                  <th width="50%" className="fw-semibold">
                    CATATAN:{" "}
                    <span className="text-sm fw-normal">
                      {data.catatan_prod}
                    </span>
                  </th>
                </tr>
              </thead>
            </Table>

            {/* Content Bottom & Tanda Tangan */}
            <Table responsive bordered className="m-0">
              <thead className="text-center">
                <tr>
                  <th style={{ width: "25%" }} className="fw-semibold">
                    <p className="fw-normal text-sm">
                      {data.jobsite}, {data.tanggal_diterima_eng}
                    </p>
                    <p>DIORDER OLEH,</p>
                    <p className="mt-5 border-top border-1">
                      ({data.diorder_oleh})
                    </p>
                  </th>
                  <th width="25%" className="fw-semibold px-1 align-top">
                    <p>DITERIMA OLEH,</p>
                    <p className="fw-normal text-sm text-start px-1">
                      NAMA: {data.diterima_oleh_eng}
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      JABATAN: Prod Dept. Head
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      DEPT: Production
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      TANGGAL: {data.tanggal_diterima_eng}
                    </p>
                    <p className="fw-normal text-sm text-start px-1">PARAF: </p>
                  </th>

                  <th style={{ width: "25%" }} className="fw-semibold">
                    <p className="fw-normal text-sm">
                      {data.jobsite}, {data.tanggal_diterima_prod}
                    </p>
                    <p>DILAPORKAN OLEH,</p>
                    <p className="mt-5 border-top border-1">
                      ({data.dilaporkan_oleh})
                    </p>
                  </th>

                  <th width="25%" className="fw-semibold align-top">
                    <p>DITERIMA OLEH,</p>
                    <p className="fw-normal text-sm text-start px-1">
                      NAMA: {data.diterima_oleh_prod}
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      JABATAN: Engineering Dept. Head
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      DEPT: Engineering
                    </p>
                    <p className="fw-normal text-sm text-start px-1">
                      TANGGAL: {data.tanggal_diterima_prod}
                    </p>
                    <p className="fw-normal text-sm text-start px-1">PARAF: </p>
                  </th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
        {/* Tempat Attachment */}
        {attachment &&
          attachment?.map((gambar) => (
            <img width="1000" src={gambar?.url} alt={gambar?.name} />
          ))}
      </div>
    </div>
  );
};

export default WithRouter(WorkOrderActionReport);
