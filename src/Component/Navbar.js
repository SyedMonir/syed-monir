import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenuFold } from 'react-icons/ai';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="w-full sticky top-0 z-50 flex flex-wrap items-center justify-center px-2 py-3 bg-slate-800 shadow gap-16 h-16 text-white text-lg font-medium">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative items-center flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className=" font-bold leading-loose tracking-widest inline-block mr-4 whitespace-nowrap uppercase text-white"
              to="/"
            >
              Syed Monir <span className="text-green-600 text-3xl">.</span>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <AiOutlineMenuFold />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="sm:px-3 py-2 flex items-center text-base tracking-widest uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#about"
                >
                  <span className="ml-2">About Me</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="sm:px-3 py-2 flex items-center text-base tracking-widest uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#projects"
                >
                  <span className="ml-2">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="sm:px-3 py-2 flex items-center text-base tracking-widest uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/blogs"
                >
                  <span className="ml-2">Blogs</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="sm:px-3 py-2 flex items-center text-base tracking-widest uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#contact"
                >
                  <span className="ml-2">Contact</span>
                </a>
              </li>
              <li className="nav-item border ml-2">
                <a
                  className="sm:px-3 py-2 flex items-center text-base tracking-widest uppercase font-bold leading-snug text-white hover:bg-white hover:opacity-75 hover:text-black"
                  href="https://drive.google.com/file/d/1oV4WaM6JNdGQzuJ7K9CAAPHdR4WAiXtp/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="">Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
