import React, { useState, useEffect } from "react";
import { WithRouter } from "../../utils/Navigation";
import axios from "axios";

import lubang1 from "../../assets/lubang_1.jpg";
import lubang2 from "../../assets/lubang_2.jpg";
import lubang3 from "../../assets/lubang_3.jpg";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const BlastDesign = () => {
  const [tableInhale, setTableInhale] = useState([]);
  const [loading, setLoading] = useState(true);

  // Data Luar
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");
  const [dibuat, setDibuat] = useState("");
  const [diterima, setDiterima] = useState("");
  const [data_report, setDataReport] = useState({
    powder_faktor_plan: "",
    powder_factor_aktual: "",
    volume_aktual: "",
    volume_plan: "",
  });
  const [ttd, setTTD] = useState({
    ttd_dibuat_oleh: "",
    ttd_diterima_oleh: "",
    jabatan_dibuat_oleh: "",
    jabatan_diterima_oleh: "",
  });

  // Lokasi Drilling
  const [pit, setPit] = useState("");
  const [blok, setBlok] = useState("");
  const [strip, setStrip] = useState("");
  const [elev, setElev] = useState("");
  const [rl, setRl] = useState("");

  // Geometri Peledakan
  const [hole_diameter, setHoleDiameter] = useState("");
  const [depth, setDepth] = useState("");
  const [burden, setBurden] = useState("");
  const [spacing, setSpacing] = useState("");
  const [steaming, setSteaming] = useState("");
  const [subdrill, setSubdrill] = useState("");
  const [delay_pattern, setDelay_pattern] = useState("");
  const [total_hole, setTotal_hole] = useState("");

  // Bahan Peledak Yang akan digunakan
  const [ammonium_nitrate, setAmmoniumNitrate] = useState("");
  const [emulsion, setEmulsion] = useState("");
  const [primer_booster, setPrimerBooster] = useState("");
  const [power_gel, setPowerGel] = useState("");
  const [elec_detonator, setElecDetonator] = useState("");
  const [exel_17_m, setExel17m] = useState("");
  const [exel_17_pcs, setExel17pcs] = useState("");
  const [exel_25_ms, setExel25ms] = useState("");
  const [exel_25_pcs, setExel25pcs] = useState("");
  const [exel_42_m, setExel42m] = useState("");
  const [exel_42_pcs, setExel42pcs] = useState("");
  const [exel_65_m, setExel65m] = useState("");
  const [exel_65_pcs, setExel65pcs] = useState("");

  // Powder Faktor
  const [powder_factor_plan, setPowderFactorPlan] = useState("");

  const windowUrl = window.location.search;
  const queryParams = new URLSearchParams(windowUrl);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .post(
        "https://gateway.jojonomic.com/v1/nocode/api/rios/generate-pdf/blast-design",
        {
          data: {
            id_blast_design: queryParams.get("id_blast_design"),
            lokasi_pkh_id: queryParams.get("lokasi_pkh_id"),
          },
        }
      )
      .then((res) => {
        const { data } = res;

        // Data Luar
        setTanggal(data[0]?.tanggal);
        setJam(data[0]?.jam);
        setDibuat(data[0]?.dibuat_oleh);
        setDiterima(data[0]?.diterima_oleh);
        setDataReport({
          powder_faktor_plan: data[0]?.powder_faktor_plan,
          powder_factor_aktual: data[0]?.powder_factor_aktual,
          volume_aktual: data[0]?.volume_aktual,
          volume_plan: data[0]?.volume_plan,
        });
        setTTD({
          ttd_dibuat_oleh: data[0]?.ttd_dibuat_oleh,
          ttd_diterima_oleh: data[0]?.ttd_diterima_oleh,
          jabatan_dibuat_oleh: data[0]?.jabatan_dibuat_oleh,
          jabatan_diterima_oleh: data[0]?.jabatan_diterima_oleh,
        });

        // Lokasi Drilling
        setPit(data[0]?.pit);
        setBlok(data[0]?.blok);
        setStrip(data[0]?.blok_seam);
        setElev(data[0]?.elv_aktual);
        setRl(data[0]?.rl);

        // Geometri Peledakan
        setHoleDiameter(data[0]?.hole_diameter);
        setDepth(data[0]?.depth);
        setBurden(data[0]?.burden);
        setSpacing(data[0]?.spacing);
        setSteaming(data[0]?.steaming);
        setSubdrill(data[0]?.subdrill);
        setDelay_pattern(data[0]?.delay_pattern);
        setTotal_hole(data[0]?.total_hole);

        // Bahan Peledak Yang akan digunakan
        setAmmoniumNitrate(data[0]?.ammonium_nitrate);
        setEmulsion(data[0]?.emulsion);
        setPrimerBooster(data[0]?.primer_booster);
        setPowerGel(data[0]?.power_gel);
        setElecDetonator(data[0]?.elec_detonator);
        setExel17m(data[0]?.exel_17_m);
        setExel17pcs(data[0]?.exel_17_pcs);
        setExel25ms(data[0]?.exel_25_ms);
        setExel25pcs(data[0]?.exel_25_pcs);
        setExel42m(data[0]?.exel_42_m);
        setExel42pcs(data[0]?.exel_42_pcs);
        setExel65m(data[0]?.exel_65_m);
        setExel65pcs(data[0]?.exel_65_pcs);

        // Powder Faktor
        if (data[0] && data[0].powder_factor_plan) {
          setPowderFactorPlan(data[0]?.powder_factor_plan);
        }

        // Table Inhole Delay
        if (data && data[0].inhole_delay) {
          const result = data[0].inhole_delay.map((item, index) => {
            const { exel_det_m, exel_det_pcs, exel_detonator_d } = item;
            return {
              id: index,
              exel_det_m,
              exel_det_pcs,
              exel_detonator_d,
            };
          });
          setTableInhale(result);
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

  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM-OPR-012</p>
        <div className="border border-3 border-dark">
          <div className="p-3">
            <div className="row align-items-center">
              {/* Header Table */}
              <table className="table">
                <thead>
                  <th className="col-4">
                    {" "}
                    <div className="d-flex gap-3 align-items-center mb-6">
                      <img
                        className="pl-2 logo-riung"
                        src={LogoRiung}
                        width="120"
                        height="60"
                        alt="Logo RIUNG"
                      />
                      <h5 className="fw-bold header-pt">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                        MGM
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-5">
                    <h1 className="header-drill mb-5">BLAST DESIGN</h1>
                  </th>
                  <div className="vr" style={{ height: 100 }}></div>
                  <th className="col-3">
                    <div className="mb-2">
                      <p className="mb-2 px-2 fw-bold text-alat fs-6 pb-2">
                        WAKTU PELEDAKAN
                      </p>
                      <p className="mb-2 px-2 fw-normal text-alat border-bottom border-1 pb-2">
                        Tanggal: {tanggal}
                      </p>
                      <p className="mb-2 px-2 fw-normal text-alat border-bottom border-1 pb-1">
                        Jam: {jam}
                      </p>
                    </div>
                  </th>
                </thead>
              </table>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: "40%" }}>
                        <h5 className="fs-6 fw-semibold p-1">
                          LOKASI <span className="fst-italic">DRILLING</span>
                        </h5>
                        <div className="p-1 fs-6 fw-normal">
                          <p className="px-3">PIT: {pit}</p>
                          <p className="px-3">BLOK: {blok}</p>
                          <p className="px-3">STRIP: {strip}</p>
                          <p className="px-3">ELEV.: {elev}</p>
                          <p className="px-3 pb-1">RL: {rl}</p>
                        </div>
                      </th>
                      <th
                        rowSpan={3}
                        style={{ verticalAlign: "top", width: "50%" }}
                        className="fw-semibold"
                      >
                        <h5 className="fs-6 p-1 fw-semibold">SKETSA</h5>
                        {/* <img
                          src={sketsa}
                          alt="Gambar Sketsa"
                          width="100px"
                        /> */}
                      </th>
                    </tr>

                    <tr>
                      <th style={{ width: "40%" }}>
                        <h5 className="fs-6 fw-semibold p-1">
                          GEOMETRI PELEDAKAN:
                        </h5>
                        <div className="d-flex gap-4 pb-1">
                          <div className="p-1 fs-6 fw-normal">
                            <p className="px-3 text-sm">
                              Hole Diameter : {hole_diameter}
                            </p>
                            <p className="px-3 text-sm">Burden : {burden} M</p>
                            <p className="px-3 text-sm">
                              Steaming : {steaming} M
                            </p>
                            <p className="px-3 text-sm">
                              Delay Pattern : {delay_pattern}
                            </p>
                          </div>
                          <div className="p-1 fs-6 fw-normal">
                            <p className="px-3 text-sm">Depth : {depth} M</p>
                            <p className="px-3 text-sm">
                              Spacing : {spacing} M
                            </p>
                            <p className="px-3 text-sm">
                              Sub drill : {subdrill} M
                            </p>
                            <p className="px-3 text-sm">
                              Total Holes : {total_hole}
                            </p>
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th style={{ width: "40%" }}>
                        <h5 className="fs-6 fw-semibold p-1">
                          BAHAN PELEDAK YANG AKAN DIGUNAKAN
                        </h5>
                        <p className="px-3 text-sm">
                          Ammonium Nitrate: {ammonium_nitrate} Kg
                        </p>
                        <p className="px-3 text-sm pb-3">
                          Emulsion: {emulsion} Kg
                        </p>

                        <p className="px-3 text-sm pb-3">
                          Primer (Boster): {primer_booster}
                        </p>
                        <p className="px-3 text-sm pb-3">
                          Power Gel: {power_gel} kg
                        </p>

                        <p className="px-3 text-sm pb-3">
                          Electric Detonator: {elec_detonator} pcs
                        </p>

                        <p className="px-3 text-sm pb-1">Surface Delay TLD: </p>
                        <div>
                          <p className="px-3 text-sm px-5 pb-2">
                            Exel 17 ms {exel_17_m} M : {exel_17_pcs} pcs
                          </p>
                          <p className="px-3 text-sm px-5 pb-2">
                            Exel 25 ms {exel_25_ms} M : {exel_25_pcs} pcs
                          </p>
                          <p className="px-3 text-sm px-5 pb-2">
                            Exel 42 ms {exel_42_m} M : {exel_42_pcs} pcs
                          </p>
                          <p className="px-3 text-sm px-5 pb-2">
                            Exel 65 ms {exel_65_m} M : {exel_65_pcs} pcs
                          </p>
                        </div>

                        <p className="px-3 text-sm">Inhole Delay:</p>

                        {/* Inhole Delay (Mapping) */}
                        {tableInhale?.map((item) => (
                          <div className="d-flex pb-1 gap-2">
                            <div className="p-1 fs-6 fw-normal">
                              <div>
                                <p className="px-3 text-sm">
                                  Exel Detonator D {item?.exel_detonator_d} ,{" "}
                                  {item.exel_det_m} M
                                </p>
                              </div>
                            </div>
                            <div className="p-1 fs-6 fw-normal">
                              <p className="px-3 text-sm">
                                : {item?.exel_det_pcs} Pcs
                              </p>
                            </div>
                          </div>
                        ))}

                        <p className="px-3 text-sm">
                          Cordtex : {powder_factor_plan} Mtr
                        </p>
                      </th>
                    </tr>

                    <tr style={{ width: "40%" }}>
                      <th className="text-center d-flex justify-content-evenly gap-2">
                        <div className="mt-5 mb-5">
                          <p className="fw-normal">Dibuat Oleh,</p>
                          <img src={ttd?.ttd_dibuat_oleh} width="100" />
                          <p className="fw-normal">({dibuat})</p>
                          <p className="fw-semibold">{ttd?.ttd_dibuat_oleh}</p>
                        </div>

                        <div className="mb-5 mt-5">
                          <p className="fw-normal">Diterima Oleh,</p>
                          <img src={ttd?.ttd_diterima_oleh} width="100" />
                          <p className="fw-normal">({diterima})</p>
                          <p className="fw-semibold">{ttd?.ttd_diterima_oleh}</p>
                        </div>
                      </th>
                      <th style={{ verticalAlign: "middle" }}>
                        <div className="d-flex justify-content-between px-5">
                          <div className="fw-normal">
                            <p>Keterangan:</p>
                            <p>Kode Kondisi Lubang</p>
                            <div className="d-flex gap-3 pb-3">
                              <img
                                src={lubang1}
                                alt="Lubang Satu"
                                width="22px"
                                height="24px"
                              />
                              <p>Lubang Kering</p>
                            </div>
                            <div className="d-flex gap-3 pb-3">
                              <img
                                src={lubang2}
                                alt="Lubang Satu"
                                width="22px"
                                height="24px"
                              />
                              <p>Lubang Basah</p>
                            </div>
                            <div className="d-flex gap-2">
                              <img
                                src={lubang3}
                                alt="Lubang Satu"
                                width="32px"
                                height="32px"
                              />
                              <p>Lubang Rusak</p>
                            </div>
                          </div>
                          {/* Volume (Missing) */}
                          <div>
                            <table className="table table-bordered">
                              <thead className="text-center">
                                <tr>
                                  <th className="fw-normal" colSpan={2}>
                                    Vol. By formula (BCM)
                                  </th>
                                </tr>
                                <tr>
                                  <th className="fw-normal">Plan</th>
                                  <th className="fw-normal">Actual</th>
                                </tr>
                                <tr>
                                  <th className="fw-normal fs-5 text-sm">
                                    {data_report?.volume_plan}
                                  </th>
                                  <th className="fw-normal fs-5">
                                    {data_report?.volume_aktual}
                                  </th>
                                </tr>
                                <tr>
                                  <th className="fw-normal" colSpan={2}>
                                    Powder Faktor (Kg / BCM)
                                  </th>
                                </tr>
                                <tr>
                                  <th className="fw-normal">
                                    {data_report?.powder_faktor_plan}
                                  </th>
                                  <th className="fw-normal">
                                    {data_report?.powder_factor_aktual}
                                  </th>
                                </tr>
                              </thead>
                            </table>
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

export default WithRouter(BlastDesign);
