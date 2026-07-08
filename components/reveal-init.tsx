"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GROUPS = [".pgrid", ".cols3", ".steps3", ".cal-list", ".rows", ".press-grid", ".arch-list"];
const SINGLES = [
  ".trow", ".ethos-in", ".strip", ".prose", ".jr-quote", ".jr-meta", ".rule-box",
  ".contact-big", ".cta-duo", ".btn-row", ".sub-head h1", ".sub-head .lead",
  ".arch-season h3", ".cform", ".press-wrap > h2", ".arch > h2",
];

/** Reveal la scroll cu stagger — cu failsafe: ce e deja în viewport se arată imediat,
 *  iar un timeout garantează revelarea chiar dacă IntersectionObserver nu se declanșează
 *  (captură full-page, tab în background). Se re-inițializează la fiecare schimbare de rută. */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const nodes: Element[] = [];
    GROUPS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((box) => {
        Array.from(box.children).forEach((kid, i) => {
          kid.classList.add("rvl");
          (kid as HTMLElement).style.transitionDelay = `${Math.min(i * 75, 450)}ms`;
          nodes.push(kid);
        });
      });
    });
    SINGLES.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        el.classList.add("rvl");
        nodes.push(el);
      });
    });

    const reveal = (el: Element) => el.classList.add("in");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    // ce e deja în viewport la mount → arată imediat (fără flash de titlu); restul → observă
    requestAnimationFrame(() => {
      nodes.forEach((el) => {
        if (!el.classList.contains("rvl")) return;
        if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
        else io.observe(el);
      });
    });

    // failsafe: dacă ceva nu s-a declanșat (screenshot full-page, tab background), arată tot
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll(".rvl:not(.in)").forEach(reveal);
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
