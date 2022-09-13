import React from 'react';
import { GrTwitter, GrInstagram } from 'react-icons/gr';
import { AiOutlineYoutube} from 'react-icons/ai';
import { Turn as Hamburger } from 'hamburger-react'

const Header = () => {
    const [isOpen, setOpen] = React.useState(false)
   
    const handleToggle = () => {
        setOpen(prev => !prev)
        }
  return (
    <header className='relative bg-mobile-image text-primary bg-cover sm:bg-hero-image bg-no-repeat h-screen w-full object-cover md:bg-cover'>
        <nav>
            <ul className='hidden text-secondary sm:flex justify-end space-x-6 p-4 mr-8'>
                <li><a href='/#' className='hover:text-primary hover:transition duration-300'>Home</a></li>
                <li><a href='#about' className='hover:text-primary hover:transition duration-300'>About Me</a></li>
                <li><a href='#gallery' className='hover:text-primary hover:transition duration-300'>Gallery</a></li>
                <li><a href='#clients' className='hover:text-primary hover:transition duration-300'>Clients</a></li>
                <li><a href='#contact' className='hover:text-primary hover:transition duration-300'>Contact Me</a></li>
            </ul>

        <ul className={`nav-ul ${isOpen ? " nav-ul" : "showMenu"}`}>
                <li className='py-2 border-b'><a href='/#' className='hover:text-secondary'>Home</a></li>
                <li className='py-2 border-b'><a href='#about' className='hover:textsecondary'>About Me</a></li>
                <li className='py-2 border-b'><a href='#gallery' className='hover:text-secondary'>Gallery</a></li>
                <li className='py-2 border-b'><a href='#clients' className='hover:text-secondary'>Clients</a></li>
                <li className='py-2 border-b'><a href='#contact' className='hover:text-secondary'>Contact Me</a></li>
            </ul>

             <span className='flex p-6 sm:hidden'><Hamburger toggled={isOpen} toggle={handleToggle} color='#404040' direction='right' /></span> 
        </nav>
        <div className='sm:max-w-[470px] text-[#F2F2F2] w-[18rem] ml-4 bottom-4 left-10 sm:text-primary pt-4 md:[2.7rem] lg:pt-60 md:ml-20 absolute sm:static'>
            <h1 className='text-lg sm:text-2xl font-bold'>Hello,</h1>
            <h1 className='text-lg sm:text-2xl font-bold mb-3'>I am Paul Amusan</h1>
            <p className='text-sm lg:text-base'>Paul Amusan is a young, energetic, and talented fashion designer who focuses on his men's clothing line, Paul Amusan. His work draws inspiration from local Nigerian fabrics coupled with Japanese tailoring designs. His designs are masculine, yet modern and trendy by way of transforming an ordinary look into a sophisticated design that embraces elegance.</p>
            <div className='mt-2'>
            <button href='/#' className='border border-color-[#404040] px-6 py-2 lg:px-12 lg:py-4 inline-block hover:text-[#F2F2F2] hover:bg-primary'>Hire Me</button>
            </div>
        </div>
        <span className='hidden absolute right-4 bottom-4 md:flex flex-col gap-4'>
                <a href='/#' className='hover:text-[#1DA1F2]'> <GrTwitter className='w-6 ' /> </a>
                <a href='/#' className='hover:text-[#DD2A7B] '> <GrInstagram className='w-6' /> </a>
                <a href='/#' className='hover:text-[#FF0000] '> <AiOutlineYoutube className='w-6' /> </a>
            </span>
    </header>
  )
}

export default Header