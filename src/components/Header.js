import React, { useEffect, useState } from 'react';

// import components
import Nav from "../components/Nav"
import Social from "../components/Socials"
// import logo 
import LogoWhite from "../assets/img/header/logo-white.png"
import DarkWhite from "../assets/img/header/logo-dark.png"


// import icons
import { HiMenuAlt4 } from 'react-icons/hi'

// import header variants



const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav state
  const [nav, setNav] = useState(false)

  // event Listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    })
  })

  return <header className={` ${isActive ? 'bg-black/90 shadow-2xl' : "bg-transparent"}  fixed w-full max-w-[1800px] z-50 py-4`}>
    <div className="container mx-auto">
      <div className='flex justify-between items-center px-4 lg:px-4 relative text-white '>

        {/* menu button */}
        <div className={`${nav ? "gap-y-0" : "gap-y-2"} flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none cursor-pointer border-2 rounded-full`}
          onClick={() => setNav(!nav)}>
          <HiMenuAlt4 />
        </div>

        {/* Logo */}
        <div className='order-1 lg:order-none lg:ml-[11rem]'
        >
          <a href="#">
            {/* if header is active make logo 90px 90px else 107px 107px */}
            <img className={`${isActive ? "w-[90px] h-[90px]" : "w-[107px] h-[107px]"}`} src={LogoWhite} alt="" />
          </a>
        </div>

        {/* Social icons*/}
        <div className='hidden lg:flex'>
          <Social />
        </div>

        {/* nav */}
        <div className={` ${nav ? "lg:top-[100px] right-0" : "lg:-top-[100vh] -right-full"} absolute bg-accent w-[310px] h-[60vh] right-0 lg:left-0 top-[120px] bottom-0 -z-50 rounded-lg shadow-xl transition-all duration-700`}>
          <Nav />
        </div>

      </div>
    </div>
  </header >;
};

export default Header;
