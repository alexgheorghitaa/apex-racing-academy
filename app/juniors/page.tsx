import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Juniors — Apex Racing Academy",
  description:
    "The academy's junior drivers: from the first time behind the wheel to the podium. Images of minors are published only with written parental consent.",
};

export default function Juniors() {
  return (
    <>
      <header className="sub-head">
        <h1>Juniors</h1>
        <p className="lead">The future of the club is already on the grid.</p>
      </header>
      <div className="sub-body">
        <div className="sub-wrap">
          <h2 className="jr-quote">
            First time behind the wheel. Three months later — <span className="hl">a podium in the Junior class.</span>
          </h2>
          <div className="jr-meta">
            <b>Luca Moreau, 12</b> — podium in the Junior class in his first karting season
            <br />
            <b>Mia Bergström, 13</b> — P2 in the Junior class
            <br />+ a whole generation coming up through karting, from the very first laps
          </div>
          <div className="prose" style={{ marginTop: 30 }}>
            <p>
              This isn&apos;t talent out of nowhere: Luca had a properly prepared kart, mentors with
              national titles, and a real racing calendar.
            </p>
          </div>
          <div className="rule-box">
            <h3>We protect the kids, no exceptions</h3>
            <p>
              Images of juniors are published only with written parental consent. Here, safety and
              schooling come before any like.
            </p>
          </div>
          <div className="steps3">
            <div className="step3">
              <div className="n">1</div>
              <h3>Get in touch</h3>
              <p>A message by email or through the form — tell us your child&apos;s age and what draws them to motorsport.</p>
            </div>
            <div className="step3">
              <div className="n">2</div>
              <h3>Come to a round</h3>
              <p>See a race day up close — child and parents, alongside the team.</p>
            </div>
            <div className="step3">
              <div className="n">3</div>
              <h3>First steps</h3>
              <p>Programme, terms and costs — discussed openly, before any commitment.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link className="btn-o" href="/contact">
              Tell us about your child
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
