import { useState, useEffect } from 'react';

interface PreloadProps {
  onComplete: () => void;
}

const Preload = ({ onComplete }: PreloadProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'hello welcome to my story';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 4500);

    return () => clearTimeout(exitTimer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-[#0D0D0D] z-[9999] flex items-center justify-center transition-all duration-1000 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 opacity-30 bg-film-grain" />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8 h-1 w-64 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent mx-auto animate-pulse" />

        <h1 className="text-5xl md:text-7xl font-serif text-[#F5F3EF] tracking-tight min-h-[120px] flex items-center justify-center">
          {displayText}
          <span
            className={`inline-block w-1 h-12 md:h-16 bg-[#8B7355] ml-2 ${
              displayText.length < fullText.length ? 'animate-pulse' : 'animate-none'
            }`}
          />
        </h1>

        <div className="mt-12 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#8B7355]/40 animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preload;
