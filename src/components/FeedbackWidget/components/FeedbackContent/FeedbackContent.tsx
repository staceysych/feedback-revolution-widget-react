import { FeedbackType } from "../../types";

import ReviewForm from "../ReviewForm";
import DefaultView from "../DefaultView";
import IdeasForm from "../IdeasForm";
import IssuesForm from "../IssuesForm";

interface FeedbackContentProps {
  feedbackType: FeedbackType | undefined;
  setFeedbackType: (type: FeedbackType) => void;
  onSubmit: () => void;
}

const FeedbackContent = ({
  feedbackType,
  setFeedbackType,
  onSubmit,
}: FeedbackContentProps) => {
  switch (feedbackType) {
    case FeedbackType.Review:
      return <ReviewForm onSubmit={onSubmit} />;
    case FeedbackType.Idea:
      return <IdeasForm onSubmit={onSubmit} />;
    case FeedbackType.Issue:
      return <IssuesForm onSubmit={onSubmit} />;
    default:
      return <DefaultView setFeedbackType={setFeedbackType} />;
  }
};

export default FeedbackContent;
