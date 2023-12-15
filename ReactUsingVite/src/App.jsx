
//App.jsx is basically a function 
//The method of rendering it which is <App /> is a jsx syntax, since vite uses a bundler, it has some unique ways to render
//Since App.jsx file is a function it can also be rendered as App(), but should not be done because it is not a good practice

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
