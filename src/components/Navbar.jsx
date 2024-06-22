import ImageShopping from "../assets/image/shopping-bag.png";
import ImageTriangle from "../assets/image/triangle 1.png"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartProvider";
import ImageLogo from "../assets/image/Logo.png";
import { Link } from "react-router-dom";
import {products} from "../Data/Items"
import { Search } from "./Search";
import { Cart } from "./Cart";

export const Navbar = () => {
  const {cartItems} = useContext(CartContext)
  const [productLength, setProductLength] = useState(0)
  const [isCartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    setProductLength(
      cartItems.reduce((previous, current) => previous + current.amout, 0)
    );
  }, [cartItems]);


    const toggleCart = () => {
        setCartVisible(!isCartVisible);
    };

    const closeCart = () => {
        setCartVisible(false);
    };

  const toggleMenu = () => {
    const menu = document.querySelector('.navbar__menu')
    const items_btn = document.querySelectorAll('.btn__menu-container')
    menu.classList.toggle('navbar__menu--active')
    items_btn.forEach(item => {
        item.classList.toggle('btn__menu-container--active')
    });
}

  return (
    <nav className="bg-primary font-League">
      <div className="flex justify-center items-center px-6 z-50">
        <div>
          <img src={ImageLogo} alt="Logo Programate"
          className="w-10/12" />
        </div>
        <button className='btn__menu' onClick={toggleMenu}>
            <div className='btn__menu-container'></div>
            <div className='btn__menu-container'></div>
            <div className='btn__menu-container'></div>
        </button>
      </div>
      <ul className="navbar__menu bg-detail flex-col pt-4 pb-0
       w-10/12 absolute z-10 h-full">
        <button className="text-3xl w-full relative">
          <p className="absolute top-0 right-8"
          onClick={toggleMenu}>X</p>
        </button>
        <li className="flex items-center justify-center gap-12 py-4 ">
          <Search/>
          <div className="container__shopping relative z-20" onClick={toggleCart}>
            <img
              src={ImageShopping}
              alt="Icono Shopping Bag"
              className="cursor-pointer icon__shopping"
            />
             <Cart isVisible={isCartVisible} closeCart={closeCart}/>
            <div className="w-4 h-4 bg-white flex items-center justify-center py-4 px-4 
            rounded-full absolute -top-5 left-8 z-10 text-xl font-bold">
              {productLength}
            </div>
          </div>
        </li>
        {products.map((item, key) => (
            <li key={key} className="flex flex-col justify-center items-center">
            {item.name === "Productos" ? (
                <>
                <Link to={item.link}
                  className="text-xl transition-all duration-300
                      hover:font-bold item__product">
                  {item.name}
                </Link>
                <ul className="flex flex-col justify-center items-center 
                relative pt-7">
                    <img src={ImageTriangle} alt="Imagen triangulo"
                     className="image__triange"/>
                  {item.subItem.map((subItem, subKey) => (
                      <li key={subKey}>
                      <Link to={`/products${subItem.link}`}
                       className="text-lg transition-all duration-300 hover:font-bold">
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
                <Link to={item.link} className="text-xl transition-all 
                duration-300 hover:font-bold">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
