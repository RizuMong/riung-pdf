import React from "react";
import { WithRouter } from "../../utils/Navigation";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const ExcavatorControl = () => {
  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM – OPR - 002</p>
        <div className="border border-2 border-dark">
          <div className="p-3">
            {/* Header */}
            <div className="row align-items-center">
              <div className="col-4">
                <div className="d-flex gap-3 align-items-center">
                  <img
                    src={LogoRiung}
                    width="100"
                    height="60"
                    alt="Logo RIUNG"
                  />
                  <h5 className="fw-bold">
                    PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                    ...........................
                  </h5>
                </div>
              </div>
              <div className="col-5">
                <h1 className="header-excavator fw-bold px-5">EXCAVATOR CONTROL</h1>
              </div>
              {/* Input Type */}
              {/* <div className="col-4">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <label>Date: </label>
                  <input className="form-control w-100 rounded-0" type="date" />
                </div>
                <div className="d-flex align-items-center gap-3 mb-2">
                  <label>Shift: </label>
                  <input className="form-control w-100 rounded-0" type="text" />
                </div>
                <div className="d-flex align-items-center gap-3">
                  <label className="pr-2">PIT: </label>
                  <input className="form-control w-100 rounded-0" type="text" />
                </div>
              </div> */}

              {/* Output Type */}
              <div className="col-3 mb-2">
                <p className="mb-2 px-2 fw-semibold text-alat">
                  Date :{" "}
                </p>
                <p className="mb-2 px-2 fw-semibold text-alat">
                  Shift :{" "}
                </p>
                <p className="mb-2 px-2 fw-semibold text-alat">
                  PIT :{" "}
                </p>
              </div>
            </div>

            {/* Content Table */}
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-1</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-2</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-3</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-4</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-5</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-6</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-7</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-8</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-9</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-10</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-11</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>
            <Table bordered hover size="sm mt-3 text-center">
              <thead>
                <tr>
                  <th className="col-2 table-dark">Jam ke-12</th>
                  <th className="col-2">Productivity</th>
                  <th className="col-2">Minutes</th>
                  <th className="col-2">Production</th>
                  <th className="col-2">Problem</th>
                  <th className="col-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Productivity</td>
                  <td>60</td>
                  <td>Production</td>
                  <td>Problem</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </Table>

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row justify-content-center">
                <div className="col-10 d-flex gap-5">
                  <p className="fw-bold mt-6">Productivity =</p>
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <p className="fw-bold pl-3">60</p>
                      <hr className="" />
                      <p className="fw-bold pl-2">Minutes</p>
                    </div>
                    <p className="fw-bold">x Production</p>
                  </div>
                </div>
                <div className="col-2 text-center">
                  <p>Dibuat oleh,</p>
                  <p className="mt-5 border-bottom border-dark border-3">
                    ( Group Leader )
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(ExcavatorControl);
