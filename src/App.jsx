import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Travel from './components/Travel'
import Nav from './components/Navbar'
import Data from './data.jsx'

 function App() {
 
  const travel = Data.map (TravelJournal => {
      return (
        <Travel
        key = {TravelJournal.id}
        {...TravelJournal} 
        />
      )

  }
  )
  
  

  return (
    <>
        <Nav/> 
        <div className="travel-list">
          {travel}
        </div>
    </>
  )
}

export default App
