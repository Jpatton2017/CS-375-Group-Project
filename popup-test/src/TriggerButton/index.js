import React from 'react'

const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      clasName="btn btn-lg btn-danger center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  )
}

export default Trigger
