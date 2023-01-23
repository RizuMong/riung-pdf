import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ProductControl = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/product-control-page",
        {
          data: {
            _id: "63c6688ccdeb3866444b985e",
            company_id: 23946,
            created_at: 1673947275959,
            created_by: 163623,
            id: queryParams.get("id"),
            id_production_control: queryParams.get("id_production_control"),
            lokasi: "test pdf 1",
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            pkh: queryParams.get("pkh"),
            shift: "Shift 1",
            tanggal: 1673136000000,
            updated_at: 1673947275959,
            updated_by: 163623,
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        if (res.data && res.data[0] && res.data[0].jobsite) {
          setJobsite(res.data[0].jobsite);
        }
        if (res.data && res.data[0] && res.data[0].tanggal) {
          setTanggal(res.data[0].tanggal);
        }
        if (res.data && res.data[0] && res.data[0].lokasi) {
          setLokasi(res.data[0].lokasi);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM – OPR - 004</p>
        <div className="border border-2 border-dark">
          <div className="p-3">
            {/* Header */}
            {/* Header Table */}
            <table className="table">
              <thead>
                <th className="col-4">
                  {" "}
                  <div className="d-flex gap-3 mb-3">
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
                <div className="vr" style={{ height: 100 }}></div>
                <th className="col-5">
                  <h1 className="header-production-control text-serif mb-7">
                    PRODUCTION CONTROL
                  </h1>
                </th>
                <div className="vr" style={{ height: 100 }}></div>
                <th className="col-3">
                  <div className="mb-4">
                    <p className="mb-3 px-2 text-serif fw-semibold text-alat">
                      Hari/Tanggal: {tanggal}
                    </p>
                    <hr className="w-100" />
                    <p className="pt-2 px-2 text-serif fw-semibold text-alat">
                      Lokasi: {lokasi}
                    </p>
                  </div>
                </th>
              </thead>
            </table>

            <hr className="w-100 mb-3 mt-2 solid" />
            {/* Content Table */}
            <Table responsive striped bordered hover>
              <thead className="text-center">
                <tr>
                  <th
                    rowSpan={2}
                    width="20%"
                    scope="col-3"
                    className="header-table-product align-middle"
                  >
                    Waktu
                  </th>
                  <th
                    scope="col-3"
                    width="25%"
                    colSpan={2}
                    className="header-table-product align-middle"
                  >
                    Produksi
                  </th>
                  <th
                    scope="col-3"
                    width="25%"
                    colSpan={2}
                    className="header-table-product align-middle"
                  >
                    Akumulasi Produksi
                  </th>
                  <th
                    rowSpan={2}
                    width="30%"
                    scope="col-3"
                    className="header-table-product align-middle"
                  >
                    Keterangan
                  </th>
                </tr>
                <tr>
                  <th scope="col-3">Plan</th>
                  <th scope="col-3">Aktual</th>
                  <th scope="col-3">Plan</th>
                  <th scope="col-3">Aktual</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {datas?.map((item, index) => (
                  <tr key={index}>
                    <td>{item?.line.jam}</td>
                    <td>{item?.line.produksi_plan}</td>
                    <td>{item?.line.produksi_aktual}</td>
                    <td>{item?.line.akumulasi_plan}</td>
                    <td>{item?.line.akumulasi_aktual}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Content Bottom */}
            <table class="table mt-3">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="text-serif fw-bold">
                    Shift
                  </th>
                  <th scope="col" className="text-serif fw-bold">
                    Section Head
                  </th>
                  <th scope="col" className="text-serif fw-bold">
                    Tanda Tangan
                  </th>
                  <th scope="col" className="text-serif fw-bold">
                    Catatan{" "}
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <th className="text-serif align-middle" scope="row">
                    I
                  </th>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <th className="text-serif align-middle" scope="row">
                    II
                  </th>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(ProductControl);
