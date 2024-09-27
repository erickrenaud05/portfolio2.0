import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Body from './components/Body'


function App() {
  const [page, setPage] = useState('1')

  const handleClick = (e)=>{
    setPage(e.target.id);
  };

  return (
    <>
      <Navbar onClick={handleClick}/>
      <Body page={page}/>
    </>
  )
}

export default App
