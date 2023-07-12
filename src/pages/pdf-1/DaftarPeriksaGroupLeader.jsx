import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const DaftarPeriksaGroupLeader = () => {
  const [data, setData] = useState({
    jobsite: "",
    tanggal: "",
    lokasi: "",
    shift: "",
    diperiksa: "",
    disetujui: "",
    ttd_diperiksa: "",
    ttd_disetujui: ""
  });
  const [loading, setLoading] = useState(true);

  // JALAN/ACCES LV & ORANG & UNIT
  const [jalan_lebar_grade, setJalan_lebar_grade] = useState("");
  const [jalan_lebar_grade_note, setJalan_lebar_grade_note] = useState("");
  const [jalan_rata_bebas, setJalan_rata_bebas] = useState("");
  const [jalan_rata_bebas_note, setJalan_rata_bebas_note] = useState("");
  const [jalan_bebas_debu, setJalan_bebas_debu] = useState("");
  const [jalan_bebas_debu_note, setJalan_bebas_debu_note] = useState("");
  const [jalan_pintas, setJalan_pintas] = useState("");
  const [jalan_pintas_note, setJalan_pintas_note] = useState("");
  const [jalan_batang_kayu, setJalan_batang_kayu] = useState("");
  const [jalan_batang_kayu_note, setJalan_batang_kayu_note] = useState("");
  const [jalan_longsor, setJalan_longsor] = useState("");
  const [jalan_longsor_note, setJalan_longsor_note] = useState("");
  const [jalan_driver, setJalan_driver] = useState("");
  const [jalan_driver_note, setJalan_driver_note] = useState("");
  const [jalan_dua_batang_kayu, setJalan_dua_batang_kayu] = useState("");
  const [jalan_dua_batang_kayu_note, setJalan_dua_batang_kayu_note] =
    useState("");
  const [jalan_track_kering, setJalan_track_kering] = useState("");
  const [jalan_track_kering_note, setJalan_track_kering_note] = useState("");
  const [jalan_track_basah, setJalan_track_basah] = useState("");
  const [jalan_track_basah_note, setJalan_track_basah_note] = useState("");
  const [jalan_soil_lumpur, setJalan_soil_lumpur] = useState("");
  const [jalan_soil_lumpur_note, setJalan_soil_lumpur_note] = useState("");
  const [jalan_aman_amblas, setJalan_aman_amblas] = useState("");
  const [jalan_aman_amblas_note, setJalan_aman_amblas_note] = useState("");
  const [jalan_unit_travel, setJalan_unit_travel] = useState("");
  const [jalan_unit_travel_note, setJalan_unit_travel_note] = useState("");
  const [jalan_jarak_lapuk, setJalan_jarak_lapuk] = useState("");
  const [jalan_jarak_lapuk_note, setJalan_jarak_lapuk_note] = useState("");

  // PERALATAN
  const [peralatan_status_unit, setPeralatan_status_unit] = useState("");
  const [peralatan_status_unit_note, setPeralatan_status_unit_note] =
    useState("");
  const [peralatan_long_arm, setPeralatan_long_arm] = useState("");
  const [peralatan_long_arm_note, setPeralatan_long_arm_note] = useState("");
  const [peralatan_amphibi, setPeralatan_amphibi] = useState("");
  const [peralatan_amphibi_note, setPeralatan_amphibi_note] = useState("");
  const [peralatan_body, setPeralatan_body] = useState("");
  const [peralatan_body_note, setPeralatan_body_note] = useState("");
  const [peralatan_jadwal, setPeralatan_jadwal] = useState("");
  const [peralatan_jadwal_note, setPeralatan_jadwal_note] = useState("");

  // LAND CLEARING
  const [land_clearing_lokasi_unit, setLand_clearing_lokasi_unit] =
    useState("");
  const [land_clearing_lokasi_unit_note, setLand_clearing_lokasi_unit_note] =
    useState("");
  const [land_clearing_alat_kerja, setLand_clearing_alat_kerja] = useState("");
  const [land_clearing_alat_kerja_note, setLand_clearing_alat_kerja_note] =
    useState("");
  const [
    land_clearing_jalur_land_clearing,
    setLand_clearing_jalur_land_clearing,
  ] = useState("");
  const [
    land_clearing_jalur_land_clearing_note,
    setLand_clearing_jalur_land_clearing_note,
  ] = useState("");
  const [land_clearing_patok, setLand_clearing_patok] = useState("");
  const [land_clearing_patok_note, setLand_clearing_patok_note] = useState("");
  const [land_clearing_patok_gps, setLand_clearing_patok_gps] = useState("");
  const [land_clearing_patok_gps_note, setLand_clearing_patok_gps_note] =
    useState("");
  const [land_clearing_kondisi_area, setLand_clearing_kondisi_area] =
    useState("");
  const [land_clearing_kondisi_area_note, setLand_clearing_kondisi_area_note] =
    useState("");
  const [land_clearing_area_kerja, setLand_clearing_area_kerja] = useState("");
  const [land_clearing_area_kerja_note, setLand_clearing_area_kerja_note] =
    useState("");
  const [land_clearing_longsor, setLand_clearing_longsor] = useState("");
  const [land_clearing_longsor_note, setLand_clearing_longsor_note] =
    useState("");
  const [land_clearing_long_arm, setLand_clearing_long_arm] = useState("");
  const [land_clearing_long_arm_note, setLand_clearing_long_arm_note] =
    useState("");
  const [land_clearing_kayu_kering, setLand_clearing_kayu_kering] =
    useState("");
  const [land_clearing_kayu_kering_note, setLand_clearing_kayu_kering_note] =
    useState("");

  // PENGGALIAN CHANNEL
  const [penggalian_channel_gali_primer, Setpenggalian_channel_gali_primer] =
    useState("");
  const [
    penggalian_channel_gali_primer_note,
    Setpenggalian_channel_gali_primer_note,
  ] = useState("");
  const [penggalian_channel_unit_track, Setpenggalian_channel_unit_track] =
    useState("");
  const [
    penggalian_channel_unit_track_note,
    Setpenggalian_channel_unit_track_note,
  ] = useState("");
  const [penggalian_channel_unit_amphibi, Setpenggalian_channel_unit_amphibi] =
    useState("");
  const [
    penggalian_channel_unit_amphibi_note,
    Setpenggalian_channel_unit_amphibi_note,
  ] = useState("");
  const [penggalian_channel_alokasi, Setpenggalian_channel_alokasi] =
    useState("");
  const [penggalian_channel_alokasi_note, Setpenggalian_channel_alokasi_note] =
    useState("");
  const [penggalian_channel_alat_kerja, Setpenggalian_channel_alat_kerja] =
    useState("");
  const [
    penggalian_channel_alat_kerja_note,
    Setpenggalian_channel_alat_kerja_note,
  ] = useState("");
  const [penggalian_channel_pita_survey, Setpenggalian_channel_pita_survey] =
    useState("");
  const [
    penggalian_channel_pita_survey_note,
    Setpenggalian_channel_pita_survey_note,
  ] = useState("");
  const [penggalian_channel_longsor, Setpenggalian_channel_longsor] =
    useState("");
  const [penggalian_channel_longsor_note, Setpenggalian_channel_longsor_note] =
    useState("");
  const [
    penggalian_channel_unit_aman_note,
    Setpenggalian_channel_unit_aman_note,
  ] = useState("");
  const [penggalian_channel_unit_aman, Setpenggalian_channel_unit_aman] =
    useState("");
  const [
    penggalian_channel_operator_penggalian,
    Setpenggalian_channel_operator_penggalian,
  ] = useState("");
  const [
    penggalian_channel_operator_penggalian_note,
    Setpenggalian_channel_operator_penggalian_note,
  ] = useState("");
  const [penggalian_channel_lampu_kerja, Setpenggalian_channel_lampu_kerja] =
    useState("");
  const [
    penggalian_channel_lampu_kerja_note,
    Setpenggalian_channel_lampu_kerja_note,
  ] = useState("");

  // PERAWATAN CHANNEL / MAINTENANCE & PENDALAMAN
  const [perawatan_channel_kedalaman, Setperawatan_channel_kedalaman] =
    useState("");
  const [
    perawatan_channel_kedalaman_note,
    Setperawatan_channel_kedalaman_note,
  ] = useState("");
  const [perawatan_channel_genangan, Setperawatan_channel_genangan] =
    useState("");
  const [perawatan_channel_genangan_note, Setperawatan_channel_genangan_note] =
    useState("");
  const [perawatan_channel_alokasi, Setperawatan_channel_alokasi] =
    useState("");
  const [perawatan_channel_alokasi_note, Setperawatan_channel_alokasi_note] =
    useState("");
  const [perawatan_channel_alat_kerja, Setperawatan_channel_alat_kerja] =
    useState("");
  const [
    perawatan_channel_alat_kerja_note,
    Setperawatan_channel_alat_kerja_note,
  ] = useState("");
  const [perawatan_channel_longsor, Setperawatan_channel_longsor] =
    useState("");
  const [perawatan_channel_longsor_note, Setperawatan_channel_longsor_note] =
    useState("");
  const [perawatan_channel_lampu_kerja, Setperawatan_channel_lampu_kerja] =
    useState("");
  const [
    perawatan_channel_lampu_kerja_note,
    Setperawatan_channel_lampu_kerja_note,
  ] = useState("");

  // TIME SHEET DAY WORK & PELAPORAN PEMAKAIAN FUEL
  const [time_sheet_area_kerja, Settime_sheet_area_kerja] = useState("");
  const [time_sheet_area_kerja_note, Settime_sheet_area_kerja_note] =
    useState("");
  const [time_sheet_tanda_tangan, Settime_sheet_tanda_tangan] = useState("");
  const [time_sheet_tanda_tangan_note, Settime_sheet_tanda_tangan_note] =
    useState("");
  const [time_sheet_pelaporan, Settime_sheet_pelaporan] = useState("");
  const [time_sheet_pelaporan_note, Settime_sheet_pelaporan_note] =
    useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://api-oos.jojonomic.com/23946/rios/generate-pdf/daftar-periksa/group-leader-open-channel-v2",
        {
          data: {
            id_dpgl_open_channel: queryParams.get("id_dpgl_open_channel"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
            pkh_id: queryParams.get("pkh_id"),
          }
        //   "data": {
        //     "id_dpgl_open_channel": "IkXVVZ94g",
        //     "lokasi_pkh_id": "pmUy3z84R",
        //     "pkh_id": null
        // }
        }
      )
      .then((res) => {
        const { data } = res;

        setData({
          jobsite: data.jobsite,
          tanggal: data.tanggal,
          lokasi: data.lokasi,
          shift: data.shift,
          diperiksa: data.diperiksa,
          disetujui: data.disetujui,
          ttd_diperiksa: data.ttd_diperiksa,
          ttd_disetujui: data.ttd_disetujui
        });

        // Check Data True
        const checkData = (data, set) => {
          if (data == null) {
            set("");
            return 1;
          } else if (data) {
            set("✓");
            return 1;
          }
          set("X");
          return 1;
        };

        // JALAN/ACCES LV & ORANG & UNIT
        checkData(data.detail.jalan_lebar_grade, setJalan_lebar_grade);
        setJalan_lebar_grade_note(data.detail.jalan_lebar_grade_note);
        checkData(data.detail.jalan_rata_bebas, setJalan_rata_bebas);
        setJalan_rata_bebas_note(data.detail.jalan_rata_bebas_note);
        checkData(data.detail.jalan_bebas_debu, setJalan_bebas_debu);
        setJalan_bebas_debu_note(data.detail.jalan_bebas_debu_note);
        checkData(data.detail.jalan_pintas, setJalan_pintas);
        setJalan_pintas_note(data.detail.jalan_pintas_note);
        checkData(data.detail.jalan_batang_kayu, setJalan_batang_kayu);
        setJalan_batang_kayu_note(data.detail.jalan_batang_kayu_note);
        checkData(data.detail.jalan_longsor, setJalan_longsor);
        setJalan_longsor_note(data.detail.jalan_longsor_note);
        checkData(data.detail.jalan_driver, setJalan_driver);
        setJalan_driver_note(data.detail.jalan_driver_note);
        checkData(data.detail.jalan_dua_batang_kayu, setJalan_dua_batang_kayu);
        setJalan_dua_batang_kayu_note(data.detail.jalan_dua_batang_kayu_note);
        checkData(data.detail.jalan_track_kering, setJalan_track_kering);
        setJalan_track_kering_note(data.detail.jalan_track_kering_note);
        checkData(data.detail.jalan_track_basah, setJalan_track_basah);
        setJalan_track_basah_note(data.detail.jalan_track_basah_note);
        checkData(data.detail.jalan_soil_lumpur, setJalan_soil_lumpur);
        setJalan_soil_lumpur_note(data.detail.jalan_soil_lumpur_note);
        checkData(data.detail.jalan_aman_amblas, setJalan_aman_amblas);
        setJalan_aman_amblas_note(data.detail.jalan_aman_amblas_note);
        checkData(data.detail.jalan_unit_travel, setJalan_unit_travel);
        setJalan_unit_travel_note(data.detail.jalan_unit_travel_note);
        checkData(data.detail.jalan_jarak_lapuk, setJalan_jarak_lapuk);
        setJalan_jarak_lapuk_note(data.detail.jalan_jarak_lapuk_note);

        // PERALATAN
        checkData(data.detail.peralatan_status_unit, setPeralatan_status_unit);
        setPeralatan_status_unit_note(data.detail.peralatan_status_unit_note);
        checkData(data.detail.peralatan_long_arm, setPeralatan_long_arm);
        setPeralatan_long_arm_note(data.detail.peralatan_long_arm_note);
        checkData(data.detail.peralatan_amphibi, setPeralatan_amphibi);
        setPeralatan_amphibi_note(data.detail.peralatan_amphibi_note);
        checkData(data.detail.peralatan_body, setPeralatan_body);
        setPeralatan_body_note(data.detail.peralatan_body_note);
        checkData(data.detail.peralatan_jadwal, setPeralatan_jadwal);
        setPeralatan_jadwal_note(data.detail.peralatan_jadwal_note);

        // LAND CLEARING
        checkData(
          data.detail.land_clearing_lokasi_unit,
          setLand_clearing_lokasi_unit
        );
        setLand_clearing_lokasi_unit_note(
          data.detail.land_clearing_lokasi_unit_note
        );
        checkData(
          data.detail.land_clearing_alat_kerja,
          setLand_clearing_alat_kerja
        );
        setLand_clearing_alat_kerja_note(
          data.detail.land_clearing_alat_kerja_note
        );
        checkData(
          data.detail.land_clearing_jalur_land_clearing,
          setLand_clearing_jalur_land_clearing
        );
        setLand_clearing_jalur_land_clearing_note(
          data.detail.land_clearing_jalur_land_clearing_note
        );
        checkData(data.detail.land_clearing_patok, setLand_clearing_patok);
        setLand_clearing_patok_note(data.detail.land_clearing_patok_note);
        checkData(
          data.detail.land_clearing_patok_gps,
          setLand_clearing_patok_gps
        );
        setLand_clearing_patok_gps_note(
          data.detail.land_clearing_patok_gps_note
        );
        checkData(
          data.detail.land_clearing_kondisi_area,
          setLand_clearing_kondisi_area
        );
        setLand_clearing_kondisi_area_note(
          data.detail.land_clearing_kondisi_area_note
        );
        checkData(
          data.detail.land_clearing_area_kerja,
          setLand_clearing_area_kerja
        );
        setLand_clearing_area_kerja_note(
          data.detail.land_clearing_area_kerja_note
        );
        checkData(data.detail.land_clearing_longsor, setLand_clearing_longsor);
        setLand_clearing_longsor_note(data.detail.land_clearing_longsor_note);
        checkData(
          data.detail.land_clearing_long_arm,
          setLand_clearing_long_arm
        );
        setLand_clearing_long_arm_note(data.detail.land_clearing_long_arm_note);
        checkData(
          data.detail.land_clearing_kayu_kering,
          setLand_clearing_kayu_kering
        );
        setLand_clearing_kayu_kering_note(
          data.detail.land_clearing_kayu_kering_note
        );

        // PENGGALIAN CHANNEL
        checkData(
          data.detail.penggalian_channel_gali_primer,
          Setpenggalian_channel_gali_primer
        );
        Setpenggalian_channel_gali_primer_note(
          data.detail.penggalian_channel_gali_primer_note
        );
        checkData(
          data.detail.penggalian_channel_unit_track,
          Setpenggalian_channel_unit_track
        );
        Setpenggalian_channel_unit_track_note(
          data.detail.penggalian_channel_unit_track_note
        );
        checkData(
          data.detail.penggalian_channel_unit_amphibi,
          Setpenggalian_channel_unit_amphibi
        );
        Setpenggalian_channel_unit_amphibi_note(
          data.detail.penggalian_channel_unit_amphibi_note
        );
        checkData(
          data.detail.penggalian_channel_alokasi,
          Setpenggalian_channel_alokasi
        );
        Setpenggalian_channel_alokasi_note(
          data.detail.penggalian_channel_alokasi_note
        );
        checkData(
          data.detail.penggalian_channel_alat_kerja,
          Setpenggalian_channel_alat_kerja
        );
        Setpenggalian_channel_alat_kerja_note(
          data.detail.penggalian_channel_alat_kerja_note
        );
        checkData(
          data.detail.penggalian_channel_pita_survey,
          Setpenggalian_channel_pita_survey
        );
        Setpenggalian_channel_pita_survey_note(
          data.detail.penggalian_channel_pita_survey_note
        );
        checkData(
          data.detail.penggalian_channel_longsor,
          Setpenggalian_channel_longsor
        );
        Setpenggalian_channel_longsor_note(
          data.detail.penggalian_channel_longsor_note
        );
        checkData(
          data.detail.penggalian_channel_unit_aman,
          Setpenggalian_channel_unit_aman
        );
        Setpenggalian_channel_unit_aman_note(
          data.detail.penggalian_channel_unit_aman_note
        );
        checkData(
          data.detail.penggalian_channel_operator_penggalian,
          Setpenggalian_channel_operator_penggalian
        );
        Setpenggalian_channel_operator_penggalian_note(
          data.detail.penggalian_channel_operator_penggalian_note
        );
        checkData(
          data.detail.penggalian_channel_lampu_kerja,
          Setpenggalian_channel_lampu_kerja
        );
        Setpenggalian_channel_lampu_kerja_note(
          data.detail.penggalian_channel_lampu_kerja_note
        );

        // PERAWATAN CHANNEL / MAINTENANCE & PENDALAMAN
        checkData(
          data.detail.perawatan_channel_kedalaman,
          Setperawatan_channel_kedalaman
        );
        Setperawatan_channel_kedalaman_note(
          data.detail.perawatan_channel_kedalaman_note
        );
        checkData(
          data.detail.perawatan_channel_genangan,
          Setperawatan_channel_genangan
        );
        Setperawatan_channel_genangan_note(
          data.detail.perawatan_channel_genangan_note
        );
        checkData(
          data.detail.perawatan_channel_alokasi,
          Setperawatan_channel_alokasi
        );
        Setperawatan_channel_alokasi_note(
          data.detail.perawatan_channel_alokasi_note
        );
        checkData(
          data.detail.perawatan_channel_alat_kerja,
          Setperawatan_channel_alat_kerja
        );
        Setperawatan_channel_alat_kerja_note(
          data.detail.perawatan_channel_alat_kerja_note
        );
        checkData(
          data.detail.perawatan_channel_longsor,
          Setperawatan_channel_longsor
        );
        Setperawatan_channel_longsor_note(
          data.detail.perawatan_channel_longsor_note
        );
        checkData(
          data.detail.perawatan_channel_lampu_kerja,
          Setperawatan_channel_lampu_kerja
        );
        Setperawatan_channel_lampu_kerja_note(
          data.detail.perawatan_channel_lampu_kerja_note
        );

        // TIME SHEET DAY WORK & PELAPORAN PEMAKAIAN FUEL
        checkData(data.detail.time_sheet_area_kerja, Settime_sheet_area_kerja);
        Settime_sheet_area_kerja_note(data.detail.time_sheet_area_kerja_note);
        checkData(
          data.detail.time_sheet_tanda_tangan,
          Settime_sheet_tanda_tangan
        );
        Settime_sheet_tanda_tangan_note(
          data.detail.time_sheet_tanda_tangan_note
        );
        checkData(data.detail.time_sheet_pelaporan, Settime_sheet_pelaporan);
        Settime_sheet_pelaporan_note(data.detail.time_sheet_pelaporan_note);
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
                    <div className="d-flex gap-3 mb-4 align-items-center">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold text-serif header-pt">
                        PT. RIUNG MITRA LESTARI <br /> JOB SITE : {data.jobsite}
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 95 }}></div>
                  <th className="col-5">
                    <h1 className="header-production-control mb-4">
                      DAFTAR PERIKSA <br /> GROUP LEADER OPEN CHANNEL
                    </h1>
                  </th>
                  <div className="vr" style={{ height: 95 }}></div>
                  <th className="col-3">
                    <div className="margin-dpgl">
                      <p className="px-2 fw-normal text-serif text-alat border-bottom">
                        No. Dokumen:{" "}
                        <span className="fw-normal">FRM-OPR-020</span>
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Hari/Tanggal/Shift: {data.tanggal} / {data.shift}
                      </p>
                      <p className="px-2 fw-normal text-serif text-alat border-bottom mb-1">
                        Lokasi: {data.lokasi}
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
            {/* JALAN/ACCES LV & ORANG & UNIT */}
            <div className="table-responsive">
              <table className="table table-bordered caption-top mt-0">
                <caption className="text-black text-serif header-leader">
                  1. JALAN/ACCES LV & ORANG & UNIT
                </caption>
                <thead className="text-center">
                  <tr>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Kondisi Jalan LV
                    </th>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Kondisi Jalan orang / Operator
                    </th>
                    <th colSpan={2} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Lebar, grade, super elevasi sudah sesuai standar
                    </td>
                    <td className="text-serif text-sm">
                      Rata dan bebas dari material lepas
                    </td>
                    <td className="text-serif text-sm">Bebas debu</td>
                    <td className="text-serif text-sm">
                      Lewat jalan pintas terdekat yang sudah ada
                    </td>
                    <td className="text-serif text-sm">
                      Sudah ada batang kayu untuk melintas channel
                    </td>
                    <td className="text-serif text-sm">
                      Aman dari resiko longsor
                    </td>
                    <td className="text-serif text-sm">
                      Driver sudah mematuhi rambu-rambu
                    </td>
                    <td className="text-serif text-sm">
                      Batang kayu sudah dipasang dua batang setiap lintasan
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_lebar_grade} <br /> {" "}
                      {jalan_lebar_grade_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_rata_bebas} <br /> {" "}
                      {jalan_rata_bebas_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_bebas_debu} <br /> {" "}
                      {jalan_bebas_debu_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_pintas} <br /> {" "}
                      {jalan_pintas_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_batang_kayu} <br /> {" "}
                      {jalan_batang_kayu_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_longsor} <br /> {" "}
                      {jalan_longsor_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_driver} <br /> {" "}
                      {jalan_driver_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_dua_batang_kayu}{" "} <br /> {" "}
                      {jalan_dua_batang_kayu_note}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Lanjutan*/}
            <div className="table-responsive">
              <table className="table table-bordered mt-2">
                <thead className="text-center">
                  <tr>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Kondisi jalan Unit Exc Standar
                    </th>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Jalur track unit standar diatas gambut kering aman tanpa
                      matting
                    </td>
                    <td className="text-serif text-sm">
                      Jalur track unit standar diarea gambut basah sudah ada
                      matting
                    </td>
                    <td className="text-serif text-sm">
                      Jalur track unit standar diarea soil-lumpur sudah ada
                      matting
                    </td>
                    <td className="text-serif text-sm">
                      Aman dari amblas pada jalur yang tidak ada matting
                    </td>
                    <td className="text-serif text-sm">
                      Jalur dengan matting dipasang dengan jarak 1 m atau kurang
                      dan tidak lapuk
                    </td>
                    <td className="text-serif text-sm">
                      Operator mengoperasikan unit saat
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_track_kering} <br /> {" "}
                      {jalan_track_kering_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_track_basah} <br /> {" "}
                      {jalan_track_basah_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_soil_lumpur} <br /> {" "}
                      {jalan_soil_lumpur_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_aman_amblas} <br /> {" "}
                      {jalan_aman_amblas_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_unit_travel} <br /> {" "}
                      {jalan_unit_travel_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {jalan_jarak_lapuk} <br /> {" "}
                      {jalan_jarak_lapuk_note}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Peralatan */}
            <div className="table-responsive">
              <table className="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  2. PERALATAN
                </caption>
                <thead className="text-center">
                  <tr>
                    <th scope="col-2" className="text-serif fs-5 align-middle">
                      Kondisi unit Sarana/LV
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Kondisi Unit Kerja
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Kondisi Stock Fuel & Drum
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm align-middle">
                      Status unit LV ready
                    </td>
                    <td className="text-serif text-sm">
                      Exc long arm standar sudah dipastikan status ready
                    </td>
                    <td className="text-serif text-sm">
                      Exc Amphibi sudah dipastikan status ready
                    </td>
                    <td className="text-serif text-sm">
                      Aman dari bocoran body, hose, valve dan gantungan drum
                      tidak patah
                    </td>
                    <td className="text-serif text-sm">Di isi sesuai jadwal</td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {peralatan_status_unit} {" "} <br /> {" "}
                      {peralatan_status_unit_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {peralatan_long_arm} <br /> {" "} {peralatan_long_arm_note} 
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {peralatan_amphibi} <br /> {" "} {peralatan_amphibi_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {peralatan_body} <br /> {" "} {peralatan_body_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {peralatan_jadwal} <br /> {" "} {peralatan_jadwal_note}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* LAND CLEARING */}
            <div className="table-responsive">
              <table className="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  3. LAND CLEARING
                </caption>
                <thead className="text-center">
                  <tr>
                    <th
                      colSpan={3}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Unit Kerja
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Survey
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Kondisi Area Kerja
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Lokasi unit sudah sesuai peruntukan
                    </td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sesuai standar
                    </td>
                    <td className="text-serif text-sm">
                      Jalur land clearing sesuai pita survey
                    </td>
                    <td className="text-serif text-sm">
                      Patok sudah terpasang & jelas sebagai batas pinggir atau
                      center line
                    </td>
                    <td className="text-serif text-sm">
                      Pemasangan patok sudah dipastikan benar / GPS
                    </td>
                    <td className="text-serif text-sm">
                      Sudah dipastikan kondisi area gambut, berair, kering, atau
                      top soil
                    </td>
                    <td className="text-serif text-sm">
                      Sudah dipastikan area kerja tidak bersinggungan dengan
                      masyarakat
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {land_clearing_lokasi_unit}  <br /> {" "}
                      {land_clearing_lokasi_unit_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {land_clearing_alat_kerja} <br /> {" "}
                      {land_clearing_alat_kerja_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {land_clearing_jalur_land_clearing}  <br /> {" "}
                      {land_clearing_jalur_land_clearing_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {land_clearing_patok} <br /> {" "} {land_clearing_patok_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {land_clearing_patok_gps}  <br /> {" "}
                      {land_clearing_patok_gps_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {land_clearing_kondisi_area}  <br /> {" "}
                      {land_clearing_kondisi_area_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {land_clearing_area_kerja}  <br /> {" "}
                      {land_clearing_area_kerja_note}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Lanjutan */}
            <div className="table-responsive">
              <table className="table table-bordered mt-2">
                <thead className="text-center">
                  <tr>
                    <th colSpan={3} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Aman dari resiko longsor
                    </td>
                    <td className="text-serif text-sm">
                      Khusus Exc long arm standar sudah dipasang wire mesh
                    </td>
                    <td className="text-serif text-sm">
                      Pohon kayu kering sudah dirobohkan lebih dulu jika ada
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {land_clearing_longsor} <br /> {" "}
                      {land_clearing_longsor_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {land_clearing_long_arm}  <br /> {" "}
                      {land_clearing_long_arm_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {land_clearing_kayu_kering} <br /> {" "}
                      {land_clearing_kayu_kering_note}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* PENGGALIAN CHANNEL */}
            <div className="table-responsive">
              <table className="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  4. PENGGALIAN CHANNEL
                </caption>
                <thead className="text-center">
                  <tr>
                    <th
                      colSpan={3}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Kondisi Area Kerja
                    </th>
                    <th
                      colSpan={3}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Unit Kerja/Alat
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Awal penggalian sudah ditentukan harus diawali dari arah
                      channel primer
                    </td>
                    <td className="text-serif text-sm">
                      Dudukan unit track standar sudah terpasang matting
                    </td>
                    <td className="text-serif text-sm">
                      Unit amphibi melakukan Penggalian dari genangan menuju
                      saluran primer
                    </td>
                    <td className="text-serif text-sm">
                      Alokasi / penempatan unit sudah sesuai peruntukan
                    </td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sudah sesuai standar
                    </td>
                    <td className="text-serif text-sm">
                      Operator melakukan penggalian sudah sesuai pita survey
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {penggalian_channel_gali_primer} <br /> {" "}
                      {penggalian_channel_gali_primer_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {penggalian_channel_unit_track} <br /> {" "}
                      {penggalian_channel_unit_track_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {penggalian_channel_unit_amphibi} <br /> {" "}
                      {penggalian_channel_unit_amphibi_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {penggalian_channel_alokasi}<br /> {" "}
                      <br /> {penggalian_channel_alokasi_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {penggalian_channel_alat_kerja} <br /> {" "}
                      {penggalian_channel_alat_kerja_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {penggalian_channel_pita_survey}{" "}<br /> {" "}
                      {penggalian_channel_pita_survey_note}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Lanjutan */}
            <div className="table-responsive">
              <table className="table table-bordered mt-2">
                <thead className="text-center">
                  <tr>
                    <th colSpan={4} scope="col" className="text-serif fs-5">
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Aman dari resiko longsor
                    </td>
                    <td className="text-serif text-sm">
                      Jalur track unit standar sudah sipasang mating dan aman
                    </td>
                    <td className="text-serif text-sm">
                      Operator melakukan proses penggalian sudah sesuai prosedur
                    </td>
                    <td className="text-serif text-sm">
                      Lampu kerja unit untuk operasi malam hari sudah lengkap
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {penggalian_channel_longsor} <br /> {" "}
                      {penggalian_channel_longsor_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {penggalian_channel_unit_aman} <br /> {" "}
                      {penggalian_channel_unit_aman_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {penggalian_channel_operator_penggalian} <br /> {" "}
                      {penggalian_channel_operator_penggalian_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {penggalian_channel_lampu_kerja} <br /> {" "}
                      {penggalian_channel_lampu_kerja_note}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* PERAWATAN CHANNEL / MAINTENANCE & PENDALAMAN */}
            <div className="table-responsive">
              <table className="table table-bordered caption-top mt-2">
                <caption className="text-black text-serif header-leader">
                  5. PERAWATAN CHANNEL/MAINTENANCE & PENDALAMAN
                </caption>
                <thead className="text-center">
                  <tr>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Kondisi Area Kerja
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Unit Kerja
                    </th>
                    <th
                      colSpan={2}
                      scope="col-2"
                      className="text-serif fs-5 align-middle"
                    >
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-serif text-sm">
                      Sudah dipastikan kedalaman channel belum sesuai permintaan
                      (RL)
                    </td>
                    <td className="text-serif text-sm">
                      Masih adanya genangan air dalam saluran
                    </td>
                    <td className="text-serif text-sm">
                      Alokasi/penempatan unit sudah sesuai peruntukan
                    </td>
                    <td className="text-serif text-sm">
                      Cara kerja alat sudah sesuai prosedur
                    </td>
                    <td className="text-serif text-sm">
                      Aman dari resiko longsor
                    </td>
                    <td className="text-serif text-sm">
                      Lampu kerja unit untuk operasi malam sudah lengkap
                    </td>
                  </tr>
                  <tr>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {perawatan_channel_kedalaman} <br /> {" "}
                      {perawatan_channel_kedalaman_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {perawatan_channel_genangan} <br /> {" "}
                      {perawatan_channel_genangan_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {perawatan_channel_alokasi} <br /> {" "}
                      {perawatan_channel_alokasi_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {perawatan_channel_alat_kerja} <br /> {" "}
                      {perawatan_channel_alat_kerja_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {perawatan_channel_longsor} <br /> {" "}
                      {perawatan_channel_longsor_note}
                    </td>
                    <td className="text-serif text-sm fw-bold align-middle">
                      {perawatan_channel_lampu_kerja} <br /> {" "}
                      {perawatan_channel_lampu_kerja_note}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table & Section Bottom */}
            <div className="row align-items-center mb-5">
              <div className="col-8">
                <table className="table table-bordered caption-top mt-2">
                  <caption className="text-black text-serif header-leader">
                    6. TIME SHEET DAY WORK & PELAPORAN PEMAKAIAN FUEL
                  </caption>
                  <thead className="text-center">
                    <tr>
                      <th colSpan={3} scope="col" className="text-serif fs-5">
                        Penulisan & tanda tangan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="text-serif text-sm">
                        Penulisan area kerja, HM, jam kerja sesuai prosedure max
                        10 jam
                      </td>
                      <td className="text-serif text-sm">
                        Penanda tanganan time sheet sudah dilaksanakan
                      </td>
                      <td className="text-serif text-sm">
                        Pelaporan ke logistik tentang pemakaian fuel unit open
                        channel sudah dilaksanakan
                      </td>
                    </tr>
                    <tr>
                      <td className="text-serif text-sm fw-semibold">
                        {time_sheet_area_kerja} <br />{" "}
                        {time_sheet_area_kerja_note}
                      </td>
                      <td className="text-serif text-sm fw-semibold">
                        {time_sheet_tanda_tangan} <br />{" "}
                        {time_sheet_tanda_tangan_note}
                      </td>
                      <td className="text-serif text-sm fw-semibold">
                        {time_sheet_pelaporan} <br />{" "}
                        {time_sheet_pelaporan_note}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* PICA dan Tanda tangan*/}
              <div className="row align-items-center mt-4">
                <div className="col-8">
                  <h5 className="header-leader text-serif">7. PICA</h5>
                  <p className="border-bottom border-dark">.</p>
                  <p className="border-bottom border-dark">.</p>
                  <p className="border-bottom border-dark">.</p>
                </div>

                {/* Tanda Tangan */}
                <div className="col-4 align-items-center">
                  <div className="d-flex gap-5">
                    <div className="text-center gap-5">
                      <p className="fw-normal text-serif fw-semibold">
                        Diperiksa oleh,
                      </p>
                      <img src={data?.ttd_diperiksa} width="100"/>
                      <p className="text-serif fw-normal">
                        {data.diperiksa}
                      </p>
                      <p className="border-top border-dark text-serif fw-semibold">
                        Group Leader
                      </p>
                    </div>
                    <div className="text-center gap-5">
                      <p className="fw-normal text-serif fw-semibold">
                        Disetujui oleh,
                      </p>
                      <img src={data?.ttd_disetujui} width="100"/>
                      <p className="text-serif fw-normal">
                        {data.diperiksa}
                      </p>
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
    </div>
  );
};

export default WithRouter(DaftarPeriksaGroupLeader);
