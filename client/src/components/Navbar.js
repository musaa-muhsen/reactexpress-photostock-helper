import React from 'react';
 import { NavLink} from 'react-router-dom';
//import {ThemeContext}  from '../contexts/ThemeContextProvider';
//import ThemeToggle from './ThemeToggle';

const Navbar = () => {

    return (
      <header className="nav-container">     
      <div className="block-logo"> 
       <NavLink activeClassName="active-link" exact to="/">Photostock<br/>helper</NavLink>
       </div>
       <div className="block-empty"> </div>
       <div className="block-about"> 
       <NavLink activeClassName="active-link" to="/about">About</NavLink>
       </div>
       
      </header>    
    );
}
 
export default Navbar;

/*

<label className="switch">
        <input  type="checkbox" checked />
        <span className="slider round"></span>
          </label>


  <header class="header">
        <div class="block-logo-link">
        <li><NavLink activeClassName="active-link" to="/about">About</NavLink></li>
        </div>
        <div class="block-empty"></div>
        <div class="third-block">
        <li></li>
        </div>
    </header>


    <div className={darkMode ? "dark-mode" : "light-mode";}>
        <nav>
            <div>
        <NavLink activeClassName="active-link" to="/about">About</NavLink>
        <NavLink className="link-home" activeClassName="active-link" exact to="/">Home</NavLink>
        </div>
          <div className="toggle-container ">
            <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
            <span className="toggle">
              <input
                checked={darkMode}
                onChange={toggleTheme}             
                id="checkbox"
                className="checkbox"
                type="checkbox"
              />
              <label htmlFor="checkbox" />
            </span>
            <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
             <button onClick={() => setDarkMode(prevMode => !prevMode)}>
            Toggle
          </button> }
          </div>
        </nav>
        <main>
          <h1>{isdarkMode}</h1>
          <h2>Toggle the switch to see some magic happen!</h2>
        </main>
      </div>

*/

   /*
 const {isLightTheme, light, dark} = useContext(ThemeContext);
 console.log(isLightTheme, light)
   const theme =  isLightTheme ?  light : dark;   
   
   console.log(theme.uiElement)

    //const { darkMode, isdarkMode } = useContext(ColorContext);
    //console.log(darkMode)
    //console.log(setDarkMode)
    //<button onClick={() setDarkMode(!darkMode)}>
    //() => setDarkMode(prevMode => !prevMode)

   // const linkHome = "link-home"
   */