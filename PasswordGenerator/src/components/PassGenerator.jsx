import { useState } from 'react';
import '../styles/PassGen.css'


export default function Generator(){
    
    const[length,setLength]=useState(8);
    const[password,setPassword]=useState('');
    const[numbers,setNumbers]=useState(false);
    const[character,setCharacter]=useState(false);
   

    let str1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let str2='1234567890';
    let str3='!@#$%^&*()';

    let min=0;
    let max=51;
    let lambai;
    let pass='';
    // let lambai=0;
   

    const passwordSetter=()=>{
      
        // let pass='';
        if(numbers) str1+=str2;
        max=str1.length-1;

        if(character) str1+=str3;
        max=str1.length-1;
        
        console.log(str1)
        for(let i=0;i<lambai;i++){
            let random=(Math.floor(Math.random()*(max-0+1)+0));
            // ind=ind +random;
            
            pass+=str1[random];
        }
        console.log(pass);
        setPassword(pass)
        // console.log(ind);
    }


    const handleLengthChange=(e)=>{
        lambai=e.target.value;
        setLength(e.target.value);
        passwordSetter();
    }

 

    return(
        <div className="main-container">
            <div className="input-copy">
                <input type="text" value={password}  readOnly />
                <button className="copy">copy</button>
            </div>
            <div className="params">
                <input type="range" name='Length' min={8} max={40} value={length} onChange={handleLengthChange}/> <label htmlFor="Length">Length {length}</label>
                <input type="checkbox" name='Numbers' value={numbers} onChange={()=>{setNumbers((prev)=> !prev)} } /> <label htmlFor='Numbers'>Numbers {numbers}</label>
                <input type="checkbox" name='Characters' value={character} onChange={()=>{setCharacter((prev)=>!prev)}} /> <label htmlFor="Characters">Characters</label>
            </div>
            </div>
    );
}