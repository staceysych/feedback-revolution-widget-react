import React, { useState } from "react";
import SubmitButton from "../../../SubmitButton";

interface ReviewFormProps {
  onSubmit: () => void;
}

const IssuesForm = ({ onSubmit }: ReviewFormProps) => {
  const [review, setReview] = useState("");
  const [category, setCategory] = useState("");

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const enableSubmit = review.length > 0 && category.length > 0;

  return (
    <div className="fr-flex fr-flex-col fr-items-center fr-gap-2 fr-w-full">
      <h2 className="fr-text-xl fr-font-bold">Report an issue</h2>

      <div className="fr-form-control fr-w-full">
        <textarea
          className="fr-inline-flex fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg fr-h-20 fr-p-2 fr-text-sm fr-w-full"
          placeholder="Describe the problem you encountered. We'll work on fixing it!"
          value={review}
          onChange={handleReviewChange}
        />
      </div>

      <div className="fr-form-control fr-w-full">
        <select
          className="fr-inline-flex fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg fr-h-10 fr-p-2 fr-text-sm fr-w-full"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="" disabled>
            Select severity
          </option>
          <option value="critical">Critical</option>
          <option value="medium">Medium</option>
          <option value="low">low</option>
        </select>
      </div>

      <SubmitButton onSubmit={enableSubmit ? onSubmit : undefined} />
    </div>
  );
};

export default IssuesForm;
