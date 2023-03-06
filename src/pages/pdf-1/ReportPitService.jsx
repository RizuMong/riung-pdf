import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ReportPitService = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  const [penerima, setPenerima] = useState("");
  const [loading, setLoading] = useState(true);

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/handover-pit-service/report",
        {
          data: {
            _id: queryParams.get("_id"),
            company_id: queryParams.get("company_id"),
            created_at: queryParams.get("created_at"),
            created_by: queryParams.get("created_by"),
            date: queryParams.get("date"),
            id: queryParams.get("id"),
            id_hops: queryParams.get("id_hops"),
            lokasi: queryParams.get("lokasi"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            penerima_hops: {
              company_user_id: queryParams.get("penerima_hops.company_user_id"),
              email: queryParams.get("penerima_hops.email"),
              name: queryParams.get("penerima_hops.name"),
              photo: queryParams.get("penerima_hops.photo"),
            },
            pkh: queryParams.get("pkh"),
            shift: queryParams.get("shift"),
            updated_at: queryParams.get("updated_at"),
            updated_by: queryParams.get("updated_by"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setJobsite(data[0].jobsite);
        setTanggal(data[0].tanggal);
        setShift(data[0].shift);
        setPenerima(data[0].penerima_hops);
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
        <p className="text-end fst-italic text-sm">FRM-OPR-018</p>
        <div className="border border-3 border-dark">
          <div className="p-1">
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
                <thead>
                  <th className="col-3">
                    {" "}
                    <div className="d-flex gap-3 ">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="84"
                        height="40"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold text-lg mb-4">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE{" "}
                        {jobsite}
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 60 }}></div>
                  <th className="col-6">
                    <h1 className="header-report-pit mb-4">
                      HANDOVER REPORT FOR PIT SERVICE ACTIVITY
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 60 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 fw-semibold text-alat">
                        Hari/Tanggal: {tanggal}
                      </p>
                      <p className="mb-2 px-2 fw-semibold text-alat">
                        SHIFT: {shift}
                      </p>
                    </div>
                  </th>
                </thead>
              </table>
            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}
            <Table bordered hover className="text-center">
              <thead>
                <tr>
                  <th scope="col" className="header-table-pit">
                    No
                  </th>
                  <th scope="col" className="header-table-pit">
                    ACTIVITY
                  </th>
                  <th scope="col" className="header-table-pit fw-bold">
                    LOCATION
                  </th>
                  <th scope="col" className="header-table-pit fw-bold">
                    SUPPORT FOR
                  </th>
                  <th scope="col" className="header-table-pit">
                    UNIT
                  </th>
                  <th scope="col" className="header-table-pit">
                    REMARK
                  </th>
                </tr>
              </thead>
              <tbody className="text-start">
                {datas?.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{item?.data.activity}</td>
                    <td className="text-center">{item?.data.lokasi}</td>
                    <td className="text-center">{item?.data.support_for}</td>
                    <td className="text-center">{item?.data.cn_unit}</td>
                    <td className="text-center">{item?.data.remark}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <hr className="w-100 solid m-0" />

            {/* Content Bottom */}
            <div className="container px-5 mt-2">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p className="text-sm">Dibuat oleh,</p>
                  <p className="mt-4">()</p>
                  <p className="text-sm">Pit Service Group Leader</p>
                </div>
                <div className="col-4 text-center gap-5">
                  <p className="text-sm">Diserahkan oleh:</p>
                  <p className="mt-4">()</p>
                  <p className="text-sm">Prod. Dept/Section Head</p>
                </div>
                <div className="col-4 text-center">
                  <p className="text-sm">Diterima oleh,</p>
                  <p className="mt-4">({penerima})</p>
                  <p className="text-sm">Pit Service Group Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <p className="text-bottom-left fw-normal text-bottom flex-grow-1">
            Distribusi : Asli : Production Dept.
          </p>
          <p className="text-center fw-normal text-bottom">Revisi : 0</p>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(ReportPitService);
