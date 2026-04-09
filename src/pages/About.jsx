import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub
} from "react-icons/si";

import SkillsRow from "../components/SkillsRow";

const tileClass =
  "w-16 h-16 sm:w-20 sm:h-20 bg-zinc-900/80 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg shadow-black/30";

const About = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center">

      {/* HEADING */}
      <div className="pt-28 sm:pt-32 mb-6 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">About Me</h1>
      </div>

      {/* PARAGRAPH */}
      <div className="max-w-2xl sm:max-w-3xl text-center text-zinc-300 leading-relaxed mb-10 sm:mb-16 px-35 sm:px-2">
        <p className="text-sm sm:text-base">
          Hi, I'm Harleen - a pre-final year Data Science and Engineering student at NIT Jalandhar who genuinely enjoys learning in a calm, steady, and meaningful way.

          I love creating web development projects that feel clean and intuitive, and I find joy in solving DSA problems, not just for practice but for the clarity and discipline they bring.

          Right now, I'm exploring Computer Vision, understanding how machines interpret the world, and slowly building my skills one concept at a time.
          
          Every day, I try to become a little better—through curiosity, consistency, and thoughtful work.
        </p>
      </div>

      {/* SKILLS SECTION */}
      <div className="w-full max-w-6xl flex flex-col gap-10 sm:gap-14">

        <SkillsRow>
          <div className={tileClass}><SiC className="text-4xl text-blue-400" /></div>
          <div className={tileClass}><SiCplusplus className="text-4xl text-blue-500" /></div>
          <div className={tileClass}><SiJavascript className="text-4xl text-yellow-400" /></div>
          <div className={tileClass}><SiPython className="text-4xl text-blue-300" /></div>
          <div className={tileClass}><SiHtml5 className="text-4xl text-orange-500" /></div>
          <div className={tileClass}><SiCss3 className="text-4xl text-blue-500" /></div>
          <div className={tileClass}><SiTailwindcss className="text-4xl text-cyan-400" /></div>
          <div className={tileClass}><SiReact className="text-4xl text-cyan-300" /></div>
          <div className={tileClass}><SiVite className="text-4xl text-purple-400" /></div>
          <div className={tileClass}><SiNodedotjs className="text-4xl text-green-500" /></div>
          <div className={tileClass}><SiExpress className="text-4xl text-gray-300" /></div>
          <div className={tileClass}><SiMongodb className="text-4xl text-green-600" /></div>
          <div className={tileClass}><SiGit className="text-4xl text-red-500" /></div>
          <div className={tileClass}><SiGithub className="text-4xl text-white" /></div>
        </SkillsRow>

      </div>

      <div className="h-20" />
    </div>
  );
};

export default About;
