import { useState } from "react";
import { circle } from "../ui/images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper";
import { Link } from "react-router-dom";

export default function Prices() {
  const [btnNum, setBtnNum] = useState(5);

  const priceValues = {
    0: ["500", "500", "500", "1,000", "1,000", "1,000", "800", "500"],
    1: ["250", "250", "250", "600", "600", "600", "400", "250"],
    2: ["500", "500", "500", "1,200", "1,200", "1,200", "800", "500"],
    3: ["1,250", "1,250", "1,250", "3,000", "3,000", "3,000", "2,000", "1,250"],
    4: ["2,500", "2,500", "2,500", "6,000", "6,000", "6,000", "4,000", "2,500"],
    5: [
      "5,000",
      "5,000",
      "5,000",
      "12,000",
      "12,000",
      "12,000",
      "8,000",
      "5,000",
    ],
  };

  const refundable = ["1080", "57", "127", "227", "327", "527"];

  return (
    <section className="prices relative pt-16 md:pt-28">
      <div className="container relative">
        <div className="wrapper relative z-10">
          <div className="heading flex flex-col justify-center items-start">
            <h2 className="text-2xl xs:text-[1.7rem] text-wht-gradient">
              Get Started Now
            </h2>
            <p className="max-w-[55rem] mt-2">
              Choose your favorite account size, start trading, earn
              profit-splits and scale.
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
                <span className="text-base font-codePro">Refundable fee:</span>
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

            <div className="grid col-span-5 gap-3 rounded-xl w-full mt-12">
              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Trading <span className="font-bold"> period </span>:
                </span>
                <div className="col-span-2 relative before:absolute before:font-bold before:content-['Phase_1'] flex justify-center before:-top-10 before:text-[0.9rem]">
                  <span className="day-one">45 Days</span>
                </div>
                <div className="col-span-2 relative before:absolute before:font-bold before:content-['Phase_2'] flex justify-center before:-top-10 before:text-[0.9rem]">
                  <span className="day-two">45 Days</span>
                </div>
                <span className="col-span-2 relative before:absolute before:font-bold before:content-['Funded'] before:-top-10">
                  Indefinite
                </span>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Minimum trading <span className="font-bold"> days</span>:
                </span>
                <span className="col-span-2">5 Days</span>
                <span className="col-span-2">5 Days</span>
                <span className="col-span-2">5 Days</span>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start mt-[0.13rem]">
                  Max <span className="font-bold"> Daily </span> Loss:
                </span>
                <div className="col-span-2">
                  <span className="font-bold">$ </span>
                  <span className="priceVal inline-flex justify-center items-center">
                    {priceValues[btnNum][0]}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="font-bold">$ </span>
                  <span className="priceVal inline-flex justify-center items-center">
                    {priceValues[btnNum][1]}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="font-bold">$ </span>
                  <span className="priceVal inline-flex justify-center items-center">
                    {priceValues[btnNum][2]}
                  </span>
                </div>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start pt-[0.1rem]">
                  Max <span className="font-bold"> Overall </span> Loss:
                </span>
                <div className="col-span-2">
                  <span className="font-bold">$ </span>
                  <span className="priceVal inline-flex justify-center items-center">
                    {priceValues[btnNum][3]}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="font-bold">$ </span>
                  <span className="priceVal inline-flex justify-center items-center">
                    {priceValues[btnNum][4]}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="font-bold">$ </span>
                  <span className="priceVal inline-flex justify-center items-center">
                    {priceValues[btnNum][5]}
                  </span>
                </div>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center ">
                <span className="col-span-4 text-start mt-[0.13rem]">
                  Profit <span className="font-bold">Target</span>:
                </span>
                <div className="col-span-2">
                  <span className="font-bold">$ </span>
                  <span className="priceVal inline-flex justify-center items-center">
                    {priceValues[btnNum][6]}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="font-bold">$ </span>
                  <span className="priceVal inline-flex justify-center items-center">
                    {priceValues[btnNum][7]}
                  </span>
                </div>
                <span className="col-span-2">-</span>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <div className="mobile-content relative lg:hidden flex flex-wrap justify-start items-center mt-10">
            <div className="top font-medium w-full">
              <div className="heading flex justify-center">
                {/* prices */}
                <div className="prices grid grid-cols-3 gap-2 xs:gap-4">
                  <div className="price">
                    <button
                      className={`w-full py-3 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-2 ${
                        btnNum === 1 ? "border-all" : "border-primary"
                      }`}
                      onClick={() => setBtnNum(1)}
                    >
                      $ 5,000
                    </button>
                  </div>
                  <div className="price">
                    <button
                      className={`w-full py-3 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-2 ${
                        btnNum === 2 ? "border-all" : "border-primary"
                      }`}
                      onClick={() => setBtnNum(2)}
                    >
                      $ 10,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-full py-3 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-2 ${
                        btnNum === 3 ? "border-all" : "border-primary"
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
                          btnNum === 4 ? "border-all" : "border-primary"
                        }`}
                        onClick={() => setBtnNum(4)}
                      >
                        $ 50,000
                      </button>
                    </div>

                    <div className="price">
                      <button
                        className={`w-full py-3 px-2 xs:p-3 rounded-md text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-2 ${
                          btnNum === 5 ? "border-all" : "border-primary"
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
                clickable: true,
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
              className="evaluation-slider mt-10 flex flex-wrap gap-8 md:gap-10 justify-center md:justify-between items-center w-full"
            >
              <SwiperSlide >
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
                        <span className="font-bold"> period</span>:
                      </span>
                      <div>
                        <span className="day-one">45 </span> Days
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Minimum trading <br className="sm:hidden" />
                        <span className="font-bold"> days</span>:
                      </span>
                      <span>5 Days</span>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Max
                        <span className="font-bold"> Daily </span> Loss:
                      </span>
                      <div>
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][0]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Max
                        <span className="font-bold"> Overall </span> Loss:
                      </span>
                      <div>
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][3]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Profit <span className="font-bold"> Target </span>:
                      </span>
                      <div>
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][6]}
                        </span>
                      </div>
                    </div>

                    {/* Refund */}
                    <div className="refund item flex justify-between gap-6 items-center">
                      <span className="font-codePro">Refundable fee:</span>
                      <h4 className="text-[1.2rem] font-extrabold ml-4 text-all">
                        $ {refundable[btnNum]}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
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
                        <span className="font-bold"> period</span>:
                      </span>
                      <div>
                        <span className="day-one">45 </span> Days
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Minimum trading <br className="sm:hidden" />
                        <span className="font-bold"> days</span>:
                      </span>
                      <span>5 Days</span>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Max
                        <span className="font-bold"> Daily </span> Loss:
                      </span>
                      <div>
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][1]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Max
                        <span className="font-bold"> Overall </span> Loss:
                      </span>
                      <div>
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][4]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Profit
                        <span className="font-bold"> target </span>:
                      </span>
                      <div>
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][7]}
                        </span>
                      </div>
                    </div>

                    {/* Refund */}
                    <div className="refund item flex justify-between gap-6 items-center">
                      <span className="font-codePro">Refundable fee:</span>
                      <h4 className="ml-4">Free</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
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
                        <span className="font-bold"> period</span>:
                      </span>
                      <div>
                        <span className="day-one">45 </span> Days
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Minimum trading <br className="sm:hidden" />
                        <span className="font-bold"> days</span>:
                      </span>
                      <span>5 Days</span>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Max
                        <span className="font-bold"> Daily </span> Loss:
                      </span>
                      <div>
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][2]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Max
                        <span className="font-bold"> Overall </span> Loss:
                      </span>
                      <div>
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][5]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6 items-center">
                      <span>
                        Profit
                        <span className="font-bold"> Target </span>:
                      </span>
                      <span>-</span>
                    </div>

                    {/* Refund */}
                    <div className="refund item flex justify-between gap-6 items-center">
                      <span className="font-codePro">Refundable fee:</span>
                      <h4 className="ml-4">Refund</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="btn flex w-full justify-center mt-14">
              <Link
                to="/login"
                className="capitalize font-Montserrat text-xs font-bold py-3 px-12 bg-primary/80 hover:bg-primary transition-all duration-200 rounded-3xl text-dark"
              >
                GET STARTED NOW
              </Link>
            </div>
          </div>
        </div>

        {/* cirlce */}
        <img
          className="cirlce absolute -bottom-[10%] -right-[60%]  w-[50rem] rotate-[40deg] opacity-[0.18]"
          src={circle}
          alt="circle"
        />
        {/* cirlce */}
        <img
          className="cirlce absolute -top-[100%] -left-[0%]  w-[80rem] rotate-[40deg] opacity-[0.1]"
          src={circle}
          alt="circle"
        />
      </div>

      {/* cirlce */}
      <img
        className="cirlce absolute -bottom-[25rem] -left-[30rem]  w-[50rem] rotate-[80deg] opacity-[0.2]"
        src={circle}
        alt="circle"
      />
      <img
        className="cirlce sm:hidden absolute -top-[30%] -left-[50%]  w-[50rem] rotate-[80deg] opacity-[0.2]"
        src={circle}
        alt="circle"
      />
      <img
        className="cirlce absolute -bottom-[25rem] -left-[30rem]  w-[50rem] rotate-[80deg] opacity-[0.2]"
        src={circle}
        alt="circle"
      />
    </section>
  );
}
