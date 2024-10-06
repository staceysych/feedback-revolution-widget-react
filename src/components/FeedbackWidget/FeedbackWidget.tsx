import { cloneElement, ReactElement, useState } from "react";

/* import { ReactComponent as ReviewIcon } from "./assets/review.svg";
import { ReactComponent as IdeaIcon } from "./assets/idea.svg";
import { ReactComponent as IssueIcon } from "./assets/issue.svg"; */

interface FeedbackWidgetProps {
  triggerComponent: ReactElement;
}

const widgetActions = [
  {
    // icon: <ReviewIcon height={44} width={44} />,
    label: "Review",
    subtitle: "Share what you think about the project",
  },
  {
    // icon: <IdeaIcon height={50} width={50} />,
    label: "Idea",
    subtitle: "Share how we can improve",
  },
  {
    // icon: <IssueIcon height={48} width={48} />,
    label: "Issue",
    subtitle: "Report a bug or issue",
  },
];

const FeedbackWidget = ({ triggerComponent }: FeedbackWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const triggerElement = cloneElement(triggerComponent, {
    onClick: togglePopover,
  });

  return (
    <>
      {triggerElement}
      <div className="fr">
        {isOpen && (
          <div className="fr-card fr-bg-white fr-bg-base-100 fr-w-96 fr-shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="fr-card-body">
              <h2 className="fr-card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="fr-card-actions fr-justify-end">
                <button className="fr-btn fr-btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FeedbackWidget;
