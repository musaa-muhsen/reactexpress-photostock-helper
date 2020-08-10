import React, {useState, createContext, useEffect} from 'react';

export const ColorContext = createContext();

const ColorContextComp = (props) => {

    const [darkMode, setDarkMode] = useState(getInitialMode());

    // <button onClick={() setDarkMode(!darkMode)}> 

    useEffect(() => {
       localStorage.setItem('dark', JSON.stringify(darkMode));
    },[darkMode]);

    function getInitialMode() {
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        return savedMode || false;
    }

    const toggleTheme = () => {
        setDarkMode(!darkMode);    
     }

    const isdarkMode = darkMode ? "dark-mode" : "light-mode";

    return ( 
        <ColorContext.Provider value={{toggleTheme , isdarkMode,...darkMode }}>
            {props.children}
        </ColorContext.Provider>
     );
}
 
export default ColorContextComp;