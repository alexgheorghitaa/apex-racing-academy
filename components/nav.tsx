"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LEFT = [
  { href: "/club", label: "The Club" },
  { href: "/juniors", label: "Juniors" },
  { href: "/calendar", label: "Calendar" },
];
const RIGHT = [
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>
      {label}
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const onHero = pathname === "/";
  return (
    <nav className={`top ${onHero ? "on-hero" : ""}`} aria-label="Main navigation">
      <Link href="/" className="nav-home-m" aria-label="Home — Apex Racing Academy">
        Apex Racing <span>Academy</span>
      </Link>
      <div className="nav-in">
        <div className="nav-side l">
          {LEFT.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </div>
        <div className="pennant">
          <Link href="/" aria-label="Home — Apex Racing Academy">
            <span className="pen-mark">A</span>
            <span className="pen-name">Apex Racing</span>
            <span className="pen-sub">Academy</span>
          </Link>
        </div>
        <div className="nav-side r">
          {RIGHT.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </div>
      </div>
    </nav>
  );
}
