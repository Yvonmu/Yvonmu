/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <img src={'/me1.png'} alt='' className='translate-z-0 w-full h-full'/>
  </div>;
};

export default Avatar;
