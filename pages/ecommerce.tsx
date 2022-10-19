import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const ecommerce = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          src="/ecommerce.jpg"
          alt="PropertyProjectImage"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">E-Commerce Website</h2>
          <h3>Angular / Tailwindcss / Angular Material</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A simple E-commerce Website I have made using Angular, TailwindCSS
            and Angular Material in order to make use of the powerful rxjs
            library, using Observables and Subjects. And TailwindCSS for quick
            styling along with Angular Material for notifications, buttons etc
          </p>
          <div className="space-x-2">
            <button className="px-2 py-2 mt-4">
              <a href="https://github.com/aaron47/E-commerce">Code</a>
            </button>
            <button className="px-2 py-2 mt-4">
              <a href="https://e-commerce-51rvtu0iu-aaron47.vercel.app/home">
                Demo
              </a>
            </button>
          </div>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Angular
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Angular Material
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ecommerce;
