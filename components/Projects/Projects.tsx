import ProjectItem from "./ProjectItem";

export interface Project {
  name: string;
  title: string;
  technology: string;
  url: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      name: "crypto",
      title: "Crypto App",
      technology: "NextJS",
      url: "/crypto",
    },
    {
      name: "netflix",
      title: "Netflix Clone",
      technology: "NextJS",
      url: "/netflix",
    },
    {
      name: "property",
      title: "Property Finder",
      technology: "NextJS",
      url: "/property",
    },
    {
      name: "twitch",
      title: "Twitch Clone",
      technology: "ReactJS",
      url: "/twitch",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16">
        <p className="text-[#5651e5] text-xl tracking-widest uppercase">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
