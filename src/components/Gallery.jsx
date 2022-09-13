import React from 'react';
import img1 from '../assets/gallery-1.png';
import img2 from '../assets/gallery-2.png';
import img3 from '../assets/gallery-3.png';
import img4 from '../assets/gallery-4.png';
import img5 from '../assets/gallery-5.png';
import img6 from '../assets/gallery-6.png';
import { CgArrowLongRight } from 'react-icons/cg';

const Gallery = () => {
  return (
    <section className='mx-20 text-primary py-8' id='gallery'>
        <div className='text-center mt-6 mb-4'>
            <h2 className='font-bold text-2xl md:text-4xl mb-2'>Gallery</h2>
            <p>Have a look at a collection of my recent works.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-x-1 gap-y-6 md:place-content-start place-content-center'>
            <div><img src={img1} alt='img' /></div>
            <div className='hidden md:block'><img src={img2} alt='img' /></div>
            <div className='hidden md:block'><img src={img3} alt='img' /></div>
            <div className='hidden md:block'><img src={img4} alt='img' /></div>
            <div className='hidden md:block'><img src={img5} alt='img' /></div>
            <div className='hidden md:block'><img src={img6} alt='img' /></div>
        </div>
        <div className='text-center w-32 mx-auto grid place-items-center my-8'>
            <a href='/#' className='border border-color-[#404040] px-4 py-2 flex gap-x-1 items-center hover:text-[#F2F2F2] hover:bg-primary'>View All <CgArrowLongRight /></a>
        </div>
    </section>    
  )
}

export default Gallery