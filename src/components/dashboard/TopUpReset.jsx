import { thumbHistory, circle } from "../../ui/images";

export default function TopUpReset() {
  return (
    <main className="content-wrapper mt-4">
      <div className="inner-content px-6">
        <div className="breadcrumb-wrap">
          <div className="breadcrumb-title relative z-10">
            <svg
              className="breadcrumb-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"></path>
            </svg>
            Top Up & Reset
          </div>
        </div>
        <div className="dashboard-wrapper">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
              <div className="flex flex-wrap justify-center mx-[-15px]">
                <div className="2xl:w-4/12 xl:w-5/12 lg:w-5/12 md:w-6/12 px-[15px] mb-[30px]">
                  <div className="flex flex-col justify-between h-full md:p-[30px] p-[20px] rounded-[10px] relative z-10 overflow-hidden bg-main-bg/40 backdrop-blur-3xl card-border">
                    <div className="content">
                      <h3 className="text-[18px]font-semibold leading-[1.167] tracking-[-0.06px] mb-[20px] text-wht">
                        Top Up
                      </h3>
                      <p className="xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] text-wht/70">
                        Traders will get an opportunity to bring back their
                        account balance to the initial amount. Applicable if you
                        have not violated any of the drawdown rules. Once you
                        top up your account, your trading cycle will also reset.
                        To know more{" "}
                        <a href="#" className="underline">
                          click
                        </a>
                      </p>
                      <p className="text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[20px]">
                        *** You must close the running trades if you have any***
                      </p>
                    </div>

                    {/* btn */}
                    <div className="btn flex justify-center">
                      <a
                        href="#"
                        className="capitalize font-Montserrat text-sm font-bold py-4 px-12 bg-primary/80 hover:bg-primary transition-all duration-200 rounded-3xl text-dark"
                      >
                        Top Up Request
                      </a>
                    </div>
                  </div>
                </div>
                <div className="2xl:w-4/12 xl:w-5/12 lg:w-5/12 md:w-6/12 px-[15px] mb-[30px]">
                  <div className="flex flex-col justify-between h-full md:p-[30px] p-[20px] rounded-[10px] relative z-10 overflow-hidden bg-main-bg/40 backdrop-blur-3xl card-border">
                    <div className="content">
                      <h3 className="text-[18px] font-semibold leading-[1.167] tracking-[-0.06px] mb-[20px] text-wht">
                        Reset
                      </h3>
                      <p className="text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] text-wht/70">
                        If a trader violates the rules his/her account will be
                        suspended. Prop dashboard will give him/her the
                        opportunity to continue with the program at a discounted
                        price/cost. This re-registration cost is also known as
                        the &quot;Reset&quot; fee since the trader will be
                        provided with a new account and his trading cycle will
                        be reset. To know more{" "}
                        <a href="#" className="underline">
                          click here
                        </a>
                      </p>
                      <p className="text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70">
                        *** You must close the running trades if you have any***
                      </p>
                    </div>

                    {/* btn */}
                    <div className="btn flex justify-center">
                      <a
                        href="#"
                        className="capitalize font-Montserrat text-sm font-bold py-4 px-12 bg-primary/80 hover:bg-primary transition-all duration-200 rounded-3xl text-dark"
                      >
                        Reset Request
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-15px] relative">
            <div className="w-full px-[15px]">
              <div className="card-wrap">
                <div className="card-heading flex items-center justify-between mb-[20px]">
                  <h3 className="card-title !mb-0">Top Up & Reset History</h3>
                </div>
                <div className="content">
                  <div className="withdraw-history text-center py-[40px]">
                    <div className="thumb inline-block mb-[24px]">
                      <img src={thumbHistory} alt="thumb" />
                    </div>
                    <p>No history found!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* cirlce */}
            <img
              className="cirlce absolute -top-[120%] -right-[20%]  w-[100rem] rotate-[80deg] opacity-[0.15]"
              src={circle}
              alt="circle"
            />
          </div>
        </div>
      </div>
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
        className="cirlce absolute bottom-[20%] -right-[0%]  w-[58rem] rotate-[53deg] opacity-[0.05]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -top-[20%] -left-[20%] w-[120rem] rotate-[62deg] opacity-[0.05]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -top-[30%] -right-[20%]  w-[70rem] rotate-[80deg] opacity-[0.02]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -bottom-[5%] -right-[50%]  w-[80rem] rotate-[60deg] opacity-[0.05]"
        src={circle}
        alt="circle"
      />
    </main>
  );
}
