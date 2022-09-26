import Image from 'next/image';

interface Props {
  skill: string;
}

const SkillItem: React.FC<Props> = ({ skill }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="items-center justify-center grid grid-cols-2 gap-4">
        <div className="m-auto">
          <Image src={`/${skill}.png`} alt="/" width={64} height={64} />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3>{skill.toUpperCase()}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
