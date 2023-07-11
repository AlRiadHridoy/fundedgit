import { Link } from "react-router-dom";
import { circle } from "../ui/images";

import SingleFAQ from "./SingleFAQ";

export default function FAQ() {
  const headings = [
    `Do you offer  Leverage?`,
    `Do you offer  Leverage?`,
    `Do you offer  Leverage?`,
    `Do you offer  Leverage?`,
  ];

  const paras = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
  ];

  return (
    <section className="faq relative pt-28">
      <div className="container relative z-10">
        <div className="wrapper grid gap-12 justify-center items-center">
          <div className="heading flex flex-col gap-2 justify-center items-center text-center">
            <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
              Faq
            </h2>

            <div className="paras">
              <p className="fo">
                If you don&apos;t find your answer in frequently asked questions
                don&apos;t hesitate contacting us at
              </p>

              <a
                href="mailto: support@thefundedhub.com"
                className="underline text-lg"
              >
                support@thefundedhub.com
              </a>
            </div>
          </div>

          <div className="articles md:max-w-[90%] m-auto grid gap-5">
            {headings.map((heading, index) => (
              <SingleFAQ key={index} heading={heading} para={paras[index]} />
            ))}
          </div>

          <div className="readmore flex justify-center mb-12 xs:mb-24 md:mb-32">
            <Link
              to="faq"
              className="underline text-xs x:text-sm decoration-2 font-bold py-2 px-10"
            >
              Visit FAQ Page
            </Link>
          </div>
        </div>
      </div>

      {/* cirlce */}
      <img
        className="cirlce absolute -bottom-[18rem] -right-[15rem]  w-[40rem] rotate-[140deg] opacity-[0.2]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce sm:hidden absolute -top-[0%] -left-[50%]  w-[40rem] rotate-[140deg] opacity-[0.15]"
        src={circle}
        alt="circle"
      />
    </section>
  );
}
