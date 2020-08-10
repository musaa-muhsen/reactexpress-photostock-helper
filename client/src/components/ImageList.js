import React , {useContext, useEffect, useRef, useState} from 'react';
import ModalImage from "react-modal-image";
import {ReactComponent as ResultsSVG} from '../images/no-image-icon-3.svg';
//import {v4} from 'uuid';
//import NoImage from './NoImage';
import { UnsplashContext} from '../contexts/UnsplashContext';


const ImageList = () => {

   // js image conditional 
  const { images, errorHandler} = useContext(UnsplashContext);
  //console.log(errorHandler)
  //console.log(theWordBTN);
  

  const [imgCurrent, setImgCurrent] = useState(0);
  const isInitialMount = useRef(true);
  //const isInitialMountFalse = useRef(false);

  //console.log(images)

  useEffect(() => {
   if (isInitialMount.current) {
      isInitialMount.current = false;
   } else { 
      setImgCurrent(1);
   }
},[imgCurrent,setImgCurrent,isInitialMount,images]);


// renders conditional 
  const imageOutcome = images.length === 0 ? (
   imgCurrent === 1 || errorHandler === true ?  <div className="no-image-container"> 
   <div><ResultsSVG /><h1>No images available.</h1></div>
   </div>  : 
   <div  className="when-first-renders-container" style={{gridAutoRows: "0"}}>
     
   </div>
  ) : (
         images.map(img => {
           
      return (   
             <ModalImage        
         showRotate={true}
         hideDownload={true}
         key={img.id}
  small={img.urls.small}
  large={img.urls.regular}
  
 
  imageBackgroundColor="#FFFFFF"
  className="image-wrapper"
  id="image-wrapper"
  
/>

             )
        })
  )

    return (         
           <div  className="image-container">   
            {imageOutcome} 
         </div>
     );
}
 
export default ImageList;


/*
   //const [image, setImage] = useState(imagesProp.results)
   //[books, setBooks] =
   //const imagesForRender = props.results
//    useEffect(() => {
//    const imageResults = imagesProp.results;
//    console.log(imageResults)

<a style={{display: "block"}} href={img.links.download} download>
{}
{console.log(img.links.download_location)}
<button className="btn"> download</button>

</a>

*/

/* <div key={v4()} className="container-button"> */

/*
  if (noImages === true) {  
         return (
            <div className="no-image-container"> 
            <h1>No images!</h1>
            </div>        
         )
   }
{imagesProp, noImages}
*/

//   useEffect(() => {
//    document.querySelector('.no-image-container h1').style.display = "none";
//      console.log("first rendered!!!");
//   }, []);

  /*
  const imgs = images.map(img => {
        return (    
<img key={img.id} src={img.urls.small} alt={img.alt_description} />
               )
          });
          <img key={img.id} src={img.urls.small} alt={img.alt_description} />
//grid system 
const [imageLayout,setImageLayout] = useState({span: 0});

const imageRef = useRef(null);
console.log(imageRef);



const setSpan = () => {
   const height = imageRef.current.clientHeight;
   const spanRows = Math.ceil(height / 10);
   setImageLayout({spans:spanRows });

}

useEffect(() => {
   imageRef.current.setSpan()

},[setSpan,imageLayout,setImageLayout])
*/
//<p><img alt="opening-random" className="" src="https://source.unsplash.com/random/800x500" /> </p>
//console.log(imgCurrent);

//const imageRef = useRef();


// useEffect(() => {
//    if (!isInitialMountFalse.current) {
//       isInitialMountFalse.current = true;
//       imageRef.current.style.background = "yellow"

//    } else { 
//       imageRef.current.style.background = "white"

//    }
// },[]);



   // const searchInfo = theWordSearch === null && images.length === 0 || theWordBTN === null && images.length === 0  ? ( 
   //    <div className="empty-results"></div>
   //  ) :(
   //    <SearchResultsInfo theWordSearch={theWordSearch} theWordButtonVal={theWordBTN} />
   //  )
   /*
const searchInfo = images.length > 1 ? (
   theWordSearch === null || theWordBTN === null  ? 
      ? :
   //<SearchResultsInfo theWordSearch={theWordSearch} />
  //<div><h1>Search results for: {theWordSearch.val} </h1></div> 
     : 
     <p>no</p>
   //   <ButtonResultsInfo theWordButtonVal={theWordBTN} />

) : (
   <div className="empty-results"></div>
)
*/


//  const buttonInfo= theWordBTN === null && images.length === 0  ? ( 
//    <div className="empty-results"></div>
//  ) :(
//    <ButtonResultsInfo theWordButtonVal={theWordBTN} />
//  )

// import SearchResultsInfo from './SearchResultsInfo';
// import ButtonResultsInfo from './ButtonResultsInfo';