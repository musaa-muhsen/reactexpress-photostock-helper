import React from 'react';
//import NoSearch from './NoSearch'

const SearchAgain = (props) => {
    const {outcomeProp} = props;
    console.log(outcomeProp);

    if (outcomeProp) {
        return <h1>no</h1>
       } else {
        return (
            <div className='empty-block-test'> 
                <h1>yes</h1>
            </div>
        )
       }
     
    }



   

    



export default SearchAgain;