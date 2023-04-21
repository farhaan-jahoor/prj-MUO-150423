import React from 'react'

function Recap({ progress }) {
    const limit = 4;
  return (
    <div className='container px-10 py-5 mx-auto items-center text-center'>
        <div className='max-w-[450px] mx-auto'>
            <p className='text-sm text-[#1bbb89] font-medium mb-4'>Ricapitolando</p>
            <div className="text-center text-lg font-bold text-gray-800 mb-5">
                <h2>Come trovare il mutuo perfetto</h2>
                <h2>con Mutiamo</h2>
            </div>
            <div className="flex gap-1">
                {[...Array(limit)].map((_, index) => (
                    <div className={`w-1/4 h-1 ${index < progress ? 'bg-[#1bbb89]' : 'bg-[#e1e3e6]'} rounded-full`}></div>
                ))}
            </div>
            <div className='listItems mt-10'>
                <div id='item-1' className='flex items-center my-4'>
                    <div class="w-8 h-8 rounded-full flex items-center justify-center border-[#1bbb89] border-2 flex-grow-0 flex-shrink-0">
                        <svg class="w-4 h-4 text-[#1bbb89] fill-current" viewBox="0 0 24 24">
                            <path strokeWidth="3" d="M20.2929 4.29289C19.9024 3.90237 19.2694 3.90237 18.8789 4.29289L8 15.171L5.12108 12.2921C4.73056 11.9016 4.09763 11.9016 3.70711 12.2921C3.31658 12.6826 3.31658 13.3155 3.70711 13.706L7.29289 17.2929C7.68342 17.6834 8.31658 17.6834 8.70711 17.2929L20.2929 5.70711C20.6834 5.31658 20.6834 4.68342 20.2929 4.29289Z"></path>
                        </svg>
                    </div>
                    <div className='ml-5'>
                        <p className='text-center text-lg font-semibold text-gray-800'>Fai il questionario in due minuti</p>
                    </div>
                </div>
                <hr className='my-6 border-1 border-[#cecfd3]' />
                <div id='item-2' className='flex items-center my-4'>
                    <div class="w-8 h-8 rounded-full flex items-center justify-center border-[#1bbb89] border-2 flex-grow-0 flex-shrink-0">
                        <svg class="w-4 h-4 text-[#1bbb89] fill-current" viewBox="0 0 24 24">
                            <path strokeWidth="3" d="M20.2929 4.29289C19.9024 3.90237 19.2694 3.90237 18.8789 4.29289L8 15.171L5.12108 12.2921C4.73056 11.9016 4.09763 11.9016 3.70711 12.2921C3.31658 12.6826 3.31658 13.3155 3.70711 13.706L7.29289 17.2929C7.68342 17.6834 8.31658 17.6834 8.70711 17.2929L20.2929 5.70711C20.6834 5.31658 20.6834 4.68342 20.2929 4.29289Z"></path>
                        </svg>
                    </div>
                    <div className='ml-5'>
                        <p className='text-center text-lg font-semibold text-gray-800'>Visualizza la stima</p>
                    </div>
                </div>
                <hr className='my-6 border-1 border-[#cecfd3]' />

                <div id='item-3' className='flex my-4'>
                    <div class="w-8 h-8 rounded-full border-[#cecfd3] border-2 flex-grow-0 flex-shrink-0">
                    </div>
                    <div>
                        <div className='ml-5 text-left'>
                            <p className='text-lg font-semibold text-gray-800'>Scarica l'app di Mutuiamo</p>
                            <p className='text-sm text-left text-gray-500'> Visualliza i dettagli dei mutui e richiedi supporto gratuito fino all'ottenimento.</p>
                            <button class="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-lg w-full h-12 mt-5">
                                <span className="text-center font-medium">
                                    SCARICA L'APP GRATUITA
                                </span>
                            </button>
                            <p className='text-sm text-center text-gray-500 my-2'>Accesso diretto. Nessun vincolo.</p>
                        </div>
                    </div>
                </div>
                <hr className='my-6 border-1 border-[#cecfd3]' />
                <div id='item-4' className='flex mt-4'>
                    <div class="w-8 h-8 rounded-full border-[#cecfd3] border-2 flex-grow-0 flex-shrink-0">
                    </div>
                    <div>
                        <div className='ml-5 text-left'>
                            <p className='text-lg font-semibold text-gray-800'>Parla con il tuo advisor</p>
                            <p className='text-sm text-left text-gray-500'>Fissa una consulenza telefonica senza vincoli per parlare del mutuo e ricevere consigli e dritte.</p>
                            <button class="bg-white border border-black hover:border-red-500 hover:text-black text-red-500 py-2 px-4 rounded-lg w-full h-12 mt-5">
                                <span className="text-center font-medium">
                                    RICHIEDI CONSULENZA GRATUITA
                                </span>
                            </button>
                            <p className='text-sm text-center text-gray-500 my-2'>Zero vincoli. Zero costi di intermediazione.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recap