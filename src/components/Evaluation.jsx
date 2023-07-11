// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import { circle } from "../ui/images";
import { Link } from "react-router-dom";

export default function Evaluation() {
  return (
    <section className="evaluation relative md:max-w-[90%] md:m-auto pb-10 md:pb-0 pt-12 sm:pt-16">
      <div className="container relative">
        <div className="wrapper z-10 relative">
          <div className="heading flex flex-col justify-start items-start">
            <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
              Evaluation Program
            </h2>

            <div className="paras mt-2">
              <p>
                Prove your trading skills by passing our 2-Phase Challenge
                Program.
              </p>
              <p>
                Achieve the Profit Targets following simple Trading Objectives
                and start trading with our capital.
              </p>
              <p>You earn up to 90% of the profits.</p>
            </div>
          </div>
          {/* Desktop version */}
          <div className="cards hidden lg:flex gap-8 md:gap-12 justify-center items-center mt-10">
            {/* card */}
            <div className="card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
              <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                <div className="left max-w-[10rem]">
                  <h4 className="font-codeProBold">Phase 1</h4>
                  <span className="text-sm flex font-codePro font-light">
                    Starting your Evaluation process
                  </span>
                </div>
                <div className="right grid">
                  <div className="percent">
                    <h3 className="font-codeProBold text-3xl text-end">8%</h3>
                    <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                      Target Profit
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-middle grid gap-5 px-4 font-light">
                <p className="text-base font-light font-Montserrat">
                  <span className="text-base font-bold">5</span> Minimum Trading
                  Days
                </p>
                <p className="text-base font-light font-Montserrat">
                  <span className="text-base font-bold">5%</span> Maximum Daily
                  Loss
                </p>
                <p className="text-base font-light font-Montserrat">
                  <span className="text-base font-bold">12%</span> Maximum
                  Overall Loss
                </p>
                <p className="text-base font-light font-Montserrat">
                  Trading Period up to
                  <span className="text-base font-bold"> 45 days</span>
                </p>
                <p className="text-base font-light font-Montserrat">
                  Registration fee
                </p>
              </div>

              <div className="card-bottom mt-4 flex justify-center items-center text-center">
                <Link
                  to="/login"
                  className="uppercase font-Montserrat text-xs font-bold py-2 px-8 border-primary border-4 rounded-md"
                >
                  get started now
                </Link>
              </div>
            </div>

            {/* card */}
            <div className="card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
              <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                <div className="left max-w-[10rem]">
                  <h4 className="font-codeProBold">Phase 2</h4>
                  <span className="text-sm flex font-codePro font-light">
                    One step away to be a TFH Funded Trader
                  </span>
                </div>
                <div className="right grid">
                  <div className="percent">
                    <h3 className="font-codeProBold text-3xl text-end">5%</h3>
                    <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                      Target Profit
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-middle grid gap-5 px-4 font-light">
                <p className="text-base font-light font-Montserrat">
                  <span className="text-base font-bold">5</span> Minimum Trading
                  Days
                </p>
                <p className="text-base font-light font-Montserrat">
                  <span className="text-base font-bold">5%</span> Maximum Daily
                  Loss
                </p>
                <p className="text-base font-light font-Montserrat">
                  <span className="text-base font-bold">12%</span> Maximum
                  Overall Loss
                </p>
                <p className="text-base font-light font-Montserrat">
                  Trading Period up to
                  <span className="text-base font-bold"> 45 days</span>
                </p>
                <p className="text-base font-light font-Montserrat">-</p>
              </div>

              <div className="card-bottom mt-4 flex justify-center items-center text-center">
                <Link
                  to="/login"
                  className="uppercase font-Montserrat text-xs font-bold py-2 px-8 border-primary border-4 rounded-md"
                >
                  get started now
                </Link>
              </div>
            </div>
            {/* card */}

            <div className="card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
              <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                <div className="left max-w-[10rem]">
                  <h4 className="font-codeProBold">Funded</h4>
                  <span className="text-sm flex font-codePro font-light">
                    Trade with our <br /> funds in the Hub
                  </span>
                </div>
                <div className="right grid">
                  <div className="percent">
                    <h3 className="font-codeProBold text-3xl text-end relative before:absolute before:content-['up_to'] before:-top-1/2 before:text-xs before:font-extralight">
                      90/10
                    </h3>
                    <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                      Profit Share
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-middle grid gap-5 px-4 font-light">
                <p className="text-base font-light font-Montserrat">
                  <span className="text-base font-bold">5</span> Minimum Trading
                  Days
                </p>
                <p className="text-base font-light font-Montserrat">
                  <span className="text-base font-bold">5%</span> Maximum Daily
                  Loss
                </p>
                <p className="text-base font-light font-Montserrat">
                  <span className="text-base font-bold">12%</span> Maximum
                  Overall Loss
                </p>
                <p className="text-base font-light font-Montserrat">
                  Trading Period -
                  <span className="font-bold capitalize text-base">
                    Indefinite
                  </span>
                </p>
                <p className="text-base font-light font-Montserrat">
                  Refundable registration fee
                </p>
              </div>

              <div className="card-bottom mt-4 flex justify-center items-center text-center">
                <Link
                  to="/login"
                  className="uppercase font-Montserrat text-xs font-bold py-2 px-8 border-primary border-4 rounded-md"
                >
                  get started now
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <div className="cards lg:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center mt-10">
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
              className="evaluation-slider flex flex-wrap gap-8 md:gap-10 justify-center md:justify-between items-center w-full"
            >
              {/* card */}

              <SwiperSlide className="flex justify-center items-center max-w-[27.125rem]">
                <div className="card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
                  <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                    <div className="left max-w-[10rem]">
                      <h4 className="font-codeProBold">Phase 1</h4>
                      <span className="text-sm flex font-codePro font-light">
                        Starting your Evaluation process
                      </span>
                    </div>
                    <div className="right grid">
                      <div className="percent">
                        <h3 className="font-codeProBold text-3xl text-end">
                          8%
                        </h3>
                        <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                          Target Profit
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-middle grid gap-5 px-4 font-light">
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">5</span> Minimum
                      Trading Days
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">5%</span> Maximum
                      Daily Loss
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">12%</span> Maximum
                      Overall Loss
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      Trading Period up to
                      <span className="text-base font-bold"> 45 days</span>
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      Registration fee
                    </p>
                  </div>

                  <div className="card-bottom mt-4 flex justify-center items-center text-center">
                    <Link className="capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-light text-base">
                      get started now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* card */}
              <SwiperSlide className="flex justify-center items-center max-w-[27.125rem]">
                <div className="card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
                  <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                    <div className="left max-w-[10rem]">
                      <h4 className="font-codeProBold">Phase 2</h4>
                      <span className="text-sm flex font-codePro font-light">
                        One step away to be our Funded Trader
                      </span>
                    </div>
                    <div className="right grid">
                      <div className="percent">
                        <h3 className="font-codeProBold text-3xl text-end">
                          5%
                        </h3>
                        <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                          Target Profit
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-middle grid gap-5 px-4 font-light">
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">5</span> Minimum
                      Trading Days
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">5%</span> Maximum
                      Daily Loss
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">12%</span> Maximum
                      Overall Loss
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      Trading Period up to
                      <span className="text-base font-bold"> 45 days</span>
                    </p>
                    <p className="text-base font-light font-Montserrat">-</p>
                  </div>

                  <div className="card-bottom mt-4 flex justify-center items-center text-center">
                    <Link className="capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-light text-base">
                      get started now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* card */}
              <SwiperSlide className="flex justify-center items-center max-w-[27.125rem]">
                <div className="card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg border-all/20 border w-full max-w-[27.125rem]">
                  <div className="card-top py-4 px-3 rounded-xl bg-primary flex gap-2 justify-between items-center text-black">
                    <div className="left max-w-[10rem]">
                      <h4 className="font-codeProBold">Funded</h4>
                      <span className="text-sm flex font-codePro font-light">
                        Trade with our <br /> funds in the Hub
                      </span>
                    </div>
                    <div className="right grid">
                      <div className="percent">
                        <h3 className="font-codeProBold text-3xl text-end">
                          90/10
                        </h3>
                        <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                          Profit Share
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-middle grid gap-5 px-4 font-light">
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">NO</span> Minimum
                      Trading Days
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">5%</span> Maximum
                      Daily Loss
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">12%</span> Minimum
                      Trading Days
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      Trading Period {" "}
                      <span className="font-extrabold capitalize text-base">
                        Indefinite
                      </span>
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      Refundable registration fee
                    </p>
                  </div>

                  <div className="card-bottom mt-4 flex justify-center items-center text-center">
                    <Link className="capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-light text-base">
                      get started now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* cirlce */}
        <img
          className="cirlce absolute -top-20 sm:-top-[2rem] -right-[70%] sm:-right-[40rem]  w-[65rem] rotate-[90deg] opacity-[0.18]"
          src={circle}
          alt="circle"
        />
      </div>
    </section>
  );
}
