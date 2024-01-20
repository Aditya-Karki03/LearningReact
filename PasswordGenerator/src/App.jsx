import { useState } from 'react'

import './App.css'

function App() {
  const SpecialChar="!@#$%^&*()";
  const num="0123456789";
  let char='abcdefghijklmnopqrstuvwxyz';
  // const min=0;
  let max=25;
  let input;
  const [count, setCount] = useState(8)
  const[pass,setPass]=useState('');
  const ranger=(e)=>{
    setCount(e.target.value);
    input=e.target.value;
    generator();
  }
  const numChecker=(e)=>{
      if(e.target.checked===true){
        char+=num;
        max=char.length-1;
        generator();
      }
      if(e.target.checked===false){
        char=char.replace('0123456789','');
        max=char.length-1;
        generator();
      }
  }
  const specialChecker=(e)=>{
    if(e.target.checked===true){
      char+=SpecialChar;
      max=char.length-1;
      generator();
    }
    if(e.target.checked===false){
      char=char.replace('!@#$%^&*()','');
      max=char.length-1;
      generator();
    }
  }
  let password=new String();
let strValue=new String();
  function generator(){
    password="";
    strValue=""
    for(let i=0;i<input;i++){
        
        let value=(Math.floor(Math.random()*(max-0+1)+0));
        strValue+=` ${value}`;
        password+=char[value];
       
    }
    console.log(password)
    console.log(strValue);
    setPass(password);
  }
  

  return (
    <>
      <div className="main-container">
        <div className="input">
          <input type="text"  readOnly/>{pass}
          <button>click me</button>
        </div>
        <div className="checks">
          <input type="range" onChange={ranger} min={8} max={25} id='range'/>
          <span>{count}</span>
          <input type="checkbox" onChange={numChecker}/><label >Numbers</label>
          <input type="checkbox" onChange={specialChecker}/><label>Special Char</label>
        </div>
      </div>
    </>
  )
}

export default App
