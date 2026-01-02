import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  category: "Full-Stack" | "Backend" | "Frontend";
}

const projects: Project[] = [
  {
    title: "Visitor Management System",
    description:
      "Platform for visitor registration and management with separate frontend and backend services",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Taofeekabdulazeez/backendRevamp",
    live: "https://project-demo-cyan.vercel.app",
    category: "Full-Stack",
  },
  {
    title: "Natours",
    description:
      "Full-stack Node.js tour booking application with authentication, payments, and reviews",
    tech: ["Node.js", "Express", "MongoDB", "Pug"],
    github: "https://github.com/Taofeekabdulazeez/node_practice",
    category: "Full-Stack",
  },
  {
    title: "Event Management API",
    description:
      "RESTful API for event creation, registration, and management with real-time updates",
    tech: ["Node.js", "Express", "MongoDB", "WebSockets"],
    github: "https://github.com/Taofeekabdulazeez/eventmanagementApi",
    category: "Backend",
  },
  {
    title: "Smart Campus Map",
    description:
      "Interactive campus navigation system with building information and route planning",
    tech: ["React", "TypeScript", "LeafletJS", "Tailwind"],
    github: "https://github.com/Taofeekabdulazeez/Csc420_fe",
    live: "https://csc420-fe.vercel.app",
    category: "Frontend",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather application with forecasts and location-based alerts",
    tech: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com/Taofeekabdulazeez/Weather-app",
    category: "Frontend",
  },
  {
    title: "AI Note Taking",
    description:
      "Intelligent note-taking application with AI-powered summaries and organization",
    tech: ["Next.js", "OpenAI API", "MongoDB", "Prisma"],
    github: "https://github.com/Taofeekabdulazeez/ai-notes",
    category: "Full-Stack",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-film-grain" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          className={`text-5xl md:text-7xl font-serif text-center mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Projects
        </h2>
        <p
          className={`text-center text-lg text-[#F5F3EF]/60 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Recent work and experiments
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } ${hoveredIndex === index ? "-translate-y-2 scale-105" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-full bg-[#1A1A1A] rounded-lg p-6 border border-[#F5F3EF]/10 hover:border-[#8B7355]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#8B7355]/10">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#8B7355]/10 to-[#2D9596]/10 rounded-lg transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span
                    className={`text-xs font-mono text-[#8B7355] px-2 py-1 rounded border border-[#8B7355]/30 transition-all duration-300 ${
                      hoveredIndex === index ? "bg-[#8B7355]/10" : ""
                    }`}
                  >
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F5F3EF]/50 hover:text-[#8B7355] transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F5F3EF]/50 hover:text-[#8B7355] transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif mb-3 text-[#F5F3EF] group-hover:text-[#8B7355] transition-colors duration-300 relative z-10">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#F5F3EF]/70 leading-relaxed mb-4 relative z-10">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs font-mono text-[#F5F3EF]/60 bg-[#F5F3EF]/5 px-2 py-1 rounded transition-all duration-300 ${
                        hoveredIndex === index
                          ? "bg-[#F5F3EF]/10 text-[#F5F3EF]/80"
                          : ""
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <a
            href="https://github.com/Taofeekabdulazeez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#8B7355] font-mono text-sm hover:text-[#F5F3EF] transition-colors duration-300 group"
          >
            View all projects on GitHub
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
