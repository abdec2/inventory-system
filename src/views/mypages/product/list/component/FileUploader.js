
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { useHistory } from 'react-router'

export default function FileUploader({ handleModal }) {
  const history = useHistory()
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: '.csv',
    maxFiles: 1,
    onDrop: acceptedFiles => {
      acceptedFiles.map(file => {
        const formData = new FormData()
        formData.append('file', file)
        axios.post(`${process.env.REACT_APP_API_URL}/products/import`, formData, {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).jwt}`,
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          history.push({
            pathname: '/product/import',
            importResult: res.data
          })
        })

      })
    }
  })

  const style = {
    display: "flex",
    justifyContent: 'space-around',
    padding: '50px',
    border: '2px dashed #7367f0',
    marginBottom: '30px',
    borderRadius: '0.5rem'
  }
  const thumbStyle = {
    listStyle: 'none'

  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'> Upload CSV</CardTitle>
      </CardHeader>
      <CardBody>
        <section className="container">
          <div style={style} {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p style={{ margin: 0, textAlign:'center' }}>Drop files here or <span style={{ color: '#7367f0', fontWeight: 'bold', cursor: 'pointer' }}>browse</span></p>
          </div>
          {/* <div style={thumbStyle}>
                        {files}
                    </div> */}
        </section>
      </CardBody>

    </Card>

  )
}