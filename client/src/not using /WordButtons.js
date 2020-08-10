import React, {useContext, useState} from 'react';
import { WordContext } from '../contexts/RandomWordContext';


const WordButtons = ({buttonOne}) => {
const words =  useContext(WordContext);
console.log(userSubmit)
const [currentWord, setWord] = useState({btnWord: ''});



 const word = words.words;
 const slicedWord1 = word.slice(0,3);
 const randomGen = Math.floor(Math.random() * 3)
const randomWordContent =  slicedWord1[randomGen]

console.log(currentWord.btnWord)

const onInputChange = (event) => {
    setWord({btnWord: event.target.value});
}

const onFormSubmit = (event) => {
    event.preventDefault();
    userSubmit(currentWord)
    //console.log(search.val)
    //setSearch(props)
    setWord({btnWord: ''});

}

    return ( 
        <div>
{/* <button onClick={onInputChange} value={randomWordContent}>{randomWordContent}</button>  */}

            <form onSubmit={onFormSubmit}>
                 {/* <input type="text" 
                 value={search.val}
                 onChange={onInputChange} />  */}
                 <button onChange={onInputChange} value={search}></button>
            </form>
       </div>
     );
}
 
export default WordButtons;