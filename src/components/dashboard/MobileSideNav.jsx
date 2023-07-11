import { NavLink, useLocation } from "react-router-dom";

import { author, circle } from "../../ui/images";

import { MdPermContactCalendar } from "react-icons/md";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function MobileSideNav({ props }) {
  const [activeNav, setActiveNav] = useState(false);
  const [setSideOpenMbl, sideOpenMbl] = props;

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setSideOpenMbl(false);
    if (pathname === "/dashboard") setActiveNav(true);
    else setActiveNav(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <div className=" wrapper relative left-0 right-0 top-0 bottom-0 z-[999] mt-[100px] overflow-hidden">
      <aside
        className={`mobile-nav pt-[70px] lg:hidden w-[80%] sm:w-[60%] h-full fixed z-[999] top-0 bottom-0 bg-main-bg transition-all duration-500 overflow-hidden  ${
          sideOpenMbl ? "left-0" : "-left-full"
        }
    `}
      >
        {/* dark */}
        <div
          className={`bg-main-bg/70 fixed z-[90] left-0 right-0 top-0 bottom-0 transition-all duration-200 ${
            sideOpenMbl ? "visible opacity-100" : "invisible opacity-0 -z-[100]"
          }`}
          onClick={() => setSideOpenMbl(false)}
        ></div>
        {/* main logo */}
        {/* <div className="main-logo p-4 ml-6 pt-6">
          <img className="max-w-[8rem]" src={mainLogo} alt="" />
        </div> */}
        <div className="lg:hidden z-[999] flex pt-4 flex-wrap flex-col items-center justify-center  relative">
          <img
            className="w-[55px] h-[55px] rounded-full"
            src={author}
            alt="author"
          />
          <h4 className="text-wht text-[15px] mt-[8px]">mikha dev</h4>
          <p className="text-primary text-[12px] mt-[8px]">
            mikha.dev@gmail.com
          </p>
        </div>
        <div className="main-menu relative z-[999]">
          <ul className="nav grid gap-2 overflow-y-scroll h-full">
            <NavLink
              to="/dashboard"
              onClick={() => setActiveNav(true)}
              className={activeNav ? "active-side-nav" : ""}
            >
              <li className="nav-item">
                <div className="nav-link">
                  <svg
                    className="nav-icon fill-white/70 group-hover:fill-main-bg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                  </svg>
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Dashboard
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="trading-overview"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <svg
                    className="nav-icon fill-white/70 group-hover:fill-main-bg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
                  </svg>
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Trading Overview
                  </span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="withdraw"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <svg
                    className="nav-icon fill-white/70 group-hover:fill-main-bg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
                  </svg>
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Withdraw
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="top-up-reset"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <svg
                    className="nav-icon fill-white/70 group-hover:fill-main-bg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"></path>
                  </svg>
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Top-up & Reset
                  </span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="./billing"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <svg
                    className="nav-icon fill-white/70 group-hover:fill-main-bg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
                  </svg>
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Billing
                  </span>
                </div>
              </li>
            </NavLink>

            {/* <NavLink
              to="news-calendar"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <svg
                    className="nav-icon fill-white/70 group-hover:fill-main-bg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                  </svg>
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    News Calendar
                  </span>
                </div>
              </li>
            </NavLink> */}

            <NavLink
              to="help"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <svg
                    className="nav-icon fill-white/70 group-hover:fill-main-bg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path>
                  </svg>
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Help
                  </span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="dashboard-contact"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group flex gap-4">
                  <MdPermContactCalendar className="fill-white/70 group-hover:fill-main-bg text-lg" />
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Contact
                  </span>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>

        {/* cirlce */}
        <img
          className="cirlce absolute bottom-[10%] -right-[2%] h-[90rem] w-[90rem] rotate-[-20deg] opacity-[0.2]"
          src={circle}
          alt="circle"
        />
        {/* cirlce */}
        <img
          className="cirlce absolute top-[10%] -left-[70%] w-[90rem] rotate-[-20deg] opacity-[0.3]"
          src={circle}
          alt="circle"
        />
      </aside>
    </div>
  );
}
