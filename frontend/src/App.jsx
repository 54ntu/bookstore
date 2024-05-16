import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './components/Homepage'
import Dashboard from './components/Dashboard'
import Addbook from './components/Addbook'
import Bookdetail from './components/Bookdetail'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/bookdetail' element={<Bookdetail/>}/>
        <Route path='/dashboard'>
          <Route index element={<Dashboard/>}/>
          <Route path='addbook' element={<Addbook/>}/>
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
