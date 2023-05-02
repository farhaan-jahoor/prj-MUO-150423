import React, { useEffect, useState } from 'react'
import Tooltip from './Tooltip'

import CircleInfo from '../resources/img/info-ico.svg'

function TipologiaTasso({isFisso, setIsFisso, importoMutuo, setImportoMutuo, valoreImmobile, setValoreImmobile, selectedYear, setSelectedYear}) {

  const [livelloSostenibilita, setLivelloSostenibilita] = useState(2)
  const [percentImmobile, setPercentImmobile] = useState(0)
  const [importoInt, setImportoInt] = useState(0)
  const [importoDec, setImportoDec] = useState(0)

  const years = [5, 10, 15, 20, 25, 30]

  useEffect(() => {
    calculatePercentage()
  }, [valoreImmobile, importoMutuo])

  useEffect(() => {
    calculateRataMensile()
  }, [importoMutuo, selectedYear, isFisso])

  useEffect(() => {
    if (importoInt <= 550) setLivelloSostenibilita(2)
    else if (importoInt > 550 && importoInt < 1000) setLivelloSostenibilita(1)
    else if (importoInt >= 1000) setLivelloSostenibilita(0)
  }, [importoInt])

  const handleClick = year => {
    setSelectedYear(year)
  }

  const handleSwitch = state => {
    setIsFisso(state)
  }

  const handleImportoMutuo = value => {
    //0 = ADD, 1 = SUBTRACT
    if (value === 0) {
      var newVal = importoMutuo + 10000
      setImportoMutuo(newVal)
    }
    if (value === 1 && importoMutuo > 10000) {
      var newVal = importoMutuo - 10000
      setImportoMutuo(newVal)
    }
  }

  const calculateRataMensile = () => {
    const tasso = isFisso ? 0.036 / 12 : 0.046 / 12
    var durata = selectedYear * 12

    var rata = (importoMutuo * tasso) / (1 - Math.pow(1 + tasso, -durata))
    var rataMensile = rata.toFixed(2)

    var separated = rataMensile.split('.')
    setImportoInt(separated[0])
    setImportoDec(separated[1])
  }

  const handleValoreImmobile = value => {
    //0 = ADD, 1 = SUBTRACT
    if (value === 0) {
      var newVal = valoreImmobile + 10000
      setValoreImmobile(newVal)
    }
    if (value === 1 && valoreImmobile > 10000) {
      var newVal = valoreImmobile - 10000
      setValoreImmobile(newVal)
    }
  }

  const calculatePercentage = () => {
    var value = (importoMutuo / valoreImmobile) * 100
    //console.log('valoreImmobile: ', valoreImmobile, ' / importoMutuo: ', importoMutuo, ' / tot: ', value);
    var roundedVal = Math.round(value)
    setPercentImmobile(roundedVal)
  }

  const addThousandSeparator = value => {
    return value.toLocaleString('it-IT')
  }

  return (
    <div className='container px-10 py-5 mx-auto items-center text-center'>
      <p className='mb-3 font-semibold text-base'>Tipologia tasso</p>

      <div className='inline-flex items-center p-1 rounded-lg bg-gray-200 text-gray-800 w-1/3 text-center mb-5'>
        <span
          className={`cursor-pointer w-full px-4 py-2 rounded-lg ${isFisso && 'bg-red-500 text-white'}`}
          onClick={() => handleSwitch(true)}
        >
          Fisso
        </span>
        <span
          className={`cursor-pointer w-full px-4 py-2 rounded-lg ${!isFisso && 'bg-red-500 text-white'}`}
          onClick={() => handleSwitch(false)}
        >
          Variabile
        </span>
      </div>

      <div className='TotalPrice mt-2'>
        <span className='font-bold text-5xl'>{importoInt}</span>
        <span className='font-bold text-3xl'>,{importoDec} </span>
        <span className='font-medium text-xl text-gray-500'>€/mese</span>
      </div>

      <div className='mx-20 mt-8'>
        <div className='flex items-center justify-between w-full my-5'>
          <div className='flex items-center'>
            <span className='text-gray-500 mr-2'>Miglior tasso</span>
            <Tooltip message={'INFO'}>
              <img src={CircleInfo} className='w-5' />
            </Tooltip>
          </div>
          <div className='font-semibold text-lg'>{isFisso ? '3,60%' : '4,60%'}</div>
        </div>
        <div className='flex items-center justify-between w-full my-5'>
          <div className='flex items-center'>
            <span className='text-gray-500 mr-2'>TAEG</span>
            <Tooltip message={'INFO'}>
              <img src={CircleInfo} className='w-5' />
            </Tooltip>
          </div>
          <div className='font-semibold text-base text-gray-500'>3,87%</div>
        </div>
        <div className='items-center justify-between w-full my-5'>
          <div className='flex items-center'>
            <span className='text-gray-500 mr-2'>Sostenibilità della rata</span>
            <Tooltip message={'INFO'}>
              <img src={CircleInfo} className='w-5' />
            </Tooltip>
          </div>
          <div className='rounded-full w-full h-11 flex mt-3'>
            <div
              className={`${
                livelloSostenibilita === 0
                  ? 'bg-red-400 text-white border-4 border-r-0 border-red-100'
                  : 'bg-[#fae5ec] text-[#e2668e] border-4 border-white'
              } rounded-l-full flex-1 flex justify-center items-center`}
            >
              Bassa
            </div>
            <div
              className={`${
                livelloSostenibilita === 1
                  ? 'bg-yellow-400 text-white border-4 border-yellow-100'
                  : 'bg-[#fef1da] text-[#fdc158] border-4 border-white'
              } flex-1 flex justify-center items-center`}
            >
              Media
            </div>
            <div
              className={`${
                livelloSostenibilita === 2
                  ? 'bg-green-400 text-white border-4 border-l-0 border-green-100'
                  : 'bg-[#dbfeda] text-[#00c10e] border-4 border-white'
              } rounded-r-full flex-1 flex justify-center items-center`}
            >
              Alta 😎
            </div>
          </div>
        </div>

        <hr />

        <div className='items-center justify-between w-full my-5'>
          <div className='flex items-center'>
            <span className='text-gray-500 my-2'>Durata (anni)</span>
          </div>
          <div className='inline-flex w-full bg-white border border-gray-300 rounded'>
            {years.map((year, index) => (
              <button
                key={year}
                className={`flex-grow text-center py-2 ${
                  selectedYear === year && 'bg-red-500 text-white'
                } border-r border-gray-300 ${index === 0 && 'rounded-l'} ${index === 5 && 'rounded-r'}`}
                onClick={() => handleClick(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <hr />

        <div className='items-center justify-between w-full my-5'>
          <div className='flex items-center'>
            <span className='text-gray-500 my-2'>Importo mutuo</span>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center'>
              <span className='font-medium mr-2 text-lg'>{addThousandSeparator(importoMutuo)} €</span>
            </div>
            <div className='flex justify-center'>
              <button
                className='w-12 h-12 rounded-full bg-[#eeeff1] text-black flex items-center justify-center hover:bg-[#cfcfcf] focus:outline-none text-4xl'
                onClick={() => handleImportoMutuo(1)}
              >
                -
              </button>
              <button
                id="increaseLoanAmount"
                className={`w-12 h-12 rounded-full flex items-center justify-center focus:outline-none ml-2 text-4xl bg-[#eeeff1] ${importoMutuo < valoreImmobile ? 'text-black  hover:bg-[#cfcfcf]' : 'text-[#cfcfcf]'} `}
                onClick={() => handleImportoMutuo(0)}
                disabled={ importoMutuo < valoreImmobile ? false : true}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <hr />

        <div className='items-center justify-between w-full my-5'>
          <div className='flex items-center'>
            <span className='text-gray-500 my-2'>Valore immobile</span>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center'>
              <span className='font-medium mr-2 text-lg'>{addThousandSeparator(valoreImmobile)} €</span>
              <span className='bg-[#cfcfcf] rounded-lg p-1 text-[12px] font-semibold text-[#505254]'>
                {' '}
                {percentImmobile} %{' '}
              </span>
            </div>
            <div className='flex justify-center'>
              <button
                className='w-12 h-12 rounded-full bg-[#eeeff1] text-black flex items-center justify-center hover:bg-[#cfcfcf] focus:outline-none text-4xl'
                onClick={() => handleValoreImmobile(1)}
              >
                -
              </button>
              <button
                className='w-12 h-12 rounded-full bg-[#eeeff1] text-black flex items-center justify-center hover:bg-[#cfcfcf] focus:outline-none ml-2 text-4xl'
                onClick={() => handleValoreImmobile(0)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <hr />

        <p className='text-sm text-gray-400 my-5'> Le condizioni potrebbero variare in base al tuo ISEE </p>
      </div>
    </div>
  )
}

export default TipologiaTasso
