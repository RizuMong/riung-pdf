import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DaftarPeriksaAlatAngkut = () => {
  const [datas, setDatas] = useState([]);
  const [jobsite, setJobsite] = useState("");
  const [penerima, setPenerima] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");

  // Kolom 1
  const [q1a, setQ1a] = useState("");
  const [q1b, setQ1b] = useState("");
  const [q1c, setQ1c] = useState("");
  const [q1d, setQ1d] = useState("");
  const [q1e, setQ1e] = useState("");
  const [q1f, setQ1f] = useState("");
  const [q1g, setQ1g] = useState("");
  const [q1h, setQ1h] = useState("");
  const [q1i, setQ1i] = useState("");
  const [q1j, setQ1j] = useState("");
  const [q1k, setQ1k] = useState("");
  const [q1l, setQ1l] = useState("");
  const [q1m, setQ1m] = useState("");
  const [q1n, setQ1n] = useState("");
  

  // Kolom 2
  const [q2a, setQ2a] = useState("");
  const [q2b, setQ2b] = useState("");
  const [q2c, setQ2c] = useState("");
  const [q2d, setQ2d] = useState("");
  const [q2e, setQ2e] = useState("");
  const [q2f, setQ2f] = useState("");
  const [q2g, setQ2g] = useState("");
  const [q2h, setQ2h] = useState("");
  const [q2i, setQ2i] = useState("");
  const [q2j, setQ2j] = useState("");
  const [q2k, setQ2k] = useState("");
  const [q2l, setQ2l] = useState("");
  const [q2m, setQ2m] = useState("");
  const [q2n, setQ2n] = useState("");

  // Kolom 3
  const [q3a, setQ3a] = useState("");
  const [q3b, setQ3b] = useState("");
  const [q3c, setQ3c] = useState("");
  const [q3d, setQ3d] = useState("");
  const [q3e, setQ3e] = useState("");
  const [q3f, setQ3f] = useState("");
  const [q3g, setQ3g] = useState("");
  const [q3h, setQ3h] = useState("");
  const [q3i, setQ3i] = useState("");
  const [q3j, setQ3j] = useState("");
  const [q3k, setQ3k] = useState("");
  const [q3l, setQ3l] = useState("");
  const [q3m, setQ3m] = useState("");
  const [q3n, setQ3n] = useState("");

  // const windowUrl = window.location.search;
  // const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/daftar-periksa-alat-angkut-batubara",
        {
          data: {
            tanggal: 1673136000000,
            lokasi: "test pdf 1",
            shift: "Shift 1",
            is_hauling: true,
            dpkab: [
              {
                tipe: {
                  id: "",
                  name: "",
                },
                cn_unit: {
                  id: "",
                  name: "",
                },
                q1: true,
                q2: true,
                q3: true,
                q4: false,
                q5: false,
                q6: true,
                q7: true,
                q8: false,
                q9: true,
                q10: false,
                q11: true,
                q12: false,
                q13: false,
                q14: true,
              },
            ],
            id_daftar_periksa_kontaminasi_alat_batubara: "fqgwNmoVg",
            pkh: "a_iFa0h4R",
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setJobsite(data[0].jobsite);
        setPenerima(data[0].penerima);
        setTanggal(data[0].tanggal);
        setShift(data[0].shift);

        const checker = (data, set) => {
          if (data) {
            set('✓')
            return 1;
          } set('X')
          return 1;
        }

        // Kolom 1
        checker(res?.data[0].data.q1, setQ1a)
        checker(res?.data[0].data.q2, setQ1b)
        checker(res?.data[0].data.q3, setQ1c)
        checker(res?.data[0].data.q4, setQ1d)
        checker(res?.data[0].data.q5, setQ1e)
        checker(res?.data[0].data.q6, setQ1f)
        checker(res?.data[0].data.q7, setQ1g)
        checker(res?.data[0].data.q8, setQ1h)
        checker(res?.data[0].data.q9, setQ1i)
        checker(res?.data[0].data.q10, setQ1j)
        checker(res?.data[0].data.q11, setQ1k)
        checker(res?.data[0].data.q12, setQ1l)
        checker(res?.data[0].data.q13, setQ1m)
        checker(res?.data[0].data.q14, setQ1n)

        // Kolom 2
        checker(res?.data[1].data.q1, setQ2a)
        checker(res?.data[1].data.q2, setQ2b)
        checker(res?.data[1].data.q3, setQ2c)
        checker(res?.data[1].data.q4, setQ2d)
        checker(res?.data[1].data.q5, setQ2e)
        checker(res?.data[1].data.q6, setQ2f)
        checker(res?.data[1].data.q7, setQ2g)
        checker(res?.data[1].data.q8, setQ2h)
        checker(res?.data[1].data.q9, setQ2i)
        checker(res?.data[1].data.q10, setQ2j)
        checker(res?.data[1].data.q11, setQ2k)
        checker(res?.data[1].data.q12, setQ2l)
        checker(res?.data[1].data.q13, setQ2m)
        checker(res?.data[1].data.q14, setQ2n)

        // Kolom 3
        checker(res?.data[2]?.data.q1, setQ3a)
        checker(res?.data[2]?.data.q2, setQ3b)
        checker(res?.data[2]?.data.q3, setQ3c)
        checker(res?.data[2]?.data.q4, setQ3d)
        checker(res?.data[2]?.data.q5, setQ3e)
        checker(res?.data[2]?.data.q6, setQ3f)
        checker(res?.data[2]?.data.q7, setQ3g)
        checker(res?.data[2]?.data.q8, setQ3h)
        checker(res?.data[2]?.data.q9, setQ3i)
        checker(res?.data[2]?.data.q10, setQ3j)
        checker(res?.data[2]?.data.q11, setQ3k)
        checker(res?.data[2]?.data.q12, setQ3l)
        checker(res?.data[2]?.data.q13, setQ3m)
        checker(res?.data[2]?.data.q14, setQ3n)
        
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM-OPR-018</p>
        <div className="border border-3 border-dark">
          <div className="p-3">
            <div className="row align-items-center">
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
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-5">
                    <h1 className="header-alat-angkut mb-4">
                      DAFTAR PERIKSA KONTAMINASI ALAT ANGKUT BATUBARA
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                        Hari/Tanggal: {tanggal}
                      </p>
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                        Shift: {shift}
                      </p>
                      <p className="mb-2 px-2 text-serif fw-semibold text-alat">
                        Halaman:{" "}
                      </p>
                    </div>
                  </th>
                </thead>
              </table>
            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}
            <Table bordered hover className="text-center mt-3">
              <thead>
                <tr>
                  <th
                    scope="col"
                    rowSpan={2}
                    className="header-table align-middle"
                  >
                    NO
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    colSpan={2}
                    className="header-table align-middle"
                  >
                    PEMERIKSAAN
                  </th>
                  <th
                    scope="col"
                    colSpan={10}
                    className="header-table align-middle"
                  >
                    C/N UNIT
                  </th>
                </tr>
                <tr className="text-center">
                  <th>CN</th>
                  <th>CN</th>
                  <th>CN</th>
                  <th>CN</th>
                  <th>CN</th>
                  <th>CN</th>
                  <th>CN</th>
                  <th>CN</th>
                  <th>CN</th>
                  <th>CN</th>
                </tr>
              </thead>
              <tbody className="text-start">
                <tr className="text-center">
                  <td className="text-center">1</td>
                  <td width="30%" className="fw-semibold text-start">
                    Apakah penyanggah mud guard utuh & baik
                  </td>
                  <td width="15%" className="text-start">Small dump truck</td>
                  <td>{q1a}</td>
                  <td>{q2a}</td>
                  <td>{q3a}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td className="fw-semibold">
                    Apakah spring tidak retak & utuh
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1b}</td>
                  <td>{q2b}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center">3</td>
                  <td className="fw-semibold">
                    Apakah baut roda, utuh & kencang
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1c}</td>
                  <td>{q2c}</td>
                  <td>q3</td>
                  <td>q3</td>
                  <td>q3</td>
                  <td>q3</td>
                  <td>q3</td>
                  <td>q3</td>
                  <td>q3</td>
                  <td>q3</td>
                </tr>
                <tr>
                  <td className="text-center">4</td>
                  <td className="fw-semibold">Apakah U-bolt utuh & kencang</td>
                  <td>Small dump truck</td>
                  <td>{q1d}</td>
                  <td>{q2d}</td>
                  <td>q4</td>
                  <td>q4</td>
                  <td>q4</td>
                  <td>q4</td>
                  <td>q4</td>
                  <td>q4</td>
                  <td>q4</td>
                  <td>q4</td>
                </tr>
                <tr>
                  <td className="text-center">5</td>
                  <td className="fw-semibold">
                    Apakah komponen undercarriage utuh & terikat
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1e}</td>
                  <td>{q2e}</td>
                  <td>q5</td>
                  <td>q5</td>
                  <td>q5</td>
                  <td>q5</td>
                  <td>q5</td>
                  <td>q5</td>
                  <td>q5</td>
                  <td>q5</td>
                </tr>
                <tr>
                  <td className="text-center">6</td>
                  <td className="fw-semibold">
                    Apakah bagian dalam vessel bersih
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1f}</td>
                  <td>{q2f}</td>
                  <td>q6</td>
                  <td>q6</td>
                  <td>q6</td>
                  <td>q6</td>
                  <td>q6</td>
                  <td>q6</td>
                  <td>q6</td>
                  <td>q6</td>
                </tr>
                <tr>
                  <td className="text-center">7</td>
                  <td className="fw-semibold">
                    Apakah plat vessel tidak ada yang robek
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1g}</td>
                  <td>{q2g}</td>
                  <td>q7</td>
                  <td>q7</td>
                  <td>q7</td>
                  <td>q7</td>
                  <td>q7</td>
                  <td>q7</td>
                  <td>q7</td>
                  <td>q7</td>
                </tr>
                <tr>
                  <td className="text-center">8</td>
                  <td className="fw-semibold">
                    Apakah kondisi tailgate & pintu utuh & baik
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1h}</td>
                  <td>{q2h}</td>
                  <td>q8</td>
                  <td>q8</td>
                  <td>q8</td>
                  <td>q8</td>
                  <td>q8</td>
                  <td>q8</td>
                  <td>q8</td>
                  <td>q8</td>
                </tr>
                <tr>
                  <td className="text-center">9</td>
                  <td className="fw-semibold">
                    Apakah plat pijakan tangga utuh & terikat
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1i}</td>
                  <td>{q1i}</td>
                  <td>q9</td>
                  <td>q9</td>
                  <td>q9</td>
                  <td>q9</td>
                  <td>q9</td>
                  <td>q9</td>
                  <td>q9</td>
                  <td>q9</td>
                </tr>
                <tr>
                  <td className="text-center">10</td>
                  <td className="fw-semibold">
                    Apakah extention vessel terikat (las) dengan baik
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1j}</td>
                  <td>{q2j}</td>
                  <td>q10</td>
                  <td>q10</td>
                  <td>q10</td>
                  <td>q10</td>
                  <td>q10</td>
                  <td>q10</td>
                  <td>q10</td>
                  <td>q10</td>
                </tr>
                <tr>
                  <td className="text-center">11</td>
                  <td className="fw-semibold">
                    Apakah cover/tutup battery utuh & terikat
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1k}</td>
                  <td>{q2k}</td>
                  <td>q11</td>
                  <td>q11</td>
                  <td>q11</td>
                  <td>q11</td>
                  <td>q11</td>
                  <td>q11</td>
                  <td>q11</td>
                  <td>q11</td>
                </tr>
                <tr>
                  <td className="text-center">12</td>
                  <td className="fw-semibold">
                    Apakah kelengkapan palu tersimpan dengan baik
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1l}</td>
                  <td>{q2l}</td>
                  <td>q12</td>
                  <td>q12</td>
                  <td>q12</td>
                  <td>q12</td>
                  <td>q12</td>
                  <td>q12</td>
                  <td>q12</td>
                  <td>q12</td>
                </tr>
                <tr>
                  <td className="text-center">13</td>
                  <td className="fw-semibold">
                    Apakah ram pelindung lampu terikat dengan baik
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1m}</td>
                  <td>{q2m}</td>
                  <td>q13</td>
                  <td>q13</td>
                  <td>q13</td>
                  <td>q13</td>
                  <td>q13</td>
                  <td>q13</td>
                  <td>q13</td>
                  <td>q13</td>
                </tr>
                <tr>
                  <td className="text-center">14</td>
                  <td className="fw-semibold">
                    Apakah kabel dan connector tidak ada yang lepas
                  </td>
                  <td>Small dump truck</td>
                  <td>{q1n}</td>
                  <td>{q2n}</td>
                  <td>q14</td>
                  <td>q14</td>
                  <td>q14</td>
                  <td>q14</td>
                  <td>q14</td>
                  <td>q14</td>
                  <td>q14</td>
                  <td>q14</td>
                </tr>
              </tbody>
            </Table>

            <hr className="w-100 solid" />

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
                    Distribusi : Asli : Production Dept., Yellow : Customer
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

export default WithRouter(DaftarPeriksaAlatAngkut);
