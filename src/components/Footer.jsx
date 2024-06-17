import IconEmail from '../assets/image/mail 1.png'
import IconPhone from '../assets/image/phone 1.png'
import IconTikTok from '../assets/image/brand-tiktok 1.png'
import IconInstagram from '../assets/image/brand-instagram 1.png'
import IconYoutube from '../assets/image/brand-youtube 1.png'
import { Link } from 'react-router-dom'


export const Footer = () => {

    const titleContact = "Contacto"
    const contacts = [
      {
        text : "programate@gmail.com",
        image : IconEmail
      },
      {
        text : "2494 000000",
        image : IconPhone
      }
    ]
    const titleSocial = "Redes Sociales"

    const socials = [
      {
        link : "https://www.tiktok.com/@programate_",
        image : IconTikTok ,
        name : "Tik Tok"
      },
      {
        link : "https://www.instagram.com/programate__/?igsh=NTA2aXFjODBvMWxx",
        image : IconInstagram,
        name : "Instagram"
      },
      {
        link : "https://www.youtube.com/@Programate_",
        image : IconYoutube,
        name : "Youtube"
      },
    ]

  return (
    <footer className="bg-black text-white font-League py-8
    flex flex-col gap-8 items-center justify-center">
          <div className='flex flex-col items-center justify-center'>
            <header>
              <h3 className='text-2xl font-semibold'>
                {titleContact}
              </h3>
            </header>
            {contacts.map((item, key)=>(
              <article key={key} 
              className='flex gap-4 items-center'>
                  <div>
                    <img src={item.image} alt={`Imagen de ${item.text}`}/>
                  </div>
                  <div>
                    <h5 className='text-lg font-semibold'>{item.text}</h5>
                  </div>
              </article>
            ))}
          </div>
          <div>
            <header>
              <h3 className='text-2xl font-semibold'>
                {titleSocial}
              </h3>
            </header>
            <div className='flex items-center gap-4 justify-center'>
              {socials.map((item, key)=>(
                <article key={key}>
                  <Link to={item.link}>
                    <img src={item.image} alt={`Icono de ${item.name}`}
                    className='cursor-pointer transition-all duration-300 
                    icon__footer'/>
                  </Link>
                </article>
              ))}
            </div>
          </div>
    </footer>
  )
}
