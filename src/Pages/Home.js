import React from 'react'
import Header from '../Layout/Header/Header'
import Menu from '../Layout/Header/Navbar'
import Carousel from '../Layout/Content/Carousel'
import Footer from '../Layout/Footer/Footer'





function Home() {
  return (
    <div>
      <Header/>
      <Menu/>
      <div className='body'>
      <Carousel/>
      
      </div>
      <Footer/>
    </div>
  )
}

export default Home