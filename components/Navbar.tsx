import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/twitch' ||
      router.asPath === '/netflix' ||
      router.asPath === '/accountseller' ||
      router.asPath === '/gecko' ||
      router.asPath === '/booker'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  function handleNav() {
    setNav((prevState) => !prevState);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className="flex items-center justify-center w-full h-full md:mr-30">
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden space-x-48 md:flex"
          >
            <Link href="/">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Contact
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300 ">
              <p className="w-[85%] md:w-[90%] py-4">Welcome to my Portfolio</p>
            </div>
          </div>

          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect!
              </p>

              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
