import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/home/Home'
import Header from './components/layout/Header'
import Courses from './components/courses/Courses'

 const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
    </Router>
  )
}
export default App;

     

