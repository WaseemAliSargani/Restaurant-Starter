import React from 'react';
// import data
import { socialData } from "../data"

const Socials = () => {
  return <div className='flex gap-x-[10px]'>
    {socialData.map((icon, index) => {
      return <a  className='border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent' key={index} href={icon.href}>
        {icon.icon}
      </a>
    })}
  </div>
};

export default Socials;
