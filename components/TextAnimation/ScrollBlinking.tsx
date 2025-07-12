"use client";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollBlinking = ({
  children,
  className,
  scrub = false,
  start,
  end,
  trigger,
}: {
  children: React.ReactNode;
  className?: string;
  scrub?: boolean;
  start?: string;
  end?: string;
  trigger?: string | Element | null;
}) => {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.05,
        repeat: 6,
        yoyo: true,
        ease: "none",
        onComplete: () => {
          gsap.set(ref.current, { opacity: 1 });
        },
        scrollTrigger: {
          trigger: trigger || ref.current,
          scrub,
          start,
          end,
          markers: false,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollBlinking;
