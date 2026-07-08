import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parteneri — Apex Racing Academy",
  description:
    "Partenerii clubului și oportunități de parteneriat — brandul tău lângă povestea noii generații de piloți.",
};

const PARTENERI = [
  { nume: "TorqueWorks Service", rol: "Partener tehnic — pregătirea mașinilor" },
  { nume: "GripLab Anvelope", rol: "Partener oficial de anvelope" },
  { nume: "Meridian Logistics", rol: "Transportul mașinilor la etape" },
  { nume: "Vulcan Lubricants", rol: "Lubrifianți de competiție" },
  { nume: "Helios Energy", rol: "Partener principal al academiei de juniori" },
  { nume: "Corvin Media", rol: "Partener media — foto & video la etape" },
];

export default function Parteneri() {
  return (
    <>
      <header className="sub-head">
        <h1>Parteneri</h1>
        <p className="lead">Firmele care cred în următoarea generație de piloți.</p>
      </header>
      <div className="sub-body">
        <div className="sub-wrap">
          <div className="cols3">
            {PARTENERI.map((p) => (
              <div className="col3" key={p.nume}>
                <div className="logo-slot">{p.nume.split(" ")[0]}</div>
                <h3>{p.nume}</h3>
                <p>{p.rol}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <p className="prose" style={{ marginBottom: 26 }}>
              Vrei brandul tău lângă povestea juniorilor — cu cifre reale, nu promisiuni?
            </p>
            <Link className="btn-o" href="/contact">
              Devino partener
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
