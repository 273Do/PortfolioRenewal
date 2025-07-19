import AsyncLayout from "@/components/ContentScreenLayout/AsyncLayout";
import * as AnimationText from "@/components/TextAnimation";

const HeroSection = async () => {
  return (
    <AsyncLayout className="m-3 mt-8 p-2 pt-10 sm:m-12 sm:pt-2">
      <AnimationText.ScrollBlinking>
        <p className="relative right-0 z-[100] mt-1">Scroll</p>
      </AnimationText.ScrollBlinking>

      <AnimationText.Reveal className="mb-0 font-semibold leading-none">
        PORTFOLIO
      </AnimationText.Reveal>
    </AsyncLayout>
  );
};

export default HeroSection;
