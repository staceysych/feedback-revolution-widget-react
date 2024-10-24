import React from "react";

interface SubmitButtonProps {
  onSubmit?: () => void;
  loading: boolean;
}

const SubmitButton = ({ onSubmit, loading }: SubmitButtonProps) => {
  return (
    <button
      className="fr-w-[180px] fr-h-[36px] fr-rounded-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300"
      onClick={onSubmit}
      disabled={loading}
    >
      {loading ? "Submitting..." : "Submit review"}
    </button>
  );
};

export default SubmitButton;
