import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  const Copy = () => {
    navigator.clipboard.writeText(text);
  };
  
  const handleOnChange = (event) => {
    console.log('this is this');
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
    <div className='container'>
      <h1>Enter Text Here</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          value={text}
          onChange={handleOnChange}
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={speak}>
        Speak
      </button>
      <button className="btn btn-primary mx-2" onClick={clearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={Copy}>
        Copy 
      </button>
      <div className="container my-3">
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words &  {text.length} character</p>
        <p>{0.08 *text.split(" ").length } minutes read </p>
        <h3>Preview</h3>
        <p>{text}</p>
        
      </div>
    </div>
    </>
  );
}
