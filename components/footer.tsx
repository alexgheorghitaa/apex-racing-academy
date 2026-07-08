import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="foot-social">
        <span className="follow display">Urmărește-ne</span>
        <span className="soon">Facebook · în curând</span>
        <span className="soon">Instagram · în curând</span>
        <span className="soon">YouTube · în curând</span>
      </div>
      <div className="foot-nav">
        <Link href="/">Acasă</Link>
        <Link href="/clubul">Clubul</Link>
        <Link href="/juniorii">Juniorii</Link>
        <Link href="/calendar">Calendar</Link>
        <Link href="/parteneri">Parteneri</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="foot-c">
        © 2026 Apex Racing Academy · Site concept — club fictiv, realizat ca demonstrație.
        <br />
        Foto: PaulyRacing, Supermac1961, promopixa, racin jason, nabtifal, Dave Hamster, Eje
        Gustafsson, Lav Ulv, Ken March, Ford Racing — Flickr, licență CC BY 2.0.
      </div>
    </footer>
  );
}
