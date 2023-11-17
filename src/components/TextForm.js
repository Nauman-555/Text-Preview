import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () =>{
      let newText = "";
        setText(newText);
    }

    const handleProcessClick = () =>{
      
      let newText =  `${"Number of characters =" + text.length} \n${"Number of words =" +text.split(" ").length} \n${"Time taken to read the whole words=" + text.split(" ").length* 0.008}`;
      setText(newText);
    };
    

    const handleonChange =(event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");
  return (
    <div>
<div className="mb-3">
  <h1>{props.Heading}</h1>
  <textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}> Change to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleDownClick}> Change to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleProcessClick}> Process Text</button>
{/* <div>
  <p> Number of Characters are {text.length}</p>
  <p> Time taken to read the whole words {text.split(" ").length* 0.008}</p>
  <p> Number of Words are {text.split(" ").length}</p>
  <p>conversion to upper case be like {text.toUpperCase()} </p>
  <p>conversion to upper case be like {text.toLowerCase()} </p>
</div> */}
    </div>
  )
};