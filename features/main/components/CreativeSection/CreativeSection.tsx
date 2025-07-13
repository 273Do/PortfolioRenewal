"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import ClientLayout from "@/components/ContentScreenLayout/ClientLayout";
import * as AnimationText from "@/components/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const CreativeSection = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".creative-section",
      start: "top 40px",
      end: "bottom 40px",
      pin: true,
      scrub: true,
      markers: false,
    });
  }, []);
  // TODO: pinの時にz-indexが効かない問題を解決する
  return (
    <ClientLayout className="creative-section m-3 px-2 pb-4 pt-10 text-xs sm:m-12 sm:py-2 sm:text-base">
      <div className="w-full">
        <div className="layer flex w-full items-center justify-between">
          <AnimationText.ScrollBlinking start="top center">
            <p>Hi, I am 273Do(Tuna-sand). </p>
          </AnimationText.ScrollBlinking>
          <AnimationText.ScrollBlinking start="top 40%">
            <p>Nice to meet you.</p>
          </AnimationText.ScrollBlinking>
        </div>
        <div className="relative h-fit w-4/5">
          <AnimationText.ScrollReveal
            start="top bottom"
            end="bottom 20%"
            className="text-stroke pointer-events-none absolute left-0 top-0 font-semibold leading-none text-transparent"
          >
            CREATIVE
          </AnimationText.ScrollReveal>
          <AnimationText.ScrollCustomReveal
            start="bottom 85%"
            end="bottom center"
            className="relative font-semibold leading-none text-foreground"
            clipPath={["inset(0 100% 0 0)", "inset(0 0% 0 0)"]}
            trigger=".creative-section"
          >
            CREATIVE
          </AnimationText.ScrollCustomReveal>
        </div>
        <AnimationText.ScrollBlinking start="top 65%">
          <ul className="mt-4">
            <li>Web Development</li>
            <li>Fullstack</li>
            <li>UI / UX</li>
            <li>Design</li>
          </ul>
        </AnimationText.ScrollBlinking>
      </div>
      <div className="w-full">
        <AnimationText.ScrollBlinking start="bottom 85%">
          <ul className="text-end">
            <li>ML</li>
            <li>Cloud Platform</li>
            <li>Sensor Analysis</li>
          </ul>
        </AnimationText.ScrollBlinking>
        <div className="flex w-full items-end justify-between gap-4">
          <ul className="w-1/2">
            <AnimationText.ScrollScramble
              text="I develop web apps and tools as a hobby."
              start="top 95%"
            />
            <AnimationText.ScrollScramble
              text="I am based in the Kansai region and I am involved in creative
              activities."
              start="top 95%"
            />
          </ul>
          <div className="relative h-fit w-7/12">
            <AnimationText.ScrollReveal
              start="top bottom"
              end="bottom 70%"
              className="text-stroke absolute left-0 top-0 -mb-12 font-semibold leading-none text-transparent"
            >
              WORK
            </AnimationText.ScrollReveal>
            <AnimationText.ScrollCustomReveal
              start="bottom center"
              end="bottom top"
              className="relative -mb-12 font-semibold leading-none"
              clipPath={["inset(0 100% 0 0)", "inset(0 0% 0 0)"]}
              trigger=".creative-section"
            >
              WORK
            </AnimationText.ScrollCustomReveal>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default CreativeSection;
