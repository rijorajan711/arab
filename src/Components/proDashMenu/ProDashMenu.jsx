import React from 'react'
import "./proDashMenu.css"
function ProDashMenu() {
  return (
    <div className='dashBoardMenuMain'>
        <div className='dashBoardMenuInner'><i style={{color:"#0aabc4"}} class="fa-solid fa-gauge"></i><button className='dashBoardMenuInnerButton'>Dashboar</button></div>
        <div className='dashBoardMenuInner'><i style={{color:"#0aabc4"}} class="fa-brands fa-canadian-maple-leaf"></i><button className='dashBoardMenuInnerButton'>Perks</button></div>
        <div className='dashBoardMenuInner'><i style={{color:"#0aabc4"}} class="fa-solid fa-puzzle-piece"></i><button className='dashBoardMenuInnerButton'>Addons</button></div>
        <div className='dashBoardMenuInner'><i style={{color:"#0aabc4"}} class="fa-solid fa-clipboard-question"></i><button className='dashBoardMenuInnerButton'>FAQ</button></div>
        <div className='dashBoardMenuInner'><i style={{color:"#0aabc4"}} class="fa-solid fa-phone"></i><button className='dashBoardMenuInnerButton'>Support</button></div>


        
    </div>
  )
}

export default ProDashMenu
       

        
       

        
       
