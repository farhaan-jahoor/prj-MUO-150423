import React, { useEffect, useState } from 'react'
import Loader from "./Loader";

function MutuoCard({ details }) {
    const [intero, setIntero] = useState(0);
    const [centesimi, setCentesimi] = useState(0);

    useEffect(() => {
        if(details != null || details !== undefined){
          var rata = parseInt(details.rata);
          var rataMensile = rata.toFixed(2)
          var separated = rataMensile.split('.')
          setIntero(separated[0])
          setCentesimi(separated[1])
        }
    }, [details])
    
    if(!details) return (<Loader />)

  return (
    <div className='w-full bg-white border border-gray-300 rounded-lg p-6 items-left text-left my-4 select-none'>
      <div className='items-left text-left'>
        <img src={details?.bank?.bankLogo} className='h-8 max-w-[500px] mr-4' alt={details?.bank?.bankName} />
        <p className='text-sm font-semibold'>{details?.bank?.loanType}</p>
      </div>
      
      <div className='mt-6 ml-2 relative blur-[1px]'>
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
