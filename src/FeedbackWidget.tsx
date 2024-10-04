import React, { useState } from "react";

type FeedbackWidgetProps = {
  onSubmit: (feedback: string) => void;
};

const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback) {
      onSubmit(feedback);
      setFeedback("");
    }
  };

  return (
    <div>
      <h3>Leave your feedback</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackWidget;
