import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  x: number;
  y: number;
  connections: number[];
  philosophy: string;
}

const skills: Skill[] = [
  {
    name: "React",
    x: 30,
    y: 30,
    connections: [1, 2, 7],
    philosophy: "Building dynamic UIs",
  },
  {
    name: "Next.js",
    x: 60,
    y: 20,
    connections: [0, 2, 3, 8],
    philosophy: "Full-stack React framework",
  },
  {
    name: "Node.js",
    x: 50,
    y: 50,
    connections: [0, 1, 3, 4, 9],
    philosophy: "JavaScript everywhere",
  },
  {
    name: "Express",
    x: 70,
    y: 60,
    connections: [1, 2, 5, 6],
    philosophy: "Fast, minimal backend",
  },
  {
    name: "MongoDB",
    x: 20,
    y: 70,
    connections: [2, 5, 6, 10],
    philosophy: "Flexible document storage",
  },
  {
    name: "PostgreSQL",
    x: 50,
    y: 80,
    connections: [3, 4, 6, 11],
    philosophy: "Reliable relational data",
  },
  {
    name: "JWT",
    x: 80,
    y: 40,
    connections: [3, 4, 12],
    philosophy: "Stateless authentication",
  },
  {
    name: "TypeScript",
    x: 35,
    y: 15,
    connections: [0, 1, 2],
    philosophy: "Type-safe JavaScript",
  },
  {
    name: "Tailwind CSS",
    x: 15,
    y: 35,
    connections: [0, 1, 13],
    philosophy: "Utility-first styling",
  },
  {
    name: "REST API",
    x: 65,
    y: 45,
    connections: [2, 3, 14],
    philosophy: "Standardized communication",
  },
  {
    name: "GraphQL",
    x: 85,
    y: 55,
    connections: [1, 2, 9],
    philosophy: "Query what you need",
  },
  {
    name: "Prisma",
    x: 40,
    y: 85,
    connections: [5, 7],
    philosophy: "Type-safe database client",
  },
  {
    name: "OAuth",
    x: 85,
    y: 25,
    connections: [6, 10],
    philosophy: "Secure delegated access",
  },
  {
    name: "Redux",
    x: 20,
    y: 20,
    connections: [0, 8],
    philosophy: "Predictable state management",
  },
  {
    name: "Git",
    x: 45,
    y: 10,
    connections: [7],
    philosophy: "Version control mastery",
  },
  {
    name: "WebSockets",
    x: 60,
    y: 70,
    connections: [2, 3],
    philosophy: "Real-time communication",
  },
  {
    name: "Redis",
    x: 30,
    y: 65,
    connections: [2, 4],
    philosophy: "Lightning-fast caching",
  },
];
const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      skills.forEach((skill, index) => {
        skill.connections.forEach((connIndex) => {
          const startX = (skill.x / 100) * canvas.width;
          const startY = (skill.y / 100) * canvas.height;
          const endX = (skills[connIndex].x / 100) * canvas.width;
          const endY = (skills[connIndex].y / 100) * canvas.height;

          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);

          const isHighlighted =
            hoveredSkill === index || hoveredSkill === connIndex;
          ctx.strokeStyle = isHighlighted
            ? "#8B7355"
            : "rgba(245, 243, 239, 0.1)";
          ctx.lineWidth = isHighlighted ? 2 : 1;
          ctx.stroke();
        });
      });
    };

    const animate = () => {
      drawConnections();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [hoveredSkill]);

  return (
    <section
      ref={sectionRef}
      data-section
      className="min-h-screen py-24 px-6 relative overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 opacity-5 bg-film-grain" />

      <div className="max-w-7xl mx-auto w-full">
        <h2
          className={`text-5xl md:text-7xl font-serif text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Constellation
        </h2>

        <div className="relative h-[600px] max-w-4xl mx-auto">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {skills.map((skill, index) => (
            <div
              key={index}
              className={`absolute group cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{
                left: `${skill.x}%`,
                top: `${skill.y}%`,
                transform: "translate(-50%, -50%)",
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative">
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    hoveredSkill === index ||
                    skill.connections.includes(hoveredSkill ?? -1)
                      ? "bg-[#8B7355] shadow-lg shadow-[#8B7355]/50 scale-150"
                      : "bg-[#F5F3EF]/30"
                  }`}
                >
                  <div className="absolute inset-0 rounded-full bg-[#8B7355]/20 animate-ping" />
                </div>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap transition-all duration-300 ${
                    hoveredSkill === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  <div className="bg-[#1A1A1A] border border-[#8B7355]/30 rounded-lg px-4 py-2 text-center">
                    <div className="text-sm font-serif text-[#8B7355] mb-1">
                      {skill.name}
                    </div>
                    <div className="text-xs text-[#F5F3EF]/70">
                      {skill.philosophy}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-[#F5F3EF]/60 italic">
            Hover to explore connections
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
