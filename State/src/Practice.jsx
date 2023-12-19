//I've exported this component in App.jsx file it is a normal js code without using the Hook
//This code does not update the UI with the current value and when console logged it gives the value but when re-rendered it again starts with the starting value

export default function WithoutUsingHook(){
    let count=0;
    function counter(){
        count=count+1;
        console.log(count);
    }

    return(
        <>
            <button onClick={counter}>Count Without Using Hook {count}</button>
        </>
    )
}