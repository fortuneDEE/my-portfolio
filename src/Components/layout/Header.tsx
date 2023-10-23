import React from 'react'
import { BsFillMoonStarsFill} from 'react-icons/bs'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
  return (
    <div className=" min-h-fit bg-[#f5f5f5] px-10 md:px-20 lg:px-40 dark:bg-gray-800 dark:text-[#f5f5f5]">
      <nav className="py-4 flex items-center justify-between">
        <NavLink to="/">
          <h1 className="text-md font-burtons dark:text-white">CHIKA_CODES~</h1>
        </NavLink>
        {/* <ul className='flex items-center'> */}
        <div className="flex items-center justify-between">
          <li className="list-none mt-6">
            <BsFillMoonStarsFill
              onClick={props.ToggleDarkMode}
              className={`cursor-pointer text-2xl mb-6 mx-4 dark:text-white lg:hidden ${
                props.darkMode ? "dark" : ""
              }`}
            />
          </li>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600 dark:bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600 dark:bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600 dark:bg-white"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col text-gray-900 items-center justify-between min-h-[250px] no-underline">
                <li className="border-gray-400 my-8 font-thin uppercase no-underline hover:underline decoration-teal-600 underline-offset-8 decoration-2">
                  <a href="/about" className="active:bg-blue-500 font-thin">
                    About Me
                  </a>
                </li>
                <li className="border-gray-400 font-thin my-8 uppercase  no-underline hover:underline decoration-teal-600 underline-offset-8 decoration-2">
                  <a href="/service">Portfolio</a>
                </li>
                <li className="border-gray-400 font-thin my-8 uppercase no-underline hover:underline decoration-teal-600 underline-offset-8 decoration-2">
                  <a href="/contact">Contact</a>
                </li>

                <a
                  href="https://docs.google.com/document/d/1L2CjDej60KV6Nkh6xhbE1gSpPPQX02l2X9QPJwFsvE4/edit"
                  target="_blank"
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-2"
                >
                  <li>Resume</li>
                </a>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8  lg:flex dark:text-white">
            <li className="mt-2 no-underline hover:underline decoration-teal-600 underline-offset-8 decoration-2">
              <a href="/about">About Me</a>
            </li>
            <li className="mt-2 no-underline hover:underline decoration-teal-600 underline-offset-8 decoration-2">
              <a href="/service">Portfolio</a>
            </li>
            <li className="mt-2 no-underline hover:underline decoration-teal-600 underline-offset-8 decoration-2">
              <a href="/contact">Contact</a>
            </li>
            <li className="mt-2 no-underline hover:underline decoration-teal-600">
              <BsFillMoonStarsFill
                onClick={props.ToggleDarkMode}
                className="cursor-pointer text-2xl dark:text-white"
              />
            </li>
            <a
              href="https://docs.google.com/document/d/1L2CjDej60KV6Nkh6xhbE1gSpPPQX02l2X9QPJwFsvE4/edit"
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            >
              <li>Resume</li>
            </a>
          </ul>

          <style>
            {`
                    .hideMenuNav {
                      display: none;
                    }
                    .showMenuNav {
                      display: block;
                      position: absolute;
                      width: 100%;
                      height: 100vh;
                      top: 0;
                      left: 0;
                      background: white;
                      z-index: 10;
                      display: flex;
                      flex-direction: column;
                      justify-content: space-evenly;
                      align-items: center;
                    }
                `}
          </style>
        </div>
      </nav>
    </div>
  );
}

export default Header
