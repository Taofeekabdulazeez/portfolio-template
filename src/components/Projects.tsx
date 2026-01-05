import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  category: "Full-Stack" | "Backend" | "Frontend" | "AI/Full-Stack";
}

const projects: Project[] = [
  {
    title: "QuizLab NG",
    description:
      "QuizLab NG is a Telegram-based quiz platform that helps Nigerian students prepare for UTME and WAEC through real-time, competitive quiz battles with points, rankings, and prizes.",
    tech: ["Typescript", "Node.js", "GrammyJS", "PostgreSQL", "Redis", "React"],
    github: "https://github.com/Taofeekabdulazeez/quizlab-website",
    live: "https://quizlab.com.ng",
    category: "Full-Stack",
  },
  {
    title: "ReferX",
    description:
      "ReferX is a decentralized platform that connects talented individuals with meaningful opportunities while ensuring fair compensation through blockchain technology.",
    tech: ["Node.js", "NestJS", "PostgreSQL", "React"],
    github: "https://github.com/Taofeekabdulazeez/node_practice",
    live: "https://referx.com.ng",
    category: "Full-Stack",
  },
  {
    title: "BookMyTime",
    description:
      "BookMyTime is an integrated platform for managing online consultations comprehensively, offering all the essential tools for scheduling meetings and video calling your clients.",
    tech: ["Node.js", "NestJS", "PostgreSQL", "WebSockets", "Next.js"],
    // github: "https://github.com/Taofeekabdulazeez/eventmanagementApi",
    live: "https://bookmytime.com",
    category: "Full-Stack",
  },
  {
    title: "Anagram Solver",
    description:
      "A Go-based anagram solver that generates a list of all valid words from a scrambled input string.",
    tech: ["Golang"],
    github: "https://github.com/Taofeekabdulazeez/anagramsolver",
    live: "https://anagramsolver0.vercel.app",
    category: "Backend",
  },
  {
    title: "QLearn",
    description:
      "This project addresses real challenges that students in Nigerian higher institutions face when using AI chatbots to study.",
    tech: ["Python", "Typescript", "FastAPI", "React", "Node.js"],
    github: "https://github.com/Taofeekabdulazeez/",
    live: "https://qlearn-seven.vercel.app",
    category: "AI/Full-Stack",
  },
  {
    title: "PostDraft",
    description:
      "PostDraft is a Centralized hub for drafting, saving, and managing social media posts across platforms.",
    tech: [ "C#", ".NET", "Entity Framework", "PostgreSQL"],
    github: "https://github.com/Taofeekabdulazeez/PostDraftServer",
    category: "Backend",
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
