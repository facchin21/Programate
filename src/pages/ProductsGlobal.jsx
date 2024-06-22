import { Link, useParams } from "react-router-dom";
import { Products } from '../Data/Products';
import { Navbar } from "../components/Navbar";
import { Filter } from "../components/Filter";
import { Back } from '../components/ProductDetail/Back';
import { Footer } from '../components/Footer';
import ImagenFiltro from '../assets/image/adjustments.png';
import { useState } from "react";

export const ProductsGlobal = () => {
  const { type } = useParams();
  const [isFilter, setIsFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const productos = Products.filter((p) => p.type === type);
  
  const toggleFilter = () => {
    const filtros = document.querySelector('.barra__filtro');
    filtros.classList.toggle('barra__filtro--active');
  };
  
  const handleFilter = (filtered) => {
    setIsFilter(true);
    setFilteredProducts(filtered);
  };

  const displayedProducts = isFilter ? filteredProducts : productos;

  return (
    <div className="bg-detail">
      <Navbar/>
      <main className="pt-6">
        <Filter className="barra__filtro" toggleFilter={toggleFilter} productos={productos} handleFilter={handleFilter} />
        <Back/>
        <header className="w-full text-center py-6">
          <h2 className="text-3xl font-medium font-League">{type}</h2>
        </header>
        <div className="w-8 mx-2 fixed">
          <img src={ImagenFiltro} alt="Logo filtros" onClick={toggleFilter} className="cursor-pointer"/>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 pt-6 pb-12">
          {displayedProducts.map((product, key) => (
            <article key={key} className="shadow-lg flex flex-col justify-center items-center w-72 rounded-md transition-all duration-1000 hover:-translate-y-2">
              <Link to={`/product/${product.id}`}>
                <div className="w-72 flex justify-center items-center">
                  <img src={product.image_src} alt={`imagen de ${product.name}`} className="w-full"/>
                </div>
                <div className="pb-8 pt-4 font-League px-4">
                  <h3 className="text-3xl transition-all duration-1000 hover:text-hover">
                    {product.name}
                  </h3>
                  <h4 className="text-sm text-gray-500 w-64">
                    {product.description}
                  </h4>
                  <h4 className="text-xl">${product.price}</h4>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <Footer/>
      </main>
    </div>
  );
};
