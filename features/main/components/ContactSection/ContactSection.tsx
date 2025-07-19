import Link from "next/link";

import AsyncLayout from "@/components/ContentScreenLayout/AsyncLayout";
import * as AnimationText from "@/components/TextAnimation";
import { Card } from "@/components/ui/card";

import DiscordToast from "./DiscordToast";

const ContactSection = async () => {
  const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
  const DISCORD_USER_ID = process.env.NEXT_PUBLIC_DISCORD_USER_ID;
  const YOUTUBE_URL = process.env.NEXT_PUBLIC_YOUTUBE_URL;
  const X_URL = process.env.NEXT_PUBLIC_X_URL;
  const QIITA_URL = process.env.NEXT_PUBLIC_QIITA_URL;
  const MAIL_ADDRESS = process.env.MAIL_ADDRESS;

  return (
    <div className="w-full">
      <AsyncLayout className="h-screen  w-full">
        <div className="relative left-1/2 top-1/2  size-full -translate-x-1/2 -translate-y-1/2 p-3 py-[70px] sm:p-12 sm:py-[52px]">
          <div className="flex h-full flex-col items-center justify-end">
            <Card className="flex size-full flex-col items-end bg-foreground px-2 text-secondary">
              <div className="w-4/5">
                <AnimationText.Dynamic className="-mt-2 font-semibold leading-tight">
                  CONTACT
                </AnimationText.Dynamic>
              </div>
              <div className="w-3/5">
                <AnimationText.Dynamic className="-mt-12 font-semibold leading-tight">
                  <a href={`mailto:${MAIL_ADDRESS}`}>{MAIL_ADDRESS}</a>
                </AnimationText.Dynamic>
              </div>
              <div className="mt-10 flex w-full items-start justify-between">
                <ul className="z-200 relative ">
                  <li>
                    <Link href="/works">Works</Link>
                  </li>
                  <li>
                    <Link href="/movie">Movie</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
                <div className="flex flex-col gap-6 text-end">
                  <ul className="z-200 relative ">
                    <li>
                      {X_URL && (
                        <Link
                          href={X_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Twitter / X
                        </Link>
                      )}
                    </li>
                    {DISCORD_USER_ID && <DiscordToast id={DISCORD_USER_ID} />}
                    <li>
                      {YOUTUBE_URL && (
                        <Link
                          href={YOUTUBE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </Link>
                      )}
                    </li>
                  </ul>
                  <ul className="z-100 relative">
                    <li>
                      {GITHUB_URL && (
                        <Link
                          href={GITHUB_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </Link>
                      )}
                    </li>
                    <li>
                      {QIITA_URL && (
                        <Link
                          href={QIITA_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Qiita
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AsyncLayout>
    </div>
  );
};

export default ContactSection;
