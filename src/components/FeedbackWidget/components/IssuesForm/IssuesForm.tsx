import React, { useState } from "react";
import SubmitButton from "../../../SubmitButton";
import { IUser } from "../../types";
import { ISSUES_API } from "../../../../utils/defaults";

interface ReviewFormProps {
  onSubmit: () => void;
  projectId: string;
  user: IUser | undefined;
  darkMode?: boolean;
}

const IssuesForm = ({ onSubmit, projectId, user, darkMode = false }: ReviewFormProps) => {
  const [review, setReview] = useState("");
  const [severity, setSeverity] = useState("");
  const [loading, setLoading] = useState(false);
  const [useEmail, setUseEmail] = useState(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSeverityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSeverity(e.target.value);
  };

  const enableSubmit = review.length > 0 && severity;

  const handleSubmit = async (email?: string) => {
    setLoading(true);
    const issueData = {
      body: review,
      severity,
      user: user || email ? {
        email: email || user?.email,
        name: user?.name,
      } : undefined,
      page: window.location.href,
      device: navigator.userAgent
    };
    await fetch(`${ISSUES_API}/${projectId}`, {
      method: "POST",
      body: JSON.stringify({ issueData }),
    });
    setLoading(false);
    onSubmit();
  };

  return (
    <div className="fr-flex fr-flex-col fr-items-center fr-gap-1 fr-w-full fr-h-full fr-justify-between">
      <h2 className={`fr-text-md fr-font-bold ${darkMode ? 'fr-text-white' : ''}`}>Report an issue</h2>

      <div className="fr-form-control fr-w-full fr-h-[70px]">
        <textarea
          autoFocus
          className={`fr-inline-flex fr-border fr-border-solid ${darkMode ? 'fr-border-gray-700 fr-bg-gray-800 fr-text-white placeholder:fr-text-gray-400' : 'fr-border-gray-200'} fr-rounded-lg fr-h-[70px] fr-p-2 fr-text-xs fr-w-full`}
          placeholder="Describe the problem you encountered. We'll work on fixing it!"
          value={review}
          onChange={handleReviewChange}
        />
      </div>

      <div className="fr-form-control fr-w-full">
        <select
          className={`fr-inline-flex fr-h-[32px] fr-p-2 fr-text-xs fr-border fr-border-solid ${darkMode ? 'fr-border-gray-700 fr-bg-gray-800 fr-text-white' : 'fr-border-gray-200'} fr-rounded-lg fr-w-full`}
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
        enableEmail={!user}
        useEmail={useEmail}
        onToggleEmail={setUseEmail}
        darkMode={darkMode}
      />
    </div>
  );
};

export default IssuesForm;
