import React from 'react';
import { useState } from 'react';
import Quotes from "./Quotes.json"

const QuoteBox = ({}) => {
    
    const [ quoteIndex, setQuoteIndex ] = useState(Math.floor(Math.random() * Quotes.length))
    const [ pgColor, setPgColor ] = useState("red")

    const changeIndex = () => {
        setQuoteIndex(Math.floor(Math.random() * Quotes.length))
        setPgColor("#" +  Math.floor(Math.random() * 1000000))
        document.body.style.backgroundColor = pgColor
    }

    document.body.style.backgroundColor = pgColor

    return (
        <div className='QuoteBox' style={{color:pgColor}}>
            <p>
                <span>"</span>{Quotes[quoteIndex].quote}"
            </p>
            <div className='AuthorDiv'>
                <p>
                    -{Quotes[quoteIndex].author}
                </p>
            </div>
            <div className='QuoteButtonContainer'>
                <button className='QuoteButton' style={{backgroundColor: pgColor, color: 'whitesmoke'}} onClick={changeIndex}> + </button>
            </div>
        </div>
    );
};

export default QuoteBox;