import { useEffect, useState, useRef } from "react";

import { arrow } from "../ui/images";

export default function DbCollaps({ heading, para }) {
  const [paraHeight, setparaHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const refferance = useRef(null);

  useEffect(() => {
    setparaHeight(refferance.current.clientHeight);
  
  }, [isOpen]);

  return (
    <article className="border border-primary/40 rounded-lg bg-main-bg/50 ">
      <header
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between cursor-pointer py-3 px-4"
      >
        <h3 className="text-[0.9rem] xs:text-base">
          <div
            dangerouslySetInnerHTML={{
              __html: heading,
            }}
          />
        </h3>

        <div className="arrow flex justify-center items-center ml-3">
          <img
            className={`max-w-[1.2rem] transform-gpu transition-all duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            src={arrow}
            alt="arrow"
          />
        </div>
      </header>

      <div
        style={{ maxHeight: isOpen ? paraHeight + "px" : "0" }}
        className={`content transition-all duration-300 overflow-hidden`}
      >
        <div ref={refferance} className="wrapper">
          <p className=" peraH mt-2 text-[0.9rem] xs:text-base px-4">{para}</p>

          <div className="btn flex justify-start items-center mt-3 pb-7 px-4">
            <a
              className=" bg-all/50 py-1.5 px-4 rounded-xl text-center"
              href="#"
            >
              Request withdraw
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
