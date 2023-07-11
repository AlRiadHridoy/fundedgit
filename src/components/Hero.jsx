import { Link } from "react-router-dom";
import { globe, circle } from "../ui/images";

export default function Hero() {
  return (
    <main className="main relative pt-10">
      <div className="container relative">
        <div className="wrapper z-10 relative flex justify-center items-center gap-0 pt-10">
          {/* Left content */}
          <div className="left-content z-[10] relative grid gap-6 md:gap-8">
            <div className="heading grid gap-2 justify-end items-center md:text-center font-medium text-end text-wht-gradient">
              <h1 className="text-3xl exs:text-4xl xs:text-[3.5rem] xs:leading-[0.95] md:text-[4rem] font-codePro tracking-tighter text-start md:text-end">
                Get{" "}
                <span className="text-primary md:text-inherit text-3xl exs:text-4xl xs:text-[3.5rem] xs:leading-[0.95] md:text-[4rem] font-codePro tracking-tighter text-start md:text-end">
                  Funded
                </span>{" "}
                and trade our capital.
              </h1>

              <h2 className="text-3xl exs:text-4xl xs:text-[3.5rem] xs:leading-[0.95] md:text-[4rem] font-codePro tracking-tighter text-start md:text-end">
                We take the risk.
              </h2>
            </div>

            <div className="botton-content font-Montserrat grid md:justify-end w-full gap-5 max-w-4xl md:text-right z-10 relative">
              <p className="font-light font-Montserrat  text-[1.05rem] max-w-[30rem]">
                Where veteran and rookie traders all come together to compete in
                the Hub. Trade how you like, pass the challenge & get funded
                with our capital..
              </p>
              <div className="btns grid sm:flex gap-6 justify-start md:justify-end items-end">
                <div className="btn flex md:justify-end font-extrabold flex-shrink-0">
                  <Link
                    to="/login"
                    className="capitalize bg-primary/20 md:bg-transparent font-base flex justify-center items-center py-3 md:py-1 px-7 sm:px-9 md:border-2 border-white rounded-xl whitespace-nowrap font-codePro font-light text-base md:text-[0.8rem] w-full"
                  >
                    get started now
                  </Link>
                </div>

                <div className="btn flex md:justify-end font-extrabold flex-shrink-0">
                  <a
                    target="__blank"
                    href="https://discord.gg/GVXNaVTr"
                    className="capitalize font-base flex h-full justify-center items-center  py-3 md:py-1.5 px-9 hover:bg-primary bg-primary/80 transition-all duration-200 text-black border-primary rounded-xl whitespace-nowrap font-codePro font-light text-base md:text-[0.8rem]"
                  >
                    Join our Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right content */}
          <div className="right-content absolute  md:static -right-[70%] sm:-right-[15rem] md:flex justify-start ml-4">
            <div className="globe-img">
              <img
                className="max-w-[37rem] w-full globe-rotate z-0"
                src={globe}
                alt="globe"
              />
            </div>
          </div>
        </div>
      </div>
      {/* cirlce */}
      <img
        className="cirlce absolute -top-[15%]  -right-[35%]  w-[50rem] rotate-[80deg] opacity-[0.15]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute top-[2%] sm:-bottom-[40%] -left-[50%] sm:-left-[15rem]  w-[50rem] rotate-[80deg] opacity-[0.25]"
        src={circle}
        alt="circle"
      />
    </main>
  );
}
