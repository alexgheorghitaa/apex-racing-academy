import type { Metadata } from "next";
import Photo from "@/components/photo";

export const metadata: Metadata = {
  title: "The Club — Apex Racing Academy",
  description:
    "Apex Racing Academy — a European motorsport club led by Lukas Brandt, multiple national and European hillclimb champion.",
};

export default function Club() {
  return (
    <>
      <header className="sub-head">
        <h1>The Club</h1>
        <p className="lead">A club that wins — and raises the next generation.</p>
      </header>
      <div className="sub-body">
        <div className="sub-wrap">
          <div className="prose">
            <p>
              Apex Racing Academy is a European motorsport club led by{" "}
              <b>Lukas Brandt — multiple national and European hillclimb champion</b>. We compete at
              national level across three disciplines, and our mission goes beyond trophies: we
              develop junior drivers, from their first time behind the wheel to national competition.
            </p>
            <p>
              <b>Performance here isn&apos;t bought — it&apos;s built.</b> In our workshop, the cars are
              prepared by our own hands, and the juniors learn from drivers with national titles and
              international experience.
            </p>
            <p>
              Season after season, we carry the club&apos;s colours across Europe — from the Alpine
              hillclimbs to the karting circuits of the Benelux.
            </p>
            <span className="badge-line">Registered sports club</span>
          </div>

          <h2 className="sr-only">The people behind the club</h2>
          <div className="cols3">
            <div className="col3">
              <Photo variant="p-portrait" label="Lukas in the paddock" />
              <h3>Lukas Brandt</h3>
              <div className="role">President · National &amp; European Hillclimb Champion</div>
              <p>
                Multiple champion — back-to-back titles in hillclimb. Mentor to the entire junior
                generation.
              </p>
            </div>
            <div className="col3">
              <Photo variant="p-slalom" label="competition car on track" />
              <h3>Sofia Lindqvist</h3>
              <div className="role">European Karting Champion</div>
              <p>
                Raised in karting from age eight, European junior champion — today head coach of the
                academy&apos;s youngest drivers.
              </p>
            </div>
            <div className="col3">
              <Photo variant="p-podium" label="prize-giving, trophies on show" />
              <h3>The title team</h3>
              <div className="role">Slalom — 3 national titles</div>
              <p>
                Thomas Meyer and Julian Devos — three national slalom titles; Marco Bianchi — class
                leader in hillclimb.
              </p>
            </div>
          </div>

          <section className="press-wrap">
            <h2>The club in numbers</h2>
            <div className="press-grid">
              <div className="press-card">
                <q>Six national titles in five seasons — hillclimb and slalom</q>
                <span className="src">Track record</span>
              </div>
              <div className="press-card">
                <q>40+ national podiums, across every discipline the club races</q>
                <span className="src">Results</span>
              </div>
              <div className="press-card">
                <q>12 juniors in the academy — from 8 to 16, karting to hillclimb</q>
                <span className="src">Academy</span>
              </div>
            </div>
            <p className="press-note">Full numbers in the results archive</p>
          </section>
        </div>
      </div>
    </>
  );
}
