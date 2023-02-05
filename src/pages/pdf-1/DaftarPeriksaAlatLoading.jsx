import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DaftarPeriksaAlatLoading = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  const [penerima, setPenerima] = useState("");

  // Kolom 1
  const [cn1, setCn1] = useState("");
  const [lokasi1, setLokasi1] = useState("");
  const [p2h_a, setP2Ha] = useState("");
  const [undercarriage_1a, setUndercarriage_1a] = useState("");
  const [undercarriage_2a, setUndercarriage_2a] = useState("");
  const [undercarriage_3a, setUndercarriage_3a] = useState("");
  const [tbp1a, setTBP1a] = useState("");
  const [tbp2a, setTBP2a] = useState("");
  const [tbp3a, setTBP3a] = useState("");
  const [tbp4a, setTBP4a] = useState("");
  const [lingkungan_1, setLingkungan1] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/daftar-periksa/alat-loading",
        {
          data: {
            _id: "63c6688acdeb3866444b9110",
            company_id: 23946,
            created_at: 1673947274351,
            created_by: 163623,
            id: "TZRQHmT4g",
            id_daftar_kontaminasi_alat_loading: "TZRQHmT4g",
            lokasi: "test pdf 1",
            lokasi_pkh_id: "9H-UHiT4R",
            pkh: "a_iFa0h4R",
            shift: "Shift 1",
            tanggal: 1673136000000,
            updated_at: 1673947274351,
            updated_by: 163623,
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setJobsite(data[0].jobsite);
        setTanggal(data[0].tanggal);
        setShift(data[0].shift);
        setPenerima(data[0].penerima);

        const checker = (data, set) => {
          if (data == null) {
            set(" ");
            return 1;
          } else if (data) {
            set("✓");
            return 1;
          }
          set("X");
          return 1;
        };

        // Kolom 1
        setCn1(data[0]?.data?.cn_unit);
        setLokasi1(data[0]?.data?.lokasi);
        checker(res.data[0]?.data?.p2h, setP2Ha);
        checker(res.data[0]?.data?.undercarriage_1, setUndercarriage_1a);
        checker(res.data[0]?.data?.undercarriage_2, setUndercarriage_2a);
        checker(res.data[0]?.data?.undercarriage_3, setUndercarriage_3a);
        checker(res.data[0]?.data?.tpb_1, setTBP1a);
        checker(res.data[0]?.data?.tpb_2, setTBP2a);
        checker(res.data[0]?.data?.tpb_3, setTBP3a);
        checker(res.data[0]?.data?.tpb_4, setTBP4a);
        checker(res.data[0]?.data?.lingkungan_1, setLingkungan1);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM – OPR - 018</p>
        <div className="border border-2 border-dark">
          <div className="p-2">
            {/* Header */}
            {/* Header Table */}
            <table className="table">
              <thead>
                <th className="col-4">
                  {" "}
                  <div className="d-flex gap-3 align-items-center mb-2">
                    <img
                      className="pl-2"
                      src={LogoRiung}
                      width="120"
                      height="60"
                      alt="Logo RIUNG"
                    />
                    <h5 className="fw-bold header-pt">
                      PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE{" "}
                      {jobsite}
                    </h5>
                  </div>
                </th>
                <div className="vr" style={{ height: 84 }}></div>
                <th className="col-5">
                  <h1 className="header-alat-loading fs-4 mb-3">
                    DAFTAR PERIKSA KONTAMINASI ALAT LOADING/CLEANING
                  </h1>
                </th>
                <div className="vr" style={{ height: 84 }}></div>
                <th className="col-3">
                  <div className="">
                    <p className="mb-1 pt-1 px-2 fw-semibold text-alat">
                      HARI/TANGGAL: {tanggal}
                    </p>
                    <hr className="w-100" />
                    <p className="mb-1 px-2 fw-semibold text-alat">
                      PIT & SHIFT: {shift}
                    </p>
                    <hr className="w-100" />
                    <p className="mb-1 px-2 fw-semibold text-alat">HALAMAN: </p>
                    <hr className="w-100" />
                  </div>
                </th>
              </thead>
            </table>

            <hr className="w-100 mb-3 mt-2 solid" />
            {/* Content Table */}
            <Table responsive bordered hover size="sm">
              <thead className="text-center">
                <tr>
                  <th
                    rowSpan={2}
                    width="45%"
                    className="header-table-coal2 align-middle"
                  >
                    PEMERIKSAAN
                  </th>
                  <th width="9%" className="header-table-coal text-start">
                    C/N UNIT: {cn1}
                  </th>
                  <th width="9%" className="header-table-coal text-start">
                    C/N UNIT:
                  </th>
                  <th width="9%" className="header-table-coal text-start">
                    C/N UNIT:
                  </th>
                  <th width="9%" className="header-table-coal text-start">
                    C/N UNIT:
                  </th>
                  <th width="9%" className="header-table-coal text-start">
                    C/N UNIT:
                  </th>
                  <th
                    rowSpan={2}
                    width="10%"
                    className="header-table-coal2 align-middle"
                  >
                    KETERANGAN
                  </th>
                </tr>
                <tr>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI: {lokasi1}
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI:
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI:
                  </th>
                </tr>
              </thead>

              <tbody className="text-start">
                {/* A. PENGECHEKAN P2H */}
                <tr>
                  <td className="fw-bold">
                    A. PENGECHEKAN P2H
                    <br />
                    <span className="fw-normal">
                      1. Apakah P2H telah dilakukan dengan benar oleh operator
                    </span>
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {p2h_a}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td></td>
                </tr>
                {/* B. PENGECHEKAN UNIT */}
                <tr>
                  <td className="fw-bold">
                    B. PENGECHEKAN UNIT <br />
                    - Undercarriage
                    <br />
                    <span className="fw-normal">
                      1. Apakah bolt-nut track dan sprocket sudah terpasang
                      dengan baik
                    </span>
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {" "}
                    {undercarriage_1a}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2. Apakah kekencangan track-link normal</td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_2a}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    3. Apakah undercarriage sudah bersih dari material non
                    Batubara
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_3a}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td></td>
                </tr>
                {/* Teeth, Pins & Bucket */}
                <tr>
                  <td className="fw-bold">
                    - Teeth, Pins & Bucket
                    <br />
                    <span className="fw-normal">
                      1. Apakah teeth bucket terpasang dengan baik (cutting edge
                      untuk alat cleaning)
                    </span>
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp1a}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    2. Apakah pemasangan pin & lock pin bolt pada teeth bucket
                    sudah benar & aman
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp2a}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    3. Apakah teeth bucket bukan bekas reinforced (harus genuine
                    parts)
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp3a}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4. Apakah punggung bucket tidak ada retakan</td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp4a}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td></td>
                </tr>
                {/* Teeth, Pins & Bucket */}
                <tr>
                  <td className="fw-bold">
                    C. LINGKUNGAN
                    <br />
                    <span className="fw-normal">
                      1. Apakah lingkungan loading excavator sudah bersih dari
                      material non-batubara
                    </span>
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {lingkungan_1}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td className="text-center align-middle fs-5 fw-semibold"></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>

            <hr className="w-100 mb-3 mt-2 solid" />
            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p>Pemeriksaan tersebut sudah dilakukan dengan benar Oleh,</p>
                  <p className="mt-5">()</p>
                  <p> Prod. Group Leader</p>
                </div>
                <div className="col-4 align-self-end">
                  <p className="text-base">
                    Distribusi : <u>Asli</u> : Production Dept., <u>Yellow</u> :
                    Customer
                  </p>
                </div>
                <div className="col-4 text-center">
                  <p>Mengetahui,</p>
                  <p className="mt-5">({penerima})</p>
                  <p>Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(DaftarPeriksaAlatLoading);
