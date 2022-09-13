import React from 'react';
import about from '../assets/about.png';
import { GrTwitter, GrInstagram } from 'react-icons/gr';
import { AiOutlineYoutube} from 'react-icons/ai';

const Contact = () => {
  return (
    <section className='mx-6 md:mx-20 text-primary lg:h-screen pt-6' id='contact'>
        <div className='text-center mt-6 mb-6'>
            <h2 className='font-bold text-2xl md:text-4xl mb-2'>Contact Me</h2>
            <p>Need anything? Kindly fill the form below</p>
        </div>
        <div className='flex gap-8'>
            <div className='hidden lg:block'>
                <img src={about} alt='about' />
            </div>
            <div className='w-full'>
                <form className='max-w-3xl'>
                    <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Name' className='mr-7 font-semibold'>Name</label>
                        <input className='border p-3 focus:outline-none focus:border-[#CCCCCC] w-full' id='Name'></input>
                    </div>
                    <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Email' className='mr-8 font-semibold'>Email</label>
                        <input className='border p-3 focus:outline-none focus:border-[#CCCCCC] w-full' id='Email'></input>
                    </div>
                    <div className='md:flex justify-between items-center mb-8'>
                        <label htmlFor='Subject' className='mr-4 font-semibold'>Subject</label>
                        <input className='border p-3 focus:outline-none focus:border-[#CCCCCC] w-full' id='Subject'></input>
                    </div>
                    <div className='md:flex justify-between'>
                        <label htmlFor='Message' className='mr-2 font-semibold'>Message</label>
                        <textarea className='border p-3 focus:outline-none focus:border-[#CCCCCC] w-full h-48' id='Message'></textarea>
                    </div>
                    <div className='mt-4 md:ml-[4.5rem]'>
                        <button href='/#' className='border border-color-[#404040] px-8 py-4 inline-block hover:text-[#F2F2F2] hover:bg-primary'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='text-center mt-5'>
            <p className='text-sm'>Copyright © 2022 All rights reserved | Developed by Fave ⚡</p>
            <span className='flex items-center gap-8 mx-auto w-24 md:w-48 my-4'>
                <a href='/#' className='hover:text-[#1DA1F2]'> <GrTwitter className='w-6 ' /> </a>
                <a href='/#' className='hover:text-[#DD2A7B]'> <GrInstagram className='w-6' /> </a>
                <a href='/#' className='hover:text-[#FF0000]'> <AiOutlineYoutube className='w-6' /> </a>
            </span>
        </div>
    </section>
  )
}

export default Contact