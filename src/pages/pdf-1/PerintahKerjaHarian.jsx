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
  const [dilaporkan, setDilaporkan] = useState("");
  const [dilaksanakan1, setDilaksanakan1] = useState("");
  const [dilaksanakan2, setDilaksanakan2] = useState("");
  const [loading, setLoading] = useState(true);

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/instruksi-kerja/pkh",
        {
          data: {
            _id: queryParams.get("_id"),
            company_id: queryParams.get("company_id"),
            created_at: queryParams.get("created_at"),
            created_by: queryParams.get("created_by"),
            dibuat: {
              company_user_id: queryParams.get("dibuat.company_user_id"),
              email: queryParams.get("dibuat.email"),
              name: queryParams.get("dibuat.name"),
              photo: queryParams.get("dibuat.photo"),
            },
            dilaksanakan: {
              company_user_id: queryParams.get("dilaksanakan.company_user_id"),
              email: queryParams.get("dilaksanakan.email"),
              name: queryParams.get("dilaksanakan.name"),
              photo: queryParams.get("dilaksanakan.photo"),
            },
            dilaporkan: {
              company_user_id: queryParams.get("dilaporkan.company_user_id"),
              email: queryParams.get("dilaporkan.email"),
              name: queryParams.get("dilaporkan.name"),
              photo: queryParams.get("dilaporkan.photo"),
            },
            id: queryParams.get("id"),
            id_lokasi_pkh: queryParams.get("id_lokasi_pkh"),
            jobsite: {
              id: queryParams.get("jobsite.id"),
              name: queryParams.get("jobsite.name"),
            },
            jobsite_text: queryParams.get("jobsite_text"),
            kategori: queryParams.get("kategori"),
            logbook_id: queryParams.get("logbook_id"),
            lokasi: queryParams.get("lokasi"),
            penerima_pkh: {
              company_user_id: queryParams.get("penerima_pkh.company_user_id"),
              email: queryParams.get("penerima_pkh.email"),
              name: queryParams.get("penerima_pkh.name"),
              photo: queryParams.get("penerima_pkh.photo"),
            },
            pkh_id: queryParams.get("pkh_id"),
            plan_productivity: queryParams.get("plan_productivity"),
            shift: queryParams.get("shift"),
            tanggal: queryParams.get("tanggal"),
            updated_at: queryParams.get("updated_at"),
            updated_by: queryParams.get("updated_by"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setJobsite(data[0]?.jobsite);
        setTanggal(data[0]?.tanggal);
        setLokasi(data[0]?.lokasi);
        setDibuat(data[0]?.dibuat);
        setDilaporkan(data[0]?.dilaporkan);
        setDilaksanakan1(data[0]?.dilaksanakan);
        setDilaksanakan2(data[0]?.dilaksanakan_2);
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
                    <div className="d-flex gap-3 mb-4">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-6">
                    <h1 className="header-report-production mb-6 fw-semibold">
                      PERINTAH KERJA HARIAN (PKH)
                    </h1>
                  </th>
                  <th className="col-3">
                    <div className="mb-4">
                      <p className="mb-2 px-2 fw-semibold fst-italic text-alat">
                        FRM-OPR - 006
                      </p>
                      <p className="mb-2 px-2 fw-semibold fs-6 text-alat">
                        2-2
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
                      <td className="text-sm fw-normal">{index + 1}</td>
                      <td className="text-sm fw-normal">{item.data.lokasi}</td>
                      <td className="text-sm fw-normal">
                        {item.data.instruksi_kerja}
                      </td>
                      <td className="text-sm fw-normal">
                        {item.data.laporan_pelaksanaan_1}
                      </td>
                      <td className="text-sm fw-normal"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="w-100 solid m-0" />
            {/* Content Bottom */}
            <div className="row">
              <div>
                <div className="d-flex gap-5 mt-1">
                  <p className="mb-2 mt px-2 fw-normal text-alat">
                    Dibuat: Dept. Head
                  </p>
                  <p className="mb-2 mt px-2 fw-normal text-alat">{dibuat}</p>
                </div>

                <div className="d-flex gap-2">
                  <p className="mb-2 px-2 fw-normal text-alat">
                    Dilaporkan: Section Head
                  </p>
                  <p className="mb-2 mt px-2 fw-normal text-alat">
                    {dilaporkan}
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="mb-2 px-2 fw-normal text-alat">
                    Dilaksanakan: Group Leader
                  </p>
                  <p className="mb-2 px-2 fw-semibold text-alat">
                    ({dilaksanakan1})
                  </p>
                  <p className="mb-2 px-2 fw-semibold text-alat px-5">
                    ({dilaksanakan2})
                  </p>
                </div>
              </div>
            </div>
            <hr className="w-100 solid m-0" />
            <div className="d-flex justify-content-between">
              <h5 className="fs-6 mt-1 border-end px-2 border-2">
                NB: TOLONG DI JAGA ELEVASI DISPOSAL JANGAN SAMPAI OVER FILL
              </h5>
              <p className="fs-6 mt-1">Halaman: 02/02</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(PerintahKerjaHarian);
