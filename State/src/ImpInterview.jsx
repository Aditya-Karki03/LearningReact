import { useState } from "react";

export default function ImportantInterviewQuestion(){
    const[counter,setCounter]=useState(15);
    const Incrementer=()=>{
        setCounter(counter+1);
        setCounter(counter+1);
        setCounter(counter+1);
    }
    const Decrementer=()=>{
        setCounter(counter=>counter-1);
        setCounter(counter=>counter-1);
        setCounter(counter=>counter-1);
    }
    return(
        <>
            <button onClick={Incrementer}>Increment{counter}</button>
            <button onClick={Decrementer}>Decrement{counter}</button>
        </>
    )
}