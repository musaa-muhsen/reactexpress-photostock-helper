import React, {useContext, useState} from 'react';
import { WordContext } from '../contexts/RandomWordContext';


const WordButtonThree = ({onButtonSubmit}) => {


const wordsArr = ['moon','stars','sky','galaxy','dark',
 'light','aurora','milky way','pink','red','blue',
 'green','crimson','orange','blue','black','grey'];
  

     const randomGen = Math.floor(Math.random() * wordsArr.length);
// console.log(randomGen)

    //const {buttonOne, buttonTwo} =  useContext(WordContext);
   
    const [buttonData, setButtonData] = useState({data: ''});
    //console.log(wordsArr)
const buttonTwo = wordsArr[randomGen]


    // const slicedWord2 = wordsArr.slice(0,3);
    // const buttonTwo = slicedWord2[randomGen]

    //onButtonSubmit(buttonData.data)
    const onInputChange = (event) => {
        console.log(event.target.value)
        setButtonData({data: event.target.value});
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onButtonSubmit(buttonData.data)
        //console.log(buttonData.data)
        //setButtonData({data: ''});

    }

    return (    
        <div>
           <form onSubmit={onFormSubmit}>
               {/* <button onClick={() => setButtonData({ data: buttonOne })}>{buttonOne}</button> */}
               <button onClick={onInputChange} value={buttonTwo}>{buttonTwo}</button>
           </form>
           {/* <form onSubmit={onFormSubmit}>
           <button onClick={onInputChange} value={buttonTwo}>{buttonTwo}</button> 
           </form> */}
       </div>
     );
}
 
export default WordButtonThree;