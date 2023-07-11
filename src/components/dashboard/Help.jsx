import { useState } from "react";
import HelpCollaps from "./HelpCollaps";

export default function Help({ props }) {
  console.log(props);
  const [swap, setSwap] = useState(true);
  const paras = [
    [
      "DOES UWM OPERATE 24/7?",
      "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
      "HOW I CAN EDIT SMART OBJECTS ?",
      "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
      "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
    ],
    [
      "DOES UWM OPERATE 24/7?",
      "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
      "HOW I CAN EDIT SMART OBJECTS ?",
      "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
      "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
    ],
  ];
  return (
    <main className="content-wrapper">

      <div className="inner-content mt-10 px-6">
        <div className="dashboard-wrapper">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
              <div className="plan-tab-navf text-center">
                <ul className="relative z-20 mx-auto mb-[40px] inline-flex items-center rounded-[100px] overflow-hidden shadow-[0_4px_10px_rgba(64,123,255,0.13)] ">
                  <li className="inline-blockf">
                    <button
                      className={`md:w-[120px] w-[100px] text-center md:text-[16px] text-[13px] md:px-[30px] px-[15px] py-[12px] rounded-[100px] transition-all saturate-150  ${
                        swap ? "text-main-bg bg-primary" : ""
                      }`}
                      onClick={() => setSwap(!swap)}
                    >
                      FAQ
                    </button>
                  </li>
                  <li className="inline-blockf">
                    <button
                      className={`md:w-[120px] w-[100px] text-center md:text-[16px] text-[13px] md:px-[30px] px-[15px] py-[12px] rounded-[100px] transition-all saturate-150  ${
                        !swap ? "text-main-bg bg-primary" : ""
                      }`}
                      onClick={() => setSwap(!swap)}
                    >
                      Rules
                    </button>
                  </li>
                </ul>
              </div>

              {/* FAQ */}
              {swap ? (
                <div className="faq-tab-wrap grid lg:grid-cols-[60%_40%] grid-cols-[1fr] h-[800px] bg-dark shadow-[0px_2.13333px_10.6667px_rgba(195,129,252,0.2)] rounded-xl overflow-hidden">
                  <div className="faq-content-wrap xl:px-[56px] lg:px-[30px] px-[20px] xl:py-[48px] lg:py-[30px] py-[20px] lg:border-r-[1px] border-[#EBEBEB] lg:shadow-none overflow-y-auto bg-dark shadow-[0px_2.13333px_10.6667px_rgba(195,129,252,0.2)] rounded-2xl">
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] text-wht/70">
                        YES! We operate 24/7, 7 days a week to answer all your
                        questions!
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] text-wht/70">
                        Trader is immediately eligible for maximum capital
                        allocation of 600k!
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] text-wht/70">
                        As payments we accept most form of cards such as debit
                        and credit cards alongside crypto payments such as BTC
                        and USDT. You can pay via any exchange and most credit
                        card providers Visa, Mastercard! Here is a list of
                        accepted credit card payments and cryptos. UNIONPAY, BTC
                        (BITCOIN NETWORK), USDT (TRC20 NETW When you proceed in
                        doing a crypto payment, please ensure you verify your
                        network. If you send crypto over to us using the wrong
                        network we are not held liable if we fail to receive
                        your funds. In the event of incorrect network transfers,
                        contact your crypto exchange, and in most cases you will
                        get your funds back.
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] text-wht/70">
                        Yes you can get unlimited free retries without paying if
                        you ended your assessment program in positive and the
                        rules have not been violated. For extensions, you are
                        eligible for ONE 14-day extension if your account is in
                        a 4% profit.
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] text-wht/70">
                        Yes we provide each trader with live funds directly from
                        our liquidity provider. However, your account is shown
                        as demo even if the trader is funded. The trades taken
                        are instantaneously mirrored onto a live account. We do
                        so to prevent any substantial slippages or trading
                        related losses. This gives the capital distributor
                        protection when we provide traders with large sums of
                        capital to work with.
                      </p>
                    </div>
                  </div>

                  <div className="faq-nav-wrap  xl:px-[56px] lg:px-[30px] py-[48px] overflow-y-scroll scrollbar-gray flex flex-col gap-4">
                    {/* faq */}
                    <div className="faq-toggle-wrap">
                      <HelpCollaps
                        heading={"General Questions"}
                        paras={[
                          "DOES UWM OPERATE 24/7?",
                          "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
                          "HOW I CAN EDIT SMART OBJECTS ?",
                          "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
                          "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
                        ]}
                      />
                    </div>

                    {/* faq */}
                    <div className="faq-toggle-wrap">
                      <HelpCollaps
                        heading={"Evaluation Faq"}
                        paras={[
                          "DOES UWM OPERATE 24/7?",
                          "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
                          "HOW I CAN EDIT SMART OBJECTS ?",
                          "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
                          "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
                        ]}
                      />
                    </div>

                    {/* faq */}
                    <div className="faq-toggle-wrap">
                      <HelpCollaps
                        heading={"Express Faq"}
                        paras={[
                          "DOES UWM OPERATE 24/7?",
                          "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
                          "HOW I CAN EDIT SMART OBJECTS ?",
                          "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
                          "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="faq-tab-wrap grid lg:grid-cols-[60%_40%] grid-cols-[1fr]  lg:shadow-[0px_2.13333px_90.6667px_rgba(195,129,252,0.2)] h-[800px] bg-dark shadow-[0px_2.13333px_10.6667px_rgba(195,129,252,0.2)]">
                  <div className="faq-content-wrap xl:px-[56px] lg:px-[30px] px-[20px] xl:py-[48px] lg:py-[30px] py-[20px] lg:border-r-[1px] border-[#EBEBEB] shadow-[0px_2.49067px_105.853px_rgba(195,129,252,0.2)] lg:shadow-none overflow-y-auto">
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] text-wht/70">
                        As payments we accept most form of cards such as debit
                        and credit cards alongside crypto payments such as BTC
                        and USDT. You can pay via any exchange and most credit
                        card providers Visa, Mastercard! Here is a list of
                        accepted credit card payments and cryptos. UNIONPAY, BTC
                        (BITCOIN NETWORK), USDT (TRC20 NETW When you proceed in
                        doing a crypto payment, please ensure you verify your
                        network. If you send crypto over to us using the wrong
                        network we are not held liable if we fail to receive
                        your funds. In the event of incorrect network transfers,
                        contact your crypto exchange, and in most cases you will
                        get your funds back.
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] text-wht/70">
                        Ensure that you have read and understood the rules for
                        the program before placing your first trade. Once you go
                        through them, you may log on to your trading account
                        using the credentials you were given via email.
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] text-wht/70">
                        As payments we accept most form of cards such as debit
                        and credit cards alongside crypto payments such as BTC
                        and USDT. You can pay via any exchange and most credit
                        card providers Visa, Mastercard! Here is a list of
                        accepted credit card payments and cryptos. UNIONPAY, BTC
                        (BITCOIN NETWORK), USDT (TRC20 NETW When you proceed in
                        doing a crypto payment, please ensure you verify your
                        network. If you send crypto over to us using the wrong
                        network we are not held liable if we fail to receive
                        your funds. In the event of incorrect network transfers,
                        contact your crypto exchange, and in most cases you will
                        get your funds back.
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] text-wht/70">
                        As payments we accept most form of cards such as debit
                        and credit cards alongside crypto payments such as BTC
                        and USDT. You can pay via any exchange and most credit
                        card providers Visa, Mastercard! Here is a list of
                        accepted credit card payments and cryptos. UNIONPAY, BTC
                        (BITCOIN
                      </p>
                    </div>
                    <div className="faq-content">
                      <p className="text-dark lg:text-[18px] text-[16px] mb-[10px] text-wht/70">
                        We are not a broker. EightCap is our trading server. It
                        is provided by an institutional fintech company who
                        provides us liquidity. We do not require regulation as
                        we are a proprietary firm. It is our company money that
                        is being used in all of our accounts.
                      </p>
                    </div>
                  </div>

                  <div className="faq-nav-wrap xl:px-[56px] lg:px-[30px] py-[48px] overflow-y-scroll scrollbar-gray bg-dark flex flex-col gap-4">
                    {/* faq */}
                    <div className="faq-toggle-wrap">
                      <HelpCollaps
                        heading={"Express Rule"}
                        paras={[
                          "DOES UWM OPERATE 24/7?",
                          "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
                          "HOW I CAN EDIT SMART OBJECTS ?",
                          "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
                          "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
                        ]}
                      />
                    </div>
                    {/* Faq */}
                    <div className="faq-toggle-wrap">
                      <HelpCollaps
                        heading={"Evaluation Rule"}
                        paras={[
                          "DOES UWM OPERATE 24/7?",
                          "WHAT IS THE MAXIMUM FUNDING A TRADER CAN GET?",
                          "HOW I CAN EDIT SMART OBJECTS ?",
                          "CAN I GET A RETRY WITHOUT PAYING? ARE THERE ANY EXTENSIONS IN PLACE?",
                          "DO I ACTUALLY TRADE ON A LIVE ACCOUNT?",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
