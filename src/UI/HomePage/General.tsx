import React from 'react';
import pho from '../../assets/grigorii-shcheglov-mKU8DKbDKY0-unsplash.jpg';
import Button from '../../UI-2.tsx/Button';


const General = () => {

  return (
    <>
      <div className='flex flex-row justify-around space-between bet items-start  bg-[#F9FAFB]'>
        <div className="flex flex-col ml-30">
          <h1 className='flex flex-col text-4xl text-black hover:text-blue-600 duration-300 mt-20 mb-8'>
            <span>Servicii Profesionale</span>
            <span>de Construcții </span>
            <span>și Reparații pentru Locuințe</span>
          </h1>
          <div className='flex flex-col hover:text-blue-600 duration-300 text-lg text-black mb-10'>
            <span>
              De la lucrări de betonare la instalații electrice și reparații generale,
            </span>
            <span>
              oferim măiestrie și calitate, având peste 15 ani de experiență
            </span>
            <span>
              în sprijinul proprietarilor de locuințe și al afacerilor.
            </span>
          </div>
          <Button className='bg-[#111827] text-white px-6 py-3 hover:bg-blue-600 transition duration-300 ease-in-out w-40 cursor-pointer  '>
            Contactează-ne
          </Button>
        </div>
        <img src={pho} alt="imagine" className='w-[600px] h-[400px] mb-20 mt-16 mr-16 rounded-lg object-cover '/>

    </div>
    </>
  )
}

export default General