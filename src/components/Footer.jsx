import { Link } from "react-router-dom";
import { footerBg, mainLogo } from "../ui/images";
import { BsTwitter, BsInstagram, BsDiscord } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer relative bg-main-bg pt-12 pb-5">
      <div className="container relative z-10">
        {/* Footer Desktop */}
        <div className="footer-desktop hidden sm:grid gap-10">
          <div className="top grid grid-cols-12 gap-6">
            <div className="left col-span-4">
              <Link to="/" className="logo">
                <img className="max-w-[14rem]" src={mainLogo} alt="" />
              </Link>
            </div>

            {/* right */}
            <div className="right grid gap-6 justify-end items-center col-span-8">
              <div className="item flex">
                <ul className="flex font-Montserrat font-medium gap-4 flex-wrap md:flex-nowrap">
                  <li>
                    <Link to="/terms-condition" className="text-sm underline">
                      Terms and Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="text-sm underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/cookie-policy" className="text-sm underline">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/risk-disclosure" className="text-sm underline">
                      Risk Disclosure
                    </Link>
                  </li>
                  <li>
                    <Link to="/report-problem" className="text-sm underline">
                      Report a problem
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="item">
                <div className="info grid">
                  <span className="uppercase text-sm font-codePro">
                    THE FUNDED HUB LTD
                  </span>
                  <span className="text-sm">
                    27 Old Gloucester Street, London, United Kingdom, WC1N 3AX
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="hidden sm:block bottom-content text-center">
              <p className="text-[0.65rem] font-light">
                The Funded Hub is a brand owned by THE FUNDED HUB LTD (Company
                registration number: 14679272)
              </p>
              <p className="text-[0.65rem] font-light mt-2">
                The Funded Hub is a brand owned by THE FUNDED HUB LTD. All
                information available on this site is intended solely for the
                study purposes related to trading on financial markets and does
                not serve in any way as a specific investment recommendation,
                business recommendation, investment opportunity analysis or
                similar general recommendation regarding the trading of
                investment instruments. Trading in financial markets is a
                high-risk activity and it is advised not to risk more than one
                can afford to lose! THE FUNDED HUB LTD does not provide any of
                the investment services listed in the Capital Market
                Undertakings Act No. 256/2004 Coll. The information on this site
                is not directed at residents in any country or jurisdiction
                where such distribution or use would be contrary to local laws
                or regulations. Either The Funded Hub and THE FUNDED HUB LTD is
                not a broker and do not accept deposits. The offered technical
                solution for the The Funded Hub MT5 platforms and data feed are
                powered by our institutional liquidity providers.
              </p>
            </div>
          </div>
        </div>
        {/* Footer Mobile */}
        <div className="footer-mobile grid gap-6 sm:hidden">
          <div className="flex justify-between gap-4">
            <div className="logo flex justify-center items-center">
              <img
                className="max-w-[6rem] sm:max-w-[7rem]"
                src={footerBg}
                alt="footer-logo"
              />
            </div>
            {/* logos */}
            <div className="logos flex justify-center items-center gap-4">
              <a
                target="__blank"
                href="https://discord.gg/GVXNaVTr"
                className="logo h-8 w-8 rounded-md bg-white/[62%] flex justify-center items-center"
              >
                <BsDiscord className="text-main-bg h-5 w-5 " />
              </a>
              <a
                target="__blank"
                href="https://www.instagram.com/fundedhub/"
                className="logo h-8 w-8 rounded-full bg-white/[62%] flex justify-center items-center"
              >
                <BsInstagram className="text-main-bg h-5 w-5 " />
              </a>
              <a
                target="__blank"
                href="https://twitter.com/TheFundedHub"
                className="logo h-8 w-8 rounded-full bg-white/[62%] flex justify-center items-center"
              >
                <BsTwitter className="text-main-bg h-5 w-5 " />
              </a>
            </div>
          </div>
          {/* content */}
          <div className="content grid gap-8 mt-4">
            <div className="top">
              <div className="items gap-4">
                <div className="item grid justify-center items-center">
                  <ul className="flex flex-wrap gap-4 justify-center items-center">
                    <li>
                      <Link to="/terms-condition" className="text-sm">
                        Term and Condition
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy" className="text-sm">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/cookie-policy" className="text-sm">
                        Cookie Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/risk-disclosure" className="text-sm">
                        Risk Disclosure
                      </Link>
                    </li>
                    <li>
                      <Link to="/report-problem" className="text-sm">
                        Report a problem
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* last item */}
                <div className="item mt-14 text-center col-span-full">
                  <div className="info grid">
                    <span className="uppercase text-[0.9rem] font-codePro">
                      THE FUNDED HUB LTD
                    </span>
                    <span className="text-sm font-Montserrat">
                      27 Old Gloucester Street, London, United Kingdom, WC1N 3AX
                    </span>
                  </div>
                </div>
              </div>

              {/* bottom */}
            </div>
            <div className="bottom text-center">
              <p className="text-[0.65rem] font-light">
                The Funded Hub is a brand owned by THE FUNDED HUB LTD (Company
                registration number: 14679272)
              </p>
              <p className="text-[0.65rem] font-light mt-2">
                The Funded Hub is a brand owned by THE FUNDED HUB LTD. All
                information available on this site is intended solely for the
                study purposes related to trading on financial markets and does
                not serve in any way as a specific investment recommendation,
                business recommendation, investment opportunity analysis or
                similar general recommendation regarding the trading of
                investment instruments. Trading in financial markets is a
                high-risk activity and it is advised not to risk more than one
                can afford to lose! THE FUNDED HUB LTD does not provide any of
                the investment services listed in the Capital Market
                Undertakings Act No. 256/2004 Coll. The information on this site
                is not directed at residents in any country or jurisdiction
                where such distribution or use would be contrary to local laws
                or regulations. Either The Funded Hub and THE FUNDED HUB LTD is
                not a broker and do not accept deposits. The offered technical
                solution for the The Funded Hub MT5 platforms and data feed are
                powered by our institutional liquidity providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
