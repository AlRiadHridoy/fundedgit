import { Link, NavLink, useLocation } from "react-router-dom";

import { mainLogo, circle } from "../../ui/images";

import { MdPermContactCalendar } from "react-icons/md";
import { useEffect, useState } from "react";

export default function SiderNav() {
  const [activeNav, setActiveNav] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (pathname === "/dashboard") setActiveNav(true);
    else setActiveNav(false);
  }, [pathname]);
  return (
    <aside className="sidebar">
      <div className="logo text-center h-[80px] flex items-center justify-center cursor-pointer relative z-[9999]">
        <Link to="/">
          <img className="inline-block w-[120px]" src={mainLogo} alt="logo" />
        </Link>
      </div>
      <div className="lg:hidden flex flex-wrap flex-col items-center justify-center">
        <img
          className="w-[55px] h-[55px] rounded-full"
          src="/assets/img/author/author.jpeg"
          alt="author"
        />
        <h4 className="text-wht text-[15px] mt-[8px]">mikha dev</h4>
        <p className="text-primary text-[12px] mt-[8px]">mikha.dev@gmail.com</p>
      </div>
      <div className="main-menu z-30 relative">
        <ul className="nav grid gap-2 overflow-y-scroll">
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
                <span className="text group-hover:text-main-bg/70">
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
                <span className="text group-hover:text-main-bg/70">
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
                <span className="text group-hover:text-main-bg/70">
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
                <span className="text group-hover:text-main-bg/70">
                  Top-up & Reset
                </span>
              </div>
            </li>
          </NavLink>

          <NavLink
            to="billing"
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
                <span className="text group-hover:text-main-bg/70">
                  Billing
                </span>
              </div>
            </li>
          </NavLink>

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
                <span className="text group-hover:text-main-bg/70">Help</span>
              </div>
            </li>
          </NavLink>

          <NavLink
            to="dashboard-contact"
            className={({ isActive }) => (isActive ? "active-side-nav" : "")}
          >
            <li className="nav-item">
              <div className="nav-link group">
                <MdPermContactCalendar className="nav-icon fill-white/70 group-hover:fill-main-bg text-lg" />
                <span className="text group-hover:text-main-bg/70">
                  Contact
                </span>
              </div>
            </li>
          </NavLink>
        </ul>
      </div>
      {/* cirlce */}
      <img
        className="cirlce absolute bottom-[10%] -right-[2%] !max-w-[100rem] w-[90rem] rotate-[-20deg] opacity-[0.2]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -top-[10%] -left-[140%] !max-w-[50rem] w-[90rem] rotate-[-20deg] opacity-[0.1]"
        src={circle}
        alt="circle"
      />
    </aside>
  );
}
