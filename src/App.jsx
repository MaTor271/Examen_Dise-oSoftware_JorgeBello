import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className="background-gray-900">
        <h1 className = "font-medium text-orange-500">Halloween Catalogos</h1>
        <Card/>
      </div>
    </>
  )
}

export default App
