import React from 'react';
import { DownloadIcon, MailIcon } from '@heroicons/react/solid';

const Navbar = () => {
    return (
        <div className="navbar bg-gray-800 md:sticky top-0 z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
        <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52"><nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-col items-center text-base justify-center">
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#projects" className="mr-5 hover:text-white">
                        Projects
                    </a>
                    <a href="#education" className="mr-5 hover:text-white">
                        Education
                    </a>
                    <a href="https://github.com/Tabrid" className="mr-5 hover:text-white">
                        GitHub
                    </a>
                    <a href="www.linkedin.com/in/riyadh1810" className="mr-5 hover:text-white">
                        LinkedIn
                    </a>
                    <a
                    href="#contact"
                    className="bg-blue-600 inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white">
                    Contact Me
                    <MailIcon className="w-4 h-4 ml-1" />
                </a>
                </nav>
                </div>
    </div>
    <div className="title-font font-medium text-white  md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Riyadh Mollik
                    </a>
                </div>
  </div>
  <div className="hidden lg:flex">
<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex  items-center text-base justify-center">
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#projects" className="mr-5 hover:text-white">
                        Projects
                    </a>
                    <a href="#education" className="mr-5 hover:text-white">
                        Education
                    </a>
                    <a href="https://github.com/Tabrid" className="mr-5 hover:text-white">
                        GitHub
                    </a>
                    <a href="www.linkedin.com/in/riyadh1810" className="mr-5 hover:text-white">
                        LinkedIn
                    </a>
                    <a
                    href="#contact"
                    className="w-36  flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 bg-gray-700 rounded text-base mt-4 md:mt-0 text-white ml-96">
                    <p>Contact Me</p>
                    <MailIcon className="ml-3 w-4 h-4" />
                </a>
                </nav>
  </div>
  <div className="navbar-end lg:mr-12">
  <a 
                    href="Resume of Riyadh Mollik.pdf" download='Resume of Riyadh Mollik.pdf'
                    className="bg-blue-600 flex items-center border-0 py-1 px-7 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 animate-pulse lg:w-36 ">
                    <p className='text-slate-50	'>Resume</p>
                    <DownloadIcon className="w-4 h-4 ml-1" />

 </a>
  </div>
</div>
    );
};

export default Navbar;