import React from 'react'
import Button from '../Components/Button'
import {  Laptop, Server, Brush, Zap } from 'lucide-react'

const Data = [
    {
        id : 1,
        title : 'From End Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui corporis laudantium, ipsam nostrum reiciendis id voluptate necessitatibus accusantium ea.',
        icons: Laptop
    },


    {
        id : 2,
        title : 'From End Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui corporis laudantium, ipsam nostrum reiciendis id voluptate necessitatibus accusantium ea.',
        icons: Server
    },
    {
        id : 3,
        title : 'From End Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui corporis laudantium, ipsam nostrum reiciendis id voluptate necessitatibus accusantium ea.',
        icons: Brush
    },
    {
        id : 4,
        title : 'From End Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui corporis laudantium, ipsam nostrum reiciendis id voluptate necessitatibus accusantium ea.',
        icons: Zap
    },
]


function Services() {
  return (
    <section>
      <div className='text-white'>
        <h2>My Services</h2>
        <p>I provide a range of high-quality solutions designed to meet both technical and creative needs.Whether you're building a website, designing an interface, or improving performance, my services are tailored to deliver reliable and visually appealing results.</p>
        <Button name='Learn More' style='bg-white text-black p-2 rounded-sm' />

        {/* Mapping Starts Here */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          {Data.map((item) => {
            const Icon = item.icons; // this allows you to use <Icon />
            return (
              <div key={item.id} className='p-4 border border-gray-600 rounded-lg space-y-3'>
                <Icon className='w-10 h-10 text-white' />
                <h3 className='text-xl font-semibold'>{item.title}</h3>
                <p className='text-gray-300'>{item.desc}</p>
              </div>
            );
          })}
        </div>
        {/* Mapping Ends Here */}
        
      </div>
    </section>
  );
}

export default Services;