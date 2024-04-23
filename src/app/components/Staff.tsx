import Image from 'next/image'
import React from 'react'

export default function Staff() {
  return (
    <section className='mt-24'>
        <h1 className="text-5xl font-semibold text-teal-900 text-center">What is it like to work with us?</h1>
        

        <div className="flex justify-center ">
                <div className="my-auto rounded-full size-10 bg-teal-900 text-white cusror-pointer text-center flex flex-col justify-center cursor-pointer hover:scale-110 transition-all duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>

                </div>
                <div className="mt-10 w-2/3">
                    <div className="size-32 relative mx-auto mb-4">
                        <Image src="/sailor.png" fill alt='image' className='object-cover rounded-lg' />
                    </div>
                    <div className="text-center w-4/5 mx-auto text-teal-900">
                        <p className="">It was an game changer. At SightBoost I got access to advanced tools and machines that make my work easier and far much accurate.</p>
                        <p className='text-right font-semibold mt-2'>-Dr. Jack Sparrow</p>
                        <p className='text-right'>-Optician</p>
                    </div>
                </div>
                <div className="my-auto rounded-full size-10 bg-teal-900 text-white cusror-pointer text-center flex flex-col justify-center cursor-pointer hover:scale-110 transition-all duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>



                </div>
            </div>
    </section>
  )
}