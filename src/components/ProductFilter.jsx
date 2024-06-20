import { Link } from 'react-router-dom'

export const ProductFilter = ({title,filteredProducts, hasSearched}) => {
  return (
    <main className="py-12">
      <header className="pb-12 font-League">
        {hasSearched && filteredProducts.length > 0 && (
            <h3 className='text-center py-2'>
                Resultado de la busqueda:
            </h3>
        )}
        <h1 className="text-4xl font-extrabold text-center uppercase">
          {title}
        </h1>
      </header>
      <div className="flex flex-col items-center justify-center gap-8">

        {filteredProducts.map((product, key) => (
          <article key={key}
          className="shadow-lg flex flex-col justify-center 
          items-center w-96 rounded-md transition-all duration-1000 hover:-translate-y-2">
            <Link to={`/product/${product.id}`}>
              <div className="w-full">
                <img src={product.image_src} alt={`imagen de ${product.name}`}
                className="w-full"/>
              </div>
              <div className="pb-8 pt-4 font-League ml-6">
                <h3 className="text-3xl transition-all duration-1000 hover:text-hover">
                    {product.name}
                  </h3>
                <h4 className="text-base text-gray-500 w-80">
                  {product.description}
                </h4>
                <h4 className="text-xl">${product.price}</h4>
              </div>
          </Link>
          </article>
        ))}
      </div>
    </main>
    )
}
