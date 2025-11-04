import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'Ethereal Commerce',
    category: 'E-Commerce Platform',
    description: 'A seamless shopping experience that feels like browsing through an art gallery.',
    color: '#8B7355',
  },
  {
    title: 'Motion Studio',
    category: 'Creative Portfolio',
    description: 'Where animation meets storytelling, bringing creative work to life.',
    color: '#2D9596',
  },
  {
    title: 'Mindful Space',
    category: 'Wellness App',
    description: 'A sanctuary for mental wellness, designed with care and empathy.',
    color: '#8B7355',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
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
      className="min-h-screen py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-film-grain" />

      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-5xl md:text-7xl font-serif text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          Selected Works
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className="relative bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#F5F3EF]/10 hover:border-[#8B7355]/30 transition-all duration-500">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: project.color }}
                />

                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="text-sm font-mono text-[#8B7355] mb-3">
                        {project.category}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-serif mb-4 group-hover:text-[#8B7355] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-lg text-[#F5F3EF]/70 leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#F5F3EF]/20 group-hover:border-[#8B7355] group-hover:bg-[#8B7355]/10 transition-all duration-300">
                      <ExternalLink className="w-6 h-6 text-[#F5F3EF]/50 group-hover:text-[#8B7355] transition-colors duration-300" />
                    </div>
                  </div>

                  <div className="mt-8 h-64 bg-[#0D0D0D] rounded-lg relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-transparent to-current opacity-20"
                      style={{ color: project.color }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-[#F5F3EF]/10 text-9xl font-serif">
                      {index + 1}
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: project.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
