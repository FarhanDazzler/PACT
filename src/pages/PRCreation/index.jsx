import React from 'react'
import Upload from '../../organisms/FileUpload/Upload'
import ButtonAtom from '../../atoms/Button'

function PRCreationComponent() {
  return (
    <div>
      {/* Basic Details  */}
      <div className="bg-white">
        <Upload text='Place holder text'/>
      </div>
      {/* Buttons */}
      <div className='flex justify-end'>
        <ButtonAtom variant='default' overrideClass='mt-10 mr-10' label='Cancel'></ButtonAtom>
        <ButtonAtom variant='default' overrideClass='mt-10 mr-10' label='Save as Draft'></ButtonAtom>
        <ButtonAtom variant='default' overrideClass='mt-10 mr-10 text-white bg-black hover:text-white hover:bg-black' label='Submit'></ButtonAtom>
      </div>
    </div>
  )
}

export default PRCreationComponent
