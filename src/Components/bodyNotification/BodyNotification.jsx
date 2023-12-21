import React from 'react'
import "./bodyNotification.css"
function BodyNotification() {
  return (
    <div className='bodyNotification'>
      <div className='bodyNotificationInnerDiv1'>
      <i style={{color:"blue", fontSize:"x-large"}} class="fa-solid fa-bell"></i>
      <div className='count'>1</div>
      </div>
    </div>
  )
}

export default BodyNotification
