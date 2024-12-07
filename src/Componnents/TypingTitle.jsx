import { useState, useEffect } from "react";

const titles = [
  "split the bill effortlessly.",
  "share the cost with a friend.",
  "keep things even and friendly.",
];
const TypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const erasingSpeed = 50;
  const pauseBetween = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentIndex];

      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseBetween);
        }
      } else {
        // Erasing logic
        if (displayedText.length > 0) {
          setDisplayedText((prev) => fullText.slice(0, prev.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const typingTimer = setTimeout(
      handleTyping,
      isDeleting ? erasingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, currentIndex]);

  return (
    <h1 className="self-center text-5xl font-extrabold text-gray-800 relative text-center dark:text-medium">
      <span>Tap to </span>
      <span>{displayedText}</span>
      <span className="inline-block w-1 h-8 bg-gray-800 animate-blink ml-1"></span>
    </h1>
  );
};

export default TypingAnimation;
