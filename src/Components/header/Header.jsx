import React from 'react'
import "./header.css"

function Header() {
  return (
           <>
               
               <div className='mainheader'>
               
                <div className='headerInnerDiv1'>

                    <img className='headerImg' src="/images/Screenshot 2023-12-20 010212.png" alt="" />

                </div>

                <div className='headerInnerDiv2'>

                    <div className='headerInnerDiv2Content'><i class="fa-sharp fa-solid fa-compact-disc"></i> ARAB industries pvt.limited</div>
                    <div className='headerInnerDiv2Arrow'> <i class="fa-solid fa-angle-down"></i></div>

                </div>

                <div className='headerInnerDiv3'>

                </div>

               </div>

           </>
  )
}

export default Header
