import React, { useEffect, useMemo, useRef, useState } from "react";

interface ParallaxBackdropProps {
  imageSrc?: string;
  strength?: number;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = () => setReduced(Boolean(mq.matches));
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function ParallaxBackdrop({
  imageSrc = "/editorial/artist-work-1.png",
  strength = 0.18,
}: ParallaxBackdropProps) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  // Mobile costuma sofrer com parallax pesado; reduzimos a força.
  const effectiveStrength = useMemo(() => {
    if (typeof window === "undefined") return strength;
    return window.innerWidth < 768 ? Math.min(strength, 0.08) : strength;
  }, [strength]);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        // Move levemente o fundo para dar profundidade.
        const offset = Math.round(y * effectiveStrength);
        el.style.setProperty("--parallax-y", `${offset}px`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [effectiveStrength, reducedMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div
        ref={ref}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: reducedMotion ? "none" : "translate3d(0, calc(var(--parallax-y, 0px) * -1), 0)",
        }}
      >
        <img
          src={imageSrc}
          alt=""
          className="h-[120vh] w-full object-cover opacity-55"
          loading="eager"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/78 to-black/92" />
        {/* No mobile, menos vermelho para manter o visual mais "black". */}
        <div className="absolute inset-0 opacity-0 sm:opacity-100 bg-[radial-gradient(900px_640px_at_12%_10%,rgba(138,3,3,0.30),transparent_60%)]" />
        <div className="absolute inset-0 opacity-70 sm:opacity-100 bg-[radial-gradient(980px_720px_at_86%_14%,rgba(255,255,255,0.10),transparent_62%)]" />
      </div>

      {/* Glows vermelhos em movimento (um de cada lado) */}
      <div className="absolute inset-0">
        <div
          className="absolute -left-40 top-10 h-[560px] w-[560px] rounded-full bg-brand-red/30 blur-[150px] glow-drift-left motion-reduce:animate-none mix-blend-screen"
          style={{ opacity: 0.55 }}
        />
        <div
          className="absolute -right-44 bottom-10 h-[600px] w-[600px] rounded-full bg-brand-red/25 blur-[170px] glow-drift-right motion-reduce:animate-none mix-blend-screen"
          style={{ opacity: 0.50 }}
        />
      </div>

      {/* grain */}
      <div className="absolute inset-0 opacity-35 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] animate-grain" />
      </div>
    </div>
  );
}

