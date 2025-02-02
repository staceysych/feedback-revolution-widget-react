import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import { RatingIconType } from "../../types/common";


interface StarRatingProps {
  totalStars?: number;
  onRatingChange?: (rating: number) => void;
  setRating?: (rating: number) => void;
  rating: number;
  showRating?: boolean;
  size?: number;
  darkMode?: boolean;
  iconType?: RatingIconType;
}

const getFaceEmoji = (index: number) => {
  switch (index + 1) {
    case 1: return '😡';
    case 2: return '😕';
    case 3: return '😐';
    case 4: return '🙂';
    case 5: return '😄';
    default: return '😐';
  }
};

const getThumbEmoji = (index: number) => {
  switch (index + 1) {
    case 1: return '👎';
    case 2: return '👊';
    case 3: return '✋';
    case 4: return '👌';
    case 5: return '👍';
    default: return '✋';
  }
};

const getHeartEmoji = (index: number) => {
  switch (index + 1) {
    case 1: return '💔';
    case 2: return '❤️‍🩹';
    case 3: return '❤️';
    case 4: return '💝';
    case 5: return '💖';
    default: return '❤️';
  }
};

const StarRating = ({
  totalStars = 5,
  onRatingChange,
  setRating,
  rating,
  showRating = true,
  size = 32,
  darkMode = false,
  iconType = RatingIconType.Stars
}: StarRatingProps) => {
  const handleRating = (newRating: number) => {
    setRating && setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const renderIcon = (index: number) => {
    switch (iconType) {
      case RatingIconType.Faces:
        return (
          <span className="fr-flex fr-items-center fr-justify-center fr-w-full fr-h-full" style={{ fontSize: `${size * 0.8}px` }}>
            {getFaceEmoji(index)}
          </span>
        );
      case RatingIconType.Thumbs:
        return (
          <span className="fr-flex fr-items-center fr-justify-center fr-w-full fr-h-full" style={{ fontSize: `${size * 0.8}px` }}>
            {getThumbEmoji(index)}
          </span>
        );
      case RatingIconType.Hearts:
        return (
          <span className="fr-flex fr-items-center fr-justify-center fr-w-full fr-h-full" style={{ fontSize: `${size * 0.8}px` }}>
            {getHeartEmoji(index)}
          </span>
        );
      default:
        const StarComponent = index + 1 <= rating ? StarIcon : OutlineStarIcon;
        return (
          <StarComponent
            style={{ width: `${size}px`, height: `${size}px` }}
            className={`${
              index + 1 <= rating
                ? "fr-text-yellow-400"
                : darkMode ? "fr-text-gray-700" : "fr-text-gray-200"
            }`}
          />
        );
    }
  };

  return (
    <div className="fr-flex fr-items-center fr-justify-between fr-w-full">
      <div className="fr-flex fr-items-center fr-gap-1">
        {Array.from({ length: totalStars }, (_, index) => (
          <button
            key={index}
            className="fr-cursor-pointer fr-transition-all hover:fr-scale-125 fr-flex fr-items-center fr-justify-center"
            onClick={() => handleRating(index + 1)}
            style={{ height: `${size}px`, width: `${size}px` }}
          >
            {renderIcon(index)}
          </button>
        ))}
      </div>
      {showRating && (
        <p className={`fr-text-sm ${darkMode ? 'fr-text-gray-400' : 'fr-text-gray-500'}`}>
          {rating}/{totalStars}
        </p>
      )}
    </div>
  );
};

export default StarRating;
