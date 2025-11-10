import { useState, useEffect } from "react";

const Hero = () => {
  const [pixelOpacity, setPixelOpacity] = useState(1);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPixelOpacity(0);
    }, 1500);

    const timer2 = setTimeout(() => {
      setTextVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section
      data-section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/20 to-transparent" />
      </div>

      <div
        className="absolute inset-0 bg-dither-pattern transition-opacity duration-[2000ms]"
        style={{ opacity: pixelOpacity }}
      />

      <div className="relative z-10 text-center px-6">
        <div
          className={`transition-all duration-1000 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-serif mb-4 tracking-tight">
            <span className="inline-block animate-glitch">
              Crafted in chaos
            </span>
          </h1>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent mx-auto my-8" />
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
            defined by purpose.
          </h2>
        </div>

        <div
          className={`mt-12 flex items-center justify-center gap-8 transition-all duration-1000 delay-500 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-[#8B7355] font-mono text-sm tracking-wider transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-[#F5F3EF] transition-colors duration-300">
              Resume
              <span className="inline-block ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                ↗
              </span>
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#8B7355] group-hover:w-full transition-all duration-300" />
          </a>

          <span className="text-[#F5F3EF]/20 animate-pulse">|</span>

          <a
            href="https://github.com/phawaaaz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-[#8B7355] font-mono text-sm tracking-wider transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-[#F5F3EF] transition-colors duration-300">
              GitHub
              <span className="inline-block ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                ↗
              </span>
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#8B7355] group-hover:w-full transition-all duration-300" />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 bg-film-grain animate-grain" />
      </div>
    </section>
  );
};

export default Hero;
