"use client";

import { useRef, useState, type ReactNode } from "react";

type CarouselProps = { slides: ReactNode[]; start?: number };

export default function Carousel({ slides, start = 0 }: CarouselProps) {
  const [idx, setIdx] = useState(start);
  const touchX = useRef<number | null>(null);

  const go = (n: number) => setIdx(((n % slides.length) + slides.length) % slides.length);

  return (
    <div
      className="car"
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 45) go(dx < 0 ? idx + 1 : idx - 1);
        touchX.current = null;
      }}
    >
      {slides.map((s, i) => (
        <div key={i} className={`cslide${i === idx ? " on" : ""}`}>
          {s}
        </div>
      ))}
      <button className="car-btn prev" aria-label="Imaginea anterioară" onClick={() => go(idx - 1)}>
        ‹
      </button>
      <button className="car-btn next" aria-label="Imaginea următoare" onClick={() => go(idx + 1)}>
        ›
      </button>
      <div className="car-dots" role="group" aria-label="Selectează imaginea">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Imaginea ${i + 1}`}
            aria-current={i === idx ? "true" : undefined}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}
