import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

interface StarRatingProps {
  totalStars?: number;
  onRatingChange?: (rating: number) => void;
  setRating?: (rating: number) => void;
  rating: number;
  showRating?: boolean;
  size?: number;
  darkMode?: boolean;
}

const StarRating = ({
  totalStars = 5,
  onRatingChange,
  setRating,
  rating,
  showRating = true,
  size = 32,
  darkMode = false,
}: StarRatingProps) => {
  const handleRating = (newRating: number) => {
    setRating && setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="fr-flex fr-items-center fr-justify-between fr-w-full">
      <div className="fr-flex fr-items-center fr-gap-1">
        {Array.from({ length: totalStars }, (_, index) => (
          <button
            key={index}
            className="fr-cursor-pointer"
            onClick={() => handleRating(index + 1)}
          >
            <StarIcon
              className={`fr-size-6 ${
                index + 1 <= rating
                  ? "fr-text-yellow-400"
                  : darkMode ? "fr-text-gray-700" : "fr-text-gray-200"
              }`}
            />
          </button>
        ))}
      </div>
      {showRating && (
        <p className="fr-text-sm fr-text-gray-500">
          {rating}/{totalStars}
        </p>
      )}
    </div>
  );
};

export default StarRating;
