import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Hero() {
  return (
    <section className='flex flex-col-reverse md:flex-row justify-center items-center  gap-10 p-5'>
      <div className='space-y-5 text-center md:text-start w-full md:w-2/3'>
        <h2 className='text-[32px] sm:text-[34px] md:text-[48px] lg:text-[54px] font-bold leading-tight'>Spend your Cardano anywhere, anytime.</h2>
        <p className='text-[#ADB2B1] text-[14px] md:text-[18px]'>Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</p>
        <div>
            <button className='bg-[#772AB3] rounded-lg p-2 px-4 text-xl'>
            Get Started <ArrowForwardIcon/>
            </button>
        </div>
      </div>
      <div>
        <img src="hero-card.png" alt="" className='w-full' />
      </div>
    </section>
  )
}

export default Hero
