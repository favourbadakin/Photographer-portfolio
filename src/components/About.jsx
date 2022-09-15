import React from 'react';
import about from '../assets/about.png';

const About = () => {
  return (
    <section className='grid sm:grid-cols-2 pt-12 mx-6 md:mx-20 gap-x-4 text-primary py-8' id='about'>
        <div className='order-last md:order-first mt-6 md:mt-0'>
            <img className='w-full h-full object-fit' src={about} alt='about'/>
        </div>
        <div className= 'text-center sm:text-left order-first md:order-last '>
            <h2 className='text-2xl font-bold mb-6'>About Me</h2>
            <p className='mb-4'>Paul Amusan is a young, energetic, and talented fashion designer who focuses on his men's clothing line,
                 Paul Amusan. His work draws inspiration from local Nigerian fabrics coupled with
                  Japanese tailoring designs. His designs are masculine, yet modern and trendy by way of
                   transforming an ordinary look into a sophisticated design that embraces elegance.</p>
<p className='mb-4'>I began acquired his love for fashion when he was a young boy where he spent
     his time sketching and drawing. He loves to work with colors, and his awesome talent has seen his
      pieces worn by famous politicians and celebrities. Young and successful, he is a talented fashion 
      designer to watch out for as his name continues to cause ripples in both the local and global fashion
       industries.</p>
<p className='mb-4'>While in New York, I was employed in the Charivari Boutique where president of the company,
     Barbara Weiser, noticed my potential and passion for unique fashion and helped me launch my first 
     fashion collection. My passion for African fashion is profound. “Everything begins for me with the 
     print and fabric, which usually has some shine,” exclaims Faturoti. My deep African roots, as well as
      extensive global experience with having lived and worked in New York and Milan have been instrumental
       in her success and international spotlight.</p>
<p>My pieces are also sold globally in the UK, US, and France. Anthony uses his talent to make an impact
     on the community through a mentoring program he runs that helps young and upcoming Nigerian designers
      excel and compete on a global platform. Nature, colors, and artwork are his main sources of inspiration.</p>
        </div>
    </section>
  )
}

export default About
