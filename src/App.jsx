import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Navbar(){
  return(
    <div className="navbar">
      <h1>Photo Gallery</h1>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </div>
  )
}

function App() {

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
