import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners — Apex Racing Academy",
  description:
    "The club's partners and partnership opportunities — put your brand alongside the next generation of racers.",
};

const PARTNERS = [
  { name: "TorqueWorks Service", role: "Technical partner — car preparation" },
  { name: "GripLab Tyres", role: "Official tyre partner" },
  { name: "Meridian Logistics", role: "Transport of the cars to every round" },
  { name: "Vulcan Lubricants", role: "Competition lubricants" },
  { name: "Helios Energy", role: "Principal partner of the junior academy" },
  { name: "Corvin Media", role: "Media partner — photo & video at every round" },
];

export default function Partners() {
  return (
    <>
      <header className="sub-head">
        <h1>Partners</h1>
        <p className="lead">The companies that believe in the next generation of racers.</p>
      </header>
      <div className="sub-body">
        <div className="sub-wrap">
          <h2 className="sr-only">Our partners</h2>
          <div className="cols3">
            {PARTNERS.map((p) => (
              <div className="col3" key={p.name}>
                <div className="logo-slot">{p.name.split(" ")[0]}</div>
                <h3>{p.name}</h3>
                <p>{p.role}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <p className="prose" style={{ marginBottom: 26 }}>
              Want your brand alongside the juniors&apos; story — with real numbers, not promises?
            </p>
            <Link className="btn-o" href="/contact">
              Become a partner
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
