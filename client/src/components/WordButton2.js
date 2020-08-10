import React, {useContext, useState} from 'react';
import { WordContext } from '../contexts/RandomWordContext';
import { UnsplashContext } from '../contexts/UnsplashContext';



const WordButtonTwo = () => {

    
    const {wordContextOne,wordContextTwo,wordContextThree,wordContextFour,wordContextFive,wordContextSix,wordContextSeven, wordContextEight, wordContextNine, wordContextTen  } =  useContext(WordContext);
    const {onButtonSubmit} = useContext(UnsplashContext);
   // console.log(onButtonSubmit)

    //const {wordsArr} =  useContext(WordContext);
    const [buttonData, setButtonData] = useState({data: ''});

    //onButtonSubmit(buttonData.data)
    const onInputChange = (event) => {
        //console.log(event.target.value)
        setButtonData({data: event.target.value});
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onButtonSubmit(buttonData.data);
        //console.log(buttonData.data)
        setButtonData({data: ''});
    }

    return (   
         
           <form className="buttons-container" onSubmit={onFormSubmit}>
               {/* <button onClick={() => setButtonData({ data: buttonOne })}>{buttonOne}</button> */}
               <button onClick={onInputChange} value={wordContextOne}>{wordContextOne}</button>
                <button onClick={onInputChange} value={wordContextTwo}>{wordContextTwo}</button>
                <button onClick={onInputChange} value={wordContextThree}>{wordContextThree}</button>  
                <button onClick={onInputChange} value={wordContextFour}>{wordContextFour}</button>
                <button onClick={onInputChange} value={wordContextFive}>{wordContextFive}</button>
                <button onClick={onInputChange} value={wordContextSix}>{wordContextSix}</button> 
                <button onClick={onInputChange} value={wordContextSeven}>{wordContextSeven}</button>
                <button onClick={onInputChange} value={wordContextEight}>{wordContextEight}</button>
                <button onClick={onInputChange} value={wordContextNine}>{wordContextNine}</button>  
                <button onClick={onInputChange} value={wordContextTen}>{wordContextTen}</button>
           </form> 
       
     );
}
 
export default WordButtonTwo;