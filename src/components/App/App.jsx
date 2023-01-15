import React from 'react';
import './App.css';
import Header from './Header.js';
import GalleryList from '../Gallery/GalleryList.js';
import {useState, useEffect} from 'react'
import axios from 'axios'


function App() {
  let [imageList, setImageList] = useState([])

  useEffect(()=>{
  fetchData()
},[])

const fetchData = () => {
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
        <GalleryList imageList={imageList} fetchData={fetchData}/>
        
      </div>
    );
}

export default App;
