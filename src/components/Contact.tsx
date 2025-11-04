import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
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

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const rect = e.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      ref={sectionRef}
      data-section
      className="min-h-screen py-24 px-6 relative overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B7355]/5 to-transparent" />
      <div className="absolute inset-0 opacity-10 bg-film-grain" />

      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed w-32 h-32 border-2 border-[#8B7355]/30 rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-6">
            Let's build something beautiful together
          </h2>
          <p className="text-xl text-[#F5F3EF]/70">
            Every great project starts with a conversation
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-sm font-mono text-[#8B7355] mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={handleInputFocus}
                className="w-full bg-[#1A1A1A] border border-[#F5F3EF]/10 rounded-lg px-6 py-4 text-[#F5F3EF] focus:border-[#8B7355] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#8B7355]/10"
                required
              />
            </div>

            <div className="group">
              <label className="block text-sm font-mono text-[#8B7355] mb-2">
                Your Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={handleInputFocus}
                className="w-full bg-[#1A1A1A] border border-[#F5F3EF]/10 rounded-lg px-6 py-4 text-[#F5F3EF] focus:border-[#8B7355] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#8B7355]/10"
                required
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-mono text-[#8B7355] mb-2">
              Your Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={handleInputFocus}
              rows={6}
              className="w-full bg-[#1A1A1A] border border-[#F5F3EF]/10 rounded-lg px-6 py-4 text-[#F5F3EF] focus:border-[#8B7355] focus:outline-none transition-all duration-300 resize-none focus:shadow-lg focus:shadow-[#8B7355]/10"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative px-12 py-4 bg-[#8B7355] text-[#0D0D0D] rounded-lg font-serif text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#8B7355]/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B7355] via-[#A68A6F] to-[#8B7355] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </div>
        </form>

        <div
          className={`mt-20 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg text-[#F5F3EF]/50 font-serif">
            Thank you for visiting my story
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
