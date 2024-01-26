import SkillItem from '../Skills/SkillItem';

const Skills = () => {
  const skills = [
    'html',
    'css',
    'tailwind',
    'typescript',
    'react',
    'angular',
    'nestjs',
    'csharp',
    'dotnetcore'
  ];

  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
