import { useState } from "react";
import { circle, mainLogo, vs } from "../ui/images";

export default function Compare() {
  const [compare, setCompare] = useState("FTMO");

  const values = {
    FTMO: [
      "100K FTMO Challenge",
      "€540",
      " 5% Daily | 10% Total",
      "80:20",
      "4 Days",
      "30 & 60 Days",
      "10% Phase 1 | 5% Phase 2",
      "Yes, only Swing account",
    ],
    "MY FOREX FUNDS": [
      "100K Evaluation",
      "€499",
      " 5% Daily | 12% Total",
      "75:25",
      "5 Days",
      "30 & 60 Days",
      "8% Phase 1 | 5% Phase 2",
      "Yes",
    ],
    "TRUE FOREX FUNDS": [
      "100K Evaluation",
      "€499",
      " 5% Daily | 10% Total",
      "75:25",
      "5 Days",
      "30 & 60 Days",
      "8% Phase 1 | 5% Phase 2",
      "Yes",
    ],
    FUNDEDNEXT: [
      "100K Evaluation",
      "€549",
      " 5% Daily | 10% Total",
      "80:20",
      "5 Days",
      "30 & 60 Days",
      "10% Phase 1 | 5% Phase 2",
      "Yes",
    ],
  };
  return (
    <section className="compare relative pt-16">
      <div className="container relative">
        <div className="wrapper relative z-10 grid gap-12">
          <div className="heading flex flex-col justify-center sm:items-center md:text-center gap-8">
            <h2 className="text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient font-medium">
              Compare Your Options
            </h2>
            {/* buttons */}
            <div className="buttons grid grid-cols-2 sm:grid-cols-4 gap-4 text-center justify-center items-center max-w-[20rem] sm:max-w-none">
              <button
                className={`button py-2 px-3 xs:px-4 font-semibold rounded-xl transition-all duration-200 text-main-bg text-[0.7rem] cursor-pointer ${
                  compare === "FTMO" ? "bg-primary" : "bg-primary/70"
                }
              `}
                onClick={() => setCompare("FTMO")}
              >
                FTMO
              </button>
              <button
                className={`button py-2 px-3 xs:px-4 font-semibold rounded-xl transition-all duration-200 text-main-bg text-[0.7rem] cursor-pointer ${
                  compare === "MY FOREX FUNDS" ? "bg-primary" : "bg-primary/70"
                }
              `}
                onClick={() => setCompare("MY FOREX FUNDS")}
              >
                MY FOREX FUNDS
              </button>
              <button
                className={`button py-2 px-3 xs:px-4 font-semibold rounded-xl transition-all duration-200 text-main-bg text-[0.7rem] cursor-pointer ${
                  compare === "TRUE FOREX FUNDS"
                    ? "bg-primary"
                    : "bg-primary/70"
                }
              `}
                onClick={() => setCompare("TRUE FOREX FUNDS")}
              >
                TRUE FOREX FUNDS
              </button>
              <button
                className={`button py-2 px-3 xs:px-4 font-semibold rounded-xl transition-all duration-200 text-main-bg text-[0.7rem] cursor-pointer ${
                  compare === "FUNDEDNEXT" ? "bg-primary" : "bg-primary/70"
                }
              `}
                onClick={() => setCompare("FUNDEDNEXT")}
              >
                FUNDEDNEXT
              </button>
            </div>
          </div>

          {/* content */}
          <div className="content relative z-10 grid sm:grid-cols-2 m-auto gap-10 max-w-[55rem] w-full">
            {/* item */}
            <div className="item relative z-10 bg-main-bg/[35%] py-4 px-4 md:px-6 rounded-xl border sm:border-none border-primary/10">
              {/* head */}
              <div className="head flex items-center bg-primary/10 p-2 rounded-lg h-[60px]">
                <img className="w-40" src={mainLogo} alt="main-logo" />
              </div>
              {/* paras */}
              <div className="paras grid gap-4 py-8">
                <span>Account Size & Model - 100K Evaluation</span>
                <span>Price - $475</span>
                <span>Maximum Drawdown - 4% Daily | 8% Total</span>
                <span>Payout Split - 80/20</span>
                <span>Minimum Trading Days - 5 Day</span>
                <span>Time Period For Evaluation - 45 & 45 Days</span>
                <span>Targets Profit - 8% & 5%</span>
                <span>Hold Trade On Weekends - Yes</span>
              </div>
            </div>
            {/* item */}
            <div className="item relative z-10 bg-main-bg/[35%] py-4 px-4 md:px-6 rounded-xl border sm:border-none border-primary/10">
              {/* head */}
              <div className="head flex items-center bg-primary/10 py-2 px-4 rounded-lg text-xl font-bold h-[60px]">
                {compare}
              </div>
              {/* paras */}
              <div className="paras grid gap-4 py-8">
                <span>Account Size & Model - {values[compare][0]}</span>
                <span>Price - {values[compare][1]}</span>
                <span>Maximum Drawdown - {values[compare][2]}</span>
                <span>Payout Split - {values[compare][3]}</span>
                <span>Minimum Trading Days - {values[compare][4]}</span>
                <span>Time Period For Evaluation - {values[compare][5]}</span>
                <span>Targets Profit - {values[compare][6]}</span>
                <span>Hold Trade On Weekends - {values[compare][7]}</span>
              </div>
            </div>

            {/* vs */}
            <img
              className="w-10 hidden sm:w-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={vs}
              alt="vs"
            />
          </div>
        </div>
        {/* cirlce */}
        <img
          className="cirlce absolute -top-[24rem] sm:-top-[20rem] -left-[20%] sm:-left-[20rem]  w-[70rem] rotate-[80deg] opacity-10"
          src={circle}
          alt="circle"
        />
        {/* Right */}
        <img
          className="cirlce absolute top-[10rem] -right-[35rem]  w-[70rem] rotate-[180deg] opacity-[0.05]"
          src={circle}
          alt="circle"
        />
        <img
          className="cirlce md:hidden absolute bottom-0 -left-[50%] max-w-[100rem] w-[70rem] rotate-[180deg] opacity-[0.07]"
          src={circle}
          alt="circle"
        />
        {/* cirlce */}
        <img
          className="cirlce absolute -top-[24rem] sm:-top-[20rem] -left-[20%] sm:-left-[20rem]  w-[70rem] rotate-[80deg] opacity-[0.05]"
          src={circle}
          alt="circle"
        />
        {/* Right */}
        <img
          className="cirlce absolute top-[10rem] -right-[35rem]  w-[70rem] rotate-[180deg] opacity-[0.1]"
          src={circle}
          alt="circle"
        />
        <img
          className="cirlce md:hidden absolute bottom-0 -right-[10%]  w-[70rem] rotate-[180deg] opacity-[0.1]"
          src={circle}
          alt="circle"
        />
      </div>
    </section>
  );
}
