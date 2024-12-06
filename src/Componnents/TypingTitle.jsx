import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const titles = [
    "split the bill effortlessly.",
    "share the cost with a friend.",
    "keep things even and friendly.",
  ]; // Titles to cycle through
  const typingSpeed = 100; // Speed for typing characters
  const erasingSpeed = 50; // Speed for erasing characters
  const pauseBetween = 2000; // Pause before typing the next title

  const [displayedText, setDisplayedText] = useState(""); // Current text being displayed
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current title
  const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting text

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentIndex];
      if (!isDeleting) {
        // Typing logic
        if (displayedText.length < fullText.length) {
          setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseBetween); // Pause before erasing
        }
      } else {
        // Erasing logic
        if (displayedText.length > 0) {
          setDisplayedText((prev) => fullText.slice(0, prev.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length); // Move to the next title
        }
      }
    };

    const typingTimer = setTimeout(
      handleTyping,
      isDeleting ? erasingSpeed : typingSpeed
    );
    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, currentIndex, titles]);

  return (
    <h1 className="self-center text-5xl font-extrabold text-gray-800 relative text-center dark:text-medium">
      <span>Tap to </span>
      <span>{displayedText}</span>
      <span className="inline-block w-1 h-8 bg-gray-800 animate-blink ml-1"></span>
    </h1>
  );
};

export default TypingAnimation;
