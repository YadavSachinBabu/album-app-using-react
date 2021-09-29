import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ImageUploading from "react-images-uploading"
import ShowImages from './ShowImages'

export default function AddImages(props) {
    const [show, setShow] = useState(false)
    const [uploadImage, setUploadImage] = React.useState();
    const maxNumber = 50;

    const onChange = (uploadedImage, addUpdateIndex) => {
        setUploadImage(uploadedImage);
    };

    const handleSubmit = () => {
        props.uploadedImages(uploadImage)
        setShow(false)
        setUploadImage()
    }
    const deleteImage = (index) => {
        // console.log(index)
        // props.album.addedImages.splice(index, 1)
        props.deleteImage(index)
    }

    return (
        <div className="App"    >
            <Button onClick={() => setShow(true)}>ADD IMAGES</Button>
            <ImageUploading
                multiple
                value={uploadImage}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({ onImageUpload }) => (
                    <div>
                        <Modal show={show}>
                            <Modal.Header>Add Album</Modal.Header>
                            <Modal.Body>
                                <Modal.Title>Select You Images</Modal.Title>
                                <Button onClick={onImageUpload}>Upload Image</Button>
                                <br /><br />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button disabled={uploadImage == null} onClick={handleSubmit}>Save</Button>
                                <Button onClick={() => setShow(false)}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )}
            </ImageUploading>
            {props.album.addedImages && <ShowImages deleteImage={deleteImage} album={props.album.addedImages} />}
        </div>
    )
}
