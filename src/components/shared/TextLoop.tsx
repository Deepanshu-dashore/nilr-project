"use client";

import React, { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const DEFAULT_VIEW_W = 1200;
const DEFAULT_VIEW_H = 520;
const EDGE_PAD = 6;

const buildPath = (shape: string, curviness: number, ribbonWidth: number, w: number, h: number, extraLength: number = 0) => {
  const cx = w / 2;
  const cy = h / 2;
  const c = Math.max(0, curviness);
  const room = Math.max(20, cy - Math.max(0, ribbonWidth) / 2 - EDGE_PAD);

  switch (shape) {
    case "circle": {
      const r = Math.min(90 + c * 0.95, room);
      return `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy} Z`;
    }
    case "infinity": {
      const r = 150 + c * 1.4;
      const hCurve = Math.min(60 + c * 0.95, room);
      return [
        `M ${cx} ${cy}`,
        `C ${cx + r * 0.55} ${cy - hCurve} ${cx + r} ${cy - hCurve} ${cx + r} ${cy}`,
        `C ${cx + r} ${cy + hCurve} ${cx + r * 0.55} ${cy + hCurve} ${cx} ${cy}`,
        `C ${cx - r * 0.55} ${cy - hCurve} ${cx - r} ${cy - hCurve} ${cx - r} ${cy}`,
        `C ${cx - r} ${cy + hCurve} ${cx - r * 0.55} ${cy + hCurve} ${cx} ${cy}`,
        "Z",
      ].join(" ");
    }
    case "arch": {
      const rise = Math.min(120 + c * 1.1, room * 2);
      return `M 120 ${cy + rise / 2} Q ${cx} ${cy - rise * 1.5} ${w - 120} ${cy + rise / 2}`;
    }
    case "line":
      // Generous straight horizontal path extending well beyond screen boundaries
      return `M -2000 ${cy} L ${w + extraLength + 4000} ${cy}`;
    case "wave":
    default: {
      const a = Math.min(c * 2.2, room * 2);
      return `M -320 ${cy} Q -160 ${cy - a} 0 ${cy} T 320 ${cy} T 640 ${cy} T 960 ${cy} T 1280 ${cy} T ${w + 320} ${cy}`;
    }
  }
};

export interface TextLoopProps {
  text?: string;
  shape?: "wave" | "line" | "circle" | "infinity" | "arch" | string;
  path?: string;
  speed?: number;
  direction?: "forward" | "reverse";
  separator?: string;
  curviness?: number;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  uppercase?: boolean;
  color?: string;
  ribbon?: boolean;
  ribbonColor?: string;
  ribbonWidth?: number;
  pauseOnHover?: boolean;
  className?: string;
  style?: React.CSSProperties;
  viewBox?: string;
}

const TextLoop: React.FC<TextLoopProps> = ({
  text = "React ✦ Bits",
  shape = "line",
  path,
  speed = 80,
  direction = "forward",
  separator = "✦",
  curviness = 90,
  fontSize = 13,
  fontWeight = 600,
  letterSpacing = 0.3,
  uppercase = false,
  color = "#1e293b",
  ribbon = false,
  ribbonColor = "#5227FF",
  ribbonWidth = 86,
  pauseOnHover = true,
  className = "",
  style = {},
  viewBox,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const measureRef = useRef<SVGTextElement>(null);
  const headRef = useRef<SVGTextPathElement>(null);
  const tailRef = useRef<SVGTextPathElement>(null);

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: DEFAULT_VIEW_W,
    h: shape === "line" ? 32 : DEFAULT_VIEW_H,
  });

  const [metrics, setMetrics] = useState({ unitWidth: 0, reps: 2 });

  const rawId = useId();
  const pathId = `text-loop-${rawId.replace(/:/g, "")}`;

  // Measure container dimensions
  useIsomorphicLayoutEffect(() => {
    if (!rootRef.current) return;

    const updateDimensions = () => {
      if (rootRef.current) {
        const clientW = rootRef.current.clientWidth || DEFAULT_VIEW_W;
        const clientH = rootRef.current.clientHeight || (shape === "line" ? 32 : DEFAULT_VIEW_H);
        setDimensions((prev) =>
          prev.w === clientW && prev.h === clientH ? prev : { w: clientW, h: clientH }
        );
      }
    };

    updateDimensions();
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(updateDimensions);
      ro.observe(rootRef.current);
      return () => ro.disconnect();
    }
  }, [shape]);

  const activeWidth = shape === "line" ? dimensions.w : DEFAULT_VIEW_W;
  const activeHeight = shape === "line" ? dimensions.h : DEFAULT_VIEW_H;

  const d = useMemo(
    () => path || buildPath(shape, curviness, ribbonWidth, activeWidth, activeHeight, metrics.unitWidth * 2),
    [path, shape, curviness, ribbonWidth, activeWidth, activeHeight, metrics.unitWidth]
  );

  const unit = useMemo(() => {
    const base = uppercase ? String(text).toUpperCase() : String(text);
    const gap = separator ? `   ${separator}   ` : "      ";
    return `${base}${gap}`;
  }, [text, separator, uppercase]);

  const textStyle = useMemo(
    () => ({
      fontSize: `${fontSize}px`,
      fontWeight,
      letterSpacing: `${letterSpacing}px`,
      fontFamily: "var(--font-sans, system-ui, sans-serif)",
    }),
    [fontSize, fontWeight, letterSpacing]
  );

  // Measure natural unit width without unnatural SVG font compression
  useIsomorphicLayoutEffect(() => {
    const measureEl = measureRef.current;
    if (!measureEl) return undefined;

    let cancelled = false;

    const measure = () => {
      if (cancelled) return;
      let unitWidth = 0;
      try {
        unitWidth = measureEl.getComputedTextLength();
      } catch {
        return;
      }
      if (!unitWidth) return;

      const screenW = activeWidth || 1200;
      // Calculate how many repetitions are needed to fill screen + overflow smoothly
      const reps = Math.max(1, Math.ceil(screenW / unitWidth) + 1);
      setMetrics((prev) => (prev.unitWidth === unitWidth && prev.reps === reps ? prev : { unitWidth, reps }));
    };

    measure();
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    return () => {
      cancelled = true;
    };
  }, [unit, fontSize, fontWeight, letterSpacing, activeWidth]);

  useEffect(() => {
    const { unitWidth, reps } = metrics;
    const head = headRef.current;
    const tail = tailRef.current;
    if (!head || !tail || !unitWidth) return undefined;

    const loopSpan = unitWidth * reps;

    const apply = (offset: number) => {
      // Keep head and tail synchronized for seamless infinite linear cycle
      const headOffset = offset;
      const tailOffset = offset + loopSpan;
      head.setAttribute("startOffset", `${headOffset}px`);
      tail.setAttribute("startOffset", `${tailOffset}px`);
    };

    apply(0);

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || speed <= 0) return undefined;

    const state = { offset: 0 };
    const duration = loopSpan / speed;

    // Linear continuous loop with GSAP
    const tween = gsap.to(state, {
      offset: direction === "reverse" ? loopSpan : -loopSpan,
      duration: Math.max(4, duration),
      ease: "none",
      repeat: -1,
      onUpdate: () => apply(state.offset),
    });

    const root = rootRef.current;
    const pause = () => tween.pause();
    const resume = () => tween.resume();

    if (pauseOnHover && root) {
      root.addEventListener("pointerenter", pause);
      root.addEventListener("pointerleave", resume);
    }

    return () => {
      tween.kill();
      if (pauseOnHover && root) {
        root.removeEventListener("pointerenter", pause);
        root.removeEventListener("pointerleave", resume);
      }
    };
  }, [metrics, speed, direction, pauseOnHover]);

  const loopText = unit.repeat(metrics.reps);

  const computedViewBox = viewBox || `0 0 ${activeWidth} ${activeHeight}`;

  return (
    <div
      ref={rootRef}
      className={`relative w-full h-full overflow-hidden select-none ${className}`.trim()}
      style={style}
    >
      <svg
        className="block w-full h-full"
        viewBox={computedViewBox}
        preserveAspectRatio="none"
        role="img"
        aria-label={text}
      >
        <path
          ref={pathRef}
          id={pathId}
          d={d}
          fill="none"
          stroke={ribbon ? ribbonColor : "none"}
          strokeWidth={ribbon ? ribbonWidth : 0}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Hidden measurement text */}
        <text
          ref={measureRef}
          className="invisible pointer-events-none opacity-0"
          style={textStyle}
          aria-hidden="true"
        >
          {unit}
        </text>

        {/* Head Stream */}
        <text
          className="select-none fill-current"
          style={textStyle}
          fill={color}
          dominantBaseline="central"
          aria-hidden="true"
        >
          <textPath ref={headRef} href={`#${pathId}`} startOffset="0px">
            {loopText}
          </textPath>
        </text>

        {/* Tail Stream (Seamless loop follower) */}
        <text
          className="select-none fill-current"
          style={textStyle}
          fill={color}
          dominantBaseline="central"
          aria-hidden="true"
        >
          <textPath ref={tailRef} href={`#${pathId}`} startOffset="0px">
            {loopText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default TextLoop;
