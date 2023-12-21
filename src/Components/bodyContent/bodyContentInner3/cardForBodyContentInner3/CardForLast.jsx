import React from 'react'
import "./cardForLast.css"
function CardForLast({data}) {
  return (
    <div className='CardForLast'>

        <div className='CardForLastInner1'>
               <span className='freeforever'>Free Forever</span>
               {data? <h2>Free Starter</h2>:<h2>EnterPrice Plan</h2>}
               <p> The quickest and easiest way to try Protocols with basic functionalities</p>
                <button className='GITT'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='CardForLastInner2'>

        <div><p>what you'll get:</p></div> 
             <div className='whatyouget'><i class="fa-regular fa-user"></i><span>Upto 25 Users</span></div>
            {data? <div className='whatyouget'><i class="fa-solid fa-cloud-arrow-up"></i> <span>Upto 25gb Storage</span></div>:""}
            {data?  <div className='whatyouget'><i class="fa-regular fa-envelope"></i><span>Email Support</span></div>:""}
               <div className='whatyouget'><i class="fa-solid fa-check-double"></i><>Basic of Documents,Task Flow,Voting,Investor,Director and Team Management include</></div>  
        </div>
      
    </div>
  )
}

export default CardForLast
