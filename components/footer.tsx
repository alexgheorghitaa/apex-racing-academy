import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="foot-social">
        <span className="follow display">Follow us</span>
        <span className="soon">Facebook · soon</span>
        <span className="soon">Instagram · soon</span>
        <span className="soon">YouTube · soon</span>
      </div>
      <div className="foot-nav">
        <Link href="/">Home</Link>
        <Link href="/club">The Club</Link>
        <Link href="/juniors">Juniors</Link>
        <Link href="/calendar">Calendar</Link>
        <Link href="/partners">Partners</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="foot-c">
        © 2026 Apex Racing Academy · Concept site — fictional club, built as a demo.
        <br />
        Photos sourced from Flickr under CC BY 2.0 — verify each licence before commercial use.
      </div>
    </footer>
  );
}
