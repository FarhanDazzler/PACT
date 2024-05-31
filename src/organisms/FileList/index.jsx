import React, { useEffect, useState } from "react";
import { getApi } from "../../particles/api";
import {
  FaFileWord,
  FaFilePdf,
  FaFileExcel,
  FaFileAlt,
  FaFileImage,
  FaAngleDown,
  FaAngleUp,
  FaDownload,
} from "react-icons/fa";
import { saveAs } from "file-saver";

const getIcon = (fileType) => {
  const lowerCaseFileType = fileType.toLowerCase();
  switch (lowerCaseFileType) {
    case "doc":
    case "docx":
      return <FaFileWord className="text-blue-600" />;
    case "pdf":
      return <FaFilePdf className="text-red-600" />;
    case "xls":
    case "xlsx":
      return <FaFileExcel className="text-green-600" />;
    case "txt":
      return <FaFileAlt className="text-gray-600" />;
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return <FaFileImage className="text-yellow-600" />;
    default:
      return <FaFileAlt className="text-gray-600" />;
  }
};

const FileList = ({ folderName }) => {
  const [files, setFiles] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function getAllFiles() {
      try {
        const response = await getApi({
          routes: `generate_links/${folderName}`,
        });
        setFiles(response);
      } catch (error) {
        console.error("There was an error fetching the file links!", error);
      }
    }
    getAllFiles();
  }, [folderName]);

  const visibleFiles = showAll ? files : files.slice(0, 2);

  const downloadAllFiles = () => {
    files.forEach((file) => {
      saveAs(file.link, file.name);
    });
  };

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-4">
            Attached documents for PR Request
          </h1>
        </div>
        <div>
          <div className="flex flex-col">
            {visibleFiles.map((file, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-md shadow-md mb-2 overflow-hidden"
                style={{ maxWidth: "calc(100% - 2rem)" }}
              >
                <div className="flex items-center p-4">
                  <div className="mr-4 text-2xl">{getIcon(file.type)}</div>
                  <a
                    href={file.link}
                    download
                    className="text-lg font-semibold text-gray-800 hover:underline truncate max-w-full"
                  >
                    {file.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
          {files.length > 2 && (
            <div className="mt-4 flex justify-end items-center">
              <button
                className="flex items-center text-gray-600 hover:text-gray-800 mr-4"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <>
                    Hide {files.length - 2} others
                    <FaAngleUp className="ml-2" />
                  </>
                ) : (
                  <>
                    Show {files.length - 2} others
                    <FaAngleDown className="ml-2" />
                  </>
                )}
              </button>
              <button
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md hover:bg-gray-300 flex items-center text-sm"
                onClick={downloadAllFiles}
              >
                <FaDownload className="text-gray-800 text-lg" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileList;
