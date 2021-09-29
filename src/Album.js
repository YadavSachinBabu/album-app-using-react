import React, { useState } from 'react';
import { Modal, Button, Form, Image, Card } from 'react-bootstrap';
import ImageUploading from 'react-images-uploading';


export default function Album() {
    const [show, setShow] = useState(false)
    const [coverImage, setCoverImage] = React.useState();
    const [albumName, setAlbumName] = useState()
    const [album, setAlbum] = useState([])
    const maxNumber = 100;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setCoverImage(imageList);
    };

    const handleSubmit = () => {
        setAlbum([...album, { coverImage, albumName }])
        setCoverImage()
        setAlbumName("")
        setShow(false)
    }

    console.log(album)

    return (
        <div className="App"    >
            <Button onClick={() => setShow(true)}>ADD NEW ALBUM</Button>
            <ImageUploading
                multiple
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

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gridGap: "15px" }}>
                            {
                                album.map((data, index) => {
                                    // console.log(data.coverImage[0].data_url)
                                    return (

                                        <Card key={index} onClick={() => console.log(`${index + 1} Album Is Clicked`)}>
                                            <Card.Title>ALBUM</Card.Title>
                                            <Image src={`${data.coverImage[0].data_url}`} alt="" height="250px" width="350px" />
                                            <Card.Title>{data.albumName}</Card.Title>
                                        </Card>
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

