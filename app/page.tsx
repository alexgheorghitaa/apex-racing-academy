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
          <h1>We build the next generation of racers</h1>
          <p>
            A European motorsport club and junior academy — pace built in the workshop, not bought
            from a catalogue.
          </p>
        </div>
      </header>

      <a className="strip" href="#explore">
        <div className="s-t">Explore the club</div>
        <div className="s-a" aria-hidden="true" />
      </a>

      <div className="rows" id="explore">
        <section className="trow">
          <Carousel
            slides={[
              <Image key="img" src="/hero/hero-02.jpg" alt="Race car on circuit at full tilt" fill sizes="(max-width: 880px) 100vw, 58vw" style={{ objectFit: "cover" }} />,
              <Photo key="podium" variant="p-podium" label="podium and trophies" />,
              <Photo key="track" variant="p-track" label="the circuit from above" />,
            ]}
          />
          <div className="pan">
            <h2>Six national titles in the trophy cabinet</h2>
            <p>
              In five seasons, our drivers have brought home six national titles across hillclimb and
              slalom. In 2025, Lukas Brandt sealed his title with two rounds to spare.
            </p>
          </div>
        </section>

        <section className="trow">
          <Carousel
            slides={[
              <Image key="img" src="/hero/hero-04.jpg" alt="Driver in competition, seen from trackside" fill sizes="(max-width: 880px) 100vw, 58vw" style={{ objectFit: "cover" }} />,
              <Photo key="jr" variant="p-kart" label="junior at the wheel of a kart" />,
              <Photo key="garage" variant="p-garage" label="car prep in the pit" />,
            ]}
          />
          <div className="pan">
            <h2>The next generation</h2>
            <p>
              First time behind the wheel. Three months later — a podium in the Junior class. Luca&apos;s
              story: a properly prepared kart, mentors with national titles, and a real racing
              calendar.
            </p>
          </div>
        </section>
      </div>

      <div className="pgrid">
        <Link className="pcard" href="/club">
          <Photo variant="p-track" label="hillclimb run" />
          <div className="veil" />
          <div className="ct">
            <h3>Hillclimb</h3>
            <span className="pd">
              The club&apos;s signature discipline: timed runs up closed mountain roads. This is where the titles were won.
            </span>
          </div>
        </Link>
        <Link className="pcard" href="/club">
          <Photo variant="p-slalom" label="car between the cones" />
          <div className="veil" />
          <div className="ct">
            <h3>Slalom</h3>
            <span className="pd">
              Millimetre precision between the cones, against the clock. Three national titles in the cabinet.
            </span>
          </div>
        </Link>
        <Link className="pcard" href="/club">
          <Photo variant="p-kart" label="kart in a corner" />
          <div className="veil" />
          <div className="ct">
            <h3>Karting</h3>
            <span className="pd">
              Every young driver&apos;s way into motorsport — from the first laps to national championships.
            </span>
          </div>
        </Link>
        <Link className="pcard wide" href="/juniors">
          <Photo variant="p-crowd" label="paddock on race day" />
          <div className="veil" />
          <div className="ct">
            <h3>Junior Academy</h3>
            <span className="pd">From the first time behind the wheel to national competition.</span>
          </div>
        </Link>
      </div>

      <div className="btn-row">
        <Link className="btn-o" href="/calendar">
          See the 2026 calendar
        </Link>
      </div>

      <section className="ethos">
        <div className="ethos-in">
          <Photo variant="p-portrait" label="portrait in the paddock" />
          <div className="ethos-c">
            <h2>A club led by a champion — built to raise the next generation of racers.</h2>
            <p>
              Apex Racing Academy is a European motorsport club led by Lukas Brandt — multiple
              national and European hillclimb champion. Here performance isn&apos;t bought: it&apos;s built, in
              the workshop, at test days, and on race weekends across Europe.
            </p>
            <Link className="btn-o" href="/club">
              About the club
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
