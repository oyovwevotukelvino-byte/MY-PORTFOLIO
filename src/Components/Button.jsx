import React from 'react'

function Button({name, style}) {
  return (
    <button className={`${style} text-black rounded-sm`}>
      {name}

    </button>

  )
}

export default Button