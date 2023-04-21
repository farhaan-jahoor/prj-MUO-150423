import React from 'react'

function Footer() {
    var options = [
        {name: 'IT14068211003'},
        {name: 'Trasparenza', url: '#'},
        {name: 'Privacy', url: '#'},
        {name: 'Cookies', url: '#'}
    ]

  return (
    <div className='mt-10 w-full h-10 bg-black flex items-center justify-start text-xs text-white px-10'>
        <p className='text-left mr-1'>© Copyright 2023</p>
        <p className='text-left mr-3'>Mutiamo.it</p>
        {options.map((item) => (
            item?.url    
                ? <p className='text-left mr-1 font-semibold'>{'| '}{item.name}</p>
                : <p className='text-left mr-1'>{item.name}</p>
        ))}
    </div>
  )
}

export default Footer