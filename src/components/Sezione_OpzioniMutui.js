import React from 'react'
import MutuoCard from './MutuoCard'

function Mutui({ clientName }) {
  return (
    <div className='container px-10 py-5 mx-auto items-center text-center'>
        <div className="text-center text-lg font-bold text-gray-800 my-5">
            <h2>{clientName}, ora che hai una stima,</h2>
            <h2>vai al dettagli dei mutui</h2>
        </div>
        <div className='items-center text-center justify-content-center rounded-lg bg-gradient-to-b from-[#f7f8fa] to-transparent p-4 mx-20'>
            <div className='max-w-[400px] mx-auto my-10'>
                <p className='my-4 font-semibold text-base'>Visualliza i mutui nell'app <span className='text-red-500 font-semibold'>(5)</span></p>
                <p className='my-4 font-medium text-base text-[#565759] max-w-[400px] mx-auto'> Scopri le banche che offrono questi tassi e ottieni supporto gratuito fino all'ottenimento dle mutuo</p>
                <button class="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-lg w-full h-12 my-5">
                    <span className="text-center font-medium">
                        MOSTRAMI I MUTUI
                    </span>
                </button>
                <p className='text-[#97989a] text-sm'>Accesso diretto. Nessun vincolo.</p>

                <div className='mt-10 relative max-h-[33vw] overflow-hidden'>
                    <MutuoCard companyName="Intesa San Paolo" logoUrl="https://www.mutuiamo.it/logoimgs/banksLogos/logo-intesa-sanpaolo.svg" loanType="Mutuo in tasca" amount={538.30} />
                    <MutuoCard companyName="Crèdit Agricole" logoUrl="https://www.mutuiamo.it/logoimgs/banksLogos/logo-credit-agricole.svg" loanType="Mutuo Giovani Crèdit Agricole con CPI Vita" amount={780.71} />
                    <MutuoCard  companyName="BNL" logoUrl="https://www.mutuiamo.it/logoimgs/banksLogos/logo-bnl.svg" loanType="BNL Giovani Home" amount={681.28} />
                    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparennt"></div>
                </div>
                <button class="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-lg w-full h-12 my-5">
                    <span className="text-center font-medium">
                        VISUALLIZA I MUTUI IN APP
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Mutui