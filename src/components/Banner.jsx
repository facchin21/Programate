import ImagenBanner from "../assets/image/BannerMobile.png"
import ImageBannerDesktop from '../assets/image/Banner.png'
import { useState } from "react";
import { useEffect } from "react";

export const Banner = () => {    

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(()=>{
    const handleResize = () =>{
      setIsDesktop(window.innerWidth > 1024);
    }

    window.addEventListener('resize', handleResize);

    return () =>{
      window.removeEventListener('resize', handleResize)
    }
  },[])
  
    return (
    <div className='w-full'>
      {!isDesktop ?
        <img src={ImagenBanner} alt="Imagen del Banner Mobile" 
        className='w-full object-contain h-auto'/>
        : 
        <img src={ImageBannerDesktop} alt="Imagen del Banner Desktop"
        className="w-full object-contain h-auto"/>
      }
    </div>
  )
}
