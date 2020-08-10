import React, { useState , useContext} from 'react';
import {ReactComponent as SearchSVG} from '../images/search-2.svg';
import {UnsplashContext }from '../contexts/UnsplashContext';
//import SearchAgain from './SearchAgain';


const SearchBar = () => {
    const { onSearchSubmit } = useContext(UnsplashContext);
//console.log(onSearchSubmit)
    const [search, setSearch] = useState({val: ''})
    //const [noVal, setNoVal] = useState(false);
//console.log(search.val)

   const onInputChange = (event) => {
    setSearch({val: event.target.value});
 //setFeelLuckyState({data: event.target.value})
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        // if (search.val === '') {
        //     setNoVal(true);
        // } else {
        onSearchSubmit(search);       
        setSearch({val: ''});         
    }

    return ( 
        <div className="search-wrapper">
             <form className="form-search" onSubmit={onFormSubmit}>                  
                 {/* <label htmlFor="search"><h2>Image Search: </h2></label> */}
                 <input placeholder="Search photos" className="search-bar" type="text" value={search.val} onChange={onInputChange} /> 
                 <button className="search-icon-container" onChange={onInputChange} value={search}>
                    <SearchSVG />
                </button> 
            </form>
          
        </div>
     );
}
 
export default SearchBar;

    //const [feelLuckyState, setFeelLuckyState] = useState({data: ''})

 //  onButtonSubmit(buttonData.data)
    //  const feelingLuckyOnInputChange = (event) => {
    //     console.log(event.target.value)
    //     setButtonData({data: event.target.value});
    // }

    // const feelingLuckyOnFormSubmit = (event) => {
    //     event.preventDefault();
    //     onButtonSubmit(feelLuckyState);
    //     
    // }