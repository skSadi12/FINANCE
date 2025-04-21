import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Debit() {
  return (
    <section className='flex flex-col-reverse md:flex-row justify-center items-center  gap-7 p-5'>
      <div className='space-y-5 text-center md:text-start w-full md:w-2/3'>
        <h2 className='text-[32px] sm:text-[34px] md:text-[48px] lg:text-[54px] font-bold leading-tight'>Wern Debit Card</h2>
        <p className='text-[#ADB2B1] text-[14px] md:text-[18px]'>More than just a card, it's a bridge to a new financial experience. Embrace the simplicity and security of spending your Cardano with the Wern Card.</p>
        <div>
            <button className='bg-[#772AB3] rounded-lg p-2 px-4 text-xl'>
            Create New Card <ArrowForwardIcon/>
            </button>
        </div>
        <p className='text-[#772AB3] text-[16px]'>Will be available soon</p>
      </div>
      <div>
        <img src="debit-card.svg" alt="" className='w-full' />
      </div>
    </section>
  )
}

export default Debit
