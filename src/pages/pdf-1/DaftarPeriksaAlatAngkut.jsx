import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import Table from "react-bootstrap/Table";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DaftarPeriksaAlatAngkut = () => {
  // const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
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

  // Kolom 4
  const [q4a, setQ4a] = useState("");
  const [q4b, setQ4b] = useState("");
  const [q4c, setQ4c] = useState("");
  const [q4d, setQ4d] = useState("");
  const [q4e, setQ4e] = useState("");
  const [q4f, setQ4f] = useState("");
  const [q4g, setQ4g] = useState("");
  const [q4h, setQ4h] = useState("");
  const [q4i, setQ4i] = useState("");
  const [q4j, setQ4j] = useState("");
  const [q4k, setQ4k] = useState("");
  const [q4l, setQ4l] = useState("");
  const [q4m, setQ4m] = useState("");
  const [q4n, setQ4n] = useState("");

  // Kolom 5
  const [q5a, setQ5a] = useState("");
  const [q5b, setQ5b] = useState("");
  const [q5c, setQ5c] = useState("");
  const [q5d, setQ5d] = useState("");
  const [q5e, setQ5e] = useState("");
  const [q5f, setQ5f] = useState("");
  const [q5g, setQ5g] = useState("");
  const [q5h, setQ5h] = useState("");
  const [q5i, setQ5i] = useState("");
  const [q5j, setQ5j] = useState("");
  const [q5k, setQ5k] = useState("");
  const [q5l, setQ5l] = useState("");
  const [q5m, setQ5m] = useState("");
  const [q5n, setQ5n] = useState("");

  // Kolom 6
  const [q6a, setQ6a] = useState("");
  const [q6b, setQ6b] = useState("");
  const [q6c, setQ6c] = useState("");
  const [q6d, setQ6d] = useState("");
  const [q6e, setQ6e] = useState("");
  const [q6f, setQ6f] = useState("");
  const [q6g, setQ6g] = useState("");
  const [q6h, setQ6h] = useState("");
  const [q6i, setQ6i] = useState("");
  const [q6j, setQ6j] = useState("");
  const [q6k, setQ6k] = useState("");
  const [q6l, setQ6l] = useState("");
  const [q6m, setQ6m] = useState("");
  const [q6n, setQ6n] = useState("");

  // Kolom 7
  const [q7a, setQ7a] = useState("");
  const [q7b, setQ7b] = useState("");
  const [q7c, setQ7c] = useState("");
  const [q7d, setQ7d] = useState("");
  const [q7e, setQ7e] = useState("");
  const [q7f, setQ7f] = useState("");
  const [q7g, setQ7g] = useState("");
  const [q7h, setQ7h] = useState("");
  const [q7i, setQ7i] = useState("");
  const [q7j, setQ7j] = useState("");
  const [q7k, setQ7k] = useState("");
  const [q7l, setQ7l] = useState("");
  const [q7m, setQ7m] = useState("");
  const [q7n, setQ7n] = useState("");

  // Kolom 8
  const [q8a, setQ8a] = useState("");
  const [q8b, setQ8b] = useState("");
  const [q8c, setQ8c] = useState("");
  const [q8d, setQ8d] = useState("");
  const [q8e, setQ8e] = useState("");
  const [q8f, setQ8f] = useState("");
  const [q8g, setQ8g] = useState("");
  const [q8h, setQ8h] = useState("");
  const [q8i, setQ8i] = useState("");
  const [q8j, setQ8j] = useState("");
  const [q8k, setQ8k] = useState("");
  const [q8l, setQ8l] = useState("");
  const [q8m, setQ8m] = useState("");
  const [q8n, setQ8n] = useState("");

  // Kolom 9
  const [q9a, setQ9a] = useState("");
  const [q9b, setQ9b] = useState("");
  const [q9c, setQ9c] = useState("");
  const [q9d, setQ9d] = useState("");
  const [q9e, setQ9e] = useState("");
  const [q9f, setQ9f] = useState("");
  const [q9g, setQ9g] = useState("");
  const [q9h, setQ9h] = useState("");
  const [q9i, setQ9i] = useState("");
  const [q9j, setQ9j] = useState("");
  const [q9k, setQ9k] = useState("");
  const [q9l, setQ9l] = useState("");
  const [q9m, setQ9m] = useState("");
  const [q9n, setQ9n] = useState("");

  // Kolom 10
  const [q10a, setQ10a] = useState("");
  const [q10b, setQ10b] = useState("");
  const [q10c, setQ10c] = useState("");
  const [q10d, setQ10d] = useState("");
  const [q10e, setQ10e] = useState("");
  const [q10f, setQ10f] = useState("");
  const [q10g, setQ10g] = useState("");
  const [q10h, setQ10h] = useState("");
  const [q10i, setQ10i] = useState("");
  const [q10j, setQ10j] = useState("");
  const [q10k, setQ10k] = useState("");
  const [q10l, setQ10l] = useState("");
  const [q10m, setQ10m] = useState("");
  const [q10n, setQ10n] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/daftar-periksa-alat-angkut-batubara",
        {
          data: {
            id_daftar_periksa_kontaminasi_alat_batubara: queryParams.get(
              "id_daftar_periksa_kontaminasi_alat_batubara"
            ),
            pkh: queryParams.get("pkh"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        // setDatas(data);
        setJobsite(data[0].jobsite);
        setPenerima(data[0].penerima);
        setTanggal(data[0].tanggal);
        setShift(data[0].shift);

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
        checker(res?.data[0].data.q1, setQ1a);
        checker(res?.data[0].data.q2, setQ1b);
        checker(res?.data[0].data.q3, setQ1c);
        checker(res?.data[0].data.q4, setQ1d);
        checker(res?.data[0].data.q5, setQ1e);
        checker(res?.data[0].data.q6, setQ1f);
        checker(res?.data[0].data.q7, setQ1g);
        checker(res?.data[0].data.q8, setQ1h);
        checker(res?.data[0].data.q9, setQ1i);
        checker(res?.data[0].data.q10, setQ1j);
        checker(res?.data[0].data.q11, setQ1k);
        checker(res?.data[0].data.q12, setQ1l);
        checker(res?.data[0].data.q13, setQ1m);
        checker(res?.data[0].data.q14, setQ1n);

        // Kolom 2
        checker(res?.data[1].data.q1, setQ2a);
        checker(res?.data[1].data.q2, setQ2b);
        checker(res?.data[1].data.q3, setQ2c);
        checker(res?.data[1].data.q4, setQ2d);
        checker(res?.data[1].data.q5, setQ2e);
        checker(res?.data[1].data.q6, setQ2f);
        checker(res?.data[1].data.q7, setQ2g);
        checker(res?.data[1].data.q8, setQ2h);
        checker(res?.data[1].data.q9, setQ2i);
        checker(res?.data[1].data.q10, setQ2j);
        checker(res?.data[1].data.q11, setQ2k);
        checker(res?.data[1].data.q12, setQ2l);
        checker(res?.data[1].data.q13, setQ2m);
        checker(res?.data[1].data.q14, setQ2n);

        // Kolom 3
        checker(res?.data[2]?.data.q1, setQ3a);
        checker(res?.data[2]?.data.q2, setQ3b);
        checker(res?.data[2]?.data.q3, setQ3c);
        checker(res?.data[2]?.data.q4, setQ3d);
        checker(res?.data[2]?.data.q5, setQ3e);
        checker(res?.data[2]?.data.q6, setQ3f);
        checker(res?.data[2]?.data.q7, setQ3g);
        checker(res?.data[2]?.data.q8, setQ3h);
        checker(res?.data[2]?.data.q9, setQ3i);
        checker(res?.data[2]?.data.q10, setQ3j);
        checker(res?.data[2]?.data.q11, setQ3k);
        checker(res?.data[2]?.data.q12, setQ3l);
        checker(res?.data[2]?.data.q13, setQ3m);
        checker(res?.data[2]?.data.q14, setQ3n);

        // Kolom 4
        checker(res?.data[3]?.data.q1, setQ4a);
        checker(res?.data[3]?.data.q2, setQ4b);
        checker(res?.data[3]?.data.q3, setQ4c);
        checker(res?.data[3]?.data.q4, setQ4d);
        checker(res?.data[3]?.data.q5, setQ4e);
        checker(res?.data[3]?.data.q6, setQ4f);
        checker(res?.data[3]?.data.q7, setQ4g);
        checker(res?.data[3]?.data.q8, setQ4h);
        checker(res?.data[3]?.data.q9, setQ4i);
        checker(res?.data[3]?.data.q10, setQ4j);
        checker(res?.data[3]?.data.q11, setQ4k);
        checker(res?.data[3]?.data.q12, setQ4l);
        checker(res?.data[3]?.data.q13, setQ4m);
        checker(res?.data[3]?.data.q14, setQ4n);

        // Kolom 5
        checker(res?.data[4]?.data.q1, setQ5a);
        checker(res?.data[4]?.data.q2, setQ5b);
        checker(res?.data[4]?.data.q3, setQ5c);
        checker(res?.data[4]?.data.q4, setQ5d);
        checker(res?.data[4]?.data.q5, setQ5e);
        checker(res?.data[4]?.data.q6, setQ5f);
        checker(res?.data[4]?.data.q7, setQ5g);
        checker(res?.data[4]?.data.q8, setQ5h);
        checker(res?.data[4]?.data.q9, setQ5i);
        checker(res?.data[4]?.data.q10, setQ5j);
        checker(res?.data[4]?.data.q11, setQ5k);
        checker(res?.data[4]?.data.q12, setQ5l);
        checker(res?.data[4]?.data.q13, setQ5m);
        checker(res?.data[4]?.data.q14, setQ5n);

        // Kolom 6
        checker(res?.data[5]?.data.q1, setQ6a);
        checker(res?.data[5]?.data.q2, setQ6b);
        checker(res?.data[5]?.data.q3, setQ6c);
        checker(res?.data[5]?.data.q4, setQ6d);
        checker(res?.data[5]?.data.q5, setQ6e);
        checker(res?.data[5]?.data.q6, setQ6f);
        checker(res?.data[5]?.data.q7, setQ6g);
        checker(res?.data[5]?.data.q8, setQ6h);
        checker(res?.data[5]?.data.q9, setQ6i);
        checker(res?.data[5]?.data.q10, setQ6j);
        checker(res?.data[5]?.data.q11, setQ6k);
        checker(res?.data[5]?.data.q12, setQ6l);
        checker(res?.data[5]?.data.q13, setQ6m);
        checker(res?.data[5]?.data.q14, setQ6n);

        // Kolom 7
        checker(res?.data[6]?.data.q1, setQ7a);
        checker(res?.data[6]?.data.q2, setQ7b);
        checker(res?.data[6]?.data.q3, setQ7c);
        checker(res?.data[6]?.data.q4, setQ7d);
        checker(res?.data[6]?.data.q5, setQ7e);
        checker(res?.data[6]?.data.q6, setQ7f);
        checker(res?.data[6]?.data.q7, setQ7g);
        checker(res?.data[6]?.data.q8, setQ7h);
        checker(res?.data[6]?.data.q9, setQ7i);
        checker(res?.data[6]?.data.q10, setQ7j);
        checker(res?.data[6]?.data.q11, setQ7k);
        checker(res?.data[6]?.data.q12, setQ7l);
        checker(res?.data[6]?.data.q13, setQ7m);
        checker(res?.data[6]?.data.q14, setQ7n);

        // Kolom 8
        checker(res?.data[7]?.data.q1, setQ8a);
        checker(res?.data[7]?.data.q2, setQ8b);
        checker(res?.data[7]?.data.q3, setQ8c);
        checker(res?.data[7]?.data.q4, setQ8d);
        checker(res?.data[7]?.data.q5, setQ8e);
        checker(res?.data[7]?.data.q6, setQ8f);
        checker(res?.data[7]?.data.q7, setQ8g);
        checker(res?.data[7]?.data.q8, setQ8h);
        checker(res?.data[7]?.data.q9, setQ8i);
        checker(res?.data[7]?.data.q10, setQ8j);
        checker(res?.data[7]?.data.q11, setQ8k);
        checker(res?.data[7]?.data.q12, setQ8l);
        checker(res?.data[7]?.data.q13, setQ8m);
        checker(res?.data[7]?.data.q14, setQ8n);

        // Kolom 9
        checker(res?.data[8]?.data.q1, setQ9a);
        checker(res?.data[8]?.data.q2, setQ9b);
        checker(res?.data[8]?.data.q3, setQ9c);
        checker(res?.data[8]?.data.q4, setQ9d);
        checker(res?.data[8]?.data.q5, setQ9e);
        checker(res?.data[8]?.data.q6, setQ9f);
        checker(res?.data[8]?.data.q7, setQ9g);
        checker(res?.data[8]?.data.q8, setQ9h);
        checker(res?.data[8]?.data.q9, setQ9i);
        checker(res?.data[8]?.data.q10, setQ9j);
        checker(res?.data[8]?.data.q11, setQ9k);
        checker(res?.data[8]?.data.q12, setQ9l);
        checker(res?.data[8]?.data.q13, setQ9m);
        checker(res?.data[8]?.data.q14, setQ9n);

        // Kolom 10
        checker(res?.data[9]?.data.q1, setQ10a);
        checker(res?.data[9]?.data.q2, setQ10b);
        checker(res?.data[9]?.data.q3, setQ10c);
        checker(res?.data[9]?.data.q4, setQ10d);
        checker(res?.data[9]?.data.q5, setQ10e);
        checker(res?.data[9]?.data.q6, setQ10f);
        checker(res?.data[9]?.data.q7, setQ10g);
        checker(res?.data[9]?.data.q8, setQ10h);
        checker(res?.data[9]?.data.q9, setQ10i);
        checker(res?.data[9]?.data.q10, setQ10j);
        checker(res?.data[9]?.data.q11, setQ10k);
        checker(res?.data[9]?.data.q12, setQ10l);
        checker(res?.data[9]?.data.q13, setQ10m);
        checker(res?.data[9]?.data.q14, setQ10n);
      })
      .catch((err) => {
        // alert(err);
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
        <p className="text-end fst-italic">FRM-OPR-018</p>
        <div className="border border-3 border-dark">
          <div className="p-3">
            <div className="row align-items-center">
              {/* Header Table */}
              <Table responsive bordered className="table">
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
              </Table>
            </div>
            <hr className="w-100 solid" />

            {/* Table Content */}
            <Table responsive bordered hover className="text-center mt-3">
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
                  <th width="5%">-</th>
                  <th width="5%">-</th>
                  <th width="5%">-</th>
                  <th width="5%">-</th>
                  <th width="5%">-</th>
                  <th width="5%">-</th>
                  <th width="5%">-</th>
                  <th width="5%">-</th>
                  <th width="5%">-</th>
                  <th width="5%">-</th>
                </tr>
              </thead>
              <tbody className="text-start">
                <tr className="text-center">
                  <td className="text-center">1</td>
                  <td width="30%" className="fw-semibold text-start">
                    Apakah penyanggah mud guard utuh & baik
                  </td>
                  <td width="15%" className="text-start">
                    Small dump truck
                  </td>
                  <td>{q1a}</td>
                  <td>{q2a}</td>
                  <td>{q3a}</td>
                  <td>{q4a}</td>
                  <td>{q5a}</td>
                  <td>{q6a}</td>
                  <td>{q7a}</td>
                  <td>{q8a}</td>
                  <td>{q9a}</td>
                  <td>{q10a}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">2</td>
                  <td className="fw-semibold text-start">
                    Apakah spring tidak retak & utuh
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1b}</td>
                  <td>{q2b}</td>
                  <td>{q3b}</td>
                  <td>{q4b}</td>
                  <td>{q5b}</td>
                  <td>{q6b}</td>
                  <td>{q7b}</td>
                  <td>{q8b}</td>
                  <td>{q9b}</td>
                  <td>{q10b}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">3</td>
                  <td className="fw-semibold text-start">
                    Apakah baut roda, utuh & kencang
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1c}</td>
                  <td>{q2c}</td>
                  <td>{q3c}</td>
                  <td>{q4c}</td>
                  <td>{q5c}</td>
                  <td>{q6c}</td>
                  <td>{q7c}</td>
                  <td>{q8c}</td>
                  <td>{q9c}</td>
                  <td>{q10c}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">4</td>
                  <td className="fw-semibold text-start">
                    Apakah U-bolt utuh & kencang
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1d}</td>
                  <td>{q2d}</td>
                  <td>{q3d}</td>
                  <td>{q4d}</td>
                  <td>{q5d}</td>
                  <td>{q6d}</td>
                  <td>{q7d}</td>
                  <td>{q8d}</td>
                  <td>{q9d}</td>
                  <td>{q10d}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">5</td>
                  <td className="fw-semibold text-start">
                    Apakah komponen undercarriage utuh & terikat
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1e}</td>
                  <td>{q2e}</td>
                  <td>{q3e}</td>
                  <td>{q4e}</td>
                  <td>{q5e}</td>
                  <td>{q6e}</td>
                  <td>{q7e}</td>
                  <td>{q8e}</td>
                  <td>{q9e}</td>
                  <td>{q10e}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">6</td>
                  <td className="fw-semibold text-start">
                    Apakah bagian dalam vessel bersih
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1f}</td>
                  <td>{q2f}</td>
                  <td>{q3f}</td>
                  <td>{q4f}</td>
                  <td>{q5f}</td>
                  <td>{q6f}</td>
                  <td>{q7f}</td>
                  <td>{q8f}</td>
                  <td>{q9f}</td>
                  <td>{q10f}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">7</td>
                  <td className="fw-semibold text-start">
                    Apakah plat vessel tidak ada yang robek
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1g}</td>
                  <td>{q2g}</td>
                  <td>{q3g}</td>
                  <td>{q4g}</td>
                  <td>{q5g}</td>
                  <td>{q6g}</td>
                  <td>{q7g}</td>
                  <td>{q8g}</td>
                  <td>{q9g}</td>
                  <td>{q10g}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">8</td>
                  <td className="fw-semibold text-start">
                    Apakah kondisi tailgate & pintu utuh & baik
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1h}</td>
                  <td>{q2h}</td>
                  <td>{q3h}</td>
                  <td>{q4h}</td>
                  <td>{q5h}</td>
                  <td>{q6h}</td>
                  <td>{q7h}</td>
                  <td>{q8h}</td>
                  <td>{q9h}</td>
                  <td>{q10h}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">9</td>
                  <td className="fw-semibold text-start">
                    Apakah plat pijakan tangga utuh & terikat
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1i}</td>
                  <td>{q2i}</td>
                  <td>{q3i}</td>
                  <td>{q4i}</td>
                  <td>{q5i}</td>
                  <td>{q6i}</td>
                  <td>{q7i}</td>
                  <td>{q8i}</td>
                  <td>{q9i}</td>
                  <td>{q10i}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">10</td>
                  <td className="fw-semibold text-start">
                    Apakah extention vessel terikat (las) dengan baik
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1j}</td>
                  <td>{q2j}</td>
                  <td>{q3j}</td>
                  <td>{q4j}</td>
                  <td>{q5j}</td>
                  <td>{q6j}</td>
                  <td>{q7j}</td>
                  <td>{q8j}</td>
                  <td>{q9j}</td>
                  <td>{q10j}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">11</td>
                  <td className="fw-semibold text-start">
                    Apakah cover/tutup battery utuh & terikat
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1k}</td>
                  <td>{q2k}</td>
                  <td>{q3k}</td>
                  <td>{q4k}</td>
                  <td>{q5k}</td>
                  <td>{q6k}</td>
                  <td>{q7k}</td>
                  <td>{q8k}</td>
                  <td>{q9k}</td>
                  <td>{q10k}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">12</td>
                  <td className="fw-semibold text-start">
                    Apakah kelengkapan palu tersimpan dengan baik
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1l}</td>
                  <td>{q2l}</td>
                  <td>{q3l}</td>
                  <td>{q4l}</td>
                  <td>{q5l}</td>
                  <td>{q6l}</td>
                  <td>{q7l}</td>
                  <td>{q8l}</td>
                  <td>{q9l}</td>
                  <td>{q10l}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">13</td>
                  <td className="fw-semibold text-start">
                    Apakah ram pelindung lampu terikat dengan baik
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1m}</td>
                  <td>{q2m}</td>
                  <td>{q3m}</td>
                  <td>{q4m}</td>
                  <td>{q5m}</td>
                  <td>{q6m}</td>
                  <td>{q7m}</td>
                  <td>{q8m}</td>
                  <td>{q9m}</td>
                  <td>{q10m}</td>
                </tr>
                <tr className="text-center">
                  <td className="text-center">14</td>
                  <td className="fw-semibold text-start">
                    Apakah kabel dan connector tidak ada yang lepas
                  </td>
                  <td className="text-start">Small dump truck</td>
                  <td>{q1n}</td>
                  <td>{q2n}</td>
                  <td>{q3n}</td>
                  <td>{q4n}</td>
                  <td>{q5n}</td>
                  <td>{q6n}</td>
                  <td>{q7n}</td>
                  <td>{q8n}</td>
                  <td>{q9n}</td>
                  <td>{q10n}</td>
                </tr>
              </tbody>
            </Table>

            <hr className="w-100 solid" />

            {/* Content Bottom */}
            <div className="container px-5 pt-3">
              <div className="row align-items-center">
                <div className="col-6 text-center gap-5">
                  <p>Pemeriksaan tersebut sudah dilakukan dengan benar Oleh,</p>
                  <p className="mt-5">()</p>
                  <p> Prod. Group Leader</p>
                </div>
                <div className="col-6 text-center">
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
