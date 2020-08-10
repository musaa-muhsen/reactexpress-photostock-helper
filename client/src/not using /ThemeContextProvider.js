import React, { createContext, useState, useEffect, useRef }  from 'react';
export const ThemeContext = createContext();

const ThemeContextProviderComp = (props) => {

  let [themeColor, setThemeColor] = useState(getInitialMode());
  const [themeColorBool, setThemeColorBool] = useState(true) 
//
useEffect(() => {
  localStorage.setItem('dark', JSON.stringify(themeColor));
});

function getInitialMode() {
   const savedMode = JSON.parse(localStorage.getItem('dark'));
   return savedMode || true;
}

const isInitialMount = useRef(true);

useEffect(() => {
 if (isInitialMount.current) {
    isInitialMount.current = false;
    themeColorBool = true;
 } 
});


const themeColorMaker = themeColorBool === true ? setThemeColorBool(false) : setThemeColorBool(true);
console.log(themeColorMaker);

const toggleTheme = () => {      
  
   setThemeColor({
    // nested object literal
    isLightTheme: themeColorMaker,
    light: {fontColor: '#555', uiElement: '#ddd', bg: '#eee'},
    dark:  {fontColor: '#ddd', uiElement: '#333', bg: '#555'}
})
}



  



    return ( 
        <ThemeContext.Provider value={{...themeColor,toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
     );

 
}
 
export default ThemeContextProviderComp;



 


    /*
     state = {
    isLightTheme: getInitialMode(),
    light: {fontColor: '#555', uiElement: '#ddd', bg: '#eee'},
    dark:  {fontColor: '#ddd', uiElement: '#333', bg: '#555'}

   }
   componentDidMount () {
    localStorage.setItem('dark', JSON.stringify(this.state.isLightTheme));
   }
   

  toggleThemeFunc = () => {
    this.setState({isLightTheme: !this.state.isLightTheme});
    //console.log(!this.state.isLightTheme)
  }

   getInitialMode = () => {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
}



    */
    