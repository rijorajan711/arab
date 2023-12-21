import React from 'react'
import "./bodyContent.css"
import BodyContentInner1 from './bodyContentInner1/BodyContentInner1'
import BodyContentInner2 from './BodyContentInner2/BodyContentInner2'
import BodyContentInner3 from './bodyContentInner3/BodyContentInner3'
function BodyContent() {
  return (
    <div className='bodyContent'>

        <BodyContentInner1/>
        <BodyContentInner2/>
        <BodyContentInner3/>
      
    </div>
  )
}

export default BodyContent
