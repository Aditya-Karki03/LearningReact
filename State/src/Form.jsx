import { useState } from "react";

export default function NameAndForm(){
    const[name,setName]=useState('Taylor');
    const[age,setAge]=useState(42);

    function changeHandler(e){
        setName(e.target.value)
    }
    const handleClick=()=>{
        setAge(age+1);
    }

    return(
        <>
            <label>
                <input type="text" value={name} onChange={changeHandler} /><br />
                <button onClick={handleClick}>Increment Age</button>
                <p>Hey {name}. You are {age} </p>
            </label>
        </>
    )
}