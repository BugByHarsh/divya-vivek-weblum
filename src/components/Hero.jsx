import couple from "../assets/bg2.png";

export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-14 overflow-hidden sm:px-5 sm:py-16"
    >
      {/* background photo */}
      <div
        className="absolute inset-0 -z-20 bg-cover animate-heroZoom"
        style={{ backgroundImage: `url(${couple})`, backgroundPosition: "center 15%" }}
      />

      {/* warm overlay so text stays legible without going dark/moody */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.30) 75%, rgba(0,0,0,0.5) 100%),
            linear-gradient(90deg, rgba(0,0,0,0.3), transparent 30%, transparent 70%, rgba(0,0,0,0.3))
          `,
        }}
      />

      <div className="font-script tracking-[4px] uppercase text-pink-100 text-[10px] mb-4 sm:tracking-[6px] sm:text-xs [text-shadow:0_2px_12px_rgba(0,0,0,0.35)] animate-[fadeDown_1s_ease_0.05s_both]">
        Together with their families
      </div>

      <h1 className="lucy text-[clamp(3.2rem,16vw,9rem)] leading-[0.95] tracking-[0.02em] text-white max-w-[11ch] [text-shadow:0_4px_30px_rgba(74,47,40,0.45)] animate-[fadeUp_1.1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
        Divya and Vivek
      </h1>

      <div className="mt-5 font-body text-[clamp(0.8rem,2.8vw,1.15rem)] tracking-[3px] uppercase text-white sm:tracking-[5px] [text-shadow:0_2px_12px_rgba(0,0,0,0.35)] animate-[fadeUp_1.1s_ease_0.4s_both]">
        June 17, 2022
      </div>

      <div className="mt-14 flex flex-col items-center gap-2 animate-[fadeUp_1.1s_ease_0.7s_both]">
        <span className="font-script tracking-[3px] uppercase text-[11px] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]">
          Explore Our Story
        </span>
        <div className="relative w-px h-11 bg-gradient-to-b from-white to-transparent">
          <span className="absolute -left-[3px] top-0 w-1.5 h-1.5 rounded-full bg-white animate-cueMove" />
        </div>
      </div>
    </header>
  );
}
