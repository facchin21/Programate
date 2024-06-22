export const ImagesProducts = (product) => {
    const producto = product.product;
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="py-8">
            <h1 className="font-League font-light text-3xl py-2 px-2">
              {producto.name}
            </h1>
            <img src={producto.image_src} alt={`Imagen de ${product.name}`} 
            className="w-80"/>
        </div>
    </div>
  )
}
