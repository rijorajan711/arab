import React from 'react'
import "./proDash.css"
import ProDashMenu from '../proDashMenu/ProDashMenu'
function ProDash() {
  return (
    <>
    
    
    <div className='proDashMain '>
        <div className='proDashMainInner1'>
            <img className='proDashImg' src="/images/WhatsApp Image 2023-07-01 at 08.38.19.jpg" alt="" />
            <div className='proDashMainInner1Name'><h3>RIJO RAJAN</h3><i style={{color:"blue"}} class="fa-solid fa-angle-right"></i></div>
            <p className='gmailClass'>rijokrajan27594@gmail.com</p>
        </div>

        <ProDashMenu />

        <div className='proDashMainInner3'>
            <button className='proDashMainInner3Button'>LogOut<i class="fa-solid fa-arrow-right-from-bracket"></i></button>
        </div>
      
    </div>

    {/* <div className='threeBar'><i  class="fa-solid fa-bars"></i></div> */}
   
    </>
  )
}

export default ProDash
