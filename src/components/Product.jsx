/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { Products } from "../Data/Products"

export const Product = ({ title }) => {
  return (
    <main className="py-12 md:px-48">
      <header className="pb-12">
        <h1 className="font-League text-4xl font-extrabold text-center">
          {title}
        </h1>
      </header>
      <div className="flex flex-wrap justify-center gap-8">
        {Products.map((product, key) => (
          <article
            key={key}
            className="shadow-lg flex flex-col justify-center
             items-center w-72 md:w-96 rounded-md 
             transition-transform duration-500 hover:scale-105"
          >
            <Link to={`/product/${product.id}`} target="_blank" className="w-full">
              <div className="w-full image__product">
                <img
                  src={product.image_src}
                  alt={`imagen de ${product.name}`}
                  className="w-full image__product rounded-t-md"
                />
              </div>
              <div className="pb-8 pt-4 font-League px-4">
                <h3 className="text-2xl md:text-3xl transition-colors duration-500 hover:text-hover">
                  {product.name}
                </h3>
                <h4 className="text-sm md:text-base text-gray-500">
                  {product.description}
                </h4>
                <h4 className="text-lg md:text-xl">${product.price}</h4>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
};