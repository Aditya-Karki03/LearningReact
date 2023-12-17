//Button is a component
function Button(){
    return(<button>This is a Button</button>);
}

//MyApp component nests the Button component inside it 
export default function MyApp(){
    return(
    <div>
        <Button/>
        <h1>Learning From the official React docs</h1>    
    </div>
    )
}