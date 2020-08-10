import React, {useState, useContext} from 'react';
import { WordContext } from '../contexts/RandomWordContext';
import { UnsplashContext } from '../contexts/UnsplashContext';
//import {ThemeContext}  from '../contexts/ThemeContextProvider';


const FeelingLucky = () => {

    const {wordContextLucky } = useContext(WordContext);
    const {onButtonSubmit} = useContext(UnsplashContext);
    const [feelLuckyState, setFeelLuckyState] = useState({data: ''});
    


   const onInputChange = (event) => {
        setFeelLuckyState({data: event.target.value})
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onButtonSubmit(feelLuckyState.data)       
        setFeelLuckyState({data: ''});      
    }

    return ( 
        <div className="lucky-container">
            <form className="lucky-btn-form" onSubmit={onFormSubmit}>
              <button className="lucky-button" onClick={onInputChange} value={wordContextLucky}>A random word</button>
           </form> 
        </div>
     );
}
 
export default FeelingLucky;