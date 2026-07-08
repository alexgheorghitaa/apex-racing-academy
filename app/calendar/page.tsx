import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calendar & Results — Apex Racing Academy",
  description:
    "The 2026 calendar and the club's results archive: national titles in hillclimb and slalom, across European venues.",
};

const ROUNDS = [
  { date: "12–13 Apr", name: "Round 1 — Hillclimb", loc: "Hillclimb · Rechberg (AT)", status: "Finished" },
  { date: "17–18 May", name: "Round 2 — Slalom", loc: "Slalom · Osnabrück (DE)", status: "Finished" },
  { date: "21–22 Jun", name: "Round 3 — Karting Cup", loc: "Karting · Genk (BE)", status: "Finished" },
  { date: "12–13 Sep", name: "Round 4 — Hillclimb", loc: "Hillclimb · St-Ursanne (CH)", status: "Upcoming" },
];

export default function Calendar() {
  return (
    <>
      <header className="sub-head">
        <h1>2026 Calendar</h1>
        <p className="lead">Come and see us live — the season&apos;s rounds.</p>
      </header>
      <div className="sub-body">
        <div className="sub-wrap">
          <div className="cal-list">
            {ROUNDS.map((r) => (
              <div className="cal-row" key={r.name}>
                <span className="cal-d">{r.date}</span>
                <div className="cal-n">
                  {r.name}
                  <small>{r.loc}</small>
                </div>
                <span className="cal-s">{r.status}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Link className="btn-o" href="/contact">
              Notify me about the next round
            </Link>
          </div>

          <section className="arch">
            <h2>Results archive</h2>
            <p className="arch-note">A selection of the club&apos;s results.</p>
            <div className="arch-season">
              <h3>2025</h3>
              <div className="sub">European Hillclimb Championship</div>
              <div className="arch-list">
                <div className="arch-row">
                  <div className="who">
                    Lukas Brandt
                    <small>Group E1 · Cat 2 — title secured with two rounds to spare</small>
                  </div>
                  <span className="res">Champion</span>
                </div>
                <div className="arch-row">
                  <div className="who">
                    Marco Bianchi
                    <small>Group N · up to 2000cc</small>
                  </div>
                  <span className="res">Class leader</span>
                </div>
              </div>
            </div>
            <div className="arch-season">
              <h3>2024</h3>
              <div className="sub">Slalom &amp; Karting</div>
              <div className="arch-list">
                <div className="arch-row">
                  <div className="who">
                    Thomas Meyer
                    <small>Slalom · Class A3</small>
                  </div>
                  <span className="res">National Champion</span>
                </div>
                <div className="arch-row">
                  <div className="who">
                    Julian Devos
                    <small>Slalom · Class M + Open</small>
                  </div>
                  <span className="res">2 titles</span>
                </div>
                <div className="arch-row">
                  <div className="who">
                    Sofia Lindqvist
                    <small>Karting · Junior — final season before moving into coaching</small>
                  </div>
                  <span className="res">Champion</span>
                </div>
              </div>
            </div>
            <div className="arch-season">
              <h3>Seasons 2021–2023</h3>
              <div className="sub">full archive coming soon</div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
