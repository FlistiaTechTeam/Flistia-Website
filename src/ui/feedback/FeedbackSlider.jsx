import { useState } from "react";
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

  const prev = () =>
    setIndex((i) => (i - 1 + feedbacks.length) % feedbacks.length);
  const next = () => setIndex((i) => (i + 1) % feedbacks.length);

  return (
    <div className="py-12">
      <div className="relative max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={feedbacks[index].id}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
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
          className="absolute -left-10 top-1/2 -translate-y-1/2 p-3"
        >
          <ChevronLeft className=" text-gray-500 hover:text-black transition hover:cursor-pointer size-10" />
        </button>
        <button
          onClick={next}
          className="absolute -right-10 top-1/2 -translate-y-1/2 p-3"
        >
          <ChevronRight className="text-gray-500 hover:text-black transition hover:cursor-pointer size-10" />
        </button>
      </div>
    </div>
  );
}

export default FeedbackSlider;
