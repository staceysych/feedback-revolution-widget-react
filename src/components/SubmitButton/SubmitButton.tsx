import { useState } from "react";
import { EnvelopeIcon, ChevronDownIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface SubmitButtonProps {
  onSubmit?: (email?: string) => void;
  loading: boolean;
  useEmail: boolean;
  onToggleEmail: (checked: boolean) => void;
  enableEmail: boolean;
  darkMode?: boolean;
}

const SubmitButton = ({ onSubmit, loading, useEmail, onToggleEmail, enableEmail, darkMode = false }: SubmitButtonProps) => {
  const [email, setEmail] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClickOutside = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="fr-flex fr-flex-col fr-w-full fr-gap-2">
      {useEmail ? (
        <div className="fr-relative fr-flex fr-items-center fr-w-full fr-gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className={`fr-flex-1 fr-min-w-0 fr-h-[32px] fr-p-2 fr-text-xs fr-border fr-border-solid ${darkMode ? 'fr-border-gray-700 fr-bg-gray-800 fr-text-white placeholder:fr-text-gray-400' : 'fr-border-gray-200'} fr-rounded-lg`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="fr-flex fr-items-stretch fr-shrink-0">
            <button
              className="fr-h-[32px] fr-rounded-l-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300 fr-text-sm fr-px-4 fr-gap-2 fr-whitespace-nowrap"
              onClick={() => onSubmit?.(email)}
              disabled={loading || !email}
            >
              {loading ? "..." : "Submit"}
            </button>
            <button
              className="fr-h-[32px] fr-rounded-r-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300 fr-border-l fr-border-white/20 fr-px-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <ChevronDownIcon className="fr-size-4" />
            </button>
          </div>
          
          {isDropdownOpen && (
            <>
              <div 
                className="fr-fixed fr-inset-0" 
                onClick={handleClickOutside}
              />
              <div className={`fr-absolute fr-top-full fr-right-0 fr-mt-1 ${darkMode ? 'fr-bg-gray-900' : 'fr-bg-white'} fr-rounded-lg fr-shadow-lg fr-border ${darkMode ? 'fr-border-gray-700' : 'fr-border-gray-200'} fr-py-1 fr-z-10`}>
                <button
                  className={`fr-flex fr-items-center fr-gap-2 fr-px-4 fr-py-2 fr-text-sm ${darkMode ? 'fr-text-white hover:fr-bg-gray-800' : 'fr-text-gray-700 hover:fr-bg-gray-100'} fr-w-full fr-whitespace-nowrap`}
                  onClick={() => {
                    onToggleEmail(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  <PaperAirplaneIcon className="fr-size-4" />
                  Submit without email
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="fr-relative fr-flex fr-items-center fr-justify-center">
          <div className="fr-flex fr-items-stretch fr-w-full">
            <button
              className="fr-h-[32px] fr-pl-[50px] fr-w-full fr-rounded-l-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300 fr-text-sm sm:fr-text-base fr-px-4 fr-gap-2"
              onClick={() => onSubmit?.()}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {enableEmail && (
              <button
                className="fr-h-[32px] fr-rounded-r-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300 fr-border-l fr-border-white/20 fr-px-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <ChevronDownIcon className="fr-size-4" />
              </button>
            )}
          </div>
          
          {isDropdownOpen && enableEmail && (
            <>
              <div 
                className="fr-fixed fr-inset-0" 
                onClick={handleClickOutside}
              />
              <div className={`fr-absolute fr-top-full fr-right-0 fr-mt-1 ${darkMode ? 'fr-bg-gray-900' : 'fr-bg-white'} fr-rounded-lg fr-shadow-lg fr-border ${darkMode ? 'fr-border-gray-700' : 'fr-border-gray-200'} fr-py-1 fr-z-10`}>
                <button
                  className={`fr-flex fr-items-center fr-gap-2 fr-px-4 fr-py-2 fr-text-sm ${darkMode ? 'fr-text-white hover:fr-bg-gray-800' : 'fr-text-gray-700 hover:fr-bg-gray-100'} fr-w-full fr-whitespace-nowrap`}
                  onClick={() => {
                    onToggleEmail(true);
                    setIsDropdownOpen(false);
                  }}
                >
                  <EnvelopeIcon className="fr-size-4" />
                  Submit using email
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SubmitButton;
