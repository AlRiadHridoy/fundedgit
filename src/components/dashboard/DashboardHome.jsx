import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { arrow, copy, circle } from "../../ui/images";
import Chart from "./Chart";

export default function DashboardHome() {
  const [passVisible, setPassVisible] = useState(false);
  const [account, setAccount] = useState("Funded - 7382691");
  const [paraHeight, setparaHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const refferance = useRef(null);

  const copyFunc = (el, text) => {
    el.target.parentNode.classList.add("copied");
    setTimeout(() => {
      el.target.parentNode.classList.remove("copied");
    }, 450);
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    setparaHeight(refferance.current.clientHeight);
  }, [isOpen]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const userinfo = {
    login: "7382691",
    password: "HDJNSJ39",
    server: "TFH - Funded",
    balance: "5000.00",
    platform: "MetaTrader 5",
  };

  return (
    <main className="dashboard relative mt-4">
      <div className="content-wrapper relative">
        <div className="inner-content px-6 relative">
          <div className="flex flex-col xs:flex-row gap-5 relative mb-10">
            <div className="inline-flex justify-start text-[22px] leading-[1.5] font-medium tracking-[-0.06px]">
              <svg
                className="breadcrumb-icon mt-1"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
              </svg>
              Dashboard
            </div>

            {/* Accounts */}
            <div className="accounts relative h-[1.875rem] z-50">
              <div className="grid gap-2 absolute inset-0  max-w-[12rem] xs:min-w-[12rem]">
                <div className="border border-primary/30 hover:border-primary/50 transition-all duration-200 rounded-lg bg-main-bg/40 w-full relative">
                  <header
                    onClick={() => setIsOpen(!isOpen)}
                    className="select-account flex justify-between cursor-pointer w-full py-[0.26rem] px-2.5"
                  >
                    <h3 className="text-[0.9rem] xs:text-base">{account}</h3>

                    <div className="arrow flex justify-center items-center">
                      <img
                        className={`max-w-[1rem] transform-gpu transition-all duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        src={arrow}
                        alt="arrow"
                      />
                    </div>
                  </header>

                  <div
                    className={`select-account content overflow-hidden bg-main-bg/50 backdrop-blur-3xl absolute border border-primary/50 transition-all duration-300 py-[0.26rem] w-full mt-2 rounded-lg ${
                      isOpen
                        ? "max-h-[78px] opacity-100 visible"
                        : "max-h-0 opacity-0 invisible"
                    }`}
                  >
                    <p
                      ref={refferance}
                      className="grid gap-1 text-center text-[0.9rem] xs:text-base py-1.5"
                    >
                      <h5
                        className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-[0.99] hover:scale-100 font-normal transition-all duration-200 ${
                          account === "Phase 1 - 6180217" ? "hidden" : ""
                        }`}
                        onClick={() => (
                          setAccount("Phase 1 - 6180217"), setIsOpen(false)
                        )}
                      >
                        Phase 1 - 6180217
                      </h5>
                      <h5
                        className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-[0.99] hover:scale-100 font-normal transition-all duration-200 ${
                          account === "Phase 2 - 9584654" ? "hidden" : ""
                        }`}
                        onClick={() => (
                          setAccount("Phase 2 - 9584654"), setIsOpen(false)
                        )}
                      >
                        Phase 2 - 9584654
                      </h5>
                      <h5
                        className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-[0.99] hover:scale-100 font-normal transition-all duration-200 ${
                          account === "Funded - 7382691" ? "hidden" : ""
                        }`}
                        onClick={() => (
                          setAccount("Funded - 7382691"), setIsOpen(false)
                        )}
                      >
                        Funded - 7382691
                      </h5>
                    </p>
                  </div>
                </div>

                <div className="border-2 hidden border-primary/30 hover:border-primary/50 transition-all duration-200 rounded-lg bg-dark w-full">
                  <header
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between cursor-pointer w-full py-[0.26rem] px-2.5"
                  >
                    <h3 className="text-[0.9rem] xs:text-base">{account}</h3>

                    <div className="arrow flex justify-center items-center">
                      <img
                        className={`max-w-[1.2rem] transform-gpu transition-all duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        src={arrow}
                        alt="arrow"
                      />
                    </div>
                  </header>

                  <div
                    style={{ maxHeight: isOpen ? paraHeight + "px" : "0" }}
                    className={`content transition-all duration-300 overflow-hidden`}
                  >
                    <p
                      ref={refferance}
                      className="grid gap-1 mt-1 text-[0.9rem] xs:text-base pb-4 px-4"
                    >
                      <h5
                        className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-[0.99] hover:scale-100 font-normal transition-all duration-200 ${
                          account === "Phase - 1" ? "hidden" : ""
                        }`}
                        onClick={() => (
                          setAccount("Phase - 1"), setIsOpen(false)
                        )}
                      >
                        Phase - 1
                      </h5>
                      <h5
                        className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-[0.99] hover:scale-100 font-normal transition-all duration-200 ${
                          account === "Phase - 2" ? "hidden" : ""
                        }`}
                        onClick={() => (
                          setAccount("Phase - 2"), setIsOpen(false)
                        )}
                      >
                        Phase - 2
                      </h5>
                      <h5
                        className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-[0.99] hover:scale-100 font-normal transition-all duration-200 ${
                          account === "Funded" ? "hidden" : ""
                        }`}
                        onClick={() => (setAccount("Funded"), setIsOpen(false))}
                      >
                        Funded
                      </h5>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard */}
          <div className="dashboard-wrapper z-10">
            <div className="flex flex-wrap">
              <div className="w-full grid gap-6">
                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-20">
                  <div className="dashboard-card card-border">
                    <div className="d-icon bg-gry">
                      <svg
                        className="fill-main-bg h- w-6"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
                      </svg>
                    </div>
                    <div className="content">
                      <h2>$400.00</h2>
                      <p>profit</p>
                    </div>
                  </div>

                  <div className="dashboard-card card-border">
                    <div className="d-icon bg-gry">
                      <svg
                        className="fill-main-bg h- w-6"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path>
                      </svg>
                    </div>
                    <div className="content">
                      <h2>$0.00</h2>
                      <p className="!normal-case">Daily drawdown</p>
                    </div>
                  </div>

                  <div className="dashboard-card card-border">
                    <div className="d-icon bg-gry">
                      <svg
                        className="fill-main-bg h- w-6"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                      </svg>
                    </div>
                    <div className="content">
                      <h2>11 Days</h2>
                      <p>trading days</p>
                    </div>
                  </div>
                </div>
                {/* Account detalis */}
                <div className="flex flex-wrap relative z-20">
                  <div className="w-full">
                    <div className="card-wrap card-border">
                      <h3 className="card-title">Account Details</h3>
                      <div className="content">
                        <div className="account-info">
                          <div className="account-info-top grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            <div className="info-item">
                              <div className="wrapper flex gap-3">
                                <h4>Login</h4>
                                <div className="icon-wrapper relative before:absolute before:content-['Copied'] before:text-black before:py-1 before:px-2.5 before:text-xs before:rounded-lg before:bg-primary before:left-[50%] before:-top-[130%] before:opacity-0 before:invisible transition-all duration-200">
                                  <img
                                    className="w-4 opacity-70 cursor-pointer hover:opacity-40 transition duration-150"
                                    onClick={(el) => {
                                      copyFunc(el, userinfo.login);
                                    }}
                                    src={copy}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <p>{userinfo.login}</p>
                            </div>
                            <div className="info-item">
                              <div className="wrapper flex gap-3">
                                <h4>Password</h4>

                                <div className="icon-wrapper relative before:absolute before:content-['Copied'] before:text-black before:py-1 before:px-2.5 before:text-xs before:rounded-lg before:bg-primary before:left-[50%] before:-top-[130%] before:opacity-0 before:invisible transition-all duration-200">
                                  <img
                                    className="w-4 opacity-70 cursor-pointer hover:opacity-40 transition duration-150"
                                    onClick={(el) => {
                                      copyFunc(el, userinfo.password);
                                    }}
                                    src={copy}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="pass-show flex">
                                {passVisible ? (
                                  <p>{userinfo.password}</p>
                                ) : (
                                  <p>********</p>
                                )}

                                <div className="pass-icon ml-[20px]">
                                  <AiFillEye
                                    onClick={() => setPassVisible(false)}
                                    className={`icon w-[14px] h-[14px] fill-white cursor-pointer ${
                                      passVisible ? "" : "hidden"
                                    }`}
                                  />
                                  <AiFillEyeInvisible
                                    onClick={() => setPassVisible(true)}
                                    className={`icon w-[14px] h-[14px] fill-white cursor-pointer ${
                                      !passVisible ? "" : "hidden"
                                    }`}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="info-item">
                              <div className="wrapper flex gap-3">
                                <h4>Server</h4>
                                <div className="icon-wrapper relative before:absolute before:content-['Copied'] before:text-black before:py-1 before:px-2.5 before:text-xs before:rounded-lg before:bg-primary before:left-[50%] before:-top-[130%] before:opacity-0 before:invisible transition-all duration-200">
                                  <img
                                    className="w-4 opacity-70 cursor-pointer hover:opacity-40 transition duration-150"
                                    onClick={(el) => {
                                      copyFunc(el, userinfo.server);
                                    }}
                                    src={copy}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <p>{userinfo.server}</p>
                            </div>
                            <div className="info-item">
                              <div className="wrapper flex gap-3">
                                <h4>Balance</h4>
                              </div>
                              <p>${userinfo.balance}</p>
                            </div>
                            <div className="info-item">
                              <div className="wrapper flex gap-3">
                                <h4>Platform</h4>
                              </div>
                              <a href="#" className="text-primary underline">
                                {userinfo.platform}
                              </a>
                            </div>
                          </div>
                          <div className="account-info-bottom mt-10">
                            <div className="flex md:flex-nowrap flex-wrap items-center md:gap-[40px] gap-[20px]">
                              <p>
                                <span className="text-[16px] font-bold">
                                  Start Date:
                                </span>{" "}
                                Sep 25, 2022
                              </p>
                              <p>
                                <span className="text-[16px] font-bold">
                                  End Date:
                                </span>{" "}
                                Oct 25, 2022
                              </p>
                              <Link
                                to="trading-overview"
                                className="account-info-btn group text-main-bg"
                              >
                                Trading Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap mx-[-15px] relative">
                  <div className="w-full xs:px-[15px] z-10 relative">
                    <div className="sm:card-wrap">
                      <h3 className="card-title z-10 relative text-center sm:text-start mb-2">
                        Trading Growth Curve
                      </h3>
                      <div className="content">
                        {/* Chart section */}
                        <div className="chart relative z-10 grid gap-4 sm:border border-primary/20 rounded-xl">
                          {/* chart */}
                          <div className="bg-main-bg min-h-[300px] sm:h-[250px] md:h-[340px] rounded-xl">
                            <Chart />
                          </div>
                        </div>

                        {/* cirlces */}
                        {/* cirlce */}
                        <img
                          className="cirlce absolute -bottom-[20%] -right-[10%]  w-[50rem] rotate-[80deg] opacity-[0.09]"
                          src={circle}
                          alt="circle"
                        />
                        {/* cirlce */}
                        <img
                          className="cirlce absolute bottom-[20rem] -left-[10%]  w-[50rem] rotate-[80deg] opacity-[0.09]"
                          src={circle}
                          alt="circle"
                        />
                        {/* cirlce */}
                        <img
                          className="cirlce absolute -top-[10%] -right-[20%]  w-[70rem] rotate-[80deg] opacity-[0.07]"
                          src={circle}
                          alt="circle"
                        />
                        {/* cirlce */}
                        <img
                          className="cirlce absolute -bottom-[5%] -right-[20%]  w-[50rem] rotate-[80deg] opacity-[0.05]"
                          src={circle}
                          alt="circle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cirlce */}
      <img
        className="cirlce absolute -top-[50%] -left-[20%]  w-[60rem] rotate-[30deg] opacity-[0.19]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -top-[20%] -right-[3%]  w-[50rem] rotate-[90deg] opacity-[0.12]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -bottom-[20%] -left-[10%]  w-[50rem] rotate-[80deg] opacity-[0.19]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute bottom-[20rem] -left-[15rem]  w-[50rem] rotate-[80deg] opacity-[0.09]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -top-[10%] -right-[20%]  w-[70rem] rotate-[80deg] opacity-[0.13]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -bottom-[5%] -right-[20%]  w-[50rem] rotate-[80deg] opacity-[0.17]"
        src={circle}
        alt="circle"
      />
    </main>
  );
}
