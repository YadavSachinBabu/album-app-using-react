import React, { useState } from 'react'
import './App.css'
import Sasaa from './Sasaa'
import { Switch, Route } from 'react-router-dom'
import AddImages from './AddImages'


export default function App() {
  const [album, setAlbum] = useState([])
  const [index, setIndex] = useState()
  const [isTrue,setIsTrue] = useState(false)
  const handleAlbum = (coverImage, albumName) => {
    setAlbum([...album, { coverImage, albumName, addedImages: [] }])
  }
  const uploadedImages = (images) => {
    const imageData = album;
    imageData[index].addedImages=[...imageData[index].addedImages,...images]
    setAlbum(imageData)
  }
  const indexTaker = (index) => {
    setIndex(index)
  }
  const deleteImage = (i) =>{
    album[index].addedImages.splice(i,1) ? setIsTrue(!isTrue):setIsTrue(isTrue)
    setAlbum(album)
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props)=> <Sasaa indexTaker={indexTaker} handleAlbum={handleAlbum} album={album} {...props}/>} />
        <Route exact path="/:albumName" render={() => <AddImages deleteImage={deleteImage} uploadedImages={uploadedImages} album={album[index]}/>} />
      </Switch>
    </div>
  )
}
