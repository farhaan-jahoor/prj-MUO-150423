import React, { useEffect, useState } from 'react'

function MutuoCard({ companyName, logoUrl, loanType, amount }) {
    const [intero, setIntero] = useState(0);
    const [centesimi, setCentesimi] = useState(0);

    useEffect(() => {
        var rataMensile = amount.toFixed(2)
        var separated = rataMensile.split('.')
        setIntero(separated[0])
        setCentesimi(separated[1])
    }, [])
    

  return (
    <div className='w-full bg-white border border-gray-300 rounded-lg p-6 items-left text-left my-4'>
      <div className='items-left text-left'>
        <img src={logoUrl} className='h-8 max-w-[500px] mr-4' alt={companyName} />
        <p className='text-sm font-semibold'>{loanType}</p>
      </div>
      
      <div className='mt-6 ml-2 relative blur-[5px]'>
        <div className='TotalPrice mt-2'>
            <span className='font-bold text-4xl'>{intero}</span>
            <span className='font-bold text-xl'>,{centesimi} </span>
            <span className='font-medium text-m'>€/mese</span>
        </div>

        <div className='flex mt-2'>
            <div className='bg-gray-300 rounded-full p-1 px-2 text-xs m-1'>
                TAEG <span className='ml-1 font-semibold'>3,60%</span>
            </div>
            <div className='bg-gray-300 rounded-full p-1 px-2 text-xs m-1'>
                Durata <span className='ml-1 font-semibold'>5 anni</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MutuoCard
