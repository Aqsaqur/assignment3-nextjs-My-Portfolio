import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/NotePad.png)] bg-left lg:bg-[15%] bg-cover' 
    style={{backgroundSize: "40%"}}>
     <Navbar/> 
     <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
        <div>
          <p data-aos="zoom-in-up">Welcome</p>
          <p data-aos="zoom-in-up">To My</p>
          <p data-aos="zoom-in-up">Portofolio</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Hero
