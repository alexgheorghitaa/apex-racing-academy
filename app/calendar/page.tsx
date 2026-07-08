import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calendar & Rezultate — Apex Racing Academy",
  description:
    "Calendarul competițiilor 2026 și arhiva de rezultate a clubului: titluri naționale la Viteză în Coastă și Super Slalom.",
};

const ETAPE = [
  { data: "25–26 apr", nume: "Etapa 1 — Viteză în Coastă", loc: "Coastă · Râșnov" },
  { data: "16–17 mai", nume: "Etapa 2 — Super Slalom", loc: "Slalom · Arad" },
  { data: "27–28 iun", nume: "Etapa 3 — Cupa de Karting", loc: "Karting · Prejmer Circuit" },
  { data: "12–13 sep", nume: "Etapa 4 — Viteză în Coastă", loc: "Coastă · Sinaia" },
];

export default function Calendar() {
  return (
    <>
      <header className="sub-head">
        <h1>Calendar 2026</h1>
        <p className="lead">Vino să ne vezi pe viu — etapele sezonului 2026.</p>
      </header>
      <div className="sub-body">
        <div className="sub-wrap">
          <div className="cal-list">
            {ETAPE.map((e) => (
              <div className="cal-row" key={e.nume}>
                <span className="cal-d">{e.data}</span>
                <div className="cal-n">
                  {e.nume}
                  <small>{e.loc}</small>
                </div>
                <span className="cal-s">Urmează</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Link className="btn-o" href="/contact">
              Anunță-mă la următoarea etapă
            </Link>
          </div>

          <section className="arch">
            <h2>Arhiva de rezultate</h2>
            <p className="arch-note">Selecție din rezultatele clubului.</p>
            <div className="arch-season">
              <h3>2025</h3>
              <div className="sub">Campionatul Național de Viteză în Coastă</div>
              <div className="arch-list">
                <div className="arch-row">
                  <div className="who">
                    Victor Ardelean
                    <small>clasa 7A · grupa 7 — titlu asigurat matematic cu două etape rămase</small>
                  </div>
                  <span className="res">Campion</span>
                </div>
                <div className="arch-row">
                  <div className="who">
                    Dan Mureșan
                    <small>clasa 6A · grupa 6</small>
                  </div>
                  <span className="res">Lider de clasă</span>
                </div>
              </div>
            </div>
            <div className="arch-season">
              <h3>2024</h3>
              <div className="sub">Super Slalom & Karting</div>
              <div className="arch-list">
                <div className="arch-row">
                  <div className="who">
                    Andrei Vulpe
                    <small>Super Slalom · clasa A3</small>
                  </div>
                  <span className="res">Campion Național</span>
                </div>
                <div className="arch-row">
                  <div className="who">
                    Radu Stancu
                    <small>Super Slalom · clasa M + Open</small>
                  </div>
                  <span className="res">2 titluri</span>
                </div>
                <div className="arch-row">
                  <div className="who">
                    Bianca Roman
                    <small>Karting · Junior — sezonul debutului ca antrenoare</small>
                  </div>
                  <span className="res">Campioană</span>
                </div>
              </div>
            </div>
            <div className="arch-season">
              <h3>Sezoanele 2021–2023</h3>
              <div className="sub">arhiva completă se adaugă în curând</div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
