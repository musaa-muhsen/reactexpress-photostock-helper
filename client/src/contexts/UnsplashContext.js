import React, { useState, createContext } from 'react';

export const UnsplashContext = createContext();

const UnsplashContextComp = (props) => {
   
  const [images, setImages ]= useState([]);
  const [errorHandler, setErrorHandler] = useState(false);

 

     const onSearchSubmit = async (word)=> {
           try {
             //setTheWordSearch(word);
             
            const response = await fetch(`/api/${word.val}`);
            const data = await response.json();
            setImages(data.results);
           } catch (err) {
             console.log(err, 'car')
             setErrorHandler(true);
           }     
        }


const onButtonSubmit = async (word) => {
    try {
      //setTheWordBTN(word);,
  //"proxy": "http://localhost:5004"
   const response = await fetch(`/api/${word}`);   
   const unsplashData = await response.json();
   setImages(unsplashData.results)
       } catch (err) { 
    console.log(err);
    setErrorHandler(true);
     }
  }

  // const errorHandler = () => {
  //  return (
  //    <h1>no!</h1>
  //  )
   
  // }


    return ( 
        <UnsplashContext.Provider value={{onButtonSubmit, onSearchSubmit, images, errorHandler}}>
            {props.children}
        </UnsplashContext.Provider>
     );
}
 
export default UnsplashContextComp;


  /*
useEffect(() => {
  if (isInitialMount.current) {
     isInitialMount.current = false;
  } else {
      console.log('worked!!!!!')
    
      async function onSearchSubmit (word) {
        console.log(word)
        const response = await fetch(`/api/${word.val}`);
        const data = await response.json();
        setImages(data.results);
    }
     
  }
},[images]);
*/

// useEffect(() => {
//     console.log('worked!!!!!')

 /*
     fetch(`/api/car`).
     then(response => response.json()).
     then(data => console.log(data))  
   */ 

    //const [noImages, setNoImages] = useState(false)
  
  //const isInitialMount = useRef(true);

  //     return onSearchSubmit;
     
// });
//
   
// try style display none 

  //const [theWordSearch, setTheWordSearch] = useState(null);
  //const [theWordBTN, setTheWordBTN] = useState();