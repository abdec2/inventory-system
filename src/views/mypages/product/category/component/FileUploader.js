import { useState } from 'react'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import { DragDrop } from '@uppy/react'
import { Card, CardHeader, CardTitle, CardBody, CardText, Button } from 'reactstrap'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'


const FileUploader = ({handleModal}) => {
  const uppy = new Uppy({
    meta: { type: 'avatar' },
    autoProceed: true,
    debug: true,
    restrictions: { maxNumberOfFiles: 1, allowedFileTypes: ['.csv'] }
  })

  uppy
  .use(Tus, {endpoint: '/categories/upload'}).on('complete', (results) => {
      console.log(results)
      handleModal()
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'> Upload CSV File</CardTitle>
      </CardHeader>
      <CardBody>
        <DragDrop uppy={uppy} />
        
      </CardBody>

    </Card>
  )
}

export default FileUploader
