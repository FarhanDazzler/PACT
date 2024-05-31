import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClock } from "@fortawesome/free-solid-svg-icons";

const stages = [
  "Submitted",
  "Budget Approved",
  "PR Processing",
  "Sourcing",
  "PO Creation",
  "GR Update",
  "Closed",
];

const ProgressBar = ({ currentStage }) => {
  const currentStageIndex = stages.indexOf(currentStage);

  return (
    <div className="flex items-center w-full">
      {stages.map((stage, index) => (
        <div key={index} className="flex flex-col items-center w-full relative">
          <div className="flex items-center w-full">
            <div className="relative flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full z-10 ${
                  index < currentStageIndex || currentStage === "Closed"
                    ? "bg-green-500 text-white"
                    : index === currentStageIndex
                    ? "bg-amber-500 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
                style={{
                  boxShadow: `0 0 15px ${
                    index < currentStageIndex || currentStage === "Closed"
                      ? "rgba(34,197,94,0.8)" // thicker and more intense light green shadow
                      : index === currentStageIndex
                      ? "rgba(245,158,11,0.8)" // thicker and more intense light amber shadow
                      : "rgba(209,213,219,0.8)" // thicker and more intense light gray shadow
                  }`,
                  borderRadius: "50%", // Make the border circular
                }}
              >
                {index < currentStageIndex || currentStage === "Closed" ? (
                  <FontAwesomeIcon icon={faCheck} size="xs" />
                ) : index === currentStageIndex ? (
                  <FontAwesomeIcon icon={faClock} size="xs" />
                ) : null}
              </div>
              <div className="absolute top-8 text-sm text-center w-32">
                {stage}
                {index < currentStageIndex || currentStage === "Closed" ? (
                  <div className="text-xs mt-1">
                    {new Date().toLocaleDateString()}
                  </div>
                ) : index === currentStageIndex ? (
                  <div className="text-xs mt-1 rounded border bg-white p-1">
                    Approval Pending{" "}
                    <span className="underline">
                      vamseekrishna.chinnam-ext@ab-inbev.com
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
            {index < stages.length - 1 && (
              <div
                className={`flex-grow h-1 ${
                  index < currentStageIndex - 1 ||
                  (currentStage === "Closed" && index < stages.length - 1)
                    ? "bg-green-500"
                    : index === currentStageIndex - 1
                    ? "bg-amber-500"
                    : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
