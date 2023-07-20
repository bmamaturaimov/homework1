import React from 'react'
import Format from './Components/Format'


 const Map = () => {

    const array = [
        {
            SamsuncName: 'A 20',
            price: '800 $',
            color: 'blue',
           
        },
        {
            SamsuncName: 'A 30',
            price: '1000 $',
            color: 'red',
          
        },
        {
            SamsuncName: 'A 50',
            price: '1500 $',
            color: 'green',
        }
    
    ]



  return (
    <div>
        
      {array.map((el)=>(
            <Format key={el.price} SamsuncName={el.SamsuncName} price={el.price} color={el.color}/>

        ))}
    </div>
  )
}


export default Map

