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
    style: {
      position: "relative",
    },
  });

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>{triggerElement}</div>
      <div style={{ position: "absolute" }} className="fr">
        {isOpen && (
          <div className="fr-absolute fr-z-50 fr-left-0 fr-top-0 fr-p-5 fr-bg-white fr-shadow-lg fr-rounded-lg fr-w-96 fr-h-64 fr-text-brandDarkBlue fr-mt-4 fr-flex fr-flex-col fr-items-center fr-justify-start">
            <button
              onClick={onClose}
              className="fr-absolute fr-top-2 fr-right-2 hover:fr-text-gray-700 fr-text-brandDarkBlue fr-cursor-pointer"
            >
              <XMarkIcon className="fr-size-6" />
            </button>
            <div className="fr-text-center mb-4">
              <p className="fr-text-xl fr-font-bold fr-text-brandDarkBlue">
                What's on your mind?
              </p>
            </div>
            <div className="fr-flex fr-justify-between fr-gap-6 fr-mt-5 fr-w-full">
              {widgetActions.map(({ label, subtitle: sub, icon }, index) => (
                <button
                  key={index}
                  className="fr-flex fr-flex-col fr-items-center fr-justify-center fr-h-28 fr-w-full fr-rounded-lg fr-border fr-border-gray-200 hover:fr-bg-brandLightHover fr-transition fr-bg-brandLight fr-text-brandDarkBlue fr-cursor-pointer"
                  onMouseEnter={() => setSubtitle(sub)}
                  onMouseLeave={() => setSubtitle("")}
                >
                  {icon}
                  <span className="fr-text-lg fr-font-medium">{label}</span>
                </button>
              ))}
            </div>
            <p className="fr-text-sm fr-text-center fr-mt-4 fr-text-brandDarkBlue">
              {subtitle}
            </p>
            <p className="fr-text-xs fr-absolute fr-bottom-2 fr-left-1/2 fr-transform -fr-translate-x-1/2 fr-text-center fr-text-brandDarkBlue fr-opacity-40 fr-mt-2">
              by Feedback Revolution
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FeedbackWidget;
