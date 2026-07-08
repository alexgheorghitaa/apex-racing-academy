import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Juniorii — Apex Racing Academy",
  description:
    "Piloții juniori ai academiei: de la primul volan la podium. Imaginile cu minori apar doar cu acordul scris al părinților.",
};

export default function Juniorii() {
  return (
    <>
      <header className="sub-head">
        <h1>Juniorii</h1>
        <p className="lead">Viitorul clubului e deja pe grilă.</p>
      </header>
      <div className="sub-body">
        <div className="sub-wrap">
          <p className="jr-quote">
            Primul volan. Trei luni mai târziu — <span className="hl">podium la clasa juniori.</span>
          </p>
          <div className="jr-meta">
            <b>Luca Pavel, 12 ani</b> — podium la clasa juniori în primul sezon de karting
            <br />
            <b>Maia Ionescu, 13 ani</b> — locul 2 în clasamentul Junior 1
            <br />+ generația care vine din karting și dexteritate
          </div>
          <div className="prose" style={{ marginTop: 30 }}>
            <p>
              Nu e talent picat din cer: Luca a avut un kart pregătit corect, mentori cu titluri
              naționale și un calendar adevărat de competiții.
            </p>
          </div>
          <div className="rule-box">
            <h4>Protejăm copiii, fără excepție</h4>
            <p>
              Imaginile cu juniori apar public doar cu acordul scris al părinților. La noi, siguranța
              și școala vin înaintea oricărui like.
            </p>
          </div>
          <div className="steps3">
            <div className="step3">
              <div className="n">1</div>
              <h4>Ne scrii</h4>
              <p>Un mesaj pe email sau prin formular — ne spui vârsta copilului și ce îl atrage la motorsport.</p>
            </div>
            <div className="step3">
              <div className="n">2</div>
              <h4>Veniți la o etapă</h4>
              <p>Vedeți de aproape cum arată o zi de cursă — copil și părinți, împreună cu echipa.</p>
            </div>
            <div className="step3">
              <div className="n">3</div>
              <h4>Primii pași</h4>
              <p>Program, condiții și costuri — discutate deschis, înainte de orice angajament.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link className="btn-o" href="/contact">
              Scrie-ne despre copilul tău
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
