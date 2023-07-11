import { circle } from "../ui/images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Benefits() {
  return (
    <section className="benefits relative md:m-auto pt-20 sm:pt-24">
      <div className="container">
        <div className="wrapper grid gap-8 relative z-10">
          <div className="heading z-10 relative flex flex-col justify-start items-start">
            <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
              The Funded Hub Benefits
            </h2>

            <div className="paras mt-2">
              <p>
                We are partnering up directly with liquidity providers to offer
                you unbeatable trading conditions. Our accounts will provide you
                with an excellent environment, with spread starting from 0.0
                pips!
              </p>
            </div>
          </div>

          <div className="Contents w-full grid">
            {/* Desktop Version */}
            <div className="w-full max-w-screen hidden lg:block relative">
              <div className="items grid grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
                {/* Item */}
                <div className="item py-5 px-4 bg-main-bg/90 rounded-3xl relative z-10 h-full max-w-[16rem]">
                  <div className="head text-base">
                    <h5>
                      Trade your{" "}
                      <div className="font-codeProBold inline-block">style</div>
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    Other firms want you to lose, well we want our traders to
                    achieve success! Trade with the peace of mind you deserve
                    just following few simple rules
                  </p>
                </div>

                {/* Item */}
                <div className="item py-5 px-4 bg-main-bg/90 rounded-3xl relative z-10 h-full max-w-[16rem]">
                  <div className="head text-base">
                    <h5>
                      {" "}
                      <div className="font-codeProBold inline-block">
                        24/5
                      </div>{" "}
                      dedicated support
                    </h5>
                  </div>

                  {/* para */}
                  <p className="text-sm mt-3">
                    Any question or concern? We got you! Our team of traders and
                    engineer is available 24/5 to help you with anything you
                    might need
                  </p>
                </div>

                {/* Item */}
                <div className="item py-5 px-4 bg-main-bg/90 rounded-3xl relative z-10 h-full max-w-[16rem]">
                  <div className="head text-base">
                    <h5>
                      <div className="font-codeProBold inline-block">
                        Bi-weekly
                      </div>{" "}
                      Payouts
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    No more need to wait a month to withdraw your profits;
                    you&apos;ll get paid every 2 weeks from the first trade
                    you&apos;ll place on your funded account
                  </p>
                </div>

                {/* Item */}
                <div className="item py-5 px-4 bg-main-bg/90 rounded-3xl relative z-10 h-full max-w-[16rem]">
                  <div className="head text-base">
                    <h5>
                      <div className="font-codeProBold inline-block">
                        Metatrader
                      </div>{" "}
                      5
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    Trade on the best trading platform. MT5 has more Charting
                    tools; Technical indicators and more timeframes than MT4.
                  </p>
                </div>
              </div>

              {/* cirlce */}
              <img
                className="cirlce absolute -top-[200%] -left-[18%]  w-[70rem] rotate-[80deg] opacity-[0.1]"
                src={circle}
                alt="circle"
              />
              {/* cirlce */}
              <img
                className="cirlce absolute -top-[100%] -right-[20%]  w-[50rem] rotate-[20deg] opacity-[0.05]"
                src={circle}
                alt="circle"
              />
            </div>

            {/* Mobile version */}
            <div className="lg:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center overflow-hidden -mx-[1.5rem] p-[1.5rem] pb-10">
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
                className="flex flex-wrap gap-8 md:gap-10 justify-center md:justify-between items-center w-full"
              >
                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90 rounded-3xl relative z-10 h-full max-w-[16rem] border-all/20 border overflow-hidden">
                  <div className="head text-base">
                    <h5>
                      Trade your{" "}
                      <div className="font-codeProBold inline-block">style</div>
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    Other firms want you to lose, well we want our traders to
                    achieve success! Trade with the peace of mind you deserve
                    just following few simple rules
                  </p>
                </SwiperSlide>

                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90 rounded-3xl relative z-10 h-full max-w-[16rem] border-all/20 border overflow-hidden">
                  <div className="head text-base">
                    <h5>
                      {" "}
                      <div className="font-codeProBold inline-block">
                        24/5
                      </div>{" "}
                      dedicated support
                    </h5>
                  </div>

                  {/* para */}
                  <p className="text-sm mt-3">
                    Any question or concern? We got you! Our team of traders and
                    engineer is available 24/5 to help you with anything you
                    might need
                  </p>
                </SwiperSlide>

                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90 rounded-3xl relative z-10 h-full max-w-[16rem] border-all/20 border overflow-hidden">
                  <div className="head text-base">
                    <h5>
                      <div className="font-codeProBold inline-block">
                        Bi-weekly
                      </div>{" "}
                      Payouts
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    No more need to wait a month to withdraw your profits;
                    you&apos;ll get paid every 2 weeks from the first trade
                    you&apos;ll place on your funded account
                  </p>
                </SwiperSlide>

                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90 rounded-3xl relative z-10 h-full max-w-[16rem] border-all/20 border overflow-hidden">
                  <div className="head text-base">
                    <h5>
                      <div className="font-codeProBold inline-block">
                        Metatrader
                      </div>{" "}
                      5
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    Trade on the best trading platform. MT5 has more Charting
                    tools; Technical indicators and more timeframes than MT4.
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Content Top */}
            <div className="content-top">
              {/* mobile */}
              <img
                className="cirlce absolute top-0 -left-[50%]  w-[70rem] rotate-[70deg] opacity-[0.06]"
                src={circle}
                alt="circle"
              />
              {/* mobile */}
              <img
                className="cirlce  absolute hidden md:block top-[200%] left-[50%]  w-[20rem] rotate-[60deg] opacity-[0.1]"
                src={circle}
                alt="circle"
              />
              {/* mobile */}
              <img
                className="cirlce absolute -top-[200%] -left-[50%]  w-[65rem] rotate-[70deg] opacity-[0.05]"
                src={circle}
                alt="circle"
              />
            </div>

            {/* Content Middle */}
            <div className="content-bottom relative z-10 grid md:grid-cols-2 justify-center gap-16 pt-16 sm:pt-20 md:pt-24">
              {/* left */}
              <div className="left relative">
                <h2 className="font-medium text-2xl xs:text-[1.7rem]  tracking-tight text-wht-gradient">
                  Why trade with us?
                </h2>
                {/* Paras */}
                <div className="paras grid gap-5 mt-2">
                  <p>
                    At TheFundedHub we care about your success and provide you
                    with state-of-the-art technologies, a great trading
                    environment and generous funding. You can trade Overweek and
                    Overnight, trade all the News without restrictions and use
                    your Exprert Advisor!
                  </p>
                </div>
              </div>

              {/* right */}
              <div className="right relative">
                <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
                  Scale your account
                </h2>
                {/* Paras */}
                <div className="paras grid gap-5 mt-2">
                  <p>
                    Achieve a profit of 10% or more within a 4 month period and
                    if at least 2 of those 4 months were profitable, we will
                    increase your account size by 25% of the original account
                    size. The account balance must be positive at the time of
                    the upgrade.
                  </p>
                </div>
              </div>
            </div>
            {/* Content bottom */}
            <div className="content-bottom w-full relative z-10 grid gap-8 pt-16 sm:pt-20 md:pt-24">
              {/* top */}
              <div className="top text-start">
                <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
                  Get your Salary
                </h2>
                {/* Paras */}
                <div className="paras grid gap-5 mt-2">
                  <p>
                    Earn a monthly salary as soon as you qualify for weekly
                    withdrawals, bringing you closer to your dream of becoming a
                    full-time trader. Funded traders who successfully complete
                    Challenge Phases 1 & 2 and receive a live funded account are
                    eligible for a Monthly Salary, provided they meet the
                    following conditions.
                  </p>
                </div>
              </div>
              {/* bottom */}
              <div className="bottom relative z-10 text-lg font-black md:flex justify-center items-center gap-5 w-full">
                {/* Desktop version */}
                <div className="items hidden md:grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center items-center text-[0.9rem] text-center">
                  {/* item */}
                  <div className="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/[70%] border border-all/20 rounded-2xl py-4 px-4 md:border-none">
                    {/* top */}
                    <div className="top text-center">
                      <h6 className="text-xs font-extralight">Balance</h6>
                      <h5 className="font-codeProBold">$5,000</h5>
                    </div>
                    {/* Bottom */}
                    <div className="bottom">
                      <h5 className="font-codeProBold">
                        $100.00 /{" "}
                        <span className=" font-codePro font-extralight text-base">
                          Month
                        </span>
                      </h5>
                      <h6 className="text-sm font-codePro font-extralight text-center">
                        Salary
                      </h6>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/[70%] border border-all/20 rounded-2xl py-4 px-4 md:border-none">
                    {/* top */}
                    <div className="top text-center">
                      <h6 className="text-xs font-extralight">Balance</h6>
                      <h5 className="font-codeProBold">$10,000</h5>
                    </div>
                    {/* Bottom */}
                    <div className="bottom">
                      <h5 className="font-codeProBold">
                        $100.00 /{" "}
                        <span className=" font-codePro font-extralight text-base">
                          Month
                        </span>
                      </h5>
                      <h6 className="text-sm font-codePro font-extralight text-center">
                        Salary
                      </h6>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/[70%] border border-all/20 rounded-2xl py-4 px-4 md:border-none">
                    {/* top */}
                    <div className="top text-center">
                      <h6 className="text-xs font-extralight">Balance</h6>
                      <h5 className="font-codeProBold">$25,000</h5>
                    </div>
                    {/* Bottom */}
                    <div className="bottom">
                      <h5 className="font-codeProBold">
                        $250.00 /{" "}
                        <span className=" font-codePro font-extralight text-base">
                          Month
                        </span>
                      </h5>
                      <h6 className="text-sm font-codePro font-extralight text-center">
                        Salary
                      </h6>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/[70%] border border-all/20 rounded-2xl py-4 px-4  md:border-none">
                    {/* top */}
                    <div className="top text-center">
                      <h6 className="text-xs font-extralight">Balance</h6>
                      <h5 className="font-codeProBold">$50,000</h5>
                    </div>
                    {/* Bottom */}
                    <div className="bottom">
                      <h5 className="font-codeProBold">
                        $500.00 /{" "}
                        <span className="font-codePro font-extralight text-base">
                          Month
                        </span>
                      </h5>
                      <h6 className="text-sm font-codePro font-extralight text-center">
                        Salary
                      </h6>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/[70%] border border-all/20 rounded-2xl py-4 px-4 md:border-none">
                    {/* top */}
                    <div className="top text-center">
                      <h6 className="text-xs font-extralight">Balance</h6>
                      <h5 className="font-codeProBold">$100,000</h5>
                    </div>
                    {/* Bottom */}
                    <div className="bottom">
                      <h5 className="font-codeProBold">
                        $1000.00 /{" "}
                        <span className=" font-codePro font-extralight text-base">
                          Month
                        </span>
                      </h5>
                      <h6 className="text-sm font-codePro font-extralight text-center">
                        Salary
                      </h6>
                    </div>
                  </div>
                </div>

                {/* Mobile version */}
                <div className="salary-slider md:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center overflow-hidden -mx-[1.5rem] p-[1.5rem] pb-10 w-screen">
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
                    className="flex flex-wrap gap-8 md:gap-10 justify-center items-center w-full"
                  >
                    {/* item */}
                    <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/[70%] border border-all/20 rounded-2xl py-6 px-4 md:border-none max-w-[14rem] overflow-hidden">
                      {/* top */}
                      <div className="top text-center">
                        <h6 className="text-sm font-extralight">Balance</h6>
                        <h5 className="font-codePro text-[1.1rem] mt-1">
                          $5,000
                        </h5>
                      </div>
                      {/* Bottom */}
                      <div className="bottom">
                        <h5 className="font-codePro text-[1.1rem]">
                          $100.00 /{" "}
                          <span className=" font-codePro font-extralight text-base">
                            Month
                          </span>
                        </h5>
                        <h6 className="text-sm font-codePro font-extralight text-center">
                          Salary
                        </h6>
                      </div>
                    </SwiperSlide>
                    {/* item */}
                    <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/[70%] border border-all/20 rounded-2xl py-6 px-4 md:border-none max-w-[14rem] overflow-hidden">
                      {/* top */}
                      <div className="top text-center">
                        <h6 className="text-sm font-extralight">Balance</h6>
                        <h5 className="font-codePro text-[1.1rem] mt-1">
                          $10,000
                        </h5>
                      </div>
                      {/* Bottom */}
                      <div className="bottom">
                        <h5 className="font-codePro text-[1.1rem]">
                          $100.00 /{" "}
                          <span className=" font-codePro font-extralight text-base">
                            Month
                          </span>
                        </h5>
                        <h6 className="text-sm font-codePro font-extralight text-center">
                          Salary
                        </h6>
                      </div>
                    </SwiperSlide>
                    {/* item */}
                    <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/[70%] border border-all/20 rounded-2xl py-6 px-4 md:border-none max-w-[14rem] overflow-hidden">
                      {/* top */}
                      <div className="top text-center">
                        <h6 className="text-sm font-extralight">Balance</h6>
                        <h5 className="font-codePro text-[1.1rem] mt-1">
                          $25,000
                        </h5>
                      </div>
                      {/* Bottom */}
                      <div className="bottom">
                        <h5 className="font-codePro text-[1.1rem]">
                          $250.00 /{" "}
                          <span className="font-codePro font-extralight text-base">
                            Month
                          </span>
                        </h5>
                        <h6 className="text-sm font-codePro font-extralight text-center">
                          Salary
                        </h6>
                      </div>
                    </SwiperSlide>
                    {/* item */}
                    <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/[70%] border border-all/20 rounded-2xl py-6 px-4 md:border-none max-w-[14rem] overflow-hidden">
                      {/* top */}
                      <div className="top text-center">
                        <h6 className="text-sm font-extralight">Balance</h6>
                        <h5 className="font-codePro text-[1.1rem] mt-1">
                          $50,000
                        </h5>
                      </div>
                      {/* Bottom */}
                      <div className="bottom">
                        <h5 className="font-codePro text-[1.1rem]">
                          $500.00 /{" "}
                          <span className="font-codePro font-extralight text-base">
                            Month
                          </span>
                        </h5>
                        <h6 className="text-sm font-codePro font-extralight text-center">
                          Salary
                        </h6>
                      </div>
                    </SwiperSlide>
                    {/* item */}
                    <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/[70%] border border-all/20 rounded-2xl py-6 px-4 md:border-none max-w-[14rem] overflow-hidden">
                      {/* top */}
                      <div className="top text-center">
                        <h6 className="text-sm font-extralight">Balance</h6>
                        <h5 className="font-codePro text-[1.1rem] mt-1">
                          $100,000
                        </h5>
                      </div>
                      {/* Bottom */}
                      <div className="bottom">
                        <h5 className="font-codePro text-[1.1rem]">
                          $1000.00 /{" "}
                          <span className="font-codePro font-extralight text-base">
                            Month
                          </span>
                        </h5>
                        <h6 className="text-sm font-codePro font-extralight text-center">
                          Salary
                        </h6>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cirlce */}
      <img
        className="cirlce absolute -top-[10rem] -left-[18%]  w-[40rem] rotate-[80deg] opacity-[0.1]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -bottom-[25rem] -right-[20rem]  w-[75rem] rotate-[80deg] opacity-[0.12]"
        src={circle}
        alt="circle"
      />

      {/* mobile */}
      <img
        className="cirlce md:hidden absolute top-0 -right-[50%]  w-[35rem] rotate-[45deg] opacity-[0.25]"
        src={circle}
        alt="circle"
      />
      {/* mobile */}
      <img
        className="cirlce md:hidden absolute bottom-[30%] -left-[40%]  w-[35rem] rotate-[45deg] opacity-[0.15]"
        src={circle}
        alt="circle"
      />
      {/* mobile */}
      <img
        className="cirlce md:hidden absolute bottom-[15%] -right-[55%] w-[35rem] rotate-[50deg] opacity-[0.15]"
        src={circle}
        alt="circle"
      />
    </section>
  );
}
