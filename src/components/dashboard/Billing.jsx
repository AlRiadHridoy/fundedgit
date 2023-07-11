import { useState } from "react";
import { thumbHistory, circle } from "../../ui/images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper";
import { Link } from "react-router-dom";

export default function Billing() {
  const [btnNum, setBtnNum] = useState(5);
  const [planSwap, setPlanSwap] = useState(true);

  const priceValues = {
    0: ["500", "500", "500", "1,000", "1,000", "1,000", "800", "500"],
    1: ["250", "250", "250", "500", "500", "500", "500", "250"],
    2: ["500", "500", "500", "1,000", "1,000", "1,000", "1,000", "500"],
    3: ["500", "500", "500", "1,000", "1,000", "1,000", "2,500", "1,250"],
    4: ["2,500", "2,500", "2,500", "5,000", "5,000", "5,000", "5,000", "2,500"],
    5: [
      "5,000",
      "5,000",
      "5,000",
      "10,000",
      "10,000",
      "10,000",
      "10,000",
      "5,000",
    ],
  };

  const refundable = ["1080", "57", "127", "227", "327", "527"];

  return (
    <main className="content-wrapper mt-4 min-h-screen">
      <div className="inner-content px-6">
        <div className="breadcrumb-wrap">
          <div className="breadcrumb-title">
            <svg
              className="breadcrumb-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
            </svg>
            Billing
          </div>
        </div>
        <div className="dashboard-wrapper relative">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="w-full px-[15px]">
                  <div className="card-wrap">
                    <div className="content">
                      <div className="tabs-wrap mb-[30px]">
                        <ul className="flex flex-wrap justify-center items-center gap-[20px] mb-[40px]">
                          {/* My plan */}
                          <li className="inline-block group">
                            <button
                              className={`px-[30px] py-[12px] rounded-[10px] shadow-[0_4px_10px_rgba(255,255,255,0.13)]  flex gap-2 ${
                                planSwap ? "bg-primary text-main-bg" : ""
                              }`}
                              onClick={() => setPlanSwap(!planSwap)}
                            >
                              My Plan
                            </button>
                          </li>
                          {/* Payment history */}
                          <li className="inline-block mr-[10px]">
                            <button
                              className={`flex gap-2 items-center px-[30px] py-[12px] rounded-[10px] shadow-[0_4px_10px_rgba(255,255,255,0.13)] ${
                                !planSwap ? "bg-primary text-main-bg" : ""
                              }`}
                              onClick={() => setPlanSwap(!planSwap)}
                            >
                              Payment History
                            </button>
                          </li>
                        </ul>
                        <div className="w-fullrounded-[10px">
                          <div className="">
                            <div className="tab-content tab-space">
                              {/* Prices */}
                              <div
                                className={`prices relative  ${
                                  planSwap ? "" : "hidden"
                                }`}
                              >
                                <div className="wrapper relative z-10">
                                  <div className="heading flex flex-col justify-center items-start">
                                    <h2 className="text-2xl xs:text-[1.7rem] text-wht-gradient">
                                      Get Started Now
                                    </h2>
                                    <p className="max-w-[55rem] mt-2">
                                      Choose your favorite account size, start
                                      trading, earn profit-splits and scale.
                                    </p>
                                  </div>

                                  {/* Desktop version */}
                                  <div className="desktop-content relative z-10 hidden lg:grid lg:grid-cols-9 gap-5 w-full bg-black/40 backdrop-blur-3xl rounded-2xl pt-4 py-6 px-6 mt-4 justify-center items-center">
                                    {/* Left side */}
                                    <div className="left col-span-4 grid items-center justify-start gap-4 rounded-xl  font-medium">
                                      <div className="heading grid gap-5">
                                        <div className="prices grid grid-cols-3 gap-4">
                                          <div className="price">
                                            <button
                                              className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                                                btnNum === 1
                                                  ? "outline-2 outline-all"
                                                  : "outline-1 outline-primary"
                                              }`}
                                              onClick={() => setBtnNum(1)}
                                            >
                                              $ 5,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                                                btnNum === 2
                                                  ? "outline-2 outline-all"
                                                  : "outline-1 outline-primary"
                                              }`}
                                              onClick={() => setBtnNum(2)}
                                            >
                                              $ 10,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                                                btnNum === 3
                                                  ? "outline-2 outline-all"
                                                  : "outline-1 outline-primary"
                                              }`}
                                              onClick={() => setBtnNum(3)}
                                            >
                                              $ 25,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                                                btnNum === 4
                                                  ? "outline-2 outline-all"
                                                  : "outline-1 outline-primary"
                                              }`}
                                              onClick={() => setBtnNum(4)}
                                            >
                                              $ 50,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                                                btnNum === 5
                                                  ? "outline-2 outline-all"
                                                  : "outline-1 outline-primary"
                                              }`}
                                              onClick={() => setBtnNum(5)}
                                            >
                                              $ 100,000
                                            </button>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="refund flex w-full items-center mt-12">
                                        <span className="text-base text-bold font-codePro">
                                          Refundable fee:
                                        </span>
                                        <h4 className="text-[1.4rem] font-extrabold ml-4">
                                          $ {refundable[btnNum]}
                                        </h4>
                                      </div>

                                      <div className="btn flex justify-start">
                                        <Link
                                          to="/login"
                                          className="uppercase bg-primary/20 font-Montserrat text-xs font-bold py-4 md:py-3 px-9 md:px-7 md:hover:bg-primary md:bg-primary/80 transition-all duration-200  rounded-xl md:text-dark"
                                        >
                                          get started now
                                        </Link>
                                      </div>
                                    </div>

                                    <div className="grid col-span-5 gap-3 rounded-xl w-full">
                                      <div className=" mt-12 item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                                        <span className="col-span-4 text-start">
                                          Trading{" "}
                                          <span className="font-bold">
                                            {" "}
                                            period{" "}
                                          </span>
                                          :
                                        </span>
                                        <div className="col-span-2 relative before:absolute before:font-bold before:content-['Phase_1'] before:-top-10 before:text-[0.9rem]">
                                          <span className="day-one">
                                            45 Days
                                          </span>
                                        </div>
                                        <div className="col-span-2 relative before:absolute before:font-bold before:content-['Phase_2'] before:-top-10 before:text-[0.9rem]">
                                          <span className="day-two">
                                            45 Days
                                          </span>
                                        </div>
                                        <span className="col-span-2 relative before:absolute before:font-bold before:content-['Funded'] before:-top-10">
                                          Indefinite
                                        </span>
                                      </div>

                                      <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                                        <span className="col-span-4 text-start">
                                          Minimum trading{" "}
                                          <span className="font-bold">
                                            {" "}
                                            days
                                          </span>
                                          :
                                        </span>
                                        <span className="col-span-2">
                                          5 Days
                                        </span>
                                        <span className="col-span-2">
                                          5 Days
                                        </span>
                                        <span className="col-span-2">
                                          5 Days
                                        </span>
                                      </div>

                                      <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                                        <span className="col-span-4 text-start">
                                          Max{" "}
                                          <span className="font-bold">
                                            {" "}
                                            Daily{" "}
                                          </span>{" "}
                                          Loss:
                                        </span>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][0]}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][1]}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][2]}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                                        <span className="col-span-4 text-start">
                                          Max{" "}
                                          <span className="font-bold">
                                            {" "}
                                            Overall{" "}
                                          </span>{" "}
                                          Loss:
                                        </span>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][3]}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][4]}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][5]}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                                        <span className="col-span-4 text-start">
                                          Profit{" "}
                                          <span className="font-bold">
                                            Target
                                          </span>
                                          :
                                        </span>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][6]}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          ${" "}
                                          <span className="priceVal">
                                            {priceValues[btnNum][7]}
                                          </span>
                                        </div>
                                        <span className="col-span-2">-</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Mobile version */}
                                  <div className="mobile-content relative lg:hidden flex flex-wrap gap-4 md:gap-12 justify-start items-center mt-5">
                                    <div className="top font-medium w-full">
                                      <div className="heading flex justify-center">
                                        {/* prices */}
                                        <div className="prices grid grid-cols-3 gap-2 xs:gap-4">
                                          <div className="price">
                                            <button
                                              className={`w-full py-3 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-2 ${
                                                btnNum === 1
                                                  ? "border-all"
                                                  : "border-primary"
                                              }`}
                                              onClick={() => setBtnNum(1)}
                                            >
                                              $ 5,000
                                            </button>
                                          </div>
                                          <div className="price">
                                            <button
                                              className={`w-full py-3 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-2 ${
                                                btnNum === 2
                                                  ? "border-all"
                                                  : "border-primary"
                                              }`}
                                              onClick={() => setBtnNum(2)}
                                            >
                                              $ 10,000
                                            </button>
                                          </div>

                                          <div className="price">
                                            <button
                                              className={`w-full py-3 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-2 ${
                                                btnNum === 3
                                                  ? "border-all"
                                                  : "border-primary"
                                              }`}
                                              onClick={() => setBtnNum(3)}
                                            >
                                              $ 25,000
                                            </button>
                                          </div>

                                          {/* price-wrapper */}
                                          <div className="price-wrapper col-span-full flex justify-center items-center gap-2 xs:gap-4">
                                            <div className="price">
                                              <button
                                                className={`w-full py-3 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-2 ${
                                                  btnNum === 4
                                                    ? "border-all"
                                                    : "border-primary"
                                                }`}
                                                onClick={() => setBtnNum(4)}
                                              >
                                                $ 50,000
                                              </button>
                                            </div>

                                            <div className="price">
                                              <button
                                                className={`w-full py-3 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-2 ${
                                                  btnNum === 5
                                                    ? "border-all"
                                                    : "border-primary"
                                                }`}
                                                onClick={() => setBtnNum(5)}
                                              >
                                                $ 100,000
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* slider */}
                                    <Swiper
                                      pagination={{
                                        dynamicBullets: true,
                                      }}
                                      effect={"coverflow"}
                                      grabCursor={true}
                                      centeredSlides={true}
                                      slidesPerView={"auto"}
                                      coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                      }}
                                      modules={[EffectCoverflow, Pagination]}
                                      className="evaluation-slider mt-6 flex flex-wrap gap-8 md:gap-10 justify-center md:justify-between items-center w-full"
                                    >
                                      <SwiperSlide className="">
                                        <div className="phase1 pt-2 pb-6 item grid gap-3 border border-primary/30 rounded-2xl">
                                          <div className="heading pb-3 mt-2 ">
                                            <h3 className="px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold">
                                              Phase 1
                                            </h3>
                                          </div>
                                          <div className="items grid gap-4 px-4">
                                            <div className="item flex justify-between gap-6 items-center">
                                              <span>
                                                Trading
                                                <span className="font-bold">
                                                  {" "}
                                                  period
                                                </span>
                                                :
                                              </span>
                                              <div className="">
                                                <span className="day-one">
                                                  45{" "}
                                                </span>{" "}
                                                Days
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Minimum trading{" "}
                                                <br className="sm:hidden" />
                                                <span className="font-bold">
                                                  {" "}
                                                  days
                                                </span>
                                                :
                                              </span>
                                              <span className="">5 Days</span>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Daily{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][0]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Overall{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][3]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Profit{" "}
                                                <span className="font-bold">
                                                  {" "}
                                                  Target{" "}
                                                </span>
                                                :
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][6]}
                                                </span>
                                              </div>
                                            </div>

                                            {/* Refund */}
                                            <div className="refund item flex justify-between gap-6 items-center">
                                              <span className="text-bold font-codePro">
                                                Refundable fee:
                                              </span>
                                              <h4 className="text-[1.2rem] font-extrabold ml-4 text-all">
                                                $ {refundable[btnNum]}
                                              </h4>
                                            </div>
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                      <SwiperSlide className="">
                                        <div className="phase2 pt-2 pb-6 item grid gap-3 border border-primary/30 rounded-2xl">
                                          <div className="heading pb-3 mt-2 ">
                                            <h3 className="px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold">
                                              Phase 2
                                            </h3>
                                          </div>
                                          <div className="items grid gap-4 px-4">
                                            <div className="item flex justify-between gap-6 items-center">
                                              <span>
                                                Trading
                                                <span className="font-bold">
                                                  {" "}
                                                  period
                                                </span>
                                                :
                                              </span>
                                              <div className="">
                                                <span className="day-one">
                                                  45{" "}
                                                </span>{" "}
                                                Days
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Minimum trading{" "}
                                                <br className="sm:hidden" />
                                                <span className="font-bold">
                                                  {" "}
                                                  days
                                                </span>
                                                :
                                              </span>
                                              <span className="">5 Days</span>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Daily{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][1]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Overall{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][4]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Profit
                                                <span className="font-bold">
                                                  {" "}
                                                  target{" "}
                                                </span>
                                                :
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][7]}
                                                </span>
                                              </div>
                                            </div>

                                            {/* Refund */}
                                            <div className="refund item flex justify-between gap-6 items-center">
                                              <span className="text-bold font-codePro">
                                                Refundable fee:
                                              </span>
                                              <h4 className="ml-4">Free</h4>
                                            </div>
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                      <SwiperSlide className="">
                                        <div className="funded pt-2 pb-6 item grid gap-3 border border-primary/30 rounded-2xl">
                                          <div className="heading pb-3 mt-2 ">
                                            <h3 className="px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold">
                                              Funded
                                            </h3>
                                          </div>
                                          <div className="items grid gap-4 px-4">
                                            <div className="item flex justify-between gap-6 items-center">
                                              <span>
                                                Trading
                                                <span className="font-bold">
                                                  {" "}
                                                  period
                                                </span>
                                                :
                                              </span>
                                              <div className="">
                                                <span className="day-one">
                                                  45{" "}
                                                </span>{" "}
                                                Days
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Minimum trading{" "}
                                                <br className="sm:hidden" />
                                                <span className="font-bold">
                                                  {" "}
                                                  days
                                                </span>
                                                :
                                              </span>
                                              <span className="">5 Days</span>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Daily{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][2]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Max
                                                <span className="font-bold">
                                                  {" "}
                                                  Overall{" "}
                                                </span>{" "}
                                                Loss:
                                              </span>
                                              <div className="">
                                                ${" "}
                                                <span className="priceVal">
                                                  {priceValues[btnNum][5]}
                                                </span>
                                              </div>
                                            </div>

                                            <div className="item flex justify-between gap-6 items-center">
                                              <span className="">
                                                Profit
                                                <span className="font-bold">
                                                  {" "}
                                                  Target{" "}
                                                </span>
                                                :
                                              </span>
                                              <span>-</span>
                                            </div>

                                            {/* Refund */}
                                            <div className="refund item flex justify-between gap-6 items-center">
                                              <span className="text-bold font-codePro">
                                                Refundable fee:
                                              </span>
                                              <h4 className="ml-4">Refund</h4>
                                            </div>
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                    </Swiper>

                                    <div className="btn flex w-full justify-center mt-14">
                                      <Link
                                        to="/login"
                                        className="capitalize font-Montserrat text-xs font-bold py-3 px-7 bg-primary/80 hover:bg-primary transition-all duration-200 rounded-3xl text-dark"
                                      >
                                        GET STARTED NOW
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* History */}
                          <div
                            className={`payment-method text-center py-[40px] ${
                              !planSwap ? "" : "hidden"
                            }`}
                          >
                            <div className="thumb inline-block mb-[24px]">
                              <img src={thumbHistory} alt="thumb" />
                            </div>
                            <p>No history found!</p>
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
            className="cirlce absolute -bottom-[20%] -left-[5%] !max-w-[100rem] w-[80rem] rotate-[80deg] opacity-[0.1]"
            src={circle}
            alt="circle"
          />
          {/* cirlce */}
          <img
            className="cirlce absolute -top-[50%] -right-[15%] !max-w-[100rem] w-[50rem] rotate-[80deg] opacity-[0.12]"
            src={circle}
            alt="circle"
          />
          {/* cirlce */}
          <img
            className="cirlce absolute -bottom-[30%] -right-[15%] !max-w-[100rem] w-[50rem] rotate-[80deg] opacity-[0.2]"
            src={circle}
            alt="circle"
          />
          {/* cirlce */}
          <img
            className="cirlce absolute -bottom-[50%] -left-[25%] !max-w-[100rem] w-[65rem] rotate-[80deg] opacity-[0.17]"
            src={circle}
            alt="circle"
          />
        </div>
      </div>
    </main>
  );
}
