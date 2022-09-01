import React ,{useState} from 'react' //rfc



// console.log(useState('Enter text here2'))
export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        // setText("You have clicked On handleUpClick")
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick=()=>{
      console.log("Lowercase was clicked"+ text);
      let newText=text.toLowerCase();
      
      // setText("You have clicked On handleUpClick")
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
  }
 
    /*
    const handleOnChange=()=>{
      console.log("On Change");
      setText();
  }*/
  //then event is call  we can type the text......
    const handleOnChange=(event)=>{
      console.log("On Change");
      setText(event.target.value);
     
  }

  const handleCopy=()=>{
    console.log("I am copy");
    var text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Converted to CopyText","success");
  }

  const handleClearClick=()=>{
    let newText='';
    setText(newText)
    props.showAlert("Converted to ClearText","success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove ExtraSpace","success");
  }
  ///.....................text state we make............
  //...........HOOK     state..................
    const [text,setText]=useState('');    //......start with this
    //text="new text";  //wrong way to change state
   // setText("new text"); //right way to change state
    return (
      <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1 >{props.heading}</h1>
    <div className="mb-3">
      {/* 2nd step onclick,onchange are function */}
   <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white',
color:props.mode==='dark'?'white':'#042743'}}   placeholder='Enter text' cols={48} rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
</div>

<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
  <h2 >Your text summary</h2>
  {/* <p>3452 words & 6780 characters</p> */}
  <p>{text.split(" ").length}words & {text.length} characters</p>
  <p>{0.008 * text.split(" ").length}Minutes read</p>
  <h2>Preview</h2>
  <p >{text.length>0?text:"Enter something a preview it here"}</p>
</div>
</>
  )
}
