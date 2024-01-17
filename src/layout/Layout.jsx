import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer' 
import '../assets/css/layout.css'

function Layout({children}) {
  return (
    <div>
        <Navbar></Navbar>
        <div className='layoutcontainer'>
        {children}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout