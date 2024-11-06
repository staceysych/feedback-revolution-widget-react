import { IdeaData } from "./types";
import { PlusIcon } from "@heroicons/react/24/solid";
import ProgressTracker from "../ProgressTracker";

interface ProgressCardProps {
  data: IdeaData;
}

const ProgressCard = ({ data }: ProgressCardProps) => {
  const { body, votes, progress } = data;

  return (
    <div className="fr fr-flex fr-w-full fr-justify-center">
      <div
        className={`fr-flex fr-bg-brandWhite fr-shadow-lg fr-rounded-lg fr-p-4 fr-min-w-[300px] fr-w-full fr-gap-4`}
        style={{ maxWidth: `700px` }}
      >
        <button className="!fr-btn fr-flex fr-flex-col !fr-px-2 !fr-bg-green-600 !fr-bg-opacity-20 !fr-text-brandDarkBlue hover:!fr-bg-green-700 hover:!fr-text-white">
          <PlusIcon className="fr-size-4" />
          {votes}
        </button>
        <div
          className={`fr-text-sm fr-text-left fr-text-brandDarkBlue fr-overflow-hidden`}
        >
          {body}
        </div>
        <div className="fr-flex fr-m-auto">
          <ProgressTracker progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
