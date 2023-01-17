import React from "react";
import { WithRouter } from "../../utils/Navigation";

import { Table } from "react-bootstrap";
import LogoRiung from "../../assets/logo-riung.jpg";
import "../../styles/App.css";

const BeritaAcaraPeledakan = () => {
  return (
    <div className="container-fluid">
      <div className="mt-1 mb-1">
        <p className="text-end fst-italic">FRM-OPR-014</p>
        <div className="border border-3 border-dark">
          <div className="p-3">
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
                      <h5 className="fw-bold header-pt">
                        PT. RIUNG MITRA LESTARI PRODUCTION DEPARTMENT JOB SITE
                        MGM
                      </h5>
                    </div>
                  </th>
                  <div className="vr" style={{ height: 80 }}></div>
                  <th className="col-8">
                    <h1 className="header-drill mb-3">
                      BERITA ACARA PELEDAKAN
                    </h1>
                    <h5 className="text-center">NO : …… / …… / ……. / …….</h5>
                  </th>
                </thead>
              </table>
              <hr className="w-100 solid"/>

              {/* Header Content */}
              <div className="mb-2">
                <p>Telah dilaksanakan peledakan,</p>
                <p>Dilokasi:<span className="text-black">Pit East Kawi – Ekspose Seam 5</span></p>
                <p>Pada tanggal: <span className="text-black"> 8 - 11- 2022 </span></p>
                <p>Pada jam: <span className="text-black">12:30 WIB</span></p>
                <p>Nama juru ledak: <span className="text-black">Heri. P</span></p>
              </div>

              <Table responsive bordered>
                <thead>
                  <tr>
                    <th rowSpan={2} width="3%" className="text-center align-middle fw-normal">No</th>
                    <th rowSpan={2} width="30%" className="text-center align-middle fw-normal">Subjek</th>
                    <th rowSpan={2} width="5%" className="text-center align-middle fw-normal">Satuan</th>
                    <th rowSpan={2} width="10%" className="text-center align-middle fw-normal">Pelaksanaan</th>
                    <th colSpan={2} width="30%" className="text-center align-middle fw-normal">Penyimpangan Rencana</th>
                    <th rowSpan={2} width="22" className="text-center align-middle fw-normal">Alasan Penyimpangan</th>
                  </tr>
                  <tr>
                    <th width="11%" className="text-center align-middle fw-normal">Ditambah</th>
                    <th width="11%" className="text-center align-middle fw-normal">Dikembalikan</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>1</td>
                    <td className="text-start">Jumlah lubang</td>
                    <td>Lubang</td>
                    <td className="text-black">70</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="text-start">Ammonium Nitrate</td>
                    <td>kg</td>
                    <td className="text-black">4800</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td className="text-start">Emulsion</td>
                    <td>kg</td>
                    <td className="text-black">-</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td className="text-start">Dynamite</td>
                    <td>kg</td>
                    <td className="text-black">35</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td className="text-start">Electric Detonator No. 8 Instantaneous</td>
                    <td>Pcs</td>
                    <td className="text-black">1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="align-middle">
                    <td rowSpan={4}>6</td>
                    <td className="text-start">
                      <p>MS Connector:</p>
                      <p>EXEL TLD 17 …. MS</p>
                    </td>
                    <td>EA</td>
                    <td className="text-black">20</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-start">
                      <p>MS Connector:</p>
                      <p>EXEL TLD 25 …. MS</p>
                    </td>
                    <td>EA</td>
                    <td className="text-black">20</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-start">
                      <p>MS Connector:</p>
                      <p>EXEL TLD 65 …. MS</p>
                    </td>
                    <td>EA</td>
                    <td className="text-black">20</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-start">
                      <p>MS Connector:</p>
                      <p>EXEL MS D 12. 12 M</p>
                    </td>
                    <td>EA</td>
                    <td className="text-black">20</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td className="text-start">Booster 400 gr</td>
                    <td>EA</td>
                    <td className="text-black">1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>

              {/* Content Bottom */}
              <Table responsive bordered>
                <thead>
                  <tr className="text-center align-middle">
                    <th rowSpan={5} className="fw-normal">
                      <p>Dibuat Oleh,</p>
                      <p>JURU LEDAK</p>
                      <p className="mt-5">(Heri. P)</p>
                    </th>
                    <th className="fw-normal" colSpan={3}>Diketahui oleh,</th>
                    <th className="fw-normal" colSpan={3}>Disetujui oleh,</th>
                  </tr>
                  <tr className="text-center align-middle">
                    <th className="fw-normal">JABATAN</th>
                    <th className="fw-normal">NAMA</th>
                    <th className="fw-normal">Tanda Tangan</th>
                    <th className="fw-normal">JABATAN</th>
                    <th className="fw-normal">NAMA</th>
                    <th className="fw-normal">Tanda Tangan</th>
                  </tr>
                  <tr className="text-center align-middle">
                    <th className="fw-normal">POLISI</th>
                    <th className="fw-normal"></th>
                    <th className="fw-normal"></th>
                    <th className="fw-normal">Kepala Teknik Tamban</th>
                    <th className="fw-normal"></th>
                    <th className="fw-normal"></th>
                  </tr> 
                  <tr className="text-center align-middle">
                    <th className="fw-normal">SATPAM</th>
                    <th className="fw-normal"></th>
                    <th className="fw-normal"></th>
                    <th className="fw-normal">Kepala Gudang Handak</th>
                    <th className="fw-normal"></th>
                    <th className="fw-normal"></th>
                  </tr> 
                  <tr className="text-center align-middle">
                    <th className="fw-normal"></th>
                    <th className="fw-normal"></th>
                    <th className="fw-normal"></th>
                    <th className="fw-normal">Drill & Blast Group Leader</th>
                    <th className="fw-normal"></th>
                    <th className="fw-normal"></th>
                  </tr> 
                </thead>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(BeritaAcaraPeledakan);
