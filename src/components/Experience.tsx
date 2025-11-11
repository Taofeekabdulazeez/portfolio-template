import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    value: "2+",
    label: "Years Coding",
    color: "#8B7355",
  },
  {
    value: "10+",
    label: "Projects Built",
    color: "#2D9596",
  },
  {
    value: "10+",
    label: "Technologies",
    color: "#8B7355",
  },
  {
    value: "100+",
    label: "GitHub Commits",
    color: "#2D9596",
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervals = stats.map((stat, index) => {
        const target = parseInt(stat.value);
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        return setInterval(() => {
          current += increment;
          if (current >= target) {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = target;
              return newCounters;
            });
            clearInterval(intervals[index]);
          } else {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(current);
              return newCounters;
            });
          }
        }, duration / steps);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      data-section
      className="min-h-screen flex items-center py-16 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-film-grain" />

      <div className="max-w-7xl mx-auto w-full">
        <h2
          className={`text-5xl md:text-7xl font-serif text-center mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Impact
        </h2>

        <p
          className={`text-center text-lg text-[#F5F3EF]/60 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Building, learning, and shipping every day
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative group">
                <div className="relative">
                  <div
                    className="text-5xl md:text-6xl font-serif mb-3 transition-colors duration-300"
                    style={{ color: stat.color }}
                  >
                    {counters[index]}
                    {stat.value.includes("+") && "+"}
                  </div>
                  <div className="text-sm md:text-base font-mono text-[#F5F3EF]/70 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div
                className="mt-6 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30"
                style={{ color: stat.color }}
              />
            </div>
          ))}
        </div>

        <div
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <a
            href="https://github.com/phawaaaz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#8B7355] font-mono text-sm hover:text-[#F5F3EF] transition-colors duration-300 group"
          >
            View my work on GitHub
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
