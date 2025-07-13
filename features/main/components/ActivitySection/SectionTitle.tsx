"use client";

import { ReactFitty } from "react-fitty";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import * as AnimationText from "@/components/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = () => {
  return (
    <AnimationText.ScrollBlinking
      start="center bottom"
      className="-mt-14 sm:-mt-20 font-semibold leading-none"
    >
      <ReactFitty>ACTIVITIES</ReactFitty>
    </AnimationText.ScrollBlinking>
  );
};

export default SectionTitle;
