"use client";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import useSWR from "swr";

import type { WorkObj } from "@/features/works/types";
import { fetchWorks } from "@/lib/contentful";

const fetcher = async () => {
  const data = await fetchWorks(6);
  return data;
};

gsap.registerPlugin(ScrollTrigger);

const CardList = () => {
  const ref = useRef(null);
  const sectionEndRef = useRef<HTMLDivElement>(null);

  const { data: works, isLoading } = useSWR("workImages", fetcher);

  useGSAP(() => {
    const leftXValues = [-400, -450, -200];
    const rightXValues = [400, 450, 200];
    const leftRotateValues = [-30, -20, -35];
    const rightRotateValues = [30, 20, 35];
    const yValues = [50, -75, -200];

    gsap.utils.toArray(".row").forEach((row, index) => {
      const rowElement = row as Element;
      const cardLeft = rowElement.querySelector(".card-left");
      const cardRight = rowElement.querySelector(".card-right");

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ref.current,
          start: "top 65%",
          end: "200% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            if (cardLeft && cardRight) {
              (cardLeft as HTMLElement).style.transform = `translateX(${
                leftXValues[index] * progress
              }px) translateY(${yValues[index] * progress}px) rotate(${
                leftRotateValues[index] * progress
              }deg)`;
              (cardRight as HTMLElement).style.transform = `translateX(${
                rightXValues[index] * progress
              }px) translateY(${yValues[index] * progress}px) rotate(${
                rightRotateValues[index] * progress
              }deg)`;
            }
          },
        },
      });

      if (cardLeft) {
        gsap.to(cardLeft, {
          scrollTrigger: {
            trigger: sectionEndRef.current,
            start: "top top",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              if (progress >= 1) {
                (cardLeft as HTMLElement).style.scale = `0`;
                (cardRight as HTMLElement).style.scale = `0`;
              } else {
                (cardLeft as HTMLElement).style.scale = `1`;
                (cardRight as HTMLElement).style.scale = `1`;
              }
            },
          },
        });
      }

      gsap.to(".line", {
        yPercent: 100,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom bottom",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, [works]);

  const generateRows = (works: WorkObj[]) => {
    const rows = [];

    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div
          className="row relative my-3 flex w-full justify-center gap-3 sm:my-6 sm:gap-6"
          key={i}
        >
          <div className="card card-left relative overflow-hidden grayscale duration-200 will-change-transform hover:grayscale-0">
            <Image
              src={works[i - 1].thumbnail.url}
              alt=""
              className="h-28 w-48 rounded-lg border shadow sm:h-52 sm:w-96"
              width={1920}
              height={1080}
            />
          </div>
          <div className="card card-right relative overflow-hidden grayscale duration-200 will-change-transform hover:grayscale-0">
            <Image
              src={works[i + 2].thumbnail.url}
              alt=""
              className="h-28 w-48 rounded-lg border shadow sm:h-52 sm:w-96"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      );
    }

    return rows;
  };

  return (
    <div
      ref={ref}
      className="relative flex w-full flex-col items-center justify-center"
    >
      <div className="translate-[-50%] pointer-events-none absolute z-[100] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-start gap-5 sm:gap-20">
          <div className="line">
            <div className="flex flex-col items-center justify-center text-lg font-semibold sm:text-2xl">
              <p> I don't have</p>
              <p>any specific area of expertise.</p>
            </div>
          </div>
          <div className="line mt-20">
            <div className="flex flex-col items-center justify-center">
              <p>I learn technology in order</p>
              <p> to create what I want to create.</p>
            </div>
          </div>
          <div className="line">
            <p>I enjoy making Production.</p>
          </div>
          <div className="mt-20 text-2xl font-semibold">
            <p>NO CREATIVE, NO LIFE</p>
          </div>
        </div>
      </div>
      {!isLoading && (
        <div className="-z-10 hidden sm:block">{generateRows(works.items)}</div>
      )}
      <div className="block h-[50vh] sm:hidden"></div>
      <div ref={sectionEndRef}></div>
    </div>
  );
};

export default CardList;
