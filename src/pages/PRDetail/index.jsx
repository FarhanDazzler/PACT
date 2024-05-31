import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ProgressBar from "../../organisms/ProgressBar/index";
import FileList from "../../organisms/FileList/index";

const PRDetail = () => {
  const [currentStage, setCurrentStage] = useState("PR Processing");
  const [isAttachmentsOpen, setIsAttachmentsOpen] = useState(true);

  const toggleAttachments = () => {
    setIsAttachmentsOpen(!isAttachmentsOpen);
  };

  return (
    <div className="p-4 flex flex-col mt-10">
      <div>
        <h1 className="text-xl mb-4">Project Status</h1>
        <div className="mb-20">
          <ProgressBar currentStage={currentStage} />
        </div>
      </div>
      <div className="mt-20 space-x-2">
        {[
          "Submitted",
          "Budget Approved",
          "PR Processing",
          "Sourcing",
          "PO Creation",
          "GR Update",
          "Closed",
        ].map((stage) => (
          <button
            key={stage}
            onClick={() => setCurrentStage(stage)}
            className={`px-4 py-2 rounded ${
              currentStage === stage
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {stage}
          </button>
        ))}
      </div>
      <div className="mt-10">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAttachments}
        >
          <h2 className="text-xl">Attachments</h2>
          {isAttachmentsOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <hr className="border-yellow-500 my-4" />
        {isAttachmentsOpen && (
          <div className="mt-4">
            <FileList folderName={"24f16fb9-7c98-492c-b803-5b1f12f01015"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PRDetail;
