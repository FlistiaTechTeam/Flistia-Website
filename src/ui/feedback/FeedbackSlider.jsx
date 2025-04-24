import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeedbackCard from "./FeedbackCard";
import logo from "../../assets/images/clients/default_avatar.png";
import clsx from "clsx";

const feedbacks = [
  {
    id: 1,
    name: "Alice Johnson",
    logo: logo,
    rating: 5,
    text: "Fantastic experience! Highly recommend their services.",
  },
  {
    id: 2,
    name: "Mark Chen",
    logo: logo,
    rating: 4,
    text: "Great work, timely delivery and responsive team!",
  },
  {
    id: 3,
    name: "Luna Patel",
    logo: logo,
    rating: 5,
    text: "We loved the collaboration. The results exceeded expectations!",
  },
];

function FeedbackSlider() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [direction, setDirection] = useState(0);
  const sliderRef = useRef(null);

  const prev = () => {
    setDirection(0); // Reset direction first
    setTimeout(() => {
      setDirection(-1);
      setIndex((i) => (i - 1 + feedbacks.length) % feedbacks.length);
    }, 0);
  };

  const next = () => {
    setDirection(0); // Reset direction first
    setTimeout(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % feedbacks.length);
    }, 0);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setDirection(0); // Reset direction on new touch
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setDirection(-1);
      next();
    }
    if (isRightSwipe) {
      setDirection(1);
      prev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="py-12">
      <div
        ref={sliderRef}
        className="relative max-w-xl mx-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={feedbacks[index].id}
            initial={{ x: direction * 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FeedbackCard feedback={feedbacks[index]} />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {feedbacks.map((_, i) => (
            <div
              key={i}
              className={clsx(
                "w-3 h-3 rounded-full",
                i === index ? "bg-gray-800" : "bg-gray-300"
              )}
            />
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute -left-10 top-1/2 -translate-y-1/2 p-3 hidden sm:block"
        >
          <ChevronLeft className="text-gray-500 hover:text-black transition hover:cursor-pointer size-10" />
        </button>
        <button
          onClick={next}
          className="absolute -right-10 top-1/2 -translate-y-1/2 p-3 hidden sm:block"
        >
          <ChevronRight className="text-gray-500 hover:text-black transition hover:cursor-pointer size-10" />
        </button>
      </div>
    </div>
  );
}

export default FeedbackSlider;
