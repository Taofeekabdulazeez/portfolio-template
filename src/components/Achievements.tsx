import { useEffect, useRef, useState } from 'react';
import { Award, Trophy, Star, Target } from 'lucide-react';

interface Achievement {
  icon: typeof Award;
  title: string;
  date: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: Award,
    title: 'Design Excellence Award',
    date: '2024',
    description: 'Recognized for outstanding interface design',
  },
  {
    icon: Trophy,
    title: 'Innovation Champion',
    date: '2023',
    description: 'Leading edge in creative solutions',
  },
  {
    icon: Star,
    title: 'User Experience Pioneer',
    date: '2023',
    description: 'Crafting memorable digital experiences',
  },
  {
    icon: Target,
    title: 'Creative Vision',
    date: '2022',
    description: 'Pushing boundaries of digital design',
  },
];

const Achievements = () => {
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
      className="min-h-screen py-24 px-6 relative overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 opacity-5 bg-film-grain" />

      <div className="max-w-7xl mx-auto w-full">
        <h2
          className={`text-5xl md:text-7xl font-serif text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          Recognition
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: isVisible
                    ? `rotate(${Math.random() * 4 - 2}deg)`
                    : 'translateY(48px)',
                }}
              >
                <div className="relative bg-[#1A1A1A] rounded-lg p-8 border border-[#F5F3EF]/10 hover:border-[#8B7355]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#8B7355]/5 h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B7355]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#8B7355]" />
                    </div>

                    <div className="text-sm font-mono text-[#8B7355] mb-3">
                      {achievement.date}
                    </div>

                    <h3 className="text-xl font-serif mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                      {achievement.title}
                    </h3>

                    <p className="text-sm text-[#F5F3EF]/70 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
