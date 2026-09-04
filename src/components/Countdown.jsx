import useCountdown from "../hooks/useCountdown";
import useReveal from "../hooks/useReveal";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown({
  weddingDate = "2022-06-17T00:00:00",
}) {
  const counts = useCountdown(weddingDate);
  const [ref, isIn] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isIn ? "in" : ""} relative z-10 px-4 py-10`}

    >
      <div className="mx-auto w-full max-w-[820px]"
      style={{
            backgroundImage: `url('flower.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
      >
        <div
          className="
            relative
            rounded-[24px]
            border border-[#c9a45c]/40
            bg-white/30
            px-4 py-8
            shadow-[0_15px_50px_rgba(91,65,60,0.12)]
            backdrop-blur-[2px]
            sm:px-10 sm:py-10
          "
        >
          {/* Top decoration */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a45c]/50 sm:w-12" />

            <span className="text-[8px] tracking-[3px] uppercase text-[#a77d35]">
              Our Story
            </span>

            <span className="h-px w-8 bg-[#c9a45c]/50 sm:w-12" />
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2
              className="
                font-serif
                text-[22px]
                tracking-[2px]
                uppercase
                text-[#704c47]
                sm:text-3xl
                sm:tracking-[3px]
              "
            >
              Together, Every Day
            </h2>

            <p className="mt-2 text-[9px] tracking-[1.5px] text-[#9b7770] sm:text-xs sm:tracking-[2px]">
              And every moment since
            </p>
          </div>

          {/* Time */}
          <div className="mt-8 flex w-full items-stretch justify-center">
            {UNITS.map((u, index) => (
              <div
                key={u.key}
                className={`
                  flex-1 text-center
                  ${index !== 0
                    ? "border-l border-[#c9a45c]/30"
                    : ""}
                `}
              >
                <div
                  className="
                    font-script
                    text-[30px]
                    leading-none
                    text-[#634844]
                    sm:text-[48px]
                  "
                >
                  {String(counts[u.key]).padStart(2, "0")}
                </div>

                <div
                  className="
                    mt-2
                    whitespace-nowrap
                    text-[7px]
                    font-medium
                    tracking-[1.5px]
                    uppercase
                    text-[#9b7770]
                    sm:text-[9px]
                    sm:tracking-[3px]
                  "
                >
                  {u.label}
                </div>
              </div>
            ))}
          </div>

          {/* Wedding date */}
          <div className="mt-7 flex items-center justify-center gap-2 text-[8px] tracking-[2px] uppercase text-[#b08a48] sm:mt-8 sm:text-[9px]">
            <span>Since</span>
            <span className="text-[#d1b276]">•</span>
            <span>17 June 2022</span>
          </div>

          {/* Bottom */}
          <div className="mt-5 text-center">
            <div className="mx-auto mb-3 h-px w-12 bg-[#c9a45c]/40" />

            <p className="font-script text-base text-[#9b6f68] sm:text-lg">
              One love, a lifetime to go ♡
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}