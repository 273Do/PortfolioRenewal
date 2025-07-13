"use client";
import { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import { format } from "date-fns";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Link from "next/link";

import { noticeItems } from "@/demo/noticesData";

const splitNumber = (num: number): string[] => {
  return num.toString().padStart(2, "0").split("");
};

gsap.registerPlugin(SplitText);

const NoticeList = () => {
  const [selectNotice, setSelectNotice] = useState({
    year: 25,
    month: Number(format(new Date(noticeItems[0].createdAt), "MM")),
    description: noticeItems[0].description,
  });

  const [prevYear, setPrevYear] = useState<number>(25);
  const [prevMonth, setPrevMonth] = useState<number>(
    Number(format(new Date(noticeItems[0].createdAt), "MM"))
  );

  const yearDigitRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const monthDigitRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useGSAP(() => {
    // Year animation
    const oldYearDigits = splitNumber(prevYear);
    const newYearDigits = splitNumber(selectNotice.year);

    newYearDigits.forEach((digit, i) => {
      if (digit !== oldYearDigits[i] && yearDigitRefs.current[i]) {
        const target = yearDigitRefs.current[i];
        if (!target) return;

        const textInstance = SplitText.create(target, {
          type: "chars",
          onSplit: (self) => {
            gsap.from(self.chars, {
              duration: 0.6,
              yPercent: 20,
              ease: "power2.out",
              stagger: 0.05,
            });
          },
        });

        return () => textInstance.revert();
      }
    });

    // Month animation
    const oldMonthDigits = splitNumber(prevMonth);
    const newMonthDigits = splitNumber(selectNotice.month);

    newMonthDigits.forEach((digit, i) => {
      if (digit !== oldMonthDigits[i] && monthDigitRefs.current[i]) {
        const target = monthDigitRefs.current[i];
        if (!target) return;

        const textInstance = SplitText.create(target, {
          type: "chars",
          onSplit: (self) => {
            gsap.from(self.chars, {
              duration: 0.6,
              yPercent: 20,
              ease: "power2.out",
              stagger: 0.05,
            });
          },
        });

        return () => textInstance.revert();
      }
    });
  }, [selectNotice.year, selectNotice.month, prevYear, prevMonth]);

  return (
    <>
      <div className="w-1/5 px-2">
        <div className="-mt-2 flex items-center justify-start text-[11vw] font-semibold leading-none">
          <div className="flex">
            <p>`</p>
            {splitNumber(selectNotice.year).map((digit, i) => (
              <p
                key={i}
                ref={(el) => {
                  yearDigitRefs.current[i] = el;
                }}
                className="inline-block"
              >
                {digit}
              </p>
            ))}
            <p>.</p>
            {splitNumber(selectNotice.month).map((digit, i) => (
              <p
                key={i}
                ref={(el) => {
                  monthDigitRefs.current[i] = el;
                }}
                className="inline-block"
              >
                {digit}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="px-2 z-100 flex w-1/2 flex-col gap-5 text-[16px]">
        <div>
          {noticeItems.map((item) => {
            const year = format(new Date(item.createdAt), "yy");
            const month = format(new Date(item.createdAt), "MM");
            const createdAt = format(new Date(item.createdAt), "yyyy-MM-dd");
            return (
              <ul
                className={`${
                  selectNotice.description === item.description
                    ? "text-foreground"
                    : "text-muted"
                } mb-2 flex cursor-auto items-start justify-between gap-3 duration-150 hover:text-foreground`}
                key={item.sys.id}
                onMouseEnter={() => {
                  const newYear = Number(year);
                  const newMonth = Number(month);

                  if (newYear !== selectNotice.year) {
                    setPrevYear(selectNotice.year);
                  }
                  if (newMonth !== selectNotice.month) {
                    setPrevMonth(selectNotice.month);
                  }

                  setSelectNotice({
                    year: newYear,
                    month: newMonth,
                    description: item.description,
                  });
                }}
              >
                {item.url ? (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <li className="underline">{item.title}</li>
                  </Link>
                ) : (
                  <li>{item.title}</li>
                )}
                <li className="whitespace-nowrap text-end">{createdAt}</li>
              </ul>
            );
          })}
        </div>
        <p className="h-20">{selectNotice.description}</p>
      </div>
    </>
  );
};

export default NoticeList;
