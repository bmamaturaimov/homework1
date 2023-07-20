import React, {useState } from 'react'

function Input(props) {
    const[ state, setState]= useState("")
    console.log(state);

    function inputHandle (e){
        setState(e.target.value) 
    }

    function buttonHandle(){
        const obj={
            name:state,
            id:Math.random(),
        }
        props.onSave(obj)
        setState("")

    }




  return (
    <div >
      <input value={state} onChange={inputHandle} />

      <button onClick={buttonHandle} >add</button>
      
    </div>
  )
}

export default Input;