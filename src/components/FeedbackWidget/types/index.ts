import { ReactElement } from "react";
import { RatingIconType } from "../../../types/common";


export interface IUser {
  name?: string;
  email?: string;
}

export interface FeedbackWidgetProps {
  triggerComponent?: ReactElement | undefined;
  open?: boolean;
  closable?: boolean;
  projectId: string;
  user?: IUser;
  darkMode?: boolean;
  ratingIconType?: RatingIconType;
}

export enum FeedbackType {
  Review = "Review",
  Idea = "Idea",
  Issue = "Issue",
}

