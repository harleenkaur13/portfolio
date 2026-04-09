import project1 from "../assets/ember1.png";
import project2 from "../assets/lp.png";
import project3 from "../assets/image.png";
import { CometCard } from "../components/ui/comet-card";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce website",
      year: "2025",
      image: project1,
      github: "https://github.com/harleenkaur13/Ember.git",
    },
    {
      title: "LP Detection",
      year: "2025",
      image: project2,
      github: "https://github.com/your-repo-todo",
    },
    {
      title: "Sentiment Analysis",
      year: "2025",
      image: project3,
      github: "https://github.com/harleenkaur13/Echoes-Of-Emotions.git",
    },
  ];

  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      {/* HEADING */}
      <div className="pt-35 h-20 flex justify-center items-end mb-3 md:mb-6">
        <h1 className="text-4xl md:text-5xl font-serif text-white">Projects</h1>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl w-full justify-items-center my-0">
        {projects.map((project, index) => (
          <CometCard key={index}>
            <button
              type="button"
              className="bgflex w-80 cursor-pointer flex-col items-stretch bg-[#1F2121] rounded-2xl border-0
              p-4 transition-transform"
              aria-label={`View project ${project.title}`}
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}
              onClick={() => window.open(project.github, "_blank")}
            >
              <div className="mx-2 flex-1">
                <div className="relative mt-2 aspect-3/4 w-full">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-2xl object-cover contrast-75"
                    alt={project.title}
                    src={project.image}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>

              <div className="mt-2 flex shrink-0 items-center justify-between p-4 font-mono text-white">
                <div className="text-xl font-semibold">{project.title}</div>
              </div>
            </button>
          </CometCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;


// grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full justify-items-center my-0 bg-red-800

