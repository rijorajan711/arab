import React, { useState } from 'react'
import "./cardForBodyContentInner2.css"

function CardForBodyContentInner2({data}) {
   
   const [getStarted]=useState({
        display: "flex",
       height: "30px",
       backgroundColor:data.bg,
       width: "120px",
       justifyContent: "center",
       alignItems: "center",
       gap: "5px",
       borderRadius:"5px"
    })



  return (
    <div className='CardForBodyContentInner2'>
   
      <div className='section1CardForBodyContentInner2'>
          <h2>{data.title}</h2>
          <p className='linethrough'>$ {data.price}/m0</p>
          <span style={getStarted} className='actualline'>$ {data.offPrice}/mo</span>
          <div className='getStarted'>Get Started <i class="fa-solid fa-arrow-right"></i></div>
           <div className='borderLine'>
           </div>
              
      </div>
          
 
  



             
      <div className='section2CardForBodyContentInner2'>
     
      <div><p>what you'll get:</p></div> 
             <div className='whatyouget'><i class="fa-regular fa-user"></i><span>{data.user}</span></div>
             <div className='whatyouget'><i class="fa-solid fa-cloud-arrow-up"></i> <span>{data.storage}</span></div>
              <div className='whatyouget'><i class="fa-regular fa-envelope"></i><span>{data.support}</span></div>
        
     </div>
      
    </div>
  )
}

export default CardForBodyContentInner2

