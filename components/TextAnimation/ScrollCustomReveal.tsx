"use client";
import React from "react";
import { useRef } from "react";
import { ReactFitty } from "react-fitty";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

const ScrollCustomReveal = ({
  children,
  className,
  start,
  end,
  scrub = true,
  clipPath,
  trigger,
}: {
  children: React.ReactNode;
  className?: string;
  start?: string;
  end?: string;
  scrub?: boolean;
  clipPath: string[];
  trigger?: string | Element | null;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const split = SplitText.create(ref.current, {
      type: "chars",
      autoSplit: true,
    });

    // ズレをなくすために style を各 span に適用
    split.chars.forEach((char) => {
      char.classList.add("split-char");
    });

    gsap.fromTo(
      ref.current,
      {
        clipPath: clipPath[0], // "inset(0 100% 0 0)",
      },
      {
        clipPath: clipPath[1], // "inset(0 0% 0 0)",
        scrollTrigger: {
          trigger: trigger || ref.current,
          scrub,
          start,
          end,
          markers: false,
          toggleActions: "play none one reverse",
        },
      }
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <ReactFitty ref={ref} className={className}>
      {children}
    </ReactFitty>
  );
};

export default ScrollCustomReveal;
