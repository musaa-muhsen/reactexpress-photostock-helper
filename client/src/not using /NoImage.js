import React from 'react';

const NoImage = ({noImages}) => {
    console.log(noImages);

    if (noImages === true) {
      
        return (
           <div className="no-image-container"> 
           <h1>No images!</h1>
           </div>
        
        )
     }
    return ( 
        <div> 

        </div>
     );
}
 
export default NoImage;