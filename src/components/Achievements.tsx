import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Code, Users } from 'lucide-react';

interface Credential {
  icon: typeof Award;
  title: string;
  organization: string;
  type: 'Education' | 'Certification' | 'Leadership' | 'Community';
}

const credentials: Credential[] = [
  {
    icon: GraduationCap,
    title: 'Bachelor of Computer Science',
    organization: 'University of Ilorin',
    type: 'Education',
  },
  {
    icon: Users,
    title: 'Welfare Secretary & PRO',
    organization: 'NACOSS - National Association of Computer Science Students',
    type: 'Leadership',
  },
  {
    icon: Code,
    title: 'JavaScript Programming',
    organization: 'Meta',
    type: 'Certification',
  },
  {
    icon: Code,
    title: 'React - The Complete Guide',
    organization: 'Jonas Schmedtmann (Udemy)',
    type: 'Certification',
  },
  {
    icon: Code,
    title: 'Node.js Bootcamp',
    organization: 'Jonas Schmedtmann (Udemy)',
    type: 'Certification',
  },
  {
    icon: Code,
    title: 'HTML & CSS Mastery',
    organization: 'Jonas Schmedtmann (Udemy)',
    type: 'Certification',
  },
  {
    icon: Code,
    title: 'Machine Learning Mathematics',
    organization: 'Duke University (Coursera)',
    type: 'Certification',
  },
  {
    icon: Users,
    title: 'Google Developer Student',
    organization: 'Google Developers',
    type: 'Community',
  },
  {
    icon: Users,
    title: 'Microsoft Learn Student Ambassador',
    organization: 'Microsoft',
    type: 'Community',
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Education':
        return 'text-blue-400 border-blue-400/20';
      case 'Leadership':
        return 'text-purple-400 border-purple-400/20';
      case 'Certification':
        return 'text-emerald-400 border-emerald-400/20';
      case 'Community':
        return 'text-amber-400 border-amber-400/20';
      default:
        return 'text-[#8B7355] border-[#8B7355]/20';
    }
  };

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
          Credentials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative bg-[#1A1A1A] rounded-lg p-6 border border-[#F5F3EF]/10 hover:border-[#8B7355]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#8B7355]/5 h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B7355]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[#8B7355]" />
                      </div>
                      <span
                        className={`text-xs font-mono px-3 py-1 rounded-full border ${getTypeColor(
                          credential.type
                        )}`}
                      >
                        {credential.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif mb-2 group-hover:text-[#8B7355] transition-colors duration-300 leading-snug">
                      {credential.title}
                    </h3>

                    <p className="text-sm text-[#F5F3EF]/70 leading-relaxed">
                      {credential.organization}
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