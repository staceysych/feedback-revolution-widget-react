import React, { useState } from "react";

import StarRating from "../../../StarRating";

interface ReviewFormProps {
  onSubmit: () => void;
}

const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const enableSubmit = review.length > 0 && rating > 0;

  return (
    <div className="fr-flex fr-flex-col fr-items-center fr-gap-2 fr-w-full">
      <h2 className="fr-text-xl fr-font-bold">Tell us what you think</h2>

      <div className="fr-form-control fr-w-full">
        <textarea
          className="fr-inline-flex fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg fr-h-20 fr-p-2 fr-text-sm fr-w-full"
          placeholder="We’d love to hear your thoughts! Leave us a review."
          value={review}
          onChange={handleReviewChange}
        />
      </div>

      <StarRating setRating={setRating} rating={rating} />
      <button
        className="fr-w-[180px] fr-h-[36px] fr-rounded-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300"
        onClick={enableSubmit ? onSubmit : undefined}
      >
        Submit review
      </button>
    </div>
  );
};

export default ReviewForm;
