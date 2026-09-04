import couple from "../assets/bg.png";

export default function Forever() {
  return (
    <section className="relative my-12 min-h-[56vh] flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${couple})`, backgroundPosition: "center 25%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(74,47,40,0.25), rgba(74,47,40,0.55))",
        }}
      />

      <div className="relative z-[2] text-white px-5 py-16">
        <h2 className="font-script font-medium tracking-[4px] uppercase text-[clamp(1.5rem,4vw,2.3rem)]">
          And so, our forever begins
        </h2>
        <div className="mt-4.5 text-[13px] tracking-[3px] uppercase opacity-90">
          June 17, 2022
        </div>
        <div className="mt-3.5 font-script italic text-2xl text-gold-light">
          Divya ♥ Vivek
        </div>
      </div>
    </section>
  );
}
