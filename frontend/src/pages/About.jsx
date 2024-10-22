import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2x1 pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Pharamacare, your trusted partner in health and wellness. 
            Our mission is to provide personalized care and quality pharmaceutical products to support your well-being. 
            With a dedicated team of professionals, we ensure that your health is our top priority. 
            Explore our services to discover how we can assist you.</p>
           <b className='text-gray-800'>Our Vision</b>
           <p>At Pharmacare, our vision is to create a healthier community by delivering exceptional pharmaceutical care. 
            We strive to be the pharmacy of choice, offering innovative solutions, expert advice, 
            and a compassionate approach to health management. Together, 
            we aim to make quality healthcare accessible and convenient for everyone.</p> 
        </div>
      </div>
      
    </div>
  )
}

export default About
