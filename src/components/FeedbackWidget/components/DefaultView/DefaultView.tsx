import { FeedbackType } from "../../types";
import { useState } from "react";
import { widgetActions } from "./utils";

interface DefaultViewProps {
  setFeedbackType: (type: FeedbackType) => void;
  darkMode?: boolean;
}

const DefaultView = ({ setFeedbackType, darkMode = false }: DefaultViewProps) => {
  const [subtitle, setSubtitle] = useState("");

  return (
    <>
      <div className="fr-text-center mb-4">
        <p className={`fr-text-lg fr-font-bold ${darkMode ? 'fr-text-white' : 'fr-text-brandDarkBlue'}`}>
          What's on your mind?
        </p>
      </div>
      <div className="fr-flex fr-justify-between fr-gap-2 fr-mt-3 fr-w-full">
        {widgetActions.map(({ type, subtitle: sub, icon }, index) => (
          <button
            key={index}
            className={`fr-flex fr-flex-col fr-items-center fr-justify-center fr-h-[100px] fr-w-full fr-rounded-lg fr-border ${darkMode ? 'fr-border-gray-700 hover:fr-bg-gray-700 fr-bg-gray-800 fr-text-white' : 'fr-border-gray-200 hover:fr-bg-brandLightHover fr-bg-brandLight fr-text-brandDarkBlue'} fr-transition fr-cursor-pointer fr-gap-1`}
            onMouseEnter={() => setSubtitle(sub)}
            onMouseLeave={() => setSubtitle("")}
            onClick={() => setFeedbackType(type)}
          >
            {icon}
            <span className="fr-text-sm fr-font-medium">{type}</span>
          </button>
        ))}
      </div>
      <p className={`fr-text-xs fr-text-center fr-mt-2 ${darkMode ? 'fr-text-gray-300' : 'fr-text-brandDarkBlue'}`}>
        {subtitle || "Select an option to provide feedback"}
      </p>
    </>
  );
};

export default DefaultView;
