import React from 'react';

const SearchResultsInfo = (props) => {
   console.log(props)
//const outcomeResults = props.theWordSearch.val === !null;
//console.log(outcomeResults);
        return ( 
            null
             <div><h1>Search results for: {props.theWordSearch.val} </h1></div>
             );
   
    
}
 
export default SearchResultsInfo;