import { cloneElement, useState } from "react";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FeedbackType, FeedbackWidgetProps } from "./types";

import FeedbackContent from "./components/FeedbackContent";
import SubmitConfirmation from "./components/SubmitConfirmation";

const FeedbackWidget = ({
  triggerComponent,
  open = false,
  closable = true,
}: FeedbackWidgetProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [feedbackType, setFeedbackType] = useState<FeedbackType | undefined>(
    undefined
  );
  const [submitted, setSubmitted] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const triggerElement =
    triggerComponent &&
    cloneElement(triggerComponent || null, {
      onClick: togglePopover,
    });

  const onClose = () => {
    setFeedbackType(undefined);
    setIsOpen(false);
  };

  const onSubmit = () => {
    setSubmitted(true);
    setFeedbackType(undefined);
  };

  return (
    <div style={{ position: triggerComponent ? "relative" : "static" }}>
      {triggerElement && <div>{triggerElement}</div>}
      <div
        style={{
          position: triggerComponent ? "absolute" : "static",
          zIndex: triggerElement ? 999 : 0,
        }}
        className="fr"
      >
        {isOpen && (
          <div className="fr-relative fr-left-0 fr-top-0 fr-p-5 fr-bg-brandWhite fr-shadow-lg fr-rounded-lg fr-w-96 fr-h-64 fr-text-brandDarkBlue fr-mt-4 fr-flex fr-flex-col fr-items-center fr-justify-start">
            {feedbackType && (
              <button
                onClick={() => setFeedbackType(undefined)}
                className="fr-absolute fr-top-2 fr-left-2 hover:fr-text-gray-700 fr-text-brandDarkBlue fr-cursor-pointer"
              >
                <ArrowLeftIcon className="fr-size-6" />
              </button>
            )}
            {closable && (
              <button
                onClick={onClose}
                className="fr-absolute fr-top-2 fr-right-2 hover:fr-text-gray-700 fr-text-brandDarkBlue fr-cursor-pointer"
              >
                <XMarkIcon className="fr-size-6" />
              </button>
            )}
            {submitted ? (
              <SubmitConfirmation
                onSubmitMoreFeedback={() => setSubmitted(false)}
              />
            ) : (
              <FeedbackContent
                feedbackType={feedbackType}
                setFeedbackType={setFeedbackType}
                onSubmit={onSubmit}
              />
            )}
            <p className="fr-text-[8px] fr-absolute fr-bottom-2 fr-left-1/2 fr-transform -fr-translate-x-1/2 fr-text-center fr-text-brandDarkBlue fr-opacity-40 fr-mt-2">
              by Feedback Evolution
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackWidget;
