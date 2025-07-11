"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactFitty } from "react-fitty";
import * as AnimationText from "@/components/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = () => {
  return (
    <AnimationText.ScrollBlinking
      start="center bottom"
      className="-mt-12 font-semibold leading-none"
    >
      <ReactFitty>ACTIVITIES</ReactFitty>
    </AnimationText.ScrollBlinking>
  );
};

export default SectionTitle;
