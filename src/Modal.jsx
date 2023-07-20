import React from 'react'
import './Modal.css'

function Modal({ children,closeModal,isModeModal}) {
  return (
    <div>
        <div className='modal' style={{border:'4px solid',borderColor: isModeModal ? 'yellowgreen' : 'red',textAlign: 'center','borderRadius':'20px'}}>
            {children}
            <button onClick={closeModal} className='clic'>Close</button>
        </div>

    </div>
  )
}

export default Modal