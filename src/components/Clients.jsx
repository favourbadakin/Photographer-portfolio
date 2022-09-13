import React from 'react';
import Client1 from '../assets/clients-1.png';
import Client2 from '../assets/client-2.png';
import Client3 from '../assets/client-3.png';

const Clients = () => {
  return (
    <section className='mx-20 text-primary py-4' id='clients'>
        <div className='text-center mt-6 mb-4'>
            <h2 className='font-bold text-2xl md:text-4xl mb-2'>Clients</h2>
            <p>We have built our reputation working with these top brands</p>
        </div>
        <div className='flex justify-between mt-10 lg:mt-12 gap-8'>
            <div><img src={Client1} alt='client' /></div>
            <div><img src={Client2} alt='client' /></div>
            <div><img src={Client3} alt='client' /></div>
        </div>    
    </section>
  )
}

export default Clients