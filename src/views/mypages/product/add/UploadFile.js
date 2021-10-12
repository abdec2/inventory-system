import { useDropzone } from 'react-dropzone'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

export default function UploadFile({ name, id, setFieldvalue }) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: 'image/*', 
        maxFiles: 1,
        onDrop: acceptedFiles => {   
            acceptedFiles.map(file => {
                setFieldvalue('file', file)
            })
        }
    })

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            <img src={URL.createObjectURL(file)} width="100" height="100" alt="" />
            {file.path} - {(file.size / (1024 * 1024)).toFixed(2)} mb
        </li>
    ))

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
                <CardTitle tag='h4'> Upload Product Image</CardTitle>
            </CardHeader>
            <CardBody>
                <section className="container">
                    <div style={style} {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <p style={{margin: 0}}>Drop files here or <span style={{color: '#7367f0', fontWeight: 'bold', cursor: 'pointer' }}>browse</span></p>
                    </div>
                    <div style={thumbStyle}>
                        {files}
                    </div>
                </section>
            </CardBody>

        </Card>

    )
}
