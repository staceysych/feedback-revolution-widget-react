import StarRating from "../StarRating/StarRating";
import { ChatBubbleLeftEllipsisIcon as Icon } from "@heroicons/react/24/outline";
import { ReviewData } from "./types";

interface ReviewCardProps {
  data: ReviewData;
}

const ReviewCard = ({ data }: ReviewCardProps) => {
  const { body, rating, createdAt, user } = data;

  const userLocale = navigator.language || navigator.languages[0];

  const creationDate = new Date(createdAt).toLocaleDateString(userLocale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="fr fr-flex fr-w-full fr-justify-center">
      <div className="fr-flex fr-flex-col fr-bg-brandWhite fr-shadow-lg fr-rounded-lg fr-p-4 fr-min-w-[300px] fr-max-w-[500px] fr-w-full fr-gap-4">
        <div className="fr-flex fr-justify-between fr-items-center">
          <Icon className="fr-text-brandDarkBlue fr-size-6" />
          <div className="fr-flex fr-items-center fr-gap-3">
            <p className="fr-flex fr-text-xs fr-text-gray-400 fr-w-full"></p>
            <StarRating rating={rating} showRating={false} size={6} />
          </div>
        </div>
        <div className="fr-flex fr-flex-col">
          <div
            className={`fr-text-sm fr-text-brandDarkBlue fr-overflow-hidden fr-font-bold`}
          >
            {body}
          </div>
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
