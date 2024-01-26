const About = () => {
	return (
		<div id="about" className="flex items-center w-full p-2 py-17 md:h-screen">
			<div className="max-w-[1240px] m-auto md:grid grid-columns-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="text-gray-600">
						I started as a Frontend Web Developer in Tunisia, and continued my
						path to become a Fullstack Web Developer using technologies such as
						Angular, React, ASP .NET Core NestJS. Then I started a new freelance
						journey as a Flutter and Android developer and managed to work on
						several projects. I also expanded my database knowledge by working
						with SQL and NoSQL databases such as MySQL, Postgres and MongoDB and
						Elasticsearch. I speak 4 languages, Russian and English fluently, as
						well as Arabic and French at B1 levels.
					</p>
				</div>
				<div className="flex items-center justify-center w-full h-auto p-4 m-auto shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
					<img
						className="rounded-xl"
						src="https://cdn.wccftech.com/wp-content/uploads/2016/11/Wallpapers.png"
						alt="/"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
