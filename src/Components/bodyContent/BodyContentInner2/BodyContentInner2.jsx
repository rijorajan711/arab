import React, { useState } from 'react'
import "./BodyContentInner2.css"
import CardForBodyContentInner2 from './CardForBodyCaontainer2/CardForBodyContentInner2'
function BodyContentInner2() {
const [dataToCard,setDataToCard]=useState([
    {
    bg:"#f0d786",    
    title:"Basic",
    price:89.99,
    offPrice:9.99,
    user:"Upto 25 Users",
    storage:"Upto 25gb Storage",
    support:"Email Support"},
    {   bg:"#c95364",
        title:"Standard",
        price:189.99,
        offPrice:99.99,
        user:"Upto 50 Users",
        storage:"Upto 60gb Storage",
        support:"Email+Chat Support"},
        {   
            bg:"#ac78cc",
            title:"Premium",
            price:389.99,
            offPrice:199.9,
            user:"Upto 75 Users",
            storage:"Upto 100gb Storage",
            support:"Email+chat+WhatsApp Support"}

])
    

  return (
    <div className='BodyContentInner2Div'>

        {dataToCard.map((data)=>(

            <CardForBodyContentInner2 data={data}/>

        ))
         } 
    
    </div>
  )
}

export default BodyContentInner2
