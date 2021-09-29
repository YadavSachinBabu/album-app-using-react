import React, { useState } from 'react';
import { Modal, Button, Form, Image, Card } from 'react-bootstrap';
import ImageUploading from 'react-images-uploading';
import { Link } from 'react-router-dom';



export default function Sasaa(props) {
    const album = props.album
    const [show, setShow] = useState(false)
    const [coverImage, setCoverImage] = React.useState();
    const [albumName, setAlbumName] = useState()

    const maxNumber = 100;


    // console.log(typeof([1,2,3,4]+[4,5,6,7]))
    const onChange = (imageList) => {
        setCoverImage(imageList);
    };

    const handleSubmit = () => {
        props.handleAlbum(coverImage, albumName)
        setCoverImage()
        setAlbumName("")
        setShow(false)
    }

    return (
        <div className="App"    >
            <Button onClick={() => setShow(true)}>ADD NEW ALBUM</Button>
            <ImageUploading
                single
                value={coverImage}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({ onImageUpload }) => (
                    <div>
                        <Modal show={show}>
                            <Modal.Header>Add Album</Modal.Header>
                            <Modal.Body>
                                <Modal.Title>Upload Your Cover Image:</Modal.Title>
                                <Button onClick={onImageUpload}>Cover Image</Button>
                                <br /><br />
                                <Form.Control type="text" placeholder="Album_Name" onChange={(e) => { setAlbumName(e.target.value) }} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button disabled={!albumName || coverImage == null} onClick={handleSubmit}>Save</Button>
                                <Button onClick={() => setShow(false)}>Close</Button>
                            </Modal.Footer>
                        </Modal>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gridGap: "13px" }}>
                            {
                                album.map((data, index) => {
                                    // console.log(data.coverImage[0].data_url)
                                    return (
                                        <Link key={index} to={`/${data.albumName}`} onClick={() => props.indexTaker(index)} style={{ color: "Black", textDecoration: "None" }}>
                                            <Card>
                                                <Card.Title>ALBUM</Card.Title>
                                                <Image src={`${data.coverImage[0].data_url}`} alt="" height="300px" width="350px" />
                                                <Card.Title>{data.albumName}</Card.Title>
                                            </Card>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}


