import { useState } from "react";
import StarRating from "../StarRating/StarRating";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { ReviewData } from "./types";

interface ReviewCardProps {
  data: ReviewData;
}

const ReviewCard = ({ data }: ReviewCardProps) => {
  const { body, rating, createdAt, user } = data;
  const [isExpanded, setIsExpanded] = useState(false);

  const creationDate = new Date(createdAt).toUTCString();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const textFits = body.length < 70;

  return (
    <div className="fr">
      <div className="fr-flex fr-flex-col fr-bg-brandWhite fr-shadow-lg fr-rounded-lg fr-p-4 fr-mb-4 fr-w-[500px] fr-gap-4">
        <div className="fr-flex fr-justify-between fr-items-center">
          <SparklesIcon className="fr-text-brandDarkBlue fr-size-6" />
          <div className="fr-flex fr-items-center fr-gap-3">
            <p className="fr-flex fr-text-xs fr-text-gray-400 fr-w-full"></p>
            <StarRating rating={rating} showRating={false} size={6} />
          </div>
        </div>
        <div className="fr-flex fr-flex-col">
          <div
            className={`fr-text-sm
            fr-transition-all fr-duration-300  fr-text-brandDarkBlue fr-overflow-hidden  ${
              isExpanded
                ? "fr-max-h-20 fr-font-bold"
                : textFits
                ? "fr-max-h-full"
                : "fr-max-h-6"
            }`}
          >
            {body}
          </div>
          {!textFits && (
            <button
              className="fr-text-xs fr-text-brandLightBlue fr-ml-auto fr-cursor-pointer hover:fr-text-opacity-80"
              onClick={toggleExpand}
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
        <div className="fr-flex fr-justify-between">
          <p className="fr-text-xs fr-text-brandDarkBlue fr-font-bold">
            {user?.name ? user.name : "Visitor"}
          </p>
          <p className="fr-text-xs fr-text-gray-400">{creationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
