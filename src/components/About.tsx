import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-section
      className="min-h-screen flex items-center py-16 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-film-grain" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/30 to-[#2D9596]/30 rounded-lg transform rotate-3" />
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="./src/image/fawaz.png"
                    alt="Akinola Fawaz"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div
            className={`transition-all duration-1000`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#8B7355] mb-6">
              About Me
            </h2>
          </div>

          <div
            className={`transition-all duration-1000 delay-200`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transitionDelay: "200ms",
            }}
          >
            <p className="text-xl text-[#F5F3EF]/90 leading-relaxed mb-6">
              I'm Akinola Fawaz, a full-stack developer from Nigeria. I build
              scalable web applications using React, Node.js, and TypeScript.
            </p>
            <p className="text-lg text-[#F5F3EF]/80 leading-relaxed">
              I focus on writing clean, maintainable code and building systems
              that are fast, reliable, and solve real problems. Every project I
              work on prioritizes clarity over complexity.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-400`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transitionDelay: "400ms",
            }}
          >
            <div className="pt-6 border-t border-[#F5F3EF]/10">
              <h3 className="text-sm font-mono text-[#8B7355] tracking-wider mb-4">
                WHAT I DO
              </h3>
              <ul className="space-y-3">
                {[
                  "Full-stack web applications",
                  "RESTful & GraphQL APIs",
                  "Database design & optimization",
                  "UI/UX implementation",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-[#F5F3EF]/80"
                  >
                    <span className="w-1.5 h-1.5 bg-[#8B7355] rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`pt-4 transition-all duration-1000 delay-600`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transitionDelay: "600ms",
            }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center text-lg font-mono text-[#8B7355] hover:text-[#F5F3EF] transition-colors duration-300"
            >
              Let's work together
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
