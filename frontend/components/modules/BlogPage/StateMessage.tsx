import React from "react";
import {
  AiOutlineLoading3Quarters,
  AiOutlineWarning,
  AiOutlineQuestion,
} from "react-icons/ai";

interface StateMessageProps {
  isLoading: boolean;
  error: string;
  showEmpty: boolean;
}

const StateMessage: React.FC<StateMessageProps> = ({
  isLoading,
  error,
  showEmpty,
}) => {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      {isLoading && (
        <AiOutlineLoading3Quarters className="w-12 h-12 stroke-2 animate-spin text-white" />
      )}
      {error && (
        <>
          <AiOutlineWarning className="w-12 h-12 stroke-2 text-white" />
          <span className="text-white">{error}</span>
        </>
      )}
      {showEmpty && (
        <>
          <AiOutlineQuestion className="w-12 h-12 stroke-2 text-white" />
          <span className="text-white">There&apos;s nothing here!</span>
        </>
      )}
    </div>
  );
};

export default StateMessage;
