import MarqueeWidget from "@/components/Marquee/Marquee";

const Skills = async () => {
  return (
    <div className="my-4">
      <p className="z-100 relative text-end">Favorite Technology</p>
      <MarqueeWidget
        iconName={[
          "React",
          "Typescript",
          "Javascript",
          "Nextdotjs",
          "Nodedotjs",
          "Tailwindcss",
          "Express",
          "Prisma",
          "Postgresql",
          "Redis",
          "Docker",
          "Vercel",
          "Github",
          "Git",
          "Figma",
          "Supabase",
          "Firebase",
          "Cloudflare",
          "Sentry",
        ]}
      />
      <MarqueeWidget
        direction="right"
        iconName={[
          "Python",
          "Flask",
          "Fastapi",
          "Pandas",
          "Numpy",
          "Opencv",
          "Tensorflow",
          "Pytorch",
          "Keras",
          "Scipy",
          "Plotly",
          "Jupyter",
          "Matplotlib",
        ]}
      />
      {/* 16こ */}
      <MarqueeWidget
        iconName={[
          "Tailwindcss",
          "Bootstrap",
          "Materialui",
          "Antdesign",
          "Chakraui",
          "Radixui",
          "Gin",
          "Go",
          "Deno",
          "Framer",
          "Bun",
          "Threedotjs",
          "Langchain",
          "Refine",
          "D3dotjs",
          "Jenkins",
        ]}
      />
    </div>
  );
};

export default Skills;
