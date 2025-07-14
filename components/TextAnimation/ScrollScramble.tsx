"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const ScrollScramble = ({
  text,
  className,
  scrub = false,
  start,
  end,
  trigger,
}: {
  text: string;
  className?: string;
  scrub?: boolean;
  start?: string;
  end?: string;
  trigger?: string | Element | null;
}) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      duration: 1,
      scrambleText: {
        text,
        chars: "upperAndLowerCase",
        // revealDelay: 0.5,
        speed: 0.05,
      },
      scrollTrigger: {
        trigger: trigger || ref.current,
        scrub,
        start,
        end,
        markers: false,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return <div ref={ref} className={className}></div>;
};

export default ScrollScramble;
