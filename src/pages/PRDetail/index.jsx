import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ProgressBar from "../../organisms/ProgressBar/index";
import FileList from "../../organisms/FileList/index";
import CardMolecule from "../../molecules/Card";

const PRDetail = () => {
  const [currentStage, setCurrentStage] = useState("PR Processing");
  const [isAttachmentsOpen, setIsAttachmentsOpen] = useState(true);

  const toggleAttachments = () => {
    setIsAttachmentsOpen(!isAttachmentsOpen);
  };

  return (
    <CardMolecule
      cardClass="min-h-full p-14 border rounded-lg"
      header={
        <div className="text-md pb-8 font-avantt">
          <span className="text-black font-semibold">
            PR Request - No.22X244JPC
          </span>
        </div>
      }
      styles={{ fontFamily: "font-avantt" }}
      body={
        <div className="p-4 flex flex-col mt-10">
          <div className="mb-20 ml-28">
            <ProgressBar currentStage={currentStage} />
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
      }
    />
  );
};

export default PRDetail;
