import React from 'react'
import { AccordionData } from '../Constants/AccordionData'
import{useState} from 'react'

function Accordion() {
  const [openId ,setopenId] = useState (null)

  function handleToggle(id){
    setopenId (openId === id ? null : id)

  }
  return (
    <section className='mt-12'>
          <div className='w-4/5 grid gap-4 mx-auto'>
            {AccordionData.map((item) => {
              return(
                <div key={item.id} className='text-white border-b border-white py-4'>
                  <div className='flex justify-between' onClick={() => handleToggle(item.id)}>
                    <h2 className='text-2xl'>{item.title}</h2>
                    <span className='text-2xl'>{openId === item.id ? '-' : '+'}</span>
                    </div>
                   <div>
                    {openId === item.id ? (<div>
                      {item.description}
                    </div>) : null}
                    </div>
                  </div>
              )})}
              

        </div>
    </section>
  )
}

export default Accordion