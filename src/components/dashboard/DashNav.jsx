import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { mainLogo } from "../../ui/images";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CgMenuLeft } from "react-icons/cg";

// eslint-disable-next-line react/prop-types
export default function DashNav({ props }) {
  const [accountOpen, setAccountOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  // distructure
  const [setSideOpenMbl, sideOpenMbl] = props;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    setAccountOpen(false);
    setNotifOpen(false);
  }, [pathname]);

  const handleClick = (text) => {
    setNotifOpen(false);
    setAccountOpen(false);

    if (text === "notification") {
      setNotifOpen(!notifOpen);
    }
    if (text === "account") {
      setAccountOpen(!accountOpen);
    }
  };

  return (
    <header className="header-area px-[20px] z-[9999] fixed">
      <div className="header-left">
        <div className="logo text-center xl:!hidden !flex items-center justify-center relative z-[9999]">
          <Link to="/dashboard" className="cursor-pointer">
            <img className="max-w-[8.5rem]" src={mainLogo} />
          </Link>
        </div>
      </div>
      <div className="header-right">
        <Link
          to="/login"
          className="capitalize hidden sm:inline-block font-Montserrat text-xs font-bold py-3 px-7 bg-primary/80 hover:bg-primary transition-all duration-200 rounded-3xl text-dark"
        >
          GET STARTED NOW
        </Link>

        <div className="h-notification group">
          <div className="" onClick={() => handleClick("notification")}>
            <div className="h-10 w-10 bg-primary/50 rounded-full cursor-pointer flex justify-center items-center">
              <IoIosNotifications className="text-2xl" />
            </div>
          </div>

          <div
            className={`notification-open transition-all duration-500 ${
              notifOpen
                ? " scale-100 opacity-100 visible"
                : "scale-50 opacity-0 invisible"
            }`}
          >
            <h1 className="font-bold text-wht pb-[15px] mb-[20px] border-b border-primary/50 ">
              Notifications
            </h1>
            <div className="content text-center">
              <p>No Notification Here</p>
            </div>
          </div>
        </div>

        <div className="author-wrapper relative lg:!flex !hidden">
          <div
            className="author-wrap cursor-pointer"
            onClick={() => handleClick("account")}
          >
            <div className="thumb h-10 w-10 bg-primary/50 rounded-lg flex justify-center items-center">
              <FaUser className="text-xl" />
            </div>
            <div className="name ml-[15px]">
              James
              <svg
                className="inline-block w-[24px] h-[24px] fill-white"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </div>
          </div>

          <div
            className={`user-info-open absolute right-0 top-[70px] md:w-[228px] w-[280px] py-[10px] px-[20px] rounded-[10px] shadow-[0_1px_15px_rgba(199,179,252,0.13)] lg:origin-center origin-right bg-dark  z-[99999] transition-all duration-500 ${
              accountOpen
                ? " scale-100 opacity-100 visible"
                : "scale-50 opacity-0 invisible"
            }`}
          >
            <ul>
              <li className="border-b border-primary/20">
                <a
                  href="#"
                  className="block text-primary text-base leading-[1.5] tracking-[-0.05px] py-[10px] group-hover:!fill-primary"
                >
                  fundedhub@mail.com
                </a>
              </li>
              <li className="border-b border-primary/20 group">
                <Link
                  to="profile"
                  className="flex items-center   leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear text-wht group-hover:text-primary"
                >
                  <svg
                    className="w-[22px] h-[22px] mr-[10px]  transition-all duration-350 ease-linear fill-white group-hover:!fill-primary"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                  </svg>
                  My Profile
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/login"
                  className="flex items-center leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear  text-wht group-hover:text-primary"
                >
                  <svg
                    className="w-[22px] h-[22px] mr-[10px] transition-all duration-350 ease-linear fill-white group-hover:!fill-primary"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"></path>
                  </svg>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mobile-bar lg:hidden group"
          onClick={() => (setSideOpenMbl(!sideOpenMbl), setNotifOpen(false))}
        >
          <div className="h-10 w-10 bg-primary/50 rounded-full cursor-pointer flex justify-center items-center">
            <CgMenuLeft className="text-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
}
