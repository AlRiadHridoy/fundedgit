import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { footerBg, mainLogo } from "../ui/images";

export default function Navbar() {
  const [navToggle, setnavToggle] = useState(false);
  const { pathname } = useLocation();
  return (
    <>
      <header
        className={`z-50 relative left-0 right-0 transition-all duration-300 border-b border-transparent py-2 sm:py-4`}
      >
        <div className="container">
          <div className="wrapper flex justify-between">
            <Link to="/" className="main-logo flex gap-1">
              <img
                className="max-w-[9rem] md:max-w-[11rem]"
                src={mainLogo}
                alt="TheFundedHub"
              />
            </Link>

            <nav className="nav-links text-wht font-light flex justify-center items-center">
              <ul className="hidden md:flex gap-6 justify-center items-center text-sm">
                <li>
                  <Link
                    to="/faq"
                    className={`flex font-Montserrat font-semibold border-b border-transparent hover:border-white transition-all duration-300 ${
                      pathname === "/faq" ? "border-white" : ""
                    }`}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`flex font-Montserrat font-semibold border-b border-transparent hover:border-white transition-all duration-300 ${
                      pathname === "/contact" ? "border-white" : ""
                    }`}
                  >
                    Contact us
                  </Link>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="flex font-Montserrat font-semibold border-b border-transparent hover:border-white transition-all duration-300"
                  >
                    Blog
                  </a>
                </li> */}
                <li className="relative">
                  <Link
                    to="/login"
                    className="flex justify-center items-center font-Montserrat font-semibold text-main-bg hover:bg-primary bg-primary/80 transition-all duration-200 rounded-2xl w-[9rem] py-1.5"
                  >
                    Client Area
                  </Link>
                </li>
              </ul>

              <div className="menu-bar md:hidden">
                <svg
                  onClick={() => setnavToggle(!navToggle)}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1.8em"
                  width="1.8em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* mobile version */}

      <div className="mobile-nav">
        {/* Cross */}
        <svg
          onClick={() => setnavToggle(false)}
          className={`text-wht fixed right-[5%] top-8 z-[88] transition-all duration-500 ${
            navToggle ? "opacity-100 rotate-180 visible" : "opacity-0 invisible"
          }`}
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 15 15"
          height="2.2em"
          width="2.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
          ></path>
        </svg>

        {/* Bg dark */}
        <div
          onClick={() => setnavToggle(false)}
          className={`darkbg absolute inset-0 bg-main-bg/20 bottom-0  backdrop-blur-xl z-[77] transition-all duration-500 ${
            navToggle ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>
        <nav
          className={`mobile-nav md:hidden fixed top-0 bottom-0 w-[80%] xs:w-[70%] sm:w-[60%] bg-main-bg z-[99] transition-all duration-500 ${
            navToggle ? "left-0 opacity-100" : "-left-full opacity-0"
          }`}
        >
          <div className="wrapper">
            <Link to="/" className="logo block pt-6 px-6">
              <img
                className="max-w-[6rem] md:hidden"
                src={footerBg}
                alt="TheFundedHub"
              />
            </Link>

            <ul className="flex flex-col justify-start text-sm mt-6">
              <li>
                <Link
                  to="/faq"
                  className="flex font-Montserrat py-3 pl-6 w-full font-semibold border-y border-light/50 transition-all duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex font-Montserrat py-3 pl-6 w-full font-semibold border-b border-light/50 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>

              {/* <li>
                <a
                  href="#"
                  className="flex font-Montserrat py-3 pl-6 w-full font-semibold border-b border-light/50 transition-all duration-300"
                >
                  Blog
                </a>
              </li> */}

              <li className="flex mt-4 pl-6">
                <Link
                  to="/login"
                  className="flex justify-center items-center font-Montserrat font-semibold text-main-bg bg-primary rounded-lg w-36 h-10"
                >
                  Client Area
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
