import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper Case" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text";    //wrong way to change state
    //setText("new text");     //correct way to change state
    return (
        <>
            <div className='container'>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary" onClick={handleLClick}>Convert to LowerCase</button>
            </div>
            <div className="container my-2">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and  {text.length} characters</p>
            </div>
        </>
    )
}
