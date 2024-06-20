/* eslint-disable react/prop-types */
import Imagen from '../assets/image/algarrob 1.png'

export const Cart = ({ isVisible, closeCart }) => {

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

    return (
      <div className={`cart-overlay ${isVisible ? 'cart-overlay--show' : ''}`} onClick={closeCart}>
      <div className="cart-overlay-content w-96 font-League cursor-default" onClick={stopPropagation}>
        <button className="close-button" onClick={closeCart}>
            Cerrar
        </button>
          
          <header className='pt-16 pb-4'>
            <h2 className='text-xl font-semibold'>Carrito de Compras</h2>
          </header>
    
            <p>El carrito está vacío</p>
              
            <article>
              <div className='flex flex-row items-center justify-center pt-8 w-80 gap-6'>
                  <div className='w-full'>
                      <img src={Imagen} alt="" className='w-full'/>
                  </div>
                  <div className='flex flex-col'>
                      <h3 className='text-2xl w-full'>Mate de algarrobo</h3>
                      <div className='flex justify-center items-center h-20'>
                          <p className='text-lg mr-3'>$21000</p>
                        <div className='flex flex-col items-center justify-center'>
                          <input type="number" placeholder='Cantidad'
                            className='w-32 h-10 outline-none border border-hover
                             rounded-md px-2'/>
                        </div>
                      </div>
                      <div className='flex justify-between items-center -mt-5'>
                        <button className='btn__increment'>+</button>
                        <button className='btn__decrement'>-</button>
                        <button className='transition-all duration-300 hover:text-red-400'>
                            Eliminar
                        </button>
                      </div>
                  </div>
                </div>
              </article>
        </div>
      </div>
  )
}
