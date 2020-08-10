import React from 'react';
import { NavLink} from 'react-router-dom';

const  About = () => {
    return ( 
        <div className="about-main-container">
            <p>
The idea behind this project is to let the end-user search image stock from the Unsplash API, the twist that I added is to enable the user to pick from a variety of suggested words. Another feature is a button named “A random word”  which is inspired by the classic Google’s “I’m Feeling Lucky” button. 
<br /><br />
My aim for this project was to use the knowledge that I have gained recently in particular what I have learnt about JavaScript, React, NPM and Node JS/Express. This web app is built with React on the front end also I’m using Node JS as a proxy server to obtain external API calls from the Unsplash API to keep the API key hidden. So to reiterate the client-side is fetching data from the proxy server at an endpoint created with Node JS. The Unsplash API returns a lot of useful data including information about the author of the photo and varies image sizes to choose from. One particular reason why I choose to use the Unsplash API is the documentation is clear and well detailed. 
<br/><br/> 
The main focus of this project was to learn how to use React for my practice and to see if I enjoy using this particular technology. I used the most recent React features including Context API and numerous hooks effectively. Another new challenge that I faced was deploying the app to the world which I did with the help of Git version control software. Thank you for checking out my web app and if have any feedback you can email at musaamuhsen@gmail.com             </p>
            <h2><NavLink activeClassName="active-link" exact to="/">Go to search</NavLink></h2>

        </div>
     );
}
 
export default About;