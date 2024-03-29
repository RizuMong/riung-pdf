import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ProductionReport = () => {
  const [datas, setDatas] = useState([]);
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  const [jobsite, setJobsite] = useState("");
  const [unit_bd, setUnitBD] = useState("");
  const [unit_sb, setUnitSB] = useState("");
  const [catatan, setCatatan] = useState("");
  const [loading, setLoading] = useState(true);

  const [dibuat, setDibuat] = useState("");
  const [diserahkan, setDiserahkan] = useState("");
  const [diterima, setDiterima] = useState("");
  const [ttd, setTTD] = useState({
    ttd_dibuat_oleh: "",
    ttd_diserahkan: "",
    ttd_diterima: "",
  });

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/handover-production",
        {
          data: {
            id_hop: queryParams.get("id_hop"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            pkh_id: queryParams.get("pkh_id"),
          }
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        if (res.data && res.data[0] && res.data[0].tanggal) {
          setTanggal(res.data[0].tanggal);
        }
        if (res.data && res.data[0] && res.data[0].shift) {
          setShift(res.data[0].shift);
        }
        setJobsite(res.data[0]?.jobsite);
        setUnitBD(res.data[0]?.unit_breakdown);
        setUnitSB(res.data[0]?.unit_standby);
        setCatatan(res.data[0]?.catatan);
        setDibuat(res.data[0]?.dibuat_oleh);
        setDiserahkan(res.data[0]?.diserahkan);
        setDiterima(res.data[0]?.diterima);

        setTTD({
          ttd_dibuat_oleh: res.data[0]?.ttd_dibuat_oleh,
          ttd_diserahkan: res.data[0]?.ttd_diserahkan,
          ttd_diterima: res.data[0]?.ttd_diterima,
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
        <p className="text-end fst-italic text-sm">FRM-OPR-018</p>
        <div className="border border-3 border-dark">
          <div className="p-1">
            <div className="row align-items-center">
              {/* Header Table */}
              <Table responsive className="table">
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
                        {jobsite}
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-6">
                    <h1 className="header-report-production mb-6 fw-semibold">
                      HANDOVER PRODUCTION REPORT
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
                    <div className="mb-1">
                      <p className="mb-2 px-2  fw-normal text-alat">
                        No. Dokumen:{" "}
                        <span className="fw-semibold fst-italic">
                          FRM-OPR - 003
                        </span>
                      </p>
                      <hr className="w-100" />
                      <p className="mb-2 px-2  fw-normal text-alat">
                        Hari / Tanggal /Shift: {tanggal} / {shift}
                      </p>
                      <hr className="w-100" />
                      <p className="mb-2 px-2  fw-normal text-alat">
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
            <Table responsive bordered hover className="text-center mt-3">
              <thead>
                <tr>
                  <th
                    scope="col"
                    colSpan={2}
                    className="header-table-production fw-bold"
                  >
                    FLEET
                  </th>
                  <th
                    scope="col"
                    colSpan={8}
                    className="header-table-production fw-bold"
                  >
                    FRONT LOADING
                  </th>
                  <th
                    scope="col"
                    colSpan={2}
                    className="header-table-production fw-bold"
                  >
                    ROAD
                  </th>
                  <th
                    scope="col"
                    colSpan={7}
                    className="header-table-production fw-bold"
                  >
                    DUMPING POINT
                  </th>
                  <th
                    scope="col"
                    rowSpan={3}
                    className="header-table-production fw-normal align-middle"
                  >
                    REMARKS
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    C/N LOADER
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    C/N HAULER
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    PIT
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    BLOCK
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    SEAM
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    MATERIAL TYPE
                  </th>
                  <th
                    scope="col"
                    colspan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    RL
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    CONDITION
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    SUPPORT EQUIPMENT
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    CONDITION
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    SUPPORT EQUIPMENT
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    DISPOSAL / STOCKPILE
                  </th>
                  <th
                    scope="col"
                    colspan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    RL
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    CONDITION
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    SUPPORT EQUIPMENT
                  </th>
                  <th
                    scope="col"
                    colspan={2}
                    rowSpan={2}
                    className="header-table-production2 fw-normal align-middle"
                  >
                    DISTANCE
                  </th>
                  {/* <th>dd</th> */}
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal align-middle"
                  >
                    PLAN
                  </th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal align-middle"
                  >
                    ACT
                  </th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal align-middle"
                  >
                    PLAN
                  </th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal align-middle"
                  >
                    ACT
                  </th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal align-middle"
                  ></th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal align-middle"
                  ></th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal align-middle"
                  ></th>
                  <th
                    scope="col"
                    className="header-table-production2 fw-normal align-middle"
                  ></th>
                </tr>
              </thead>

              {/* Data */}
              <tbody className="text-start">
                {datas?.map((item, index) => {
                  function FuncDataSpasi(text) {
                    const lines = text.split("\n");
                    return (
                      <div>
                        {lines.map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </div>
                    );
                  }

                  const data = item.line.remarks;

                  return (
                    <tr key={index}>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.cn_loader}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.cn_hauler}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.pit}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.block}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.seam}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.front_loading_material_type}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.front_loading_plan}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.front_loading_action}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.front_loading_condition}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.front_loading_support_equipment}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.raad_condition}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.road_support_equipment}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.dumping_point_pile}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.dumping_point_plan}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.dumping_point_action}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.dumping_point_condition}
                      </th>
                      <th
                        scope="col"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.dumping_point_support_equipment}
                      </th>
                      <th
                        scope="col"
                        colSpan={2}
                        className="header-table-production2 fw-normal align-middle"
                      >
                        {item.line.dumping_point_distance}
                      </th>
                      <th
                        scope="col"
                        id="data-remarks"
                        className="header-table-production2 fw-normal align-middle"
                      >
                        <div>{FuncDataSpasi(data)}</div>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            {/* Data Unit */}
            <Table responsive bordered className="table table-bordered">
              <thead className="text-center">
                <tr>
                  <th
                    width="15%"
                    scope="col"
                    className="fs-6 table-light align-middle"
                  >
                    UNIT B/D
                  </th>
                  <th
                    width="15%"
                    scope="col"
                    className="fs-6 table-light align-middle"
                  >
                    UNIT S/B
                  </th>
                  <th
                    width="70%"
                    scope="col"
                    className="fs-6 align-middle text-start"
                  >
                    CATATAN
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <td className="text-sm fw-semibold border border-1">
                  {unit_bd}
                </td>
                <td className="text-sm fw-semibold border border-1">
                  {unit_sb}
                </td>
                <td className="text-sm fw-semibold border border-1 text-start">
                  {catatan}
                  <br />
                  <br />
                </td>
              </tbody>
            </Table>

            <hr className="w-100 solid m-0" />

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Dibuat oleh,</p>
                  <img src={ttd.ttd_dibuat_oleh} width="100" />
                  <p>({dibuat})</p>
                  <p className="fw-bold">Group Leader</p>
                </div>
                <div className="col-4 text-center gap-5">
                  <p className="fw-bold">Diserahkan,</p>
                  <img src={ttd.ttd_diserahkan} width="100" />
                  <p>({diserahkan})</p>
                  <p className="fw-bold">Section Head</p>
                </div>
                <div className="col-4 text-center">
                  <p className="fw-bold">Diterima,</p>
                  <img src={ttd.ttd_diterima} width="100" />
                  <p>({diterima})</p>
                  <p className="fw-bold">Group Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(ProductionReport);