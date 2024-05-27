import React, { useState } from 'react';
import axios from 'axios';
import { FaCloudUploadAlt } from 'react-icons/fa';

const FileUpload = ({text, prRequestNumber}) => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const filesDropped = Array.from(event.dataTransfer.files);
    setFiles(filesDropped);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (files.length === 0) {
      setMessage('Please select at least one file.');
      return;
    }

    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      const response = await axios.post(`http://localhost:3001/${prRequestNumber}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred while uploading the files.');
    }
  };

  return (
    <div className="flex justify-items-center items-center">
      <div className='w-1/2 text-center'>
        <h2>{text}</h2>
      </div>
      <div className="w-1/2 text-center">
        <form onSubmit={handleSubmit} onDrop={handleDrop} encType="multipart/form-data">
          <div className="mb-4 mt-4">
            <label htmlFor="fileInput" className="flex justify-center items-center cursor-pointer">
              <FaCloudUploadAlt className="mr-2" />
              Select or Drop Files:
            </label>
            <input type="file" id="fileInput" multiple onChange={handleFileChange} className="hidden" />
            <div
              className="border-2 border-dashed border-gray-400 p-4 cursor-pointer"
              onClick={() => document.getElementById('fileInput').click()}
              onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
              onDrop={handleDrop}
            >
              Drop files here or click to select
            </div>
          </div>
          {files.length > 0 && (
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Upload
            </button>
          )}
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default FileUpload;
