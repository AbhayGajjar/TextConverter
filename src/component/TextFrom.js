import React,{useState} from 'react'

export default function TextFrom(props) {
    const [text, setText] = useState("enter a variable");
    const hiddenupclick = () => {
        console.log("upper case " + text);
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const hiddenonchange = (event) => {
       console.log("on change");
        setText(event.target.value)
 
    }
    const hiddenlowclick = () => {
      console.log("upper case " + text);
      let newtext = text.toLowerCase()
      setText(newtext)
    }

  return (
   <>
   <h3 className = "my-2 ">{props.hidden}</h3>
  <div className="form-group">
    <textarea className="form-control rounded-mg w-1/2 " id="exampleFormControlTextarea1" value={text} onChange={hiddenonchange} rows="8"></textarea>
  </div>
  <button className="btn btn-dark mx-2 rounded-lg " onClick={hiddenupclick}>  UPPERCASE</button>
  <button className="btn btn-success mx-2 rounded-lg" onClick={hiddenlowclick}> LOWERCASE</button>
  <hr className='my-2' />
  <div className="contaionr">
    <h1 className='text-black-400 text-transform: uppercase font-bold'>your word and character </h1>
    <p className='my-2'>{text.split(' ').length }  word amd charter {text.length}</p>
  </div>
 </>
  );
}
