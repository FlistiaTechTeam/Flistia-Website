import clsx from "clsx";
import { Star } from "lucide-react";
function FeedbackCard({ feedback }) {
  return (
    <div className="relative bg-white shadow-lg rounded-2xl p-6 max-w-lg mx-auto">
      <div className="absolute -top-6 -left-6 w-16 h-16 bg-red-100 rounded-full opacity-50" />
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-red-100 rounded-full opacity-30" />

      <div className="flex items-center gap-4 mb-4">
        <img
          src={feedback.logo}
          alt={feedback.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-lg">{feedback.name}</h4>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={clsx(
                  i < feedback.rating ? "text-yellow-400" : "text-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">"{feedback.text}"</p>
    </div>
  );
}

export default FeedbackCard;
