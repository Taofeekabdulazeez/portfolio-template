import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

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
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-serif mb-4 tracking-tight">
            <span className="inline-block animate-glitch">crafted by chaos</span>
          </h1>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent mx-auto my-8" />
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
            refined by design
          </h2>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-[#8B7355]/20 blur-xl group-hover:blur-2xl transition-all duration-500 rounded-full scale-150" />
          <ArrowDown className="w-8 h-8 animate-bounce relative z-10 text-[#8B7355]" />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 bg-film-grain animate-grain" />
      </div>
    </section>
  );
};

export default Hero;
