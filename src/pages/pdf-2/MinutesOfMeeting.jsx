import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import { Table } from "react-bootstrap";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const MinutesOfMeeting = () => {
  const [datas, setDatas] = useState([]);
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [note, setNote] = useState("");
  const [meeting, setMeeting] = useState("");
  const [tablePembahasan, setPembahasan] = useState([]);
  const [tablePeserta, setPeserta] = useState([]);
  const [loading, setLoading] = useState(true);

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://api-oos.jojonomic.com/23946/rios/generate-pdf/minutes-of-meeting",
        {
          data: {
            _id: queryParams.get("_id"),
            daftar_hadir_id: queryParams.get("daftar_hadir_id"),
            id: queryParams.get("id"),
            id_mom: queryParams.get("id_mom"),
          },
        }
      )
      .then((res) => {
        const { data } = res;
        setDatas(data);
        setTanggal(res?.data.tanggal);
        setLokasi(res?.data.lokasi);
        setNote(res?.data.note);
        setMeeting(res?.data.nama_meeting);

        // Data Peserta
        if (res && res.data.peserta) {
          const hasil = res.data.peserta.map((item, index) => {
            const { peserta, peserta_text } = item;
            return {
              id: index,
              peserta,
              peserta_text,
            };
          });
          setPeserta(hasil);
        }

        // Data Pembahasan
        if (res && res.data.pembahasan) {
          const result = res.data.pembahasan.map((item, index) => {
            const { due_date, materi_pembahasan, pic, progress, status } = item;
            return {
              id: index,
              due_date,
              materi_pembahasan,
              pic,
              progress,
              status,
            };
          });
          setPembahasan(result);
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
      <div class="text-center pt-5">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Render data
  const renderList = (item) => {
    let tmp = [];
    for (let i = 0; i < item.length; i = i + 11) {
      tmp.push(
        <tr key={i} className="text-center text-sm align-middle">
          <th className="text-center">{item[i]?.peserta}</th>
          <th className="text-center">{item[i + 1]?.peserta}</th>
          <th className="text-center">{item[i + 2]?.peserta}</th>
          <th className="text-center">{item[i + 3]?.peserta}</th>
          <th className="text-center">{item[i + 4]?.peserta}</th>
          <th className="text-center">{item[i + 5]?.peserta}</th>
          <th className="text-center">{item[i + 6]?.peserta}</th>
          <th className="text-center">{item[i + 7]?.peserta}</th>
          <th className="text-center">{item[i + 8]?.peserta}</th>
          <th className="text-center">{item[i + 9]?.peserta}</th>
          <th className="text-center">{item[i + 10]?.peserta}</th>
        </tr>
      );
    }
    return tmp;
  };

  return (
    <div className="border border-1 border-dark p-1">
      {/* Header */}
      <div className="d-flex justify-content-between">
        <div>
          <img src={LogoRiung} alt="Logo Riung Ops" width="80" height="44" />
        </div>
        <h5 className="align-self-center fw-bold fs-4 mt-2">
          MINUTES of MEETING
        </h5>
        <div>
          <p className="text-sm">FRM-MRE-015</p>
          <p className="text-sm">Rev. 01</p>
        </div>
      </div>

      {/* Tanggal dan Lokasi */}
      <div className="d-flex gap-5 mt-3">
        <p className="text-sm">Tanggal: {tanggal}</p>
        <p className="text-sm pl-5">Lokasi: {lokasi}</p>
      </div>

      {/* Table Peserta (Missing Width) */}
      <Table responsive bordered>
        <thead>
          <tr className="text-start">
            <th className="align-top text-sm fw-bold" rowSpan={4}>
              Peserta:
            </th>
          </tr>
          {renderList(tablePeserta)}
        </thead>
      </Table>

      {/* Nama Meeting */}
      <div className="w-100 border border-1">
        <p className="text-sm fw-semibold">Nama Meeting: {meeting}</p>
      </div>

      {/* Table Content (Missing Width) */}
      <Table responsive bordered hover>
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Materi Pembahasan</th>
            <th>Progress</th>
            <th>Due Date</th>
            <th>PIC</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tablePembahasan?.map((item) => (
            <tr key={item?.id} className="text-start text-sm">
              <td className="text-center">{item?.id + 1}</td>
              <td className="text-start">{item?.materi_pembahasan}</td>
              <td className="text-start">{item?.progress}</td>
              <td className="text-center">{item?.due_date}</td>
              <td className="text-center">{item?.pic}</td>
              <td className="text-center">{item?.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Note */}
      <div className="pl-2">
        <p className="text-danger fw-bold fs-6">NOTE: {note}</p>
      </div>
    </div>
  );
};

export default WithRouter(MinutesOfMeeting);
