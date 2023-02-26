import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DrillingReport = () => {
  const [datas, setDatas] = useState([]);
  const [tableInhole, setTableInhole] = useState([]);
  const [loading, setLoading] = useState(true);

  // Data Luar
  const [pit, setPit] = useState("");
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  const [dibuat, setDibuat] = useState("");
  const [diperiksa, setDiperiksa] = useState("");

  // Data Total
  const [total_of_hole, setTotalHole] = useState("");
  const [avg_depth, setDepth] = useState("");
  const [total_d01, setTotal_d01] = useState("");
  const [total_d02, setTotal_d02] = useState("");
  const [total_d03, setTotal_d03] = useState("");
  const [total_d04, setTotal_d04] = useState("");
  const [total_d05, setTotal_d05] = useState("");
  const [total_d06, setTotal_d06] = useState("");
  const [total_d07, setTotal_d07] = useState("");
  const [total_d08, setTotal_d08] = useState("");
  const [total_d09, setTotal_d09] = useState("");
  const [total_d10, setTotal_d10] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/drilling-report",
        {
          data: {
            id_drilling_report: queryParams.get("id_drilling_report"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);

        // Data Luar
        setPit(data?.pit);
        setJobsite(data?.jobsite);
        setTanggal(data?.tanggal);
        setShift(data?.shift.slice(-1));
        setDibuat(data?.dibuat_oleh);
        setDiperiksa(data?.diperiksa_oleh);

        // Data Total
        setTotalHole(data?.total_no_of_hole);
        setDepth(data?.avg_depth);
        setTotal_d01(data?.total_d01);
        setTotal_d02(data?.total_d02);
        setTotal_d03(data?.total_d03);
        setTotal_d04(data?.total_d04);
        setTotal_d05(data?.total_d05);
        setTotal_d06(data?.total_d06);
        setTotal_d07(data?.total_d07);
        setTotal_d08(data?.total_d08);
        setTotal_d09(data?.total_d09);
        setTotal_d10(data?.total_d10);

        // Table Inhole
        if (data && data.detail) {
          const result = data.detail.map((item, index) => {
            const {
              cn_unit,
              lokasi_blok,
              lokasi_strip,
              elv_actual,
              elv_plan,
              work,
              d01,
              d02,
              d03,
              d04,
              d05,
              d06,
              d07,
              d08,
              d09,
              d10,
              i01,
              i02,
              i03,
              n01,
              s01,
              keterangan,
            } = item;
            return {
              id: index,
              cn_unit,
              lokasi_blok,
              lokasi_strip,
              elv_actual,
              elv_plan,
              work,
              d01,
              d02,
              d03,
              d04,
              d05,
              d06,
              d07,
              d08,
              d09,
              d10,
              i01,
              i02,
              i03,
              n01,
              s01,
              keterangan,
            };
          });
          setTableInhole(result);
        }
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
      // <div class="container p-5 d-flex align-items-center">
      //   <p className="fw-semibold fs-6">Loading Content...</p>
      //   <div
      //     class="spinner-border text-warning ms-auto"
      //     role="status"
      //     aria-hidden="true"
      //   ></div>
      // </div>
      <div class="text-center pt-5">
        <div
          class="spinner-border text-warning"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM-OPR-007</p>
        <div className="border border-3 border-dark">
          <div className="p-3">
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
                <thead>
                  <th className="col-4">
                    {" "}
                    <div className="d-flex gap-3 align-items-center mb-4">
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
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-5">
                    <h2 className="header-drill fw-bold mb-4-5">
                      DRILLING REPORT
                    </h2>
                  </th>
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 fw-normal align-middle text-alat border-bottom border-1">
                        PIT: <span className="text-black">{pit}</span>
                      </p>
                      <p className="mb-2 px-2 fw-normal align-middle text-alat border-bottom border-1">
                        Tanggal: <span className="text-black">{tanggal}</span>
                      </p>
                      <p className="mb-2 px-2 fw-normal align-middle text-alat border-bottom border-1">
                        SHIFT: <span className="text-black ">{shift}</span>
                      </p>
                    </div>
                  </th>
                </thead>
              </table>

              {/* Table Content */}
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-center fs-6">
                      <th rowSpan={3} className="fw-semibold align-middle">
                        C/N UNIT
                      </th>
                      <th colSpan={4} className="fw-semibold align-middle">
                        LOKASI
                      </th>
                      <th rowSpan={3} className="fw-semibold align-middle">
                        No of Hole
                      </th>
                      <th rowSpan={3} className="fw-semibold align-middle">
                        Depth (m){" "}
                      </th>
                      <th rowSpan={3} className="fw-semibold align-middle">
                        Work
                      </th>
                      <th colSpan={10} className="fw-semibold align-middle">
                        Delays
                      </th>
                      <th colSpan={3} className="fw-semibold align-middle">
                        Idle
                      </th>
                      <th colSpan={2} className="fw-semibold align-middle">
                        Maint.
                      </th>
                      <th rowSpan={3} className="fw-semibold align-middle">
                        KETERANGAN
                      </th>
                    </tr>
                    <tr className="text-center fs-6">
                      <th rowSpan={2} className="fw-semibold align-middle">
                        BLOK
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        STRIP
                      </th>
                      <th colSpan={2} className="fw-semibold align-middle">
                        ELV
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D01{" "}
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D02
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D03
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D04
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D05
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D06
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D07
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D08
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D09
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        D10
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        I01
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        I02
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        I03
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        N01
                      </th>
                      <th rowSpan={2} className="fw-semibold align-middle">
                        S01
                      </th>
                    </tr>
                    <tr className="text-center fs-6">
                      <th className="fw-semibold align-middle">ACT</th>
                      <th className="fw-semibold align-middle">PLAN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Data Detail */}
                    {tableInhole.map((item) => (
                      <tr
                        key={item?.id}
                        className="text-center text-black align-middle"
                      >
                        <td>{item?.cn_unit}</td>
                        <td>{item?.lokasi_blok}</td>
                        <td>{item?.lokasi_strip}</td>
                        <td>{item?.elv_actual}</td>
                        <td>{item?.elv_plan}</td>
                        <td>{item?.no_of_hole}</td>
                        <td>{item?.depth}</td>
                        <td>{item?.work}</td>
                        <td>{item?.d01}</td>
                        <td>{item?.d02}</td>
                        <td>{item?.d03}</td>
                        <td>{item?.d04}</td>
                        <td>{item?.d05}</td>
                        <td>{item?.d06}</td>
                        <td>{item?.d07}</td>
                        <td>{item?.d08}</td>
                        <td>{item?.d09}</td>
                        <td>{item?.d10}</td>
                        <td>{item?.i01}</td>
                        <td>{item?.i02}</td>
                        <td>{item?.i03}</td>
                        <td>{item?.n01}</td>
                        <td>{item?.s01}</td>
                        <td>{item?.keterangan}</td>
                      </tr>
                    ))}
                    <tr className="text-center align-middle">
                      <td colSpan={5} className="text-center fs-5 fw-semibold">
                        TOTAL
                      </td>
                      <td>{total_of_hole}</td>
                      <td>{avg_depth}</td>
                      <td></td>
                      <td>{total_d01}</td>
                      <td>{total_d02}</td>
                      <td>{total_d03}</td>
                      <td>{total_d04}</td>
                      <td>{total_d05}</td>
                      <td>{total_d06}</td>
                      <td>{total_d07}</td>
                      <td>{total_d08}</td>
                      <td>{total_d09}</td>
                      <td>{total_d10}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Content Bottom */}
              <div className="container px-4">
                <div className="row border border-1 align-items-center">
                  <div className="col-3 text-center gap-5">
                    <p className="fw-normal">Dibuat Oleh,</p>
                    <p className="fw-normal mt-5">({dibuat})</p>
                    <p className="fw-bolnormal">Drilling & Blast GL</p>
                  </div>
                  <div className="col-3 text-center gap-5">
                    <p className="fw-normal">Diperiksa Oleh,</p>
                    <p className="fw-normal mt-5">({diperiksa})</p>
                    <p className="fw-normal">Prod Dept/Sect. Head</p>
                  </div>
                  <div className="col-6">
                    <div className="d-flex justify-content-between">
                      <div className="fw-normal">
                        <p>Catatan:</p>
                        <p>D01 : P2H</p>
                        <p>D02 : Isi Solar & Lube</p>
                        <p>D03 : Cek U/C</p>
                        <p>D04 : Pindah Alat</p>
                        <p>D05 : Tunggu Alat Lain</p>
                        <p>D06 : Survey</p>
                      </div>
                      <div className="fw-normal mt-3">
                        <p>D07 : Tunggu Blasting</p>
                        <p>D08 : Cuci Unit</p>
                        <p>D09 : Ganti Shift</p>
                        <p>D10 : Istirahat/Makan</p>
                        <p>I01 : Tidak Ada Pekerjaan</p>
                        <p>I02 : Tidak Ada Operator</p>
                      </div>
                      <div className="fw-normal mt-3">
                        <p>I03 : Hujan</p>
                        <p>N01 : Breakdown</p>
                        <p>S01 : Service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(DrillingReport);
