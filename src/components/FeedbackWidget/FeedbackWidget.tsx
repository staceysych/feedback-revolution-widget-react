import { cloneElement, useState, useEffect, useRef } from "react";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FeedbackType, FeedbackWidgetProps,  } from "./types";
import { RatingIconType } from "../../types/common";

import FeedbackContent from "./components/FeedbackContent";
import SubmitConfirmation from "./components/SubmitConfirmation";

const FeedbackWidget = ({
  triggerComponent,
  open = false,
  closable = true,
  projectId,
  user,
  darkMode = false,
  ratingIconType,
}: FeedbackWidgetProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [feedbackType, setFeedbackType] = useState<FeedbackType | undefined>(
    undefined
  );
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState<{ 
    left?: string;
    right?: string;
    top?: string;
  }>({});
  const triggerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && triggerComponent && triggerRef.current && widgetRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const widgetWidth = widgetRef.current.offsetWidth;
      const widgetHeight = widgetRef.current.offsetHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;


      const L = triggerRect.left + (triggerRect.width / 2);
      const R = windowWidth - triggerRect.right + (triggerRect.width / 2);
      const B = windowHeight - triggerRect.bottom;

      let horizontalPosition: { left?: string; right?: string } = {};
      let verticalPosition = '';

      if (L >= widgetWidth / 2 && R >= widgetWidth / 2) {
        // Center align relative to trigger
        horizontalPosition = { left: '50%', right: 'auto' };
      } else if (R < widgetWidth / 2) {
        // Align to right
        horizontalPosition = { right: `-${windowWidth - triggerRect.right}px`, left: 'auto' };
      } else {
        // Align to left
        horizontalPosition = { left: `-${triggerRect.left}px`, right: 'auto' };
      }

      // Determine vertical position
      verticalPosition = B >= widgetHeight ? '100%' : `-${widgetHeight}px`;

      setPosition({
        ...horizontalPosition,
        top: verticalPosition
      });
    }
  }, [isOpen, triggerComponent]);

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
    <div style={{ position: triggerComponent ? "relative" : "static", width: triggerComponent ? 'fit-content' : "100%" }}>
      {triggerElement && <div ref={triggerRef}>{triggerElement}</div>}
      <div
        ref={widgetRef}
        style={{
          position: triggerComponent ? "absolute" : "static",
          zIndex: triggerElement ? 999 : 0,
          minWidth: "320px",
          maxWidth: "320px",
          margin: "0 auto",
          ...position,
          transform: position.left === '50%' ? 'translateX(-50%)' : 'none',
        }}
        className="fr"
      >
        {isOpen && (
          <div
            className={`fr-relative fr-p-2 fr-h-[200px] ${darkMode ? 'fr-bg-gray-900 fr-text-white' : 'fr-bg-brandWhite fr-text-brandDarkBlue'} fr-shadow-[0_0_10px_rgba(0,0,0,0.1)] fr-rounded-[20px] fr-w-[320px] fr-mt-2 fr-flex fr-flex-col fr-items-center fr-justify-start`}
          >
            {feedbackType && (
              <button
                onClick={() => setFeedbackType(undefined)}
                className={`fr-absolute fr-top-2 fr-left-2 ${darkMode ? 'hover:fr-text-gray-300 fr-text-white' : 'hover:fr-text-gray-700 fr-text-brandDarkBlue'} fr-cursor-pointer`}
              >
                <ArrowLeftIcon className="fr-size-6" />
              </button>
            )}
            {closable && (
              <button
                onClick={onClose}
                className={`fr-absolute fr-top-2 fr-right-2 ${darkMode ? 'hover:fr-text-gray-300 fr-text-white' : 'hover:fr-text-gray-700 fr-text-brandDarkBlue'} fr-cursor-pointer`}
              >
                <XMarkIcon className="fr-size-6" />
              </button>
            )}
            {submitted ? (
              <SubmitConfirmation
                onSubmitMoreFeedback={() => setSubmitted(false)}
                darkMode={darkMode}
              />
            ) : (
              <FeedbackContent
                feedbackType={feedbackType}
                setFeedbackType={setFeedbackType}
                onSubmit={onSubmit}
                projectId={projectId}
                user={user}
                darkMode={darkMode}
                ratingIconType={ratingIconType}
              />
            )}
            {!feedbackType && <p className={`fr-text-[8px] fr-absolute fr-bottom-1 fr-left-1/2 fr-transform -fr-translate-x-1/2 fr-text-center ${darkMode ? 'fr-text-gray-400' : 'fr-text-brandDarkBlue'} fr-opacity-40 fr-mt-2`}>
              by Feedback Evolution
            </p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackWidget;
