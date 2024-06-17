import { Link } from "react-router-dom";
import {products} from "../Data/Items"
import ImageLogo from "../assets/image/Logo.png";
import ImageSearch from "../assets/image/search.png";
import ImageShopping from "../assets/image/shopping-bag.png";
import ImageTriangle from "../assets/image/triangle 1.png"


export const Navbar = () => {
  
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
      <div className="flex justify-center items-center px-6">
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
        <li className="flex items-center justify-center gap-12 py-4 ">
          <div>
            <img
              src={ImageSearch}
              alt="Icono Search"
              className="cursor-pointer icon__search"
            />
          </div>
          <div>
            <img
              src={ImageShopping}
              alt="Icono Shopping Bag"
              className="cursor-pointer icon__shopping"
            />
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
