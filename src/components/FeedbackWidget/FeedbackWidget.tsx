import { cloneElement, ReactElement, useState } from "react";
import {
  XMarkIcon,
  StarIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

interface FeedbackWidgetProps {
  triggerComponent: ReactElement;
}

const widgetActions = [
  {
    icon: <StarIcon className="fr-size-10 fr-text-yellow-400" />,
    label: "Review",
    subtitle: "Share what you think about the project",
  },
  {
    icon: <LightBulbIcon className="fr-size-10 fr-text-yellow-400" />,
    label: "Idea",
    subtitle: "Share how we can improve",
  },
  {
    icon: <ExclamationTriangleIcon className="fr-size-10 fr-text-yellow-400" />,
    label: "Issue",
    subtitle: "Report a bug or issue",
  },
];

const FeedbackWidget = ({ triggerComponent }: FeedbackWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subtitle, setSubtitle] = useState("");

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const triggerElement = cloneElement(triggerComponent, {
    onClick: togglePopover,
  });

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="fr-relative">{triggerElement}</div>
      <div className="fr">
        {isOpen && (
          <div className="fr-absolute fr-z-50 fr-p-5 fr-bg-white fr-shadow-lg fr-rounded-lg fr-w-96 fr-h-64 ft-text-black fr-mt-4">
            <button
              onClick={onClose}
              className="fr-absolute fr-top-2 fr-right-2 fr-text-black hover:fr-text-gray-700"
            >
              <XMarkIcon className="fr-size-6" />
            </button>
            <div className="fr-text-center mb-4">
              <p className="fr-text-xl fr-font-bold fr-text-black">
                What's on your mind?
              </p>
            </div>
            <div className="fr-flex fr-justify-between fr-gap-6 fr-mt-5">
              {widgetActions.map(({ label, subtitle: sub, icon }, index) => (
                <button
                  key={index}
                  className="fr-flex fr-flex-col fr-items-center fr-justify-center fr-h-28 fr-w-full fr-rounded-lg fr-border fr-border-gray-200 hover:fr-bg-gray-100 fr-transition fr-text-black"
                  onMouseEnter={() => setSubtitle(sub)}
                  onMouseLeave={() => setSubtitle("")}
                >
                  {icon}
                  <span className="fr-text-lg fr-font-medium">{label}</span>
                </button>
              ))}
            </div>
            <p className="fr-text-sm fr-text-center fr-mt-4 fr-text-black">
              {subtitle}
            </p>
            <p className="fr-text-xs fr-absolute fr-bottom-2 fr-left-1/2 fr-transform -fr-translate-x-1/2 fr-text-center fr-text-gray-500 fr-mt-2">
              by Feedback Revolution
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FeedbackWidget;
