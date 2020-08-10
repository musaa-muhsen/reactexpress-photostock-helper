import React , {createContext} from 'react';

export const WordContext = createContext();

const RandomWordContext = (props) => {

    const randomGen = Math.floor(Math.random() * 17);

    const wordsArr1 = ['stars','milky way','moon','space','universe',
    'night sky','aurora','nebula','outer space','satellite','earth',
    'nuts','meat','sandwiches','noodles','plants','Seafood market'];

    const wordsArr2 = ['red','yellow','blue','brown','orange',
    'green','violet','black','pink','blue green','violet',
    'white','crimson','navy','yellow green','scarlet','grey'];

    const wordsArr3 = ['car','football','classic car','ship','boat',
    'stadium','gym','future','yoga','basketball','elephant',
    'owls','chickens','frogs','goat','monkey','eggs'];

    const wordsArrL  = ['moon','yoga','sky','elephant','monkey',
    'fox','apartment','geometric','architecture','paint','fast food',
    'tomatoes','paris','london','concert','blue','grey'];

    const wordsArr4 = ['portrait','face','smile','sad','woman',
    'man','model','face','hair','cat','horse',
    'deer','snake','bears','birds','dog','fox'];

    const wordsArr5 = ['texture','living room','wood background','background texture','abstract',
    'pattern','geometric','door','apartment','house','street',
    'architecture','urban','office building','city','paint','brush'];

    const wordsArr6 = ['new york','athens','tokyo','delhi','mexico city',
    'cairo','sao paulo','istanbul','rio de janeiro','paris','london',
    'jakarta','seoul','madrid','toronto','barcelona','miami'];

    const wordsArr7 = ['film','guiter','concert','90s','gothic',
    'vintage','haloween party','instrument','lunch','hill','cake',
    'chess','paper','doctor','medical','hospital','drink'];

    const wordsArr8 = ['moon','stars','starfish','athlete','apple',
    'eat','audience','thinking','berry','cherry','forest',
    'vase','neon','arcade','retro','80s','70s'];

    const wordsArr9 = ['photography','camera','chip','science','electronic',
    'computer','desk','macbook','keyboard','home office','code',
    'tech','piano keyboard','music','typing','laptop','gaming'];

    const wordsArr10 = ['sold','person','sign','ball','warm',
    'oil','drink','sea','dolphin','cow','tiger',
    'lion','panda','butter fly','insect','flower','rose'];

    

    const wordContextOne = wordsArr1[randomGen];
    const wordContextTwo = wordsArr2[randomGen];
    const wordContextThree = wordsArr3[randomGen];
    const wordContextFour = wordsArr4[randomGen];
    const wordContextFive = wordsArr5[randomGen];
    const wordContextSix = wordsArr6[randomGen];
    const wordContextSeven = wordsArr7[randomGen];
    const wordContextEight = wordsArr8[randomGen];
    const wordContextNine = wordsArr9[randomGen];
    const wordContextTen = wordsArr10[randomGen];

    const wordContextLucky = wordsArrL[randomGen];
    
    
    return ( 
        <WordContext.Provider value={{wordContextOne,wordContextTwo,wordContextThree,wordContextFour,wordContextFive,wordContextSix,wordContextSeven,wordContextEight,wordContextNine,wordContextTen,wordContextLucky}}>
            {props.children}
        </WordContext.Provider>
     );
}
 
export default RandomWordContext;

/*

buttonTwo: randomWordContent2, buttonOne: randomWordContent
const word = [
                'moon','stars','night sky','galaxy','dark',
                'light','aurora','milky way','pink','red','blue',
                'green','crimson','orange','blue','black','grey'
            ]
*/

// const slicedWord1 = wordsArr.slice(0,3);
    // const randomWordContent =  slicedWord1[randomGen]

    // const slicedWord2 = wordsArr.slice(4,6);
    // const randomWordContent2 = slicedWord2[randomGen]