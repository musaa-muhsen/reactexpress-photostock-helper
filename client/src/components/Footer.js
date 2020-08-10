import React from 'react';

const Footer = () => {

    const yearAndYears = new Date().getFullYear();
    //console.log(yearAndYears)
    return ( 
        <footer><p>Made by <a href="https://musaamuhsen.com/" rel="noopener noreferrer" target="_blank">musaamuhsen.com</a> &copy; {yearAndYears}</p></footer>
     );
}
 
export default Footer;