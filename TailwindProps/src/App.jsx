
import './App.css'
import Cards from './Components/Cards'

function App() {
  

  return (
   <>
     <button className='bg-green-400 text-black m-4'>Tailwind Test</button>
    <Cards/>
    <Cards name1="Aditya" lastName='Chetri' Obj={{1:'Karki'}} myArr={[1,2,3,4]} />

   </>
  )
}

export default App
