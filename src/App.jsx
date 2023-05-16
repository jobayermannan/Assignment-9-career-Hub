import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar';
import Header from './assets/Components/Header/Header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar></Navbar>
  <Header></Header>
    </>
  )
}

export default App
