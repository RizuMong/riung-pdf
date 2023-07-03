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
  const [pit, setPit] = useState("");
  const [customer, setCustomer] = useState("");
  const [loading, setLoading] = useState(true);
  const [jabatan, setJabatan] = useState({
    ttd_penerima: "",
    jabatan_penerima: "",
    penerima: "",
  });

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

  // Kolom 2
  const [cn2, setCn2] = useState("");
  const [lokasi2, setLokasi2] = useState("");
  const [p2h_b, setP2Hb] = useState("");
  const [undercarriage_1b, setUndercarriage_1b] = useState("");
  const [undercarriage_2b, setUndercarriage_2b] = useState("");
  const [undercarriage_3b, setUndercarriage_3b] = useState("");
  const [tbp1b, setTBP1b] = useState("");
  const [tbp2b, setTBP2b] = useState("");
  const [tbp3b, setTBP3b] = useState("");
  const [tbp4b, setTBP4b] = useState("");
  const [lingkungan_2, setLingkungan2] = useState("");

  // Kolom 3
  const [cn3, setCn3] = useState("");
  const [lokasi3, setLokasi3] = useState("");
  const [p2h_c, setP2Hc] = useState("");
  const [undercarriage_1c, setUndercarriage_1c] = useState("");
  const [undercarriage_2c, setUndercarriage_2c] = useState("");
  const [undercarriage_3c, setUndercarriage_3c] = useState("");
  const [tbp1c, setTBP1c] = useState("");
  const [tbp2c, setTBP2c] = useState("");
  const [tbp3c, setTBP3c] = useState("");
  const [tbp4c, setTBP4c] = useState("");
  const [lingkungan_3, setLingkungan3] = useState("");

  // Kolom 4
  const [cn4, setCn4] = useState("");
  const [lokasi4, setLokasi4] = useState("");
  const [p2h_d, setP2Hd] = useState("");
  const [undercarriage_1d, setUndercarriage_1d] = useState("");
  const [undercarriage_2d, setUndercarriage_2d] = useState("");
  const [undercarriage_3d, setUndercarriage_3d] = useState("");
  const [tbp1d, setTBP1d] = useState("");
  const [tbp2d, setTBP2d] = useState("");
  const [tbp3d, setTBP3d] = useState("");
  const [tbp4d, setTBP4d] = useState("");
  const [lingkungan_4, setLingkungan4] = useState("");

  // Kolom 5
  const [cn5, setCn5] = useState("");
  const [lokasi5, setLokasi5] = useState("");
  const [p2h_e, setP2He] = useState("");
  const [undercarriage_1e, setUndercarriage_1e] = useState("");
  const [undercarriage_2e, setUndercarriage_2e] = useState("");
  const [undercarriage_3e, setUndercarriage_3e] = useState("");
  const [tbp1e, setTBP1e] = useState("");
  const [tbp2e, setTBP2e] = useState("");
  const [tbp3e, setTBP3e] = useState("");
  const [tbp4e, setTBP4e] = useState("");
  const [lingkungan_5, setLingkungan5] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/control-activity-coal-getting/offline",
        {
          data: {
            id_daftar_kontaminasi_alat_loading: queryParams.get(
              "id_daftar_kontaminasi_alat_loading"
            ),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setJobsite(data[0]?.jobsite);
        setTanggal(data[0]?.tanggal);
        setShift(data[0]?.shift);
        setPit(data[0]?.pit);
        setCustomer(data[0]?.customer);
        setJabatan({
          ttd_penerima: data[0]?.ttd_penerima,
          jabatan_penerima: data[0]?.jabatan_penerima,
          penerima: data[0]?.penerima,
        });

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

        // Kolom 2
        setCn2(data[1]?.data?.cn_unit);
        setLokasi2(data[1]?.data?.lokasi);
        checker(res.data[1]?.data?.p2h, setP2Hb);
        checker(res.data[1]?.data?.undercarriage_1, setUndercarriage_1b);
        checker(res.data[1]?.data?.undercarriage_2, setUndercarriage_2b);
        checker(res.data[1]?.data?.undercarriage_3, setUndercarriage_3b);
        checker(res.data[1]?.data?.tpb_1, setTBP1b);
        checker(res.data[1]?.data?.tpb_2, setTBP2b);
        checker(res.data[1]?.data?.tpb_3, setTBP3b);
        checker(res.data[1]?.data?.tpb_4, setTBP4b);
        checker(res.data[1]?.data?.lingkungan_1, setLingkungan2);

        // Kolom 3
        setCn3(data[2]?.data?.cn_unit);
        setLokasi3(data[2]?.data?.lokasi);
        checker(res.data[2]?.data?.p2h, setP2Hc);
        checker(res.data[2]?.data?.undercarriage_1, setUndercarriage_1c);
        checker(res.data[2]?.data?.undercarriage_2, setUndercarriage_2c);
        checker(res.data[2]?.data?.undercarriage_3, setUndercarriage_3c);
        checker(res.data[2]?.data?.tpb_1, setTBP1c);
        checker(res.data[2]?.data?.tpb_2, setTBP2c);
        checker(res.data[2]?.data?.tpb_3, setTBP3c);
        checker(res.data[2]?.data?.tpb_4, setTBP4c);
        checker(res.data[2]?.data?.lingkungan_1, setLingkungan3);

        // Kolom 4
        setCn4(data[3]?.data?.cn_unit);
        setLokasi4(data[3]?.data?.lokasi);
        checker(res.data[3]?.data?.p2h, setP2Hd);
        checker(res.data[3]?.data?.undercarriage_1, setUndercarriage_1d);
        checker(res.data[3]?.data?.undercarriage_2, setUndercarriage_2d);
        checker(res.data[3]?.data?.undercarriage_3, setUndercarriage_3d);
        checker(res.data[3]?.data?.tpb_1, setTBP1d);
        checker(res.data[3]?.data?.tpb_2, setTBP2d);
        checker(res.data[3]?.data?.tpb_3, setTBP3d);
        checker(res.data[3]?.data?.tpb_4, setTBP4d);
        checker(res.data[3]?.data?.lingkungan_1, setLingkungan4);

        // Kolom 5
        setCn5(data[4]?.data?.cn_unit);
        setLokasi5(data[4]?.data?.lokasi);
        checker(res.data[4]?.data?.p2h, setP2He);
        checker(res.data[4]?.data?.undercarriage_1, setUndercarriage_1e);
        checker(res.data[4]?.data?.undercarriage_2, setUndercarriage_2e);
        checker(res.data[4]?.data?.undercarriage_3, setUndercarriage_3e);
        checker(res.data[4]?.data?.tpb_1, setTBP1e);
        checker(res.data[4]?.data?.tpb_2, setTBP2e);
        checker(res.data[4]?.data?.tpb_3, setTBP3e);
        checker(res.data[4]?.data?.tpb_4, setTBP4e);
        checker(res.data[4]?.data?.lingkungan_1, setLingkungan5);
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
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM – OPR - 018</p>
        <div className="border border-2 border-dark">
          <div className="p-2">
            {/* Header */}
            {/* Header Table */}
            <Table responsive bordered className="table">
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
                      PIT & SHIFT: {pit} & {shift}
                    </p>
                    <hr className="w-100" />
                    <p className="mb-1 px-2 fw-semibold text-alat">HALAMAN: </p>
                    <hr className="w-100" />
                  </div>
                </th>
              </thead>
            </Table>

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
                    C/N UNIT: {cn2}
                  </th>
                  <th width="9%" className="header-table-coal text-start">
                    C/N UNIT: {cn3}
                  </th>
                  <th width="9%" className="header-table-coal text-start">
                    C/N UNIT: {cn4}
                  </th>
                  <th width="9%" className="header-table-coal text-start">
                    C/N UNIT: {cn5}
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
                    LOKASI: {lokasi2}
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI:{lokasi3}
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI: {lokasi4}
                  </th>
                  <th scope="col-3" className="header-table-coal text-start">
                    LOKASI: {lokasi5}
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
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {p2h_b}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {p2h_c}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {p2h_d}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {p2h_e}
                  </td>
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
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_1b}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_1c}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_1d}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_1e}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>2. Apakah kekencangan track-link normal</td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_2a}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_2b}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_2c}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_2d}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_2e}
                  </td>
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
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_3b}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_3c}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_3d}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {undercarriage_3e}
                  </td>
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
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp1b}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp1c}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp1d}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp1e}
                  </td>
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
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp2b}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp2c}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp2d}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp2e}
                  </td>
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
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp3b}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp3c}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp3d}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp3e}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>4. Apakah punggung bucket tidak ada retakan</td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {tbp4a}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {" "}
                    {tbp4b}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {" "}
                    {tbp4c}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {" "}
                    {tbp4d}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {" "}
                    {tbp4e}
                  </td>
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
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {lingkungan_2}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {lingkungan_3}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {lingkungan_4}
                  </td>
                  <td className="text-center align-middle fs-5 fw-semibold">
                    {lingkungan_5}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>

            <hr className="w-100 mb-3 mt-2 solid" />
            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-6 text-center gap-5">
                  <p>Pemeriksaan tersebut sudah dilakukan dengan benar Oleh,</p>
                  <img src={jabatan.ttd_penerima} width="100" />
                  <p>({jabatan.penerima})</p>
                  <p>{jabatan?.jabatan_penerima}</p>
                </div>
                <div className="col-6 text-center">
                  <p>Mengetahui,</p>
                  <p className="mt-5">({customer})</p>
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