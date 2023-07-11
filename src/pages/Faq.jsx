import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { circle } from "../ui/images";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { BsTwitter, BsInstagram, BsDiscord } from "react-icons/bs";
import FaqCollaps from "../components/FaqCollaps";

export default function Faq() {
  const [option, setOption] = useState("Insight");
  const { pathname } = useLocation();

  const collapsInfo = {
    Insight: [
      [
        "Do you offer <span>Leverage</span>?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I hold trades over the <span>weekend</span>?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I have <span>more</span> than one challenge?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any <span>restrictions</span> on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I have <span>more</span> than one challenge?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any <span>restrictions</span> on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
    ],

    Rules: [
      [
        "Can I have more than one challenge?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any restrictions on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
    ],

    General: [
      [
        "Do you offer Leverage?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I hold trades over the weekend?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],

      [
        "Can I have more than one challenge?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any restrictions on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
    ],

    Evaluation: [
      [
        "Do you offer Leverage?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I hold trades over the weekend?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I hold trades over the weekend?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any restrictions on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
    ],
    Technical: [
      [
        "Do you offer Leverage?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],

      [
        "Is there any restrictions on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I have more than one challenge?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
    ],
    Billing: [
      [
        "Can I have more than one challenge?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any restrictions on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <section className="faq relative">
        <div className="container z-10 relative">
          <div className="wrapper pb-24 sm:pb-36 md:pb-44 w-full grid gap-16 xs:gap-20 md:gap-32">
            {/* Top content */}
            <div className="top-content py-10 md:py-20">
              <div className="header grid relative z-10">
                <h1 className="text-2xl xs:text-[1.65rem] xs:leading-[0.95] md:text-[1.6rem] font-codePro !leading-8 capitalize mt-2">
                  Frequently asked questions
                </h1>
              </div>

              <div className="content grid md:grid-cols-12 gap-12 mt-10 md:mt-20 ">
                {/* left */}
                <div className="left md:col-span-3 relative">
                  <div className="options mr-[1rem] flex flex-wrap md:grid gap-3 z-10 relative">
                    {/* option */}
                    <div
                      className={`option py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-main-bg/80 backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "Insight"
                          ? "border-primary/50 before:opacity-100"
                          : "border-transparent before:opacity-0"
                      }`}
                      onClick={() => setOption("Insight")}
                    >
                      <h5 className="px-3 sm:px-5">Our Insight</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-main-bg/80 backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "Rules"
                          ? "border-primary/50 before:opacity-100"
                          : "border-transparent before:opacity-0"
                      }`}
                      onClick={() => setOption("Rules")}
                    >
                      <h5 className="px-3 sm:px-5">Trading Rules</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-main-bg/80 backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "General"
                          ? "border-primary/50 before:opacity-100"
                          : "border-transparent before:opacity-0"
                      }`}
                      onClick={() => setOption("General")}
                    >
                      <h5 className="px-3 sm:px-5">General Information</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-main-bg/80 backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "Evaluation"
                          ? "border-primary/50 before:opacity-100"
                          : "border-transparent before:opacity-0"
                      }`}
                      onClick={() => setOption("Evaluation")}
                    >
                      <h5 className="px-3 sm:px-5">Evaluation & Funding</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-main-bg/80 backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "Technical"
                          ? "border-primary/50 before:opacity-100"
                          : "border-transparent before:opacity-0"
                      }`}
                      onClick={() => setOption("Technical")}
                    >
                      <h5 className="px-3 sm:px-5">Technical Help</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-main-bg/80 backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "Billing"
                          ? "border-primary/50 before:opacity-100"
                          : "border-transparent before:opacity-0"
                      }`}
                      onClick={() => setOption("Billing")}
                    >
                      <h5 className="px-3 sm:px-5">Oders & Billing</h5>
                    </div>
                  </div>
                  {/* cirlce */}
                  <img
                    className="cirlce absolute -top-[100%]  -right-[35%] !max-w-[50rem] w-[100rem] rotate-[80deg] opacity-[0.05]"
                    src={circle}
                    alt="circle"
                  />
                </div>
                {/* right */}
                <div className="right faq-collaps md:col-span-9 flex flex-col gap-4 z-10 relative">
                  {collapsInfo[option].map((item, index) => (
                    <FaqCollaps key={index} heading={item[0]} para={item[1]} />
                  ))}
                </div>
              </div>
            </div>
            {/* bottom-cotent */}
            <div className="flex items-center z-10 relative">
              <div className="content grid md:grid-cols-3 gap-10  w-full">
                {/* left */}
                <div className="left md:col-span-1 break-all ">
                  <div className="heading grid gap-2">
                    <h3 className="text-3xl">Contact Us</h3>
                    <p>
                      Questions? Doubts? <br /> Please contact us anytime and
                      our team will take care of you!
                    </p>
                  </div>

                  {/* logos */}
                  <div className="logos flex gap-4 mt-5">
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
                {/* Right */}
                <div className="right md:col-span-2 relative">
                  {/* Form */}
                  <form className="grid gap-6 sm:gap-8 md:gap-10 px-4 py-6 sm:p-8 relative z-10 rounded-xl bg-main-bg/70 border-primary">
                    <div className="head">
                      <h3 className="text-xl">Have questions?</h3>
                    </div>
                    <div className="inputs grid sm:grid-cols-2 gap-6">
                      {/* name */}
                      <div className="name">
                        <input
                          name="name"
                          className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      {/* surname */}
                      <div className="surname">
                        <input
                          name="surname"
                          className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]"
                          type="text"
                          placeholder="Surname"
                        />
                      </div>
                      {/* email */}
                      <div className="email">
                        <input
                          name="email"
                          className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]"
                          type="email"
                          placeholder="Email"
                        />
                      </div>

                      {/* subject */}
                      <div className="subject">
                        <input
                          name="subject"
                          className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    {/* textarea */}
                    <div className="textarea">
                      <textarea
                        className="focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 p-4 rounded-xl transition-all duration-200 w-full min-h-[10rem] sm:min-h-[12rem] md:min-h-[15rem]"
                        name="comment"
                        id="comment"
                        placeholder="Comment"
                      ></textarea>
                    </div>

                    <div className="login-btn flex justify-center items-center">
                      <button className="py-2 px-12 hover:bg-primary bg-primary/80 transition-all duration-300 rounded-3xl text-main-bg">
                        Send
                      </button>
                    </div>
                  </form>

                  {/* cirlce */}
                  <img
                    className="cirlce absolute -top-[70%]  -left-[70%] !max-w-[100rem]  w-[100rem] rotate-[80deg] opacity-[0.1]"
                    src={circle}
                    alt="circle"
                  />
                  {/* cirlce */}
                  <img
                    className="cirlce absolute -top-[100%]  left-[20%] !max-w-[100rem] w-[100rem] rotate-[80deg] opacity-[0.1]"
                    src={circle}
                    alt="circle"
                  />
                </div>
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
          className="cirlce absolute -top-[15%]  left-[5%]  w-[50rem] rotate-[80deg] opacity-[0.02]"
          src={circle}
          alt="circle"
        />
        {/* cirlce */}
        <img
          className="cirlce absolute -left-[28%] bottom-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1] md:opacity-[0.25]"
          src={circle}
          alt="circle"
        />
        {/* cirlce */}
        <img
          className="cirlce absolute -bottom-[5%] -right-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1]  md:opacity-[0.2]"
          src={circle}
          alt="circle"
        />
        {/* cirlce */}
        <img
          className="cirlce absolute bottom-[90%] md:-bottom-[2%] -left-[20%]  w-[35rem] rotate-[-80deg] opacity-[0.07]  md:opacity-[0.25]"
          src={circle}
          alt="circle"
        />
        {/* cirlce */}
        <img
          className="cirlce absolute -top-[30%] -left-[6%] !max-w-[100rem]  w-[100rem] rotate-[55deg] opacity-[0.04]"
          src={circle}
          alt=""
        />
        {/* cirlce */}
        <img
          className="cirlce absolute top-[25%] left-[37%] !max-w-[100rem]  w-[70rem] rotate-[70deg] opacity-[0.02]"
          src={circle}
          alt=""
        />
      </section>
      <Footer />
    </>
  );
}
