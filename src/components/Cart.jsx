/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../Context/CartProvider';

export const Cart = ({ isVisible, closeCart }) => {
  const {cartItems, addItemToCart, deleteItemToCart} = useContext(CartContext)

  const total = cartItems.reduce((previous, current)=> previous + current.amout * current.price, 0)

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`cart-overlay ${isVisible ? 'cart-overlay--show' : ''}`} onClick={closeCart}>
      <div className="cart-overlay-content w-96 font-League cursor-default" onClick={stopPropagation}>
        <button className="close-button transition-all duration-300 hover:text-red-400" onClick={closeCart}>
          Cerrar
        </button>
          
        <header className='pt-16 pb-4'>
          <h2 className='text-2xl font-semibold pl-2'>Carrito de Compras</h2>
        </header>

        {cartItems.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <article>
            {cartItems.map((item) => (
              <div key={item.id} className='flex flex-row items-center justify-center pt-8 w-80 gap-6'>
                <div className='w-full'>
                  <img src={item.image_src} alt="" className='w-full'/>
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-2xl w-full'>{item.name}</h3>
                  <div className='flex justify-center items-center h-20'>
                    <p className='text-lg mr-3'>${item.price}</p>
                    <div className='flex flex-col items-center justify-center'>
                      <input type="number" placeholder={`${item.amout}`}
                        className='w-12 h-10 placeholder:text-black placeholder:font-bold outline-none border border-hover rounded-md px-2 input__cart'
                        value={item.quantity}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className='flex justify-between items-center -mt-5'>
                    <button className='transition-all duration-300 hover:text-lime-700' onClick={() => addItemToCart(item)}>Agregar</button>
                    <button className='transition-all duration-300 hover:text-red-400' onClick={() => deleteItemToCart(item)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </article>
        )}
        <div className='flex items-center justify-between ml-2 mr-12 py-8'>
          <h3 className='text-xl'>Total:</h3>
          <p className='text-xl'>${total}</p>
        </div>
      </div>
    </div>
  )
}
