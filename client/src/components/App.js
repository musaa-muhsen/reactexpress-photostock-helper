import React from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import RandomWordContext from '../contexts/RandomWordContext';
import UnsplashContextComp from '../contexts/UnsplashContext';
import WordButtonTwo from './WordButton2';
import FeelingLucky from './FeelingLucky';
//import NoImage from './NoImage';
import Footer from './Footer';
import About from './About';
import Navbar from './Navbar';
import ButtonTitle from './ButtonTitle';
import {BrowserRouter, Route} from "react-router-dom"; 
//import ThemeContextProviderComp  from '../contexts/ThemeContextProvider';




const App = () => {
  
  return ( 
    <BrowserRouter>
        <Navbar />  
    <UnsplashContextComp>
    <RandomWordContext>   

         <div className="search-main-container">
       <Route exact path="/" component={SearchBar} />          
         </div>  
       <Route exact path="/" component={FeelingLucky} />
       <div className="button-main-container"> 
       <Route exact path="/" component={ButtonTitle} />
       <Route exact path="/" component={WordButtonTwo} /> 
       </div>  
       <Route exact path="/" component={ImageList} /> 
       </RandomWordContext>
      </UnsplashContextComp>
      <Route exact path="/about" component={About} />  
     
           <Footer />
    
    </BrowserRouter>
   );
}
 

export default App;

/*
import React, { useState } from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import RandomWordContext from '../contexts/RandomWordContext';
import WordButtonTwo from './WordButton2';
import FeelingLucky from './FeelingLucky';
//import NoImage from './NoImage';
import Footer from './Footer';



const App = () => {
 
  const [images, setImages ]= useState([]);
  //const [noImages, setNoImages] = useState(false)
  

   const onSearchSubmit = async (word) => {
      const response = await fetch(`/api/${word.val}`);
      const data = await response.json();
      setImages(data.results)
   }


const onButtonSubmit = async (word) => {
   const response = await fetch(`/api/${word}`);   
   const unsplashData = await response.json();
   setImages(unsplashData.results)
  }

  
  return ( 
    <div className="App"> 

    <RandomWordContext>   
       <div className="search-main-container">
           <SearchBar onSearchSubmit={onSearchSubmit} onButtonSubmit={onButtonSubmit}/>           
       </div>
       <FeelingLucky onButtonSubmit={onButtonSubmit} /> 
       <WordButtonTwo onButtonSubmit={onButtonSubmit} />            
    </RandomWordContext>
           <ImageList  imagesProp={images} /> 
           <Footer />
           
    </div>
   );
}
 

export default App;



<UnsplashContextComp>
    <RandomWordContext>   
         <div className="search-main-container">
           <SearchBar onSearchSubmit={onSearchSubmit} onButtonSubmit={onButtonSubmit}/>           
         </div>
       <FeelingLucky onButtonSubmit={onButtonSubmit} /> 
       <WordButtonTwo onButtonSubmit={onButtonSubmit} />            
       </RandomWordContext>
       <ImageList  imagesProp={images} /> 
</UnsplashContextComp>
           <Footer />
*/


 /*
  const [images, setImages ]= useState([]);
  //const [noImages, setNoImages] = useState(false)
  

   const onSearchSubmit = async (word) => {
      const response = await fetch(`/api/${word.val}`);
      const data = await response.json();
      setImages(data.results)
   }


const onButtonSubmit = async (word) => {
   const response = await fetch(`/api/${word}`);   
   const unsplashData = await response.json();
   setImages(unsplashData.results)
  }
*/