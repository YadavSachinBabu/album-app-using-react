import React, { useState } from 'react'
import { Button, Card, Image } from 'react-bootstrap'

export default function ShowImages(props) {
    const album = props.album
    const deleteImage = (index) => {
        props.deleteImage(index)
    }
    const [src, setSrc] = useState()
    return (
        <div>
            {
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gridGap: "13px" }}>
                    {
                        album.map((data, index) => {
                            // console.log(data.data_url)
                            return (
                                <Card key={index}>
                                    <Image src={`${data.data_url}`} alt="" height="300px" width="350px" />
                                    <Card.Title>{data.file.name}</Card.Title>
                                    <Button onClick={() => {
                                        var source = `${data.data_url}`
                                        var w = window.open('about:blank');
                                        w.document.body.appendChild(w.document.createElement('img')).src = source
                                        w.document.getElementsByTagName("img")[0].style.width = '100%';
                                        w.document.getElementsByTagName("img")[0].style.height = '100%';
                                        w.document.getElementsByTagName("body")[0].style.background = "black"
                                        
                                        }}>View</Button>
                                    <br />
                                    <Button onClick={() => deleteImage(index)}>Delete</Button>
                                </Card>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
