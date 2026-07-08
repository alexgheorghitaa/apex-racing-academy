import type { Metadata } from "next";
import Photo from "@/components/photo";

export const metadata: Metadata = {
  title: "Clubul — Apex Racing Academy",
  description:
    "Apex Racing Academy — club de motorsport condus de Victor Ardelean, campion național multiplu la Viteză în Coastă.",
};

export default function Clubul() {
  return (
    <>
      <header className="sub-head">
        <h1>Clubul</h1>
        <p className="lead">Un club care câștigă — și crește următoarea generație.</p>
      </header>
      <div className="sub-body">
        <div className="sub-wrap">
          <div className="prose">
            <p>
              Apex Racing Academy e un club de motorsport condus de{" "}
              <b>Victor Ardelean — campion național multiplu la Viteză în Coastă</b>. Concurăm la
              nivel național în trei discipline, iar misiunea noastră merge dincolo de trofee:
              creștem piloți juniori, de la primul contact cu volanul până în competiții naționale.
            </p>
            <p>
              <b>Aici nu se cumpără performanța — se construiește.</b> În garajul nostru, mașinile
              se pregătesc cu mâinile noastre, iar juniorii învață de la piloți cu titluri naționale
              și experiență internațională.
            </p>
            <p>
              Sezon de sezon, purtăm culorile clubului în toată țara — de la urcările de la Râșnov
              și Sinaia la circuitele de karting din Transilvania.
            </p>
            <span className="badge-line">Club sportiv înregistrat</span>
          </div>

          <h2 className="sr-only">Oamenii clubului</h2>
          <div className="cols3">
            <div className="col3">
              <Photo variant="p-portrait" label="Victor în paddock" />
              <h3>Victor Ardelean</h3>
              <div className="role">Președinte · Campion Național Viteză în Coastă</div>
              <p>
                Campion național multiplu — titluri consecutive la Viteză în Coastă. Mentorul
                întregii generații de juniori.
              </p>
            </div>
            <div className="col3">
              <Photo variant="p-slalom" label="mașină de competiție pe traseu" />
              <h3>Bianca Roman</h3>
              <div className="role">Campioană Națională Karting</div>
              <p>
                Crescută în karting de la 8 ani, campioană națională la juniori — azi antrenoarea
                celor mai mici piloți ai academiei.
              </p>
            </div>
            <div className="col3">
              <Photo variant="p-podium" label="premieri, trofee la vedere" />
              <h3>Echipa de titluri</h3>
              <div className="role">Super Slalom — 3 titluri naționale</div>
              <p>
                Andrei Vulpe și Radu Stancu — trei titluri la Super Slalom; Dan Mureșan — lider de
                clasă la Coastă.
              </p>
            </div>
          </div>

          <section className="press-wrap">
            <h2>Clubul în cifre</h2>
            <div className="press-grid">
              <div className="press-card">
                <q>6 titluri naționale în 5 sezoane — Viteză în Coastă și Super Slalom</q>
                <span className="src">Palmares</span>
              </div>
              <div className="press-card">
                <q>40+ podiumuri la etape naționale, pe toate disciplinele clubului</q>
                <span className="src">Rezultate</span>
              </div>
              <div className="press-card">
                <q>12 juniori în academie — de la 8 la 16 ani, din karting până la Coastă</q>
                <span className="src">Academia</span>
              </div>
            </div>
            <p className="press-note">Cifrele complete, în arhiva de rezultate</p>
          </section>
        </div>
      </div>
    </>
  );
}
