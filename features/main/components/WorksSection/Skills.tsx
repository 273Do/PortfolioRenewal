import MarqueeWidget from "@/components/Marquee/Marquee";
import { fetchTechnologies } from "@/lib/contentful";

const Skills = async () => {
  const { items: technologies } = await fetchTechnologies();
  const technologiesArray = Array.isArray(technologies)
    ? technologies.map((item) => item.techNames)
    : technologies.techNames;

  return (
    <div className="my-2 sm:my-4">
      <p className="relative z-[100] text-xs sm:text-base">
        Favorite Technologies
      </p>
      {technologiesArray.map((techNames: string[], i: number) => (
        <MarqueeWidget
          key={i}
          iconName={techNames}
          direction={i % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
};

export default Skills;
