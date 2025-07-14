"use client";
import { useEffect, useRef, useState } from "react";
import { ReactFitty } from "react-fitty";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

const ScrollReveal = ({
  children,
  className,
  scrub = true,
  start,
  end,
  trigger,
}: {
  children: React.ReactNode;
  className?: string;
  scrub?: boolean;
  start: string;
  end?: string;
  trigger?: string | Element | null;
}) => {
  const ref = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const splitRef = useRef<SplitText | null>(null);

  // コンテナの幅を監視
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // リサイズ時の処理
  useEffect(() => {
    if (containerWidth === 0) return;

    const timer = setTimeout(() => {
      if (splitRef.current) {
        splitRef.current.revert();
        splitRef.current = null;
      }
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [containerWidth]);

  useGSAP(() => {
    if (!ref.current || containerWidth === 0) return;

    const timer = setTimeout(() => {
      const split = SplitText.create(ref.current, {
        type: "chars",
        charsClass: "split-char",
        autoSplit: true,
        mask: "chars",
      });

      splitRef.current = split;

      gsap.from(split.chars, {
        duration: 0.5,
        yPercent: 100,
        stagger: 0.07,
        ease: "expo.out",
        scrollTrigger: {
          trigger: trigger || ref.current,
          scrub,
          start,
          end,
          markers: false,
          toggleActions: "play none none reverse",
        },
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      if (splitRef.current) {
        splitRef.current.revert();
        splitRef.current = null;
      }
    };
  }, [containerWidth, scrub, start, end, trigger]);

  return (
    <div ref={containerRef} className="w-full">
      <ReactFitty ref={ref} className={className}>
        {children}
      </ReactFitty>
    </div>
  );
};

export default ScrollReveal;
