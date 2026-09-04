import { useState } from "react";
import left from "../assets/left.webp";
import right from "../assets/right.webp";
import center from "../assets/center.webp";
import SectionHead from "./SectionHead";
import useReveal from "../hooks/useReveal";

export default function CherishedMoments() {
  const [ref, isIn] = useReveal();
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="moments" className="px-[5vw] sm:px-[6vw] py-8">
      <SectionHead kicker="A Story in Frames" title="Our Cherished Moments" />

      <div
        ref={ref}
        className={`reveal ${isIn ? "in" : ""} max-w-[1100px] mx-auto`}
      >
        <div className="relative h-[390px] sm:h-auto sm:grid sm:grid-cols-3 gap-4 md:gap-5 items-end">
          <a
            className={`group absolute left-0 top-[25px] w-[49%] sm:static sm:w-auto sm:translate-y-5 sm:-rotate-3 sm:hover:rotate-0 transition-all duration-500 ${
              activeImage === "left"
                ? "z-[50]"
                : "z-10"
            }`}
            onClick={() => setActiveImage("left")}
          >
            <img
              src={left}
              alt=""
              className="w-full aspect-square object-[center_0%] object-cover rounded-[10px] shadow-photo transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </a>

          <a
            className={`group absolute right-0 top-0 w-[49%] sm:static sm:w-auto sm:-translate-y-4 transition-all duration-500 ${
              activeImage === "center"
                ? "z-[50]"
                : "z-20"
            }`}
            onClick={() => setActiveImage("center")}
          >
            <img
              src={center}
              alt=""
              className="w-full aspect-[3/4] object-cover rounded-[10px] shadow-photo transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </a>

          <a
            className={`group absolute left-[13%] bottom-0 w-[74%] sm:static sm:w-auto sm:translate-y-6 sm:rotate-3 sm:hover:rotate-0 transition-all duration-500 ${
              activeImage === "right"
                ? "z-[50]"
                : "z-30"
            }`}
            onClick={() => setActiveImage("right")}
          >
            <img
              src={right}
              alt=""
              className="w-full aspect-[1/1] object-[center_10%] object-cover rounded-[10px] shadow-photo transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}