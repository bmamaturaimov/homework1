// import React from 'react'
import './NewEvenForm.css'
import { useState } from 'react'


function NewEvenForm() {
    const [title,setTitle] = useState('')
    const [date,setDate] = useState('')

    const resetInputs = () => {
        setTitle('')
        setDate('')
    }


  return (
    <form className='nem-event-form'>
        <label>
            <span>Event Title</span>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
            <span>Event Date</span>
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
        </label>
        
        <button className='butn-1 ' onClick={resetInputs} type='button'>Submit3</button>
        <p>Title: {title}</p>
        <p>Date: {date}</p>
    </form>
  )
}

export default NewEvenForm