import React, { useEffect } from 'react'

function Effect() {


  useEffect(() => {
    console.log('Component mounted')
  },);
  return (
    <div className='text-white'>
      <h2>Hello world </h2>
      <h2>Welcome to</h2>
      <h2>you tech space</h2>
      

    </div>
  )
}

export default Effect