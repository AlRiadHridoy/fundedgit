import { circle } from "../../ui/images";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";

import { MdPermContactCalendar } from "react-icons/md";

export default function DashContact() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="contact content-wrapper mb-28 mt-4 min-h-screen">
      <div className="container z-10 relative">
        <div className="breadcrumb-wrap">
          <div className="breadcrumb-title ">
            <MdPermContactCalendar className="breadcrumb-icon" />
            Contact
          </div>
        </div>
        <div className="wrapper flex items-center w-full relative">
          <div className="content grid md:grid-cols-3 gap-10  w-full">
            {/* left */}
            <div className="left md:col-span-1 break-all ">
              <div className="heading grid gap-2">
                <p>
                  Questions? Doubts? <br /> Please contact us anytime and our
                  team will take care of you!
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
            <div className="right md:col-span-2">
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
            className="cirlce absolute -bottom-[50%] -left-[25%] !max-w-[100rem] w-[65rem] rotate-[80deg] opacity-[0.05]"
            src={circle}
            alt="circle"
          />
        </div>
      </div>
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
    </main>
  );
}
