import React from 'react';
import './App.css';
import Header from './Header.js';
import GalleryList from '../Gallery/GalleryList.js';
import {useState, useEffect} from 'react'
import axios from 'axios'


function App() {
  let [imageList, setImageList] = useState([])

  useEffect(()=>{
  getImages()
},[])

const getImages = () => {
  axios.get('/gallery')
    .then(response => {
      setImageList(response.data)
    })
    .catch(err => {
      alert('error getting images');
      console.log(err);
    })
}
    return (
      <div className="App">
        
        <Header/>
        <GalleryList imageList={imageList} getImages={getImages}/>
        
      </div>
    );
}

export default App;
