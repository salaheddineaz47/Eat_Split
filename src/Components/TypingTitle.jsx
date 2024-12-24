import { useState, useEffect } from "react";

const titles = [
  "split the bill effortlessly.",
  "share the cost with.",
  "keep things even and friendly.",
];
const emptyFriendLisTitles = [
  "No friends? No worries! Add some to split the bill with. 🤝💸",
  "🍴 Enjoy the meal, and let Eat&Split handle the bill! 🧾💛",
  "🎉 With Eat&Split, sharing the cost has never been this easy! 🤝💳",
];

const TypingAnimation = ({ isEmptyFriendList }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const erasingSpeed = 50;
  const pauseBetween = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = isEmptyFriendList
        ? emptyFriendLisTitles[currentIndex]
        : titles[currentIndex];

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
  }, [displayedText, isDeleting, currentIndex, isEmptyFriendList]);

  return (
    <h1 className="self-center text-5xl font-extrabold text-gray-800 relative text-center dark:text-medium">
      {!isEmptyFriendList && <span>Select a friend to </span>}
      {/* <span>Tap to </span> */}
      <span>{displayedText}</span>
      <span className="inline-block w-1 h-8 bg-gray-800 dark:bg-medium animate-blink ml-1"></span>
    </h1>
  );
};

export default TypingAnimation;
