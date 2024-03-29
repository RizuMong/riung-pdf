import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const PerintahKerjaHarian = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [dibuat, setDibuat] = useState("");
  const [note_pkh, setNotePKH] = useState("");
  const [dilaporkan, setDilaporkan] = useState("");
  const [dilaksanakan1, setDilaksanakan1] = useState("");
  const [dilaksanakan2, setDilaksanakan2] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    jabatan_dibuat: "",
    jabatan_dilaporkan: "",
    ttd_dilaksanakan_1: "",
    ttd_dilaksanakan_2: "",
  });

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://api-oos.jojonomic.com/23946/rios/generate-pdf/perintah-kerja-harian/pkh-v2",
        {
          data: {
            id_lokasi_pkh: queryParams.get("id_lokasi_pkh"),
            logbook_detail_id: queryParams.get("logbook_detail_id"),
            logbook_id: queryParams.get("logbook_id"),
            pkh_id: queryParams.get("pkh_id"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data.detail);
        setJobsite(data?.jobsite);
        setTanggal(data?.tanggal);
        setLokasi(data?.lokasi);
        setDibuat(data?.dibuat);
        setDilaporkan(data?.dilaporkan);
        setDilaksanakan1(data?.dilaksanakan);
        setDilaksanakan2(data?.dilaksanakan_2);
        setNotePKH(data?.note_pkh);
        setData({
          jabatan_dibuat: data?.jabatan_dibuat,
          jabatan_dilaporkan: data?.jabatan_dilaporkan,
          ttd_dilaksanakan_1: data?.ttd_dilaksanakan_1,
          ttd_dilaksanakan_2: data?.ttd_dilaksanakan_2,
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
      <div className="mt-1 mb-1">
        <div className="border border-3 border-dark">
          <div className="p-1">
            <div className="row align-items-center">
              {/* Header Table */}
              <Table responsive className="table">
                <thead>
                  <th className="col-1">
                    {" "}
                    <div className="d-flex gap-3 mb-3">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                    </div>
                  </th>
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-6">
                    <h1 className="header-report-production mb-4 fw-semibold">
                      PERINTAH KERJA HARIAN (PKH)
                    </h1>
                  </th>
                  <th className="col-3">
                    <div className="mb-4">
                      <p className="mb-4 px-2 fw-semibold fst-italic text-alat">
                        FRM-OPR - 006
                      </p>
                    </div>
                  </th>
                </thead>
              </Table>
              <hr className="w-100 solid" />
              <Table responsive className="table">
                <thead>
                  <th className="col-8">
                    <div className="mb-5">
                      <p className="mb-2 mt px-3 fw-normal text-alat">
                        DARI: Dept. Head
                      </p>
                      <p className="mb-2 px-3 fw-normal text-alat">
                        KEPADA: Section Head
                      </p>
                    </div>{" "}
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-4">
                    <div className="mb-3">
                      <p className="mb-2 mt px-2 fw-normal text-alat">
                        Jobsite: {jobsite}
                      </p>
                      <p className="mb-2 px-2 fw-normal text-alat">
                        Hari/Tanggal: {tanggal}
                      </p>
                      <p className="mb-2 px-2 fw-normal text-alat">
                        Area: {lokasi}
                      </p>
                    </div>
                  </th>
                </thead>
              </Table>
            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-1 ">
                <thead className="text-center">
                  <tr>
                    <th width="5%" scope="col" className="fs-6 align-middle">
                      NO
                    </th>
                    <th width="20%" scope="col" className="fs-6 align-middle">
                      LOKASI
                    </th>
                    <th width="25%" scope="col" className="fs-6 align-middle">
                      INSTRUKSI KERJA
                    </th>
                    <th width="25%" scope="col" className="fs-6 align-middle">
                      LAPORAN PELAKSANAAN SHIFT 1
                    </th>
                    <th width="25%" scope="col" className="fs-6 align-middle">
                      LAPORAN PELAKSANAAN SHIFT 2
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {datas?.map((item, index) => (
                    <tr>
                      <td className="text-sm fw-normal align-middle">
                        {index + 1}
                      </td>
                      <td className="text-sm fw-normal align-middle">
                        {item.lokasi}
                      </td>
                      <td className="text-sm fw-normal align-middle">
                        {item.instruksi_kerja}
                      </td>
                      <td className="text-sm fw-normal align-middle">
                        {item.laporan_pelaksanaan_1}
                      </td>
                      <td className="text-sm fw-normal align-middle">
                        {item.laporan_pelaksanaan_2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="w-100 solid m-0" />
            {/* Content Bottom */}
            <div className="d-flex justify-content-between">
              <div className="gap-4 mt-1">
                <p className="mb-2 fw-normal text-alat">
                  Dibuat: {data.jabatan_dibuat} {dibuat}
                </p>
                <div>
                  <p className="mb-2 fw-normal text-alat">
                    Dilaporkan: {data.jabatan_dilaporkan} {dilaporkan}
                  </p>
                  <p className="fw-normal text-alat">
                    Dilaksanakan: Group Leader
                  </p>
                </div>
              </div>

              <div className="d-flex gap-2 align-self-end mt-3">
                <div className="text-center d-block mx-ttd2">
                  <img src={data.ttd_dilaksanakan_1} width="100" />
                  <p className="mb-2 fw-semibold text-alat px-5">
                    ({dilaksanakan1})
                  </p>
                </div>
                <div>
                  <div className="text-center d-block mx-ttd1">
                    <img src={data.ttd_dilaksanakan_2} width="100" />
                    <p className="mb-2 px-2 fw-semibold text-alat px-5">
                      ({dilaksanakan2})
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-100 solid m-0" />
            <div className="d-flex justify-content-between">
              <h5 className="fs-6 mt-1 border-end px-2 border-2">
                NB: {note_pkh}
              </h5>
              <p className="fs-6 mt-1 text-sm">Halaman: 01/01</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(PerintahKerjaHarian);