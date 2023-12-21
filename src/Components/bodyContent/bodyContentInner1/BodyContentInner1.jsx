import React, { useEffect } from 'react'
import './BodyContentInner1.css'
function BodyContentInner1() {
    useEffect(()=>{
        document.getElementById("monthlyonclick").classList.add("monthlyonclick")
    },[])

    const monthlyonclick=()=>{

        document.getElementById("monthlyonclick").classList.add("monthlyonclick")
        document.getElementById("annuallclick").classList.remove("annuallclick")
    }

    const annuallclick=()=>{
        document.getElementById("annuallclick").classList.add("annuallclick")
        document.getElementById("monthlyonclick").classList.remove("monthlyonclick")
    }

  return (
    <div className='BodyContentInner1Div'>
        <div className='BodyContentInner1DivContent'>
            
         <h2>Choose a plan that's just right for you !</h2>
         
        </div>

        <div className='BodyContentInner1DivButton'>
           
          <div className='BodyContentInner1DivButtonInnerDiv'>
              <button id='monthlyonclick' onClick={monthlyonclick} className='BodyContentInner1DivButtonInnerDivButton'>
                Monthly
              </button>

              <button id='annuallclick' onClick={annuallclick} className='BodyContentInner1DivButtonInnerDivButton'>
                Annually
              </button>
          </div>

        </div>
   
    </div>
  )
}

export default BodyContentInner1
