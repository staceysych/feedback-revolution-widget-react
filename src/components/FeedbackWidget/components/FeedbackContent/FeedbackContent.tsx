import { FeedbackType, IUser } from "../../types";
import { RatingIconType } from "../../../../types/common";
import ReviewForm from "../ReviewForm";
import DefaultView from "../DefaultView";
import IdeasForm from "../IdeasForm";
import IssuesForm from "../IssuesForm";

interface FeedbackContentProps {
  feedbackType: FeedbackType | undefined;
  setFeedbackType: (type: FeedbackType) => void;
  onSubmit: () => void;
  projectId: string;
  user: IUser | undefined;
  darkMode?: boolean;
  ratingIconType?: RatingIconType;
}

const FeedbackContent = ({
  feedbackType,
  projectId,
  user,
  setFeedbackType,
  onSubmit,
  darkMode = false,
  ratingIconType
}: FeedbackContentProps) => {
  switch (feedbackType) {
    case FeedbackType.Review:
      return (
        <ReviewForm onSubmit={onSubmit} projectId={projectId} user={user} darkMode={darkMode} ratingIconType={ratingIconType} />
      );
    case FeedbackType.Idea:
      return (
        <IdeasForm onSubmit={onSubmit} projectId={projectId} user={user} darkMode={darkMode} />
      );
    case FeedbackType.Issue:
      return (
        <IssuesForm onSubmit={onSubmit} projectId={projectId} user={user} darkMode={darkMode} />
      );
    default:
      return <DefaultView setFeedbackType={setFeedbackType} darkMode={darkMode} />;
  }
};

export default FeedbackContent;
