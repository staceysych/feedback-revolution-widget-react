import React, { useState } from "react";

import StarRating, {  } from "../../../StarRating/StarRating";
import SubmitButton from "../../../SubmitButton";
import { REVIEWS_API } from "../../../../utils/defaults";
import { IUser } from "../../types";
import { RatingIconType } from "../../../../types/common";
interface ReviewFormProps {
  onSubmit: () => void;
  projectId: string;
  user: IUser | undefined;
  darkMode?: boolean;
  ratingIconType?: RatingIconType;
}

const ReviewForm = ({ onSubmit, projectId, user, darkMode = false, ratingIconType }: ReviewFormProps) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [useEmail, setUseEmail] = useState(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const enableSubmit = review.length > 0 && rating > 0;

  const handleSubmit = async (email?: string) => {
    setLoading(true);
    const reviewData = {
      body: review,
      rating: rating,
      user: user || email ? {
        email: email || user?.email,
        name: user?.name,
      } : undefined,
    };
    const res = await fetch(`${REVIEWS_API}/${projectId}`, {
      method: "POST",
      body: JSON.stringify({ reviewData }),
    });

    if (res.ok) {
      setLoading(false);
      onSubmit();
    }
  };

  return (
    <div className="fr-flex fr-flex-col fr-items-center fr-gap-2 fr-w-full fr-h-full">
      <h2 className={`fr-text-md fr-font-bold ${darkMode ? 'fr-text-white' : ''}`}>Tell us what you think</h2>

      <div className="fr-form-control fr-w-full">
        <textarea
          autoFocus
          className={`fr-inline-flex fr-border fr-border-solid ${darkMode ? 'fr-border-gray-700 fr-bg-gray-800 fr-text-white placeholder:fr-text-gray-400' : 'fr-border-gray-200'} fr-rounded-lg fr-h-[70px] fr-p-2 fr-text-xs fr-w-full`}
          placeholder="We'd love to hear your thoughts! Leave us a review."
          value={review}
          onChange={handleReviewChange}
        />
      </div>

      <StarRating setRating={setRating} rating={rating} darkMode={darkMode} iconType={ratingIconType}/>
      <SubmitButton
        onSubmit={enableSubmit ? handleSubmit : undefined}
        loading={loading}
        enableEmail={!user}
        useEmail={useEmail}
        onToggleEmail={setUseEmail}
        darkMode={darkMode}
      />
    </div>
  );
};

export default ReviewForm;
