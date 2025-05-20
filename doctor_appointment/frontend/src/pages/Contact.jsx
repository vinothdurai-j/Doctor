import React from 'react'
import {assets} from "../assets/assets_frontend/assets"

const Contact = () => {



  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm '>

        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="contact" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'>123, MG Road, <br />
            Bangalore, Karnataka, India
          </p>
          <p className='text-gray-500'>Tel: +91 7094685268 <br/> Email: gowtham.mca.g@gmail.com</p>
          
          <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm rounded-lg hover:bg-black hover:text-white transition-all duration-300'>Explore Jobs</button>
        </div>

        
      </div>
    </div>
  )
}

export default Contact
