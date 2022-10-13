import ProjectItem from './ProjectItem';

export interface Project {
  name: string;
  title: string;
  technology: string;
  url: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      name: 'netflix',
      title: 'Netflix Clone',
      technology: 'React Typescript',
      url: '/netflix',
    },
    {
      name: 'accountseller',
      title: 'Video Game Account Selling Website',
      technology: 'React Typescript',
      url: '/accountseller',
    },
    {
      name: 'gecko',
      title: 'A Crypto Application Frontend using the Gecko API',
      technology: 'Angular',
      url: '/gecko',
    },
    {
      name: 'booker',
      title: 'Bookmark App',
      technology: 'Angular',
      url: '/booker',
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
