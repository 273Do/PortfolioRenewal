import AsyncLayout from "@/components/ContentScreenLayout/AsyncLayout";
import * as AnimationText from "@/components/TextAnimation";

const HeroSection = async () => {
  return (
    <AsyncLayout className="m-12">
      <AnimationText.ScrollBlinking>
        <p className="z-100 relative right-0 mt-1">Scroll</p>
      </AnimationText.ScrollBlinking>

      <AnimationText.Reveal className="mb-0 font-semibold leading-none">
        PORTFOLIO
      </AnimationText.Reveal>
    </AsyncLayout>
  );
};

export default HeroSection;
