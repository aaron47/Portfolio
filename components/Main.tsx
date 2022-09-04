import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-600 uppercase">
            Welcome to my portfolio!
          </p>

          <h1 className="py-4 text-gray-700">
            Hello, I'm <span className="text-[#5651e5]">Aaron</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {
              "I specialize in building(and occasionally designing) exceptional digital experiences. Currently I'm focused on building responsive front-end web applications while learning back-end technologies"
            }
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
