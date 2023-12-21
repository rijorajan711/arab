import React, { useState } from 'react'
import "./body.css"
import ProDash from '../proDash/ProDash'
import BodyContent from '../bodyContent/BodyContent'
import BodyNotification from '../bodyNotification/BodyNotification'

function Body() {
    const [hai,setHai]=useState(true)
    
    const handleSideBar=()=>{
         const mainSideBar=document.getElementById("ProDashId")
         mainSideBar.classList.toggle("hiddenToShow")
         const maincenter=document.getElementById("BodyContentId")
         if(hai){

             maincenter.classList.add("showToHidden")
             setHai(false)
         }else{
            maincenter.classList.remove("showToHidden")
            setHai(true)
         }
    }

  return (
    <div className='mainBody'>
     <div className='threeBar'><i onClick={handleSideBar} class="fa-solid fa-bars"></i></div> 
     <div id='ProDashId' className='hellow'><ProDash /></div>
     <div id='BodyContentId'><BodyContent/></div>
     <BodyNotification/>
    </div>
  )
}

export default Body
     

     

      
