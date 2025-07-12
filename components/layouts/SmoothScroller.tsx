"use client";
import { useLayoutEffect, useRef } from "react";

import Lenis from "@studio-freight/lenis";
import Tempus from "@studio-freight/tempus";

export default function SmoothScroller() {
  const lenis = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    lenis.current = new Lenis({
      smoothWheel: true,
    });
    const observer = new ResizeObserver(() => {
      lenis.current?.resize();
    });

    const el = document.querySelector("main");
    if (el) observer.observe(el);

    function onFrame(time: number) {
      lenis.current?.raf(time);
    }

    const unsubscribe = Tempus.add(onFrame);

    return () => {
      unsubscribe();
      lenis.current?.destroy();
      lenis.current = null;
    };
  }, []);

  return null;
}
