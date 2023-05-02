import React, { useState, useEffect } from 'react'
import MutuoCard from './MutuoCard'
import RestUtil from "../utils/RestUtil";
import Loader from "./Loader";

function Mutui({ clientName, isFisso, importoMutuo, selectedYear }) {
    const REST = new RestUtil("http://localhost:8080/api/");
    const [mutuiOptions, setMutuiOptions] = useState();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            REST.post(
                "loans", 
                {
                    "fisso": isFisso,
                    "durata": selectedYear,
                    "importo": importoMutuo
                })
                .then((data) => {
                    setMutuiOptions(data);
                })
                .catch((error) => console.log(error));
        }, 500);
    
        return () => {
          clearTimeout(timer);
        };
      }, [isFisso, importoMutuo, selectedYear]);
    
  return (
    <div className='container px-10 py-5 mx-auto items-center text-center'>
        <div className="text-center text-lg font-bold text-gray-800 my-5">
            <h2>{clientName}, ora che hai una stima,</h2>
            <h2>vai al dettagli dei mutui</h2>
        </div>
        <div className='items-center text-center justify-content-center rounded-lg bg-gradient-to-b from-[#f7f8fa] to-transparent p-4 mx-20'>
            <div className='max-w-[400px] mx-auto my-10'>
                <p className='my-4 font-semibold text-base'>Visualliza i mutui nell'app <span className='text-red-500 font-semibold'>({mutuiOptions?.length})</span></p>
                <p className='my-4 font-medium text-base text-[#565759] max-w-[400px] mx-auto'> Scopri le banche che offrono questi tassi e ottieni supporto gratuito fino all'ottenimento dle mutuo</p>
                <button class="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-lg w-full h-12 my-5">
                    <span className="text-center font-medium">
                        MOSTRAMI I MUTUI
                    </span>
                </button>
                <p className='text-[#97989a] text-sm'>Accesso diretto. Nessun vincolo.</p>

                <div className='mt-10 relative max-h-[33vw] overflow-hidden'>
                    {
                        mutuiOptions != null || mutuiOptions !== undefined 
                         ?  mutuiOptions.map((item) => (
                                <MutuoCard details={item} />
                            ))
                         : <Loader />
                    }
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