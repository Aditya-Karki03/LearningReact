
import MyName from './MyName'
function App() {
 

  return (
    // normally we can only return one component or one html tag
   
    // to return multiple component or multiple html tag we've to enclose it within tags like given below
    <> 
      <MyName /> 
      <h1>Learning React From Chai Aur Code</h1>
    </>
    
    //<></> is also known as fragment 
  )
}

export default App
