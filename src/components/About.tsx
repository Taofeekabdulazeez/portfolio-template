import { useEffect, useRef, useState } from 'react';

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
      className="min-h-screen flex items-center py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-film-grain" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/30 to-[#2D9596]/30 rounded-lg transform rotate-3" />
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center text-[#8B7355]/30 text-8xl font-serif">
                  ?
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {[
            {
              title: 'The Beginning',
              text: 'From digital noise to deliberate creation, my journey started with curiosity and evolved into craftsmanship.',
            },
            {
              title: 'The Evolution',
              text: 'Every pixel, every interaction, every moment of friction became an opportunity to refine the experience.',
            },
            {
              title: 'The Philosophy',
              text: 'Design is not just what it looks like. Design is how it makes you feel, how it guides you, how it remembers you.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 200}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <h3 className="text-2xl font-serif text-[#8B7355] mb-3">
                {item.title}
              </h3>
              <p className="text-lg text-[#F5F3EF]/80 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

          <div
            className={`pt-8 transition-all duration-1000 delay-600`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
              transitionDelay: '600ms',
            }}
          >
            <p className="text-xl font-serif text-[#8B7355] group cursor-pointer inline-block">
              Let's create something worth remembering
              <span className="block h-px bg-gradient-to-r from-[#8B7355] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-1" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
