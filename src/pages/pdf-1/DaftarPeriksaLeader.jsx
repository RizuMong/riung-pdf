import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DaftarPeriksaLeader = () => {
  const [loading, setLoading] = useState(true);
  const [jobsite, setJobsite] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [shift, setShift] = useState("");
  const [diperiksa, setDiperiksa] = useState("");
  const [disetujui, setDisetujui] = useState("");

  // Loading Area
  const [loading_area_bebas_genang, SetLoading_area_bebas_genang] =
    useState("");
  const [loading_area_bebas_genang_note, SetLoading_area_bebas_genang_note] =
    useState("");
  const [loading_area_blasting, SetLoading_area_blasting] = useState("");
  const [loading_area_blasting_note, SetLoading_area_blasting_note] =
    useState("");
  const [loading_area_buldozer, SetLoading_area_buldozer] = useState("");
  const [loading_area_buldozer_note, SetLoading_area_buldozer_note] =
    useState("");
  const [loading_area_cara_kerja, SetLoading_area_cara_kerja] = useState("");
  const [loading_area_cara_kerja_note, SetLoading_area_cara_kerja_note] =
    useState("");
  const [loading_area_grade, SetLoading_area_grade] = useState("");
  const [loading_area_grade_note, SetLoading_area_grade_note] = useState("");
  const [loading_area_lebar_tinggi, Setloading_area_lebar_tinggi] =
    useState("");
  const [loading_area_lebar_tinggi_note, SetLoading_area_lebar_tinggi_note] =
    useState("");
  const [loading_area_longsor, SetLoading_area_longsor] = useState("");
  const [loading_area_longsor_note, SetLoading_area_longsor_note] =
    useState("");
  const [loading_area_patok, SetLoading_area_patok] = useState("");
  const [loading_area_patok_note, SetLoading_area_patok_note] = useState("");
  const [loading_area_penerangan, SetLoading_area_penerangan] = useState("");
  const [loading_area_penerangan_note, SetLoading_area_penerangan_note] =
    useState("");
  const [loading_area_penggalian, SetLoading_area_penggalian] = useState("");
  const [loading_area_penggalian_note, SetLoading_area_penggalian_note] =
    useState("");
  const [loading_area_rata_bebas, SetLoading_area_rata_bebas] = useState("");
  const [loading_area_rata_bebas_note, SetLoading_area_rata_bebas_note] =
    useState("");
  const [loading_area_volume, SetLoading_area_volume] = useState("");
  const [loading_area_volume_note, SetLoading_area_volume_note] = useState("");

  // Jalan
  const [jalan_aman_resiko, SetJalan_aman_resiko] = useState("");
  const [jalan_aman_resiko_note, SetJalan_aman_resiko_note] = useState("");
  const [jalan_bebas_debu, SetJalan_bebas_debu] = useState("");
  const [jalan_bebas_debu_note, SetJalan_bebas_debu_note] = useState("");
  const [jalan_cara_kerja, SetJalan_cara_kerja] = useState("");
  const [jalan_cara_kerja_note, SetJalan_cara_kerja_note] = useState("");
  const [jalan_driver_patuh_rambu, SetJalan_driver_patuh_rambu] = useState("");
  const [jalan_driver_patuh_rambu_note, SetJalan_driver_patuh_rambu_note] =
    useState("");
  const [jalan_grader, SetJalan_grader] = useState("");
  const [jalan_grader_note, SetJalan_grader_note] = useState("");
  const [jalan_lebar_grade, SetJalan_lebar_grade] = useState("");
  const [jalan_lebar_grade_note, SetJalan_lebar_grade_note] = useState("");
  const [jalan_rambu, SetJalan_rambu] = useState("");
  const [jalan_rambu_note, SetJalan_rambu_note] = useState("");
  const [jalan_rata_bebas, SetJalan_rata_bebas] = useState("");
  const [jalan_rata_bebas_note, SetJalan_rata_bebas_note] = useState("");
  const [jalan_safety_berm, SetJalan_safety_berm] = useState("");
  const [jalan_safety_berm_note, SetJalan_safety_berm_note] = useState("");

  // Dumping Area
  const [dumping_area_alat_penunjang, setDumping_area_alat_penunjang] =
    useState("");
  const [
    dumping_area_alat_penunjang_note,
    setDumping_area_alat_penunjang_note,
  ] = useState("");
  const [dumping_area_alokasi, setDumping_area_alokasi] = useState("");
  const [dumping_area_alokasi_note, setDumping_area_alokasi_note] =
    useState("");
  const [dumping_area_bebas_debu, setDumping_area_bebas_debu] = useState("");
  const [dumping_area_bebas_debu_note, setDumping_area_bebas_debu_note] =
    useState("");
  const [dumping_area_bebas_genang, setDumping_area_bebas_genang] =
    useState("");
  const [dumping_area_bebas_genang_note, setDumping_area_bebas_genang_note] =
    useState("");
  const [dumping_area_cara_kerja, setDumping_area_cara_kerja] = useState("");
  const [dumping_area_cara_kerja_note, setDumping_area_cara_kerja_note] =
    useState("");
  const [dumping_area_jalan_rata, setDumping_area_jalan_rata] = useState("");
  const [dumping_area_jalan_rata_note, setDumping_area_jalan_rata_note] =
    useState("");
  const [dumping_area_lebar_standar, setDumping_area_lebar_standar] =
    useState("");
  const [dumping_area_lebar_standar_note, setDumping_area_lebar_standar_note] =
    useState("");
  const [dumping_area_longsor, setDumping_area_longsor] = useState("");
  const [dumping_area_longsor_note, setDumping_area_longsor_note] =
    useState("");
  const [dumping_area_patok, setDumping_area_patok] = useState("");
  const [dumping_area_patok_note, setDumping_area_patok_note] = useState("");
  const [dumping_area_penerangan, setDumping_area_penerangan] = useState("");
  const [dumping_area_penerangan_note, setDumping_area_penerangan_note] =
    useState("");

  // Drainage
  const [drainage_saluran_pit, setDrainage_saluran_pit] = useState("");
  const [drainage_saluran_pit_note, setDrainage_saluran_pit_note] =
    useState("");
  const [drainage_gorong, setDrainage_gorong] = useState("");
  const [drainage_gorong_note, setDrainage_gorong_note] = useState("");
  const [drainage_saluran_air, setDrainage_saluran_air] = useState("");
  const [drainage_saluran_air_note, setDrainage_saluran_air_note] =
    useState("");

  // Dewatering
  const [dewatering_air_tambang, setDewatering_air_tambang] = useState("");
  const [dewatering_air_tambang_note, setDewatering_air_tambang_note] =
    useState("");
  const [dewatering_air_sendiment, setDewatering_air_sendiment] = useState("");
  const [dewatering_air_sendiment_note, setDewatering_air_sendiment_note] =
    useState("");
  const [dewatering_fungsi_pompa, setDewatering_fungsi_pompa] = useState("");
  const [dewatering_fungsi_pompa_note, setDewatering_fungsi_pompa_note] =
    useState("");
  const [dewatering_fungsi_pond, setDewatering_fungsi_pond] = useState("");
  const [dewatering_fungsi_pond_note, setDewatering_fungsi_pond_note] =
    useState("");
  const [dewatering_instalasi_pompa, setDewatering_instalasi_pompa] =
    useState("");
  const [dewatering_instalasi_pompa_note, setDewatering_instalasi_pompa_note] =
    useState("");
  const [dewatering_penerangan, setDewatering_penerangan] = useState("");
  const [dewatering_penerangan_note, setDewatering_penerangan_note] =
    useState("");
  const [dewatering_sump, setDewatering_sump] = useState("");
  const [dewatering_sump_note, setDewatering_sump_note] = useState("");

  // Komoditas
  const [komoditas_kontaminasi, setKomoditas_kontaminasi] = useState("");
  const [komoditas_kontaminasi_note, setKomoditas_kontaminasi_note] =
    useState("");
  const [komoditas_tipe, setKomoditas_tipe] = useState("");
  const [komoditas_tipe_note, setKomoditas_tipe_note] = useState("");
  const [komoditas_volume, setKomoditas_volume] = useState("");
  const [komoditas_volume_note, setKomoditas_volume_note] = useState("");

  // Stockpile
  const [stockpile_balance, setStockpile_balance] = useState("");
  const [stockpile_balance_note, setStockpile_balance_note] = useState("");
  const [stockpile_op, setStockpile_op] = useState("");
  const [stockpile_op_note, setStockpile_op_note] = useState("");
  const [stockpile_penerangan, setStockpile_penerangan] = useState("");
  const [stockpile_penerangan_note, setStockpile_penerangan_note] =
    useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://api-oos.jojonomic.com/23946/rios/generate-pdf/daftar-periksa/group-leader-new",
        {
          data: {
            // id_dpgl: queryParams.get("id_dpgl"),
            // lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            "id_dpgl": "nImIxkE4g",
            "lokasi_pkh_id": "igX4xzPVg"
          }
        }
      )
      .then((res) => {
        const { data } = res;

        setJobsite(data?.jobsite);
        setTanggal(data?.tanggal);
        setShift(data?.shift);
        setLokasi(data?.lokasi);
        setDiperiksa(data?.diperiksa);
        setDisetujui(data?.disetujui);

        // Check Data True
        const checkData = (data, set) => {
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

        console.log(data);

        console.log({
          data_baru: data.detail
        });

        // Loading Area
        checkData(
          data.detail.loading_area_bebas_genang,
          SetLoading_area_bebas_genang
        );
        SetLoading_area_bebas_genang_note(
          data.detail.loading_area_bebas_genang_note
        );
        checkData(data.detail.loading_area_blasting, SetLoading_area_blasting);
        SetLoading_area_blasting_note(data.detail.loading_area_blasting_note);
        checkData(data.detail.loading_area_buldozer, SetLoading_area_buldozer);
        SetLoading_area_buldozer_note(data.detail.loading_area_buldozer_note);
        checkData(
          data.detail.loading_area_cara_kerja,
          SetLoading_area_cara_kerja
        );
        SetLoading_area_cara_kerja_note(
          data.detail.loading_area_cara_kerja_note
        );
        checkData(data.detail.loading_area_grade, SetLoading_area_grade);
        SetLoading_area_grade_note(data.detail.loading_area_grade_note);
        checkData(
          data.detail.loading_area_lebar_tinggi,
          Setloading_area_lebar_tinggi
        );
        SetLoading_area_lebar_tinggi_note(
          data.detail.loading_area_lebar_tinggi_note
        );
        checkData(data.detail.loading_area_longsor, SetLoading_area_longsor);
        SetLoading_area_longsor_note(data.detail.loading_area_longsor_note);
        checkData(data.detail.loading_area_patok, SetLoading_area_patok);
        SetLoading_area_patok_note(data.detail.loading_area_patok_note);
        checkData(
          data.detail.loading_area_penerangan,
          SetLoading_area_penerangan
        );
        SetLoading_area_penerangan_note(
          data.detail.loading_area_penerangan_note
        );
        checkData(
          data.detail.loading_area_penggalian,
          SetLoading_area_penggalian
        );
        SetLoading_area_penggalian_note(
          data.detail.loading_area_penggalian_note
        );
        checkData(
          data.detail.loading_area_rata_bebas,
          SetLoading_area_rata_bebas
        );
        SetLoading_area_rata_bebas_note(
          data.detail.loading_area_rata_bebas_note
        );
        checkData(data.detail.loading_area_volume, SetLoading_area_volume);
        SetLoading_area_volume_note(data.detail.loading_area_volume_note);

        // Jalan
        checkData(data.detail.jalan_aman_resiko, SetJalan_aman_resiko);
        SetJalan_aman_resiko_note(data.detail.jalan_aman_resiko_note);
        checkData(data.detail.jalan_bebas_debu, SetJalan_bebas_debu);
        SetJalan_bebas_debu_note(data.detail.jalan_bebas_debu_note);
        checkData(data.detail.jalan_cara_kerja, SetJalan_cara_kerja);
        SetJalan_cara_kerja_note(data.detail.jalan_cara_kerja_note);
        checkData(
          data.detail.jalan_driver_patuh_rambu,
          SetJalan_driver_patuh_rambu
        );
        SetJalan_driver_patuh_rambu_note(
          data.detail.jalan_driver_patuh_rambu_note
        );
        checkData(data.detail.jalan_grader, SetJalan_grader);
        SetJalan_grader_note(data.detail.jalan_grader_note);
        checkData(data.detail.jalan_lebar_grade, SetJalan_lebar_grade);
        SetJalan_lebar_grade_note(data.detail.jalan_lebar_grade_note);
        checkData(data.detail.jalan_rambu, SetJalan_rambu);
        SetJalan_rambu_note(data.detail.jalan_rambu_note);
        checkData(data.detail.jalan_rata_bebas, SetJalan_rata_bebas);
        SetJalan_rata_bebas_note(data.detail.jalan_rata_bebas_note);
        checkData(data.detail.jalan_safety_berm, SetJalan_safety_berm);
        SetJalan_safety_berm_note(data.detail.jalan_safety_berm_note);

        // Dumping Area
        checkData(
          data.detail.dumping_area_alat_penunjang,
          setDumping_area_alat_penunjang
        );
        setDumping_area_alat_penunjang_note(
          data.detail.dumping_area_alat_penunjang_note
        );
        checkData(data.detail.dumping_area_alokasi, setDumping_area_alokasi);
        setDumping_area_alokasi_note(data.detail.dumping_area_alokasi_note);
        checkData(
          data.detail.dumping_area_bebas_debu,
          setDumping_area_bebas_debu
        );
        setDumping_area_bebas_debu_note(
          data.detail.dumping_area_bebas_debu_note
        );
        checkData(
          data.detail.dumping_area_bebas_genang,
          setDumping_area_bebas_genang
        );
        setDumping_area_bebas_genang_note(
          data.detail.dumping_area_bebas_genang_note
        );
        checkData(
          data.detail.dumping_area_cara_kerja,
          setDumping_area_cara_kerja
        );
        setDumping_area_cara_kerja_note(
          data.detail.dumping_area_cara_kerja_note
        );
        checkData(
          data.detail.dumping_area_jalan_rata,
          setDumping_area_jalan_rata
        );
        setDumping_area_jalan_rata_note(
          data.detail.dumping_area_jalan_rata_note
        );
        checkData(
          data.detail.dumping_area_lebar_standar,
          setDumping_area_lebar_standar
        );
        setDumping_area_lebar_standar_note(
          data.detail.dumping_area_lebar_standar_note
        );
        checkData(data.detail.dumping_area_longsor, setDumping_area_longsor);
        setDumping_area_longsor_note(data.detail.dumping_area_longsor_note);
        checkData(data.detail.dumping_area_patok, setDumping_area_patok);
        setDumping_area_patok_note(data.detail.dumping_area_patok_note);
        checkData(
          data.detail.dumping_area_penerangan,
          setDumping_area_penerangan
        );
        setDumping_area_penerangan_note(
          data.detail.dumping_area_penerangan_note
        );

        // Drainage
        checkData(data.detail.drainage_gorong, setDrainage_gorong);
        setDrainage_gorong_note(data.detail.drainage_gorong_note);
        checkData(data.detail.drainage_saluran_air, setDrainage_saluran_air);
        setDrainage_saluran_air_note(data.detail.drainage_saluran_air_note);
        checkData(data.detail.drainage_saluran_pit, setDrainage_saluran_pit);
        setDrainage_saluran_pit_note(data.detail.drainage_saluran_pit_note);

        // Dewatering
        checkData(
          data.detail.dewatering_air_tambang,
          setDewatering_air_tambang
        );
        setDewatering_air_tambang_note(data.detail.dewatering_air_tambang_note);
        checkData(
          data.detail.dewatering_fungsi_pompa,
          setDewatering_fungsi_pompa
        );
        setDewatering_fungsi_pompa_note(
          data.detail.dewatering_fungsi_pompa_note
        );
        checkData(
          data.detail.dewatering_fungsi_pond,
          setDewatering_fungsi_pond
        );
        setDewatering_fungsi_pond_note(data.detail.dewatering_fungsi_pond_note);
        checkData(
          data.detail.dewatering_instalasi_pompa,
          setDewatering_instalasi_pompa
        );
        setDewatering_instalasi_pompa_note(
          data.detail.dewatering_instalasi_pompa_note
        );
        checkData(data.detail.dewatering_penerangan, setDewatering_penerangan);
        setDewatering_penerangan_note(data.detail.dewatering_penerangan_note);
        checkData(data.detail.dewatering_sump, setDewatering_sump);
        setDewatering_sump_note(data.detail.dewatering_sump_note);
        checkData(
          data.detail.dewatering_air_tambang_sendiment,
          setDewatering_air_sendiment
        );
        setDewatering_air_sendiment_note(
          data.detail.dewatering_air_tambang_sendiment_note
        );

        // Komoditas
        checkData(data.detail.komoditas_kontaminasi, setKomoditas_kontaminasi);
        setKomoditas_kontaminasi_note(data.detail.komoditas_kontaminasi_note);
        checkData(data.detail.komoditas_tipe, setKomoditas_tipe);
        setKomoditas_tipe_note(data.detail.komoditas_tipe_note);
        checkData(data.detail.komoditas_volume, setKomoditas_volume);
        setKomoditas_volume_note(data.detail.komoditas_volume_note);

        // Stockpile
        checkData(data.detail.stockpile_balance, setStockpile_balance);
        setStockpile_balance_note(data.detail.stockpile_balance_note);
        checkData(data.detail.stockpile_op, setStockpile_op);
        setStockpile_op_note(data.detail.stockpile_op_note);
        checkData(data.detail.stockpile_penerangan, setStockpile_penerangan);
        setStockpile_penerangan_note(data.detail.stockpile_penerangan_note);
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
        <div className="border border-2 border-dark">
          <div className="p-3">
            {/* Header */}
            {/* Header Table */}
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <th className="col-4">
                    {" "}
                    <div className="d-flex gap-3 mb-6">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold text-serif header-pt">
                        PT. RIUNG MITRA LESTARI <br /> JOB SITE : {jobsite}
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 95 }}></div>
                  <th className="col-5">
                    <h1 className="header-production-control mb-4">
                      DAFTAR PERIKSA <br /> GROUP LEADER
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 95 }}></div>
                  <th className="col-3">
                    <div className="margin-dpgl">
                      <p className="px-2 fw-normal text-serif text-alat border-bottom">
                        No. Dokumen:{" "}
                        <span className="fw-bold">FRM-OPR-005</span>
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Hari/Tanggal/Shift: {tanggal} / {shift}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Lokasi: {lokasi}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Halaman:{" "}
                      </p>
                    </div>
                  </th>
                </thead>
              </table>
            </div>

            <hr className="w-100 mb-3 mt-2 solid" />
            {/* Content Table */}
            {/* Loading Area */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  1. LOADING AREA
                </caption>
                <thead className="text-center">
                  <tr>
                    <th colSpan={4} scope="col" className="text-serif fs-5">
                      Kondisi Area
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Alat Penunjang
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Survey
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Material
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">Grade sesuai standar</td>
                    <td className="text-serif text-sm">
                      Lebar & tinggi sesuai standar
                    </td>
                    <td className="text-serif text-sm">
                      Rata & bebas material lepas
                    </td>
                    <td className="text-serif text-sm">Bebas genangan air</td>
                    <td className="text-serif text-sm">Bulldozer</td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sesuai standar
                    </td>
                    <td className="text-serif text-sm">Patok Ada & jelas</td>
                    <td className="text-serif text-sm">
                      Penggalian sesuai patok
                    </td>
                    <td className="text-serif text-sm">Aman dari longsor</td>
                    <td className="text-serif text-sm">
                      Cukup Penerangan (Malam Hari)
                    </td>
                    <td className="text-serif text-sm">
                      Sudah di blasting / ripping
                    </td>
                    <td className="text-serif text-sm">
                      Volume cukup untuk 1 shift
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_grade} <br /> {loading_area_grade_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_lebar_tinggi} <br />{" "}
                      {loading_area_lebar_tinggi_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_rata_bebas} <br />{" "}
                      {loading_area_rata_bebas_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_bebas_genang} <br />{" "}
                      {loading_area_bebas_genang_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_buldozer} <br />{" "}
                      {loading_area_buldozer_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_cara_kerja} <br />{" "}
                      {loading_area_cara_kerja_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_patok} <br /> {loading_area_patok_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_penggalian} <br />{" "}
                      {loading_area_penggalian_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_longsor} <br /> {loading_area_longsor_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_penerangan} <br />{" "}
                      {loading_area_penerangan_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_blasting} <br />{" "}
                      {loading_area_blasting_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {loading_area_volume} <br /> {loading_area_volume_note}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Jalan */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  2. JALAN
                </caption>
                <thead className="text-center">
                  <tr>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Kondisi Area
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Alat Penunjang
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Survey
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Lebar, grade & super elevasi sesuai standar
                    </td>
                    <td className="text-serif text-sm">
                      Rata & bebas material lepas
                    </td>
                    <td className="text-serif text-sm">Bebas debu</td>

                    <td className="text-serif text-sm">Grader</td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sesuai standar
                    </td>

                    <td className="text-serif text-sm">
                      Aman dari resiko (longsor/insiden)
                    </td>
                    <td className="text-serif text-sm">
                      Ada safety berm di area riskan
                    </td>
                    <td className="text-serif text-sm">
                      Rambu ada/jelas di area riskan
                    </td>
                    <td className="text-serif text-sm">
                      Operator/driver mematuhi rambu
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-serif text-sm fw-bold">
                      {jalan_lebar_grade} <br /> {jalan_lebar_grade_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {jalan_rata_bebas} <br /> {jalan_rata_bebas_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {jalan_bebas_debu} <br /> {jalan_bebas_debu_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {jalan_grader} <br /> {jalan_grader_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {jalan_cara_kerja} <br /> {jalan_cara_kerja_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {jalan_aman_resiko} <br /> {jalan_aman_resiko_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {jalan_safety_berm} <br /> {jalan_safety_berm_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {jalan_rambu} <br /> {jalan_rambu_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {jalan_driver_patuh_rambu} <br />{" "}
                      {jalan_driver_patuh_rambu_note}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Dumping Area */}
            <div className="table-responsive">
              <table class="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  3. DUMPING AREA
                </caption>
                <thead className="text-center">
                  <tr>
                    <th colSpan={4} scope="col" className="text-serif fs-5">
                      Kondisi Area
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Alat Penunjang
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Survey
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Jalan dan area dumping rata
                    </td>
                    <td className="text-serif text-sm">Bebas debu</td>
                    <td className="text-serif text-sm">Bebas genangan air</td>
                    <td className="text-serif text-sm">Lebar sesuai standar</td>

                    <td className="text-serif text-sm">Bulldozer</td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sesuai standar
                    </td>

                    <td className="text-serif text-sm">Patok ada/jelas</td>
                    <td className="text-serif text-sm">
                      Alokasi material sesuai patok
                    </td>

                    <td className="text-serif text-sm">Aman dari longsor</td>
                    <td className="text-serif text-sm">Cukup penerangan</td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-serif text-sm fw-bold">
                      {dumping_area_jalan_rata} <br />{" "}
                      {dumping_area_jalan_rata_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {dumping_area_bebas_debu} <br />{" "}
                      {dumping_area_bebas_debu_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {dumping_area_bebas_genang} <br />{" "}
                      {dumping_area_bebas_genang_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {dumping_area_lebar_standar} <br />{" "}
                      {dumping_area_lebar_standar_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {dumping_area_alat_penunjang} <br />{" "}
                      {dumping_area_alat_penunjang_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {dumping_area_cara_kerja} <br />{" "}
                      {dumping_area_cara_kerja_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {dumping_area_patok} <br /> {dumping_area_patok_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {dumping_area_alokasi} <br /> {dumping_area_alokasi_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {dumping_area_longsor} <br /> {dumping_area_longsor_note}
                    </td>
                    <td className="text-serif text-sm fw-bold">
                      {dumping_area_penerangan} <br />{" "}
                      {dumping_area_penerangan_note}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Drainage & Dewatering */}
            <div className="row align-items-center">
              <div className="col-5 table-responsive">
                <table class="table table-bordered caption-top mt-2">
                  <caption className="text-black text-serif header-leader">
                    4. DRAINAGE
                  </caption>
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="text-serif text-sm">
                        Ada saluran air di Pit dan berfungsi
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Ada saluran air di jalan utama dan berfungsi
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Besar gorong gorong sesuai debit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr className="align-middle">
                      <td className="text-serif text-sm fw-bold">
                        {drainage_saluran_pit} <br />{" "}
                        {drainage_saluran_pit_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {drainage_gorong} <br /> {drainage_gorong_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {drainage_saluran_air} <br />{" "}
                        {drainage_saluran_air_note}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-7 table-responsive">
                <table class="table table-bordered caption-top mt-2">
                  <caption className="text-black text-serif header-leader">
                    5. DEWATERING
                  </caption>
                  <thead className="text-center">
                    <tr>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Semua sump berfungsi
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Semua pompa berfungsi
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Instalasi pompa Aman dari bocor
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Cukup penerangan
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Sediment pond berfungsi
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Air dari tambang masuk sediment pond
                      </th>
                      <th
                        scope="col"
                        className="text-serif text-sm align-middle"
                      >
                        Air dari tambang aman untuk lingkungan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr className="align-middle">
                      <td className="text-serif text-sm fw-bold">
                        {dewatering_sump} <br /> {dewatering_sump_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {dewatering_fungsi_pompa} <br />{" "}
                        {dewatering_fungsi_pompa_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {dewatering_instalasi_pompa} <br />{" "}
                        {dewatering_instalasi_pompa_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {dewatering_penerangan} <br />{" "}
                        {dewatering_penerangan_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {dewatering_fungsi_pond} <br />{" "}
                        {dewatering_fungsi_pond_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {dewatering_air_sendiment} <br />
                        {dewatering_air_sendiment_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {dewatering_air_tambang} <br />{" "}
                        {dewatering_air_tambang_note}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Komoditas & Stockpile */}
            {/* Table & Section Bottom */}
            <div className="row align-items-center">
              <div className="col-4 table-responsive">
                <table class="table table-bordered caption-top mt-2">
                  <caption className="text-black text-serif header-leader">
                    6. KOMODITAS
                  </caption>
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="text-serif text-sm">
                        bersih dan bebas kontaminasi
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Type / kwalitas Sesuai rencana
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Volume / tonase cukup Untuk 1 shift
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr className="align-middle">
                      <td className="text-serif text-sm fw-bold">
                        {komoditas_kontaminasi} <br />{" "}
                        {komoditas_kontaminasi_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {komoditas_tipe} <br /> {komoditas_tipe_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {komoditas_volume} <br /> {komoditas_volume_note}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-4 table-responsive">
                <table class="table table-bordered caption-top mt-2">
                  <caption className="text-black text-serif header-leader">
                    7. STOCKPILE
                  </caption>
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="text-serif text-sm">
                        Balance material sudah dihitung
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Kondisi baik dan siap operasi
                      </th>
                      <th scope="col" className="text-serif text-sm">
                        Cukup penerangan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr className="align-middle">
                      <td className="text-serif text-sm fw-bold">
                        {stockpile_balance} <br /> {stockpile_balance_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {stockpile_op} <br /> {stockpile_op_note}
                      </td>
                      <td className="text-serif text-sm fw-bold">
                        {stockpile_penerangan} <br />{" "}
                        {stockpile_penerangan_note}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Catatan dan Tandatangan */}
            <div className="d-flex align-items-center">
              <div className="col-4 mb-3 mt-4 w-75">
                <h5 className="header-leader text-serif">8. CATATAN</h5>
                <p className="border-bottom border-dark">.</p>
                <p className="border-bottom border-dark">.</p>
                <p className="border-bottom border-dark">.</p>
              </div>

              {/* Tanda Tangan */}
              <div className="col-4 px-5">
                <div className="d-flex gap-5">
                  <div className="text-center gap-5">
                    <p className="fw-normal text-serif fw-semibold">
                      Diperiksa oleh,
                    </p>
                    <p className="mt-4">{diperiksa}</p>
                    <p className="border-top border-dark text-serif fw-semibold">
                      Group Leader
                    </p>
                  </div>
                  <div className="text-center gap-5">
                    <p className="fw-normal text-serif fw-semibold">
                      Disetujui oleh,
                    </p>
                    <p className="mt-4">{disetujui}</p>
                    <p className="border-top border-dark text-serif fw-semibold">
                      Section Head
                    </p>
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

export default WithRouter(DaftarPeriksaLeader);
