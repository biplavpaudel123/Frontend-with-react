import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
      <>
      <Header/>
      <Outlet/> {/*For rendering childern Components */}
      <Footer/>
      </>
  )
}

export default App