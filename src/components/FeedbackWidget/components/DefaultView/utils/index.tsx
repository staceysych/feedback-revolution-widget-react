import {
  ExclamationTriangleIcon,
  LightBulbIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { FeedbackType } from "../../../types";

export const widgetActions = [
  {
    icon: <StarIcon className="fr-size-10 fr-text-yellow-400 fr-border fr-border-yellow-400 fr-rounded-full fr-p-1 fr-bg-white" />,
    type: FeedbackType.Review,
    subtitle: "Share what you think about the project",
  },
  {
    icon: <LightBulbIcon className="fr-size-10 fr-text-yellow-400 fr-border fr-border-yellow-400 fr-rounded-full fr-p-1 fr-bg-white" />,
    type: FeedbackType.Idea,
    subtitle: "Share how we can improve",
  },
  {
    icon: <ExclamationTriangleIcon className="fr-size-10 fr-text-yellow-400 fr-border fr-border-yellow-400 fr-rounded-full fr-p-1 fr-bg-white" />,
    type: FeedbackType.Issue,
    subtitle: "Report a bug or issue",
  },
];
