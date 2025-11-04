import { useEffect, useRef, useState } from 'react';

interface Milestone {
  year: string;
  title: string;
  role: string;
  color: string;
}

const milestones: Milestone[] = [
  { year: '2020', title: 'The Spark', role: 'First Design', color: '#8B7355' },
  { year: '2021', title: 'The Learning', role: 'UI/UX Exploration', color: '#2D9596' },
  { year: '2022', title: 'The Craft', role: 'Professional Work', color: '#8B7355' },
  { year: '2023', title: 'The Vision', role: 'Creative Direction', color: '#2D9596' },
  { year: '2024', title: 'The Mastery', role: 'Full-Stack Design', color: '#8B7355' },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      data-section
      className="min-h-screen flex items-center py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-film-grain" />

      <div className="max-w-7xl mx-auto w-full">
        <h2
          className={`text-5xl md:text-7xl font-serif text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          The Journey
        </h2>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B7355]/30 to-transparent" />

          <div className="flex justify-between items-center relative z-10">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer group"
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 1000ms ${index * 100}ms`,
                }}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                    activeIndex === index
                      ? 'scale-150 shadow-lg shadow-current'
                      : 'scale-100'
                  }`}
                  style={{ borderColor: milestone.color }}
                >
                  <div
                    className={`w-full h-full rounded-full transition-all duration-500 ${
                      activeIndex === index ? 'scale-100' : 'scale-0'
                    }`}
                    style={{ backgroundColor: milestone.color }}
                  />
                </div>

                <div className="mt-8 text-center">
                  <div
                    className={`text-sm font-mono mb-2 transition-all duration-300 ${
                      activeIndex === index ? 'text-[#8B7355]' : 'text-[#F5F3EF]/50'
                    }`}
                  >
                    {milestone.year}
                  </div>
                  <div
                    className={`transition-all duration-500 ${
                      activeIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <h3 className="text-xl font-serif mb-1">{milestone.title}</h3>
                    <p className="text-sm text-[#F5F3EF]/70">{milestone.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center max-w-2xl mx-auto">
          <div
            className="transition-all duration-1000 delay-500"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
            }}
          >
            <p className="text-lg text-[#F5F3EF]/80 leading-relaxed">
              {milestones[activeIndex].year === '2020' &&
                'The beginning of a journey into the world of pixels, patterns, and possibilities.'}
              {milestones[activeIndex].year === '2021' &&
                'Exploring the depths of user experience, learning what makes interfaces intuitive and delightful.'}
              {milestones[activeIndex].year === '2022' &&
                'Turning passion into profession, crafting experiences that resonate with real users.'}
              {milestones[activeIndex].year === '2023' &&
                'Leading with vision, shaping narratives through design that tells stories.'}
              {milestones[activeIndex].year === '2024' &&
                'Merging design with development, building complete experiences from concept to code.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
