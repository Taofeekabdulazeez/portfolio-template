import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Digital Metamorphosis",
    category: "Interactive Design",
    description:
      "An immersive web experience exploring the transformation of digital identity",
    gradient: "from-violet-500/20 to-purple-600/20",
  },
  {
    title: "Cinematic Portfolio",
    category: "Motion Design",
    description:
      "A narrative-driven showcase merging motion design with storytelling",
    gradient: "from-amber-600/20 to-orange-500/20",
  },
  {
    title: "Constellation UI",
    category: "Design Systems",
    description:
      "A design system inspired by cosmic patterns and fluid interactions",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Emergence Studio",
    category: "Full-Stack Development",
    description:
      "Creative agency platform with real-time collaboration features",
    gradient: "from-purple-600/20 to-violet-500/20",
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
      id="projects"
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5 bg-film-grain" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Digital{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-800 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Each project is a scene in the story of creative evolution
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } ${hoveredIndex === index ? "-translate-y-2" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg">
                {/* Project visual area */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                >
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(0, 0, 0, 0.03) 2px,
                        rgba(0, 0, 0, 0.03) 4px
                      )`,
                    }}
                  />
                </div>

                {/* Content overlay */}
                <div
                  className={`absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="space-y-4">
                    <span
                      className={`block text-sm font-semibold text-orange-400 uppercase tracking-wide transition-all duration-700 ${
                        hoveredIndex === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                      style={{
                        transitionDelay:
                          hoveredIndex === index ? "200ms" : "0ms",
                      }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className={`text-3xl font-bold text-white transition-all duration-700 ${
                        hoveredIndex === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                      style={{
                        transitionDelay:
                          hoveredIndex === index ? "350ms" : "0ms",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-slate-300 transition-all duration-700 ${
                        hoveredIndex === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                      style={{
                        transitionDelay:
                          hoveredIndex === index ? "500ms" : "0ms",
                      }}
                    >
                      {project.description}
                    </p>
                    <button
                      className={`inline-flex items-center px-4 py-2 text-sm border border-purple-500 text-white rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-700 group/btn ${
                        hoveredIndex === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                      style={{
                        transitionDelay:
                          hoveredIndex === index ? "650ms" : "0ms",
                      }}
                    >
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Static title */}
                <div
                  className={`absolute bottom-8 left-8 right-8 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <span className="text-sm text-slate-600">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
