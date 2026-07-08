"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GROUPS = [".pgrid", ".cols3", ".steps3", ".cal-list", ".sp-logos", ".rows", ".press-grid", ".arch-list"];
const SINGLES = [
  ".trow", ".ethos-in", ".strip", ".prose", ".jr-quote", ".jr-meta", ".rule-box",
  ".contact-big", ".cta-duo", ".btn-row", ".sub-head h1", ".sub-head .lead",
  ".arch-season h3", ".cform", ".press-wrap > h2", ".arch > h2",
];

/** Reveal la scroll cu stagger — se re-inițializează la fiecare schimbare de rută. */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    GROUPS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((box) => {
        Array.from(box.children).forEach((kid, i) => {
          kid.classList.add("rvl");
          (kid as HTMLElement).style.transitionDelay = `${Math.min(i * 75, 450)}ms`;
        });
      });
    });
    SINGLES.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => el.classList.add("rvl"));
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll(".rvl:not(.in)").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
