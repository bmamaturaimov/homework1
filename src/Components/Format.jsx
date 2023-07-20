import React from 'react'
import './Format.css'

const Format = (props) => {
   

  return (
    <div className='content' style={{backgroundColor: props.color}}>


      <h1>{props.SamsuncName}</h1>
      <h2>{props.price}</h2>
      <h3>{props.color}</h3>

    </div>
  )
}

export default Format