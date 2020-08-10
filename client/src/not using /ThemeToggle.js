import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';


const ThemeToggle = (props) => {
   
    const {toggleTheme,isLightTheme} = useContext(ThemeContext);
    console.log(isLightTheme);
    return ( 
        
        <label className="switch">
        <input onChange={toggleTheme} type="checkbox" checked={!isLightTheme}/>
        <span className="slider round"></span>
      </label>
    
    
        
     );
}
 
export default ThemeToggle;