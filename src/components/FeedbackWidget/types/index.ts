import { ReactElement } from "react";

export interface FeedbackWidgetProps {
  triggerComponent?: ReactElement | undefined;
  open?: boolean;
  closable?: boolean;
}

export enum FeedbackType {
  Review = "Review",
  Idea = "Idea",
  Issue = "Issue",
}
