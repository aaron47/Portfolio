import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Main = () => {
	return (
		<div className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="text-sm tracking-widest text-gray-600 uppercase">
						Welcome to my portfolio!
					</p>

					<h1 className="py-4 text-gray-700">
						Hello, I'm <span className="text-[#5651e5]">Aaron Borgi</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Fullstack Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						{
							"I specialize in building exceptional digital experiences. Currently I'm focused on building responsive fullstack web applications, primarily in ASP .NET Core 8 and Angular."
						}
					</p>

					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a href="https://www.linkedin.com/in/aaron-borgi-5744a7236/">
							<div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</a>

						<a href="https://github.com/aaron47">
							<div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
								<FaGithub />
							</div>
						</a>

						<Link href="#contact">
							<div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</Link>

						<a href="https://docs.google.com/document/d/1BN3VKQogykD_nMhRIooD2lmI-N-15W23IKvzlusrxB0/edit">
							<div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
								<BsFillPersonLinesFill />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
