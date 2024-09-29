import { useState } from 'react'
import Footer from './components/Footer'
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
      <Footer/>
    </>
  )
}

export default App
