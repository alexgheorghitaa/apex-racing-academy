"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FRAMES = [
  "/hero/hero-01.jpg",
  "/hero/hero-02.jpg",
  "/hero/hero-03.jpg",
  "/hero/hero-04.jpg",
];

export default function HeroSlideshow() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % FRAMES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {FRAMES.map((src, i) => (
        <div key={src} className={`slide${i === idx ? " on" : ""}`} aria-hidden="true">
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </>
  );
}
