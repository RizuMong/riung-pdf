import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Img_TTD from "../../assets/img_ttd.png";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const LogBookSectionReport = ({}) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        import.meta.env.VITE_LOGBOOK_URL,
        {
          id_logbook: "WC2vgKhVg",
        }
        // {
        //   id_logbook: id_logbook,
        // }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <div className="border border-3 border-dark">
          <div className="p-1">
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
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
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE{" "}
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
                      <p className="mb-2 px-2  fw-normal text-alat">
                        No. Dokumen:{" "}
                        <span className="fw-semibold fst-italic">
                          FRM-OPR - 006
                        </span>
                      </p>
                      <hr className="w-100" />
                      <p className="mb-2 px-2  fw-normal text-alat">
                        Hari / Tanggal: {datas.tanggal}
                      </p>
                      <hr className="w-100" />
                      <p className="mb-2 px-2  fw-normal text-alat">
                        Halaman:{" "}
                      </p>
                      <hr className="w-100" />
                    </div>
                  </th>
                </thead>
              </table>
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
                    <th width="8%" scope="col" className="fs-6 align-middle">
                      C/N LOADER
                    </th>
                    <th width="8%" scope="col" className="fs-6 align-middle">
                      C/N HAULER
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
                        <td className="text-sm fw-normal">{index + 1}</td>
                        <td className="text-sm fw-normal">{item.lokasi}</td>
                        <td className="text-sm fw-normal">
                          {item.cn_hauler[0]}
                        </td>
                        <td className="text-sm fw-normal">
                          {item.cn_hauler[1]}
                        </td>
                        <td className="text-sm fw-normal">{item.aktivitas}</td>
                        <td className="text-sm fw-normal">{item?.sketsa}</td>
                        <td className="text-sm fw-normal">
                          {item?.status_pkh}
                        </td>
                        <td className="text-sm fw-normal">{item.problem}</td>
                        <td className="text-sm fw-normal">
                          {item.corrective_action}
                        </td>
                        <td className="text-sm fw-normal">{item?.paraf}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <table className="table table-bordered">
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
                      UNIT BREAK DOWN
                    </th>
                    <th width="70%" scope="col" className="fs-6 align-middle">
                      CATATAN
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <td className="text-sm fw-semibold">Data</td>
                  <td className="text-sm fw-semibold">Data</td>
                  <td className="text-sm fw-semibold">Data</td>
                </tbody>
              </table>
            </div>

            <hr className="w-100 solid m-0" />

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Diserahkan Oleh,</p>
                  <img src={Img_TTD} alt="Gambar TTD" width="80" />
                  <p className="fw-bold">({datas.diserahkan_oleh})</p>
                  <p className="fw-bold">Section Shift 1</p>
                </div>
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Diterima Oleh,</p>
                  <img src={Img_TTD} alt="Gambar TTD" width="80" />
                  <p className="fw-bold">({datas.diterima_oleh})</p>
                  <p className="fw-bold">Koordinator Shift 2</p>
                </div>
                <div className="col-4 text-center">
                  <p className="fw-bold">Diketahui,</p>
                  <img src={Img_TTD} alt="Gambar TTD" width="80" />
                  <p className="fw-bold">({datas.diketahui})</p>
                  <p className="fw-bold">Production Dept Head</p>
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
