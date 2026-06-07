"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

export type Photo = { src: string; alt: string; width?: number; height?: number };

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export default function PhotoGallery({
  feature,
  photos,
}: {
  feature: Photo;
  photos: Photo[];
}) {
  const all = [feature, ...photos];
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const touch = useRef<{ x: number; y: number } | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement | null>(null);

  const openAt = (i: number) => {
    lastFocused.current = document.activeElement as HTMLElement;
    setIndex(i);
  };
  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % all.length)),
    [all.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + all.length) % all.length)),
    [all.length]
  );

  // Keyboard + scroll lock while open; restore focus on close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lastFocused.current?.focus?.();
    };
  }, [open, close, next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dy) > Math.abs(dx) && dy > 70) close();
    else if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
  };

  const current = open ? all[index] : null;

  return (
    <>
      {/* Uitgelichte zijfoto */}
      <button
        type="button"
        onClick={() => openAt(0)}
        aria-label={`Vergroot foto: ${feature.alt}`}
        className="group mt-8 block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-hair bg-card p-2 shadow-soft transition-shadow hover:shadow-lift"
      >
        <span className="relative block overflow-hidden rounded-xl bg-forest-50">
          <Image
            src={feature.src}
            alt={feature.alt}
            width={feature.width ?? 2000}
            height={feature.height ?? 966}
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </span>
      </button>

      {/* Detailfoto's in een net raster */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {photos.map((p, j) => (
          <button
            type="button"
            key={p.src}
            onClick={() => openAt(j + 1)}
            aria-label={`Vergroot foto: ${p.alt}`}
            className="group block cursor-zoom-in overflow-hidden rounded-2xl border border-hair bg-card p-2 shadow-soft transition-shadow hover:shadow-lift"
          >
            <span className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-forest-50">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
              />
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fotogalerij"
          onClick={close}
          className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-sm"
        >
          {/* Bovenbalk */}
          <div
            className="flex items-center justify-between px-4 py-3 text-cream/90"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-sm tabular-nums">
              {index + 1} / {all.length}
            </span>
            <button
              ref={closeBtn}
              type="button"
              onClick={close}
              aria-label="Sluiten"
              className="flex h-10 w-10 items-center justify-center rounded-full text-cream/90 transition-colors hover:bg-cream/10"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Afbeelding */}
          <div
            className="relative flex flex-1 select-none items-center justify-center overflow-hidden px-2 pb-2"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.alt}
              draggable={false}
              className="max-h-full max-w-full rounded-lg object-contain"
            />

            <button
              type="button"
              onClick={prev}
              aria-label="Vorige foto"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-cream transition-colors hover:bg-ink/70"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Volgende foto"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-cream transition-colors hover:bg-ink/70"
            >
              <Chevron dir="right" />
            </button>
          </div>

          {/* Onderschrift */}
          <p
            className="px-6 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-1 text-center text-sm text-cream/80"
            onClick={(e) => e.stopPropagation()}
          >
            {current.alt}
          </p>
        </div>
      )}
    </>
  );
}
