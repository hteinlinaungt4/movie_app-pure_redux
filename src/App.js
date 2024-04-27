import React from 'react'
import Header from './components/Header'
import { Route,Routes } from 'react-router'
import Home from './components/Home'
import Detail from './components/Detail'
import Notfound from './components/Notfound'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/movies' element={<Home></Home>}></Route>
        <Route path='/movie/:id' element={<Detail></Detail>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  )
}

export default App
