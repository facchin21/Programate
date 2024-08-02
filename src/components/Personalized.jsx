import ImageMate from '../assets/image/materiquelme 1.png'
import { Whatsapp } from '../Data/Whatsapp'

export const Personalized = () => {

  const title = "Personaliza tu mate"
  const btn_text = 'Envia tu Grabado'

  const items = [
    {
          paso : `
          Paso 1: Realizar la compra del Mate Camionero
          , Imperial o Algarrobo PERSONALIZADO
          `
    },
    {
        paso : `
        Paso 2:  Escribir vía WhatsApp al diseñador mencionándole tu 
        número de orden Y tu idea de diseño.
        `
    },
    {
        paso : `
        Paso 3: Elegís la letra y los emojis que más te gusten!
         Cada mate es  mundo.
        `
    },

  ]

  const openWhatsApp = () =>{
    window.location.href = (Whatsapp.whatsappURL)
  }

    return (
    <div className='py-12 font-League'>
        <header className='w-full text-center'>
            <h1 className='text-4xl font-semibold py-4'>{title}</h1>
        </header>
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='w-full flex justify-center py-8 md:w-3/12'>
                <img src={ImageMate} alt="Imagen de un Mate"
                className='w-10/12 transition-all duration-1000 hover:-translate-y-2'/>
            </div>
            <ul className='flex flex-col items-center justify-center
            gap-6 mb-12'>
                {items.map((item, key)=>(
                    <li key={key} 
                    className='w-10/12 text-center'>
                        <h3 className='font-semibold text-lg'>{item.paso}</h3>
                    </li>
                ))}
            <button className='py-4 px-6 bg-black text-white font-bold
            text-lg transition-all duration-1000 hover:bg-hover'
            onClick={openWhatsApp}>
                {btn_text}
            </button>
            </ul>

        </div>
    </div>
  )
}
