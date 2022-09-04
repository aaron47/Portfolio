const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-columns-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I have spent the last year or so learning web development, in the
            beginning, I started with basic HTML, CSS and Javascript and worked
            on a few simple projects, then I moved on to Typescript and React,
            and stuck to them ever since, in between those lines, I tried
            working with other frameworks such as Angular and Vue, but haven't
            stuck to them. So I decided to continue in the React way and
            continued to learn NextJS, and backend technologies such as Prisma
            and tRPC, which is where I am now.
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
