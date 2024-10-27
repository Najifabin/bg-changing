import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('')
  return (
    <>
     <div style={{ width: '100%', minHeight: '100vh',backgroundColor:color }} className=' d-flex justify-content-center align-items-center'>
      <div className='w-50 d-flex justify-content-between '>
        <button type='button' className='btn btn-dark'onClick={()=>{setColor("red")}}>Red</button>
        <button type='button' className='btn btn-dark'onClick={()=>{setColor("blue")}}>Blue</button>
        <button type='button' className='btn btn-dark'onClick={()=>{setColor("green")}}>Green</button>
        <button type='button' className='btn btn-dark'onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button type='button' className='btn btn-dark'onClick={()=>{setColor("black")}}>Black</button>
        <button type='button' className='btn btn-dark'onClick={()=>{setColor("white")}}>White</button>

      </div>

     </div>
    </>
  )
}

export default App
