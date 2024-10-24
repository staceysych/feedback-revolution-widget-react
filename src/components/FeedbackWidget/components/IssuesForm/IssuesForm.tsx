import React, { useState } from "react";
import SubmitButton from "../../../SubmitButton";
import { IUser } from "../../types";
import { ISSUES_API } from "../../../../utils/defaults";

interface ReviewFormProps {
  onSubmit: () => void;
  projectId: string;
  user: IUser | undefined;
}

const IssuesForm = ({ onSubmit, projectId, user }: ReviewFormProps) => {
  const [review, setReview] = useState("");
  const [severity, setSeverity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSeverityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSeverity(e.target.value);
  };

  const enableSubmit = review.length > 0 && severity;

  const handleSubmit = async () => {
    setLoading(true);
    const issueData = {
      body: review,
      severity,
      user,
    };
    await fetch(`${ISSUES_API}/${projectId}`, {
      method: "POST",
      body: JSON.stringify({ issueData }),
    });
    setLoading(false);
    onSubmit();
  };

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
          value={severity}
          onChange={handleSeverityChange}
        >
          <option value="" disabled>
            Select severity
          </option>
          <option value="Critical">Critical</option>
          <option value="Medium">Medium</option>
          <option value="Low">low</option>
        </select>
      </div>

      <SubmitButton
        onSubmit={enableSubmit ? handleSubmit : undefined}
        loading={loading}
      />
    </div>
  );
};

export default IssuesForm;
