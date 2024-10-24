import React, { useState } from "react";

import StarRating from "../../../StarRating";
import SubmitButton from "../../../SubmitButton";
import { REVIEWS_API } from "../../../../utils/defaults";
import { IUser } from "../../types";

interface ReviewFormProps {
  onSubmit: () => void;
  projectId: string;
  user: IUser | undefined;
}

const ReviewForm = ({ onSubmit, projectId, user }: ReviewFormProps) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const enableSubmit = review.length > 0 && rating > 0;

  const handleSubmit = async () => {
    setLoading(true);
    const reviewData = {
      body: review,
      rating: rating,
      user,
    };
    const res = await fetch(`${REVIEWS_API}/${projectId}`, {
      method: "POST",
      body: JSON.stringify({ reviewData }),
    });

    console.log({ res });

    if (res.ok) {
      setLoading(false);
      onSubmit();
    }
  };

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
      <SubmitButton
        onSubmit={enableSubmit ? handleSubmit : undefined}
        loading={loading}
      />
    </div>
  );
};

export default ReviewForm;
