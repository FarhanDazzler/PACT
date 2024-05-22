import React, { useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { Button } from "@mantine/core";

function Upload() {
  const [files, setFiles] = useState([])
  const [uploadVisibility, setUploadVisiblity] = useState(false)
  const [fileName, setFileName] = useState('')

  function handleFileChange (event) {
    const chosenFiles = event.target.files
    setFiles(chosenFiles)
    setUploadVisiblity(true)
  }

  function handleFileUpload (event) {
    
  }

  return (

    <div class="flex items-center justify-evenly w-5/6">
      <p>Please attach supporting documents required for PR Request</p>
      <label for="dropzone-file" class="mb-10 mt-10 flex flex-col items-center justify-center w-1/2  h-[12vh] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-3">
          <svg class="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload file[s]</span></p>
        </div>
        <input
          onChange={handleFileChange} 
          id="dropzone-file" type="file" hidden/>
      </label>
      <Button onClick={handleFileUpload} variant='default' hidden={!uploadVisibility}>Upload</Button>
    </div>

  )
}

export default Upload
