import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const BlastingReport = () => {
  const [data, setData] = useState({
    // Data Luar
    jobsite: "",
    pit: "",
    shift: "",
    dilaporkan: "",
    disetujui: "",

    // Data Dalam
    tanggal: "",
    jam: "",
    lokasi: "",
    elevation: 0,
    total_unit_bor: 0,
    hole_diameter: 0,
    depth_hole: 0,
    number_of_hole: 0,

    // Data Dalam baris 2
    row: 0,
    burden: 0,
    spacing: 0,
    subdrill: 0,
    stemming: 0,
    volume_plan: 0,
    volume_aktual: 0,
    volume_recovery: 0,

    // Data Luar baris 3
    primer_booster: 0,
    power_gel: 0,
    ammonium_nitrate: 0,
    emulsion: 0,
    elec_det: 0,
    surface_delay_exel_17: 0,
    surface_delay_exel_25: 0,
    surface_delay_exel_42: 0,
    surface_delay_exel_65: 0,
    detonating_cord: 0,
    dth12m: 0,
    powder_faktor_plan: 0,
    powder_factor_aktual: 0,
    fragmentasi_persentase: 0,
    fragmentasi_attachment: 0,
    fragmentasi_baik_jelek: "",
    note: "",
  });

  const [others_1, setOthers1] = useState([]);
  const [others_2, setOthers2] = useState([]);
  const [others_3, setOthers3] = useState([]);
  const [others_4, setOthers4] = useState([]);
  const [others_5, setOthers5] = useState([]);
  const [others_6, setOthers6] = useState([]);
  const [jelek, setJelek] = useState("");
  const [bagus, setBagus] = useState("");

  const [loading, setLoading] = useState(true);

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/blasting-report",
        {
          data: {
            id_blasting_report: queryParams.get("id_blasting_report"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
          }
        }
      )
      .then((res) => {
        const { data } = res;

        setData({
          // Data Luar
          jobsite: data.jobsite,
          pit: data.pit,
          shift: data.shift.slice(-1),
          dilaporkan: data.dilaporkan_oleh,
          disetujui: data.disetujui,

          // Data Dalam
          tanggal: data.tanggal,
          jam: data.jam,
          lokasi: data.lokasi,
          elevation: data.elevation,
          total_unit_bor: data.total_unit_bor,
          hole_diameter: data.hole_diameter,
          depth_hole: data.depth_hole,
          number_of_hole: data.number_of_hole,

          // Data Dalam baris 2
          row: data.row,
          burden: data.burden,
          spacing: data.spacing,
          subdrill: data.subdrill,
          stemming: data.stemming,
          volume_plan: data.volume_plan,
          volume_aktual: data.volume_aktual,
          volume_recovery: data.volume_recovery,

          // Data Luar baris 3
          primer_booster: data.primer_booster,
          power_gel: data.power_gel,
          ammonium_nitrate: data.ammonium_nitrate,
          emulsion: data.emulsion,
          elec_det: data.elec_det,
          surface_delay_exel_17: data.surface_delay_exel_17,
          surface_delay_exel_25: data.surface_delay_exel_25,
          surface_delay_exel_42: data.surface_delay_exel_42,
          surface_delay_exel_65: data.surface_delay_exel_65,
          detonating_cord: data.detonating_cord,
          dth12m: data.dth12m,
          powder_faktor_plan: data.powder_faktor_plan,
          powder_factor_aktual: data.powder_factor_aktual,
          fragmentasi_persentase: data.fragmentasi_persentase
            ? data.fragmentasi_persentase
            : "",
          fragmentasi_attachment: data.fragmentasi_attachment,
          fragmentasi_baik_jelek: data.fragmentasi_baik_jelek,
          note: data.note,
        });

        // Cek Fragmentasi Jelek
        const checkerJelek = (data, set) => {
          if (data === "BAIK (>60cm : 0-10%)") {
            set(" ");
            return 1;
          } else if (data === "JELEK (>60cm : 0-10%)") {
            set("✓");
            return 1;
          }
          return 1;
        };

        // Cek Fragmentasi Bagus
        const checkerBagus = (data, set) => {
          if (data === "JELEK (>60cm : 0-10%)") {
            set(" ");
            return 1;
          } else if (data === "BAIK (>60cm : 0-10%)") {
            set("✓");
            return 1;
          }
          return 1;
        };

        checkerJelek(data.fragmentasi_baik_jelek, setJelek);
        checkerBagus(data.fragmentasi_baik_jelek, setBagus);

        // Cek Misfire
        if (data.others && Array.isArray(data.others)) {
          let foundMisfire = false;
          for (let i = 0; i < data.others.length; i++) {
            if (data.others[i].others === "Misfire") {
              foundMisfire = true;
              break;
            }
          }
          if (foundMisfire) {
            setOthers1("✓");
          }
        }
        // Cek Toe
        if (data.others && Array.isArray(data.others)) {
          let foundMisfire = false;
          for (let i = 0; i < data.others.length; i++) {
            if (data.others[i].others === "Toe") {
              foundMisfire = true;
              break;
            }
          }
          if (foundMisfire) {
            setOthers2("✓");
          }
        }
        // Cek Backbreak
        if (data.others && Array.isArray(data.others)) {
          let foundMisfire = false;
          for (let i = 0; i < data.others.length; i++) {
            if (data.others[i].others === "Backbreak") {
              foundMisfire = true;
              break;
            }
          }
          if (foundMisfire) {
            setOthers3("✓");
          }
        }
        // Cek Heave Effect
        if (data.others && Array.isArray(data.others)) {
          let foundMisfire = false;
          for (let i = 0; i < data.others.length; i++) {
            if (data.others[i].others === "Heave Effect") {
              foundMisfire = true;
              break;
            }
          }
          if (foundMisfire) {
            setOthers4("✓");
          }
        }
        // Cek Vibration
        if (data.others && Array.isArray(data.others)) {
          let foundMisfire = false;
          for (let i = 0; i < data.others.length; i++) {
            if (data.others[i].others === "Vibration") {
              foundMisfire = true;
              break;
            }
          }
          if (foundMisfire) {
            setOthers5("✓");
          }
        }
        // Air Wave
        if (data.others && Array.isArray(data.others)) {
          let foundMisfire = false;
          for (let i = 0; i < data.others.length; i++) {
            if (data.others[i].others === "Air Wave") {
              foundMisfire = true;
              break;
            }
          }
          if (foundMisfire) {
            setOthers6("✓");
          }
        }

        console.log(data.note);
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
        <p className="text-end fst-italic">FRM-OPR-012</p>
        <div className="border border-3 border-dark">
          <div className="p-2">
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
                <thead>
                  <th className="col-4">
                    {" "}
                    <div className="d-flex gap-3 align-items-center mb-3">
                      <img
                        className="pl-2"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold header-pt2">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE{" "}
                        {data.jobsite}
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-5">
                    <h1 className="header-drill mb-6">BLASTING REPORT</h1>
                  </th>
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-3 align-bottom">
                    <div className="mb-2">
                      <p className="mb-2 px-2 fw-normal text-alat border-bottom border-1 pb-2">
                        PIT: <span className="text-black">{data.pit}</span>
                      </p>
                      <p className="mb-2 px-2 fw-normal text-alat border-bottom border-1 mr-2 pt-2">
                        SHIFT: <span className="text-black">{data.shift}</span>
                      </p>
                    </div>
                  </th>
                </thead>
              </table>

              {/* Content Bottom */}
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th width="40%">
                        <div className="p-1 fs-6 fw-normal text-pdf-1">
                          <p className="px-3 text-pdf-1">
                            Date : {data.tanggal}
                          </p>
                          <p className="px-3 text-pdf-1">
                            Time : {data.jam} WIB
                          </p>
                          <p className="px-3 text-pdf-1">
                            Location : {data.lokasi}
                          </p>
                          <p className="px-3 text-pdf-1">
                            Elevation : {data.elevation}
                          </p>
                          <p className="px-3 text-pdf-1">
                            Total Unit Bor : {data.total_unit_bor}
                          </p>
                          <p className="px-3 text-pdf-1">
                            Hole diameter : {data.hole_diameter} inch
                          </p>
                          <p className="px-3 text-pdf-1">
                            Depth hole : {data.depth_hole} meter
                          </p>
                          <p className="px-3 text-pdf-1">
                            Number of hole : {data.number_of_hole}
                          </p>
                        </div>
                      </th>
                      {/* Image */}
                      <th
                        width="30%"
                        rowSpan={3}
                        className="fw-semibold align-top"
                      >
                        <img
                          src={data?.fragmentasi_attachment}
                          alt="Attachment"
                          width="500px"
                        />
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <div className="p-1 fs-6 fw-normal text-pdf-1">
                          <p className="px-3 text-pdf-1">Row : {data.row} </p>
                          <p className="px-3 text-pdf-1">
                            Burden : {data.burden} Meter
                          </p>
                          <p className="px-3 text-pdf-1">
                            Spacing : {data.spacing} Meter
                          </p>
                          <p className="px-3 text-pdf-1">
                            Subdrill : {data.subdrill} Meter
                          </p>
                          <p className="px-3 text-pdf-1">
                            Stemming: {data.stemming} Meter
                          </p>
                          <p className="px-3 text-pdf-1">Volume</p>
                          <p className="px-4 text-pdf-1">
                            - Plan : {data.volume_plan} Bcm
                          </p>
                          <p className="px-4 text-pdf-1">
                            - Aktual : {data.volume_aktual} Bcm
                          </p>
                          <p className="px-4 text-pdf-1">
                            - Recovery : {data.volume_recovery}%
                          </p>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th rowSpan={2}>
                        <h5 className="fs-6 text-decoration-underline fw-semibold p-1">
                          EXPLOSIVE USAGE :
                        </h5>
                        <p className="px-2 fw-normal text-pdf-1">
                          Primer (Booster) : {data.primer_booster} Kg
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Power Gel : {data.power_gel} Kg
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Ammonium Nitrate : {data.ammonium_nitrate} Kg
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Emulsion : {data.emulsion} Kg
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Electric Detonator : {data.elec_det} pcs
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Surface Delay TLD :
                        </p>
                        <p className="px-3 fw-normal text-pdf-1">
                          Exel 17 ms : {data.surface_delay_exel_17} pcs
                        </p>
                        <p className="px-3 fw-normal text-pdf-1">
                          Exel 25 ms : {data.surface_delay_exel_25} pcs
                        </p>
                        <p className="px-3 fw-normal text-pdf-1">
                          Exel 42 ms : {data.surface_delay_exel_42} pcs
                        </p>
                        <p className="px-3 fw-normal text-pdf-1">
                          Exel 65 ms : {data.surface_delay_exel_65} pcs
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Detonating Cord : {data.detonating_cord} Mtr
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          DTH12M : {data.dth12m} pcs
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Powder Factor : {data.powder_faktor_plan} Kg/Bcm
                        </p>
                        <p className="px-2 fw-normal text-pdf-1">
                          Blasting Ratio : {data.powder_factor_aktual} Bcm/Kg
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <th className="align-middle">
                        <div className="d-flex justify-content-between">
                          <div className="px-3">
                            <div className="px-2">
                              <p className="fw-normal">
                                Fragmentasi : {data.fragmentasi_persentase} %
                                &gt; 60cm
                              </p>
                              <div className="d-flex gap-2 align-items-center">
                                <p className="fw-normal pl-5">
                                  BAIK ({">"}60cm : 0-10%)
                                </p>
                                <p className="border border-1 px-2">{bagus}</p>
                              </div>
                              <div className="d-flex gap-2 align-items-center">
                                <p className="fw-normal pl-5">
                                  JELEK (&gt;60cm : &gt;10%)
                                </p>
                                <p className="border border-1 px-2">{jelek}</p>
                              </div>
                            </div>
                            {/* Data Others */}
                            <div className="p-2">
                              <p className="fw-normal">Others :</p>
                              <div className="d-flex gap-5">
                                <ul className="fw-normal">
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">
                                      {others_1}
                                    </p>
                                    <p>misfire</p>
                                  </div>
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">
                                      {others_2}
                                    </p>
                                    <p>toe</p>
                                  </div>
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">
                                      {others_3}
                                    </p>
                                    <p>backbreak</p>
                                  </div>
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">
                                      {others_4}
                                    </p>
                                    <p>heave effect</p>
                                  </div>
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">
                                      {others_5}
                                    </p>
                                    <p>vibration</p>
                                  </div>
                                  <div className="d-flex gap-2 align-items-center">
                                    <p className="border border-1 px-2">
                                      {others_6}
                                    </p>
                                    <p>air wave</p>
                                  </div>
                                </ul>
                                <p className="fw-normal">
                                  <u>Note:</u> {data.note}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="px-5 border-start border-1">
                            <div className="d-flex gap-5">
                              <div className="mt-5 mb-5 text-center">
                                <p className="fw-normal">Dilaporkan,</p>
                                <p className="fw-normal mt-5">
                                  ({data.dilaporkan})
                                </p>
                                <p className="text-lg fw-semibold">
                                  Drill & Blast Eng
                                </p>
                              </div>
                              <div className="mb-5 mt-5 text-center">
                                <p className="fw-normal">Disetujui,</p>
                                <p className="fw-normal mt-5">
                                  ({data.disetujui})
                                </p>
                                <p className="text-lg fw-semibold">
                                  Drill & Blast Eng
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(BlastingReport);
