import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/carousel";
import HeroSlideshow from "@/components/hero-slideshow";
import Photo from "@/components/photo";

export default function Home() {
  return (
    <>
      <header className="hero">
        <HeroSlideshow />
        <div className="hero-txt">
          <h1>Creștem următoarea generație de piloți</h1>
          <p>
            Club de motorsport cu academie de juniori și titluri naționale — viteză crescută în
            garaj, nu cumpărată din catalog.
          </p>
        </div>
      </header>

      <a className="strip" href="#explore">
        <div className="s-t">Explorează clubul</div>
        <div className="s-a" aria-hidden="true" />
      </a>

      <div className="rows" id="explore">
        <section className="trow">
          <Carousel
            slides={[
              <Image key="img" src="/hero/hero-02.jpg" alt="" fill sizes="(max-width: 880px) 100vw, 58vw" style={{ objectFit: "cover" }} />,
              <Photo key="podium" variant="p-podium" label="premiere și trofee" />,
              <Photo key="track" variant="p-track" label="circuitul văzut de sus" />,
            ]}
          />
          <div className="pan">
            <h2>Șase titluri naționale în vitrina clubului</h2>
            <p>
              În cinci sezoane, piloții academiei au adus acasă șase titluri naționale la Viteză în
              Coastă și Super Slalom. În 2025, Victor Ardelean și-a asigurat matematic titlul cu
              două etape înainte de final.
            </p>
          </div>
        </section>

        <section className="trow">
          <Carousel
            slides={[
              <Image key="img" src="/hero/hero-04.jpg" alt="" fill sizes="(max-width: 880px) 100vw, 58vw" style={{ objectFit: "cover" }} />,
              <Photo key="jr" variant="p-kart" label="junior la volanul kartului" />,
              <Photo key="garage" variant="p-garage" label="pregătirea mașinii în boxe" />,
            ]}
          />
          <div className="pan">
            <h2>Generația juniorilor</h2>
            <p>
              Primul volan. Trei luni mai târziu — podium la clasa juniori. Povestea lui Luca, 12
              ani: un kart pregătit corect, mentori cu titluri naționale și un calendar adevărat de
              competiții.
            </p>
          </div>
        </section>
      </div>

      <div className="pgrid">
        <Link className="pcard" href="/clubul">
          <Photo variant="p-track" label="urcare contra cronometru" />
          <div className="veil" />
          <div className="ct">
            <h3>Viteză în Coastă</h3>
            <span className="pd">
              Disciplina-regină a clubului: urcări contra cronometru pe drumuri de munte închise. Aici s-au câștigat titlurile.
            </span>
          </div>
        </Link>
        <Link className="pcard" href="/clubul">
          <Photo variant="p-slalom" label="mașină printre jaloane" />
          <div className="veil" />
          <div className="ct">
            <h3>Super Slalom</h3>
            <span className="pd">
              Precizie milimetrică printre jaloane, contra cronometru. Trei titluri naționale în vitrina clubului.
            </span>
          </div>
        </Link>
        <Link className="pcard" href="/clubul">
          <Photo variant="p-kart" label="kart în viraj" />
          <div className="veil" />
          <div className="ct">
            <h3>Karting</h3>
            <span className="pd">
              Poarta de intrare a copiilor în motorsport — de la primele tururi la campionate naționale.
            </span>
          </div>
        </Link>
        <Link className="pcard wide" href="/juniorii">
          <Photo variant="p-crowd" label="paddock-ul în zi de cursă" />
          <div className="veil" />
          <div className="ct">
            <h3>Academia de juniori</h3>
            <span className="pd">De la primul volan la competiții naționale.</span>
          </div>
        </Link>
      </div>

      <div className="btn-row">
        <Link className="btn-o" href="/calendar">
          Vezi calendarul 2026
        </Link>
      </div>

      <section className="ethos">
        <div className="ethos-in">
          <Photo variant="p-portrait" label="portret în paddock" />
          <div className="ethos-c">
            <h2>Un club condus de un campion — dedicat creșterii următoarei generații de piloți.</h2>
            <p>
              Apex Racing Academy e un club de motorsport condus de Victor Ardelean — campion
              național multiplu la Viteză în Coastă. Aici nu se cumpără performanța: se
              construiește, în garaj, la antrenamente și în weekendurile de cursă din toată țara.
            </p>
            <Link className="btn-o" href="/clubul">
              Despre club
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
