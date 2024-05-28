import React, { useState } from 'react';

const FileUpload = ({ customText = '', uploadText = '', addFiles, id }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter(file => /^[a-zA-Z0-9._-]+$/.test(file.name));
    const invalidFiles = selectedFiles.length !== validFiles.length;

    if (invalidFiles) {
      setError('Some files have invalid names. Please remove special characters and try again.');
    } else {
      setError('');
      setFiles(validFiles);
      addFiles(id, validFiles);
    }
  };

  const handleClick = () => {
    document.getElementById(`hiddenFileInput_${id}`).click();
  };

  return (
    <div className="flex w-full mx-auto">
      <div className="w-1/2 text-left p-5"> {/* Adjusted text-left class */}
        <p>{customText}</p>
      </div>
      <div className="w-1/2 text-center p-5">
        <div
          className="cursor-pointer p-5 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-300"
          onClick={handleClick}
          style={{ height: '2.5rem' }} // Adjust height here
        >
          <span className="mr-2">Click to attach {uploadText}</span>
          <span className="text-3xl">☁️</span>
        </div>
        <input
          id={`hiddenFileInput_${id}`}
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <div className="mt-2 text-left"> {/* Adjust margin top here */}
          {files.map((file, index) => (
            <div key={index} className="py-1">
              {file.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
