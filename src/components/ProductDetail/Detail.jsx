import {useContext} from 'react'
import { CartContext } from '../../Context/CartProvider'
import ImageTrucker from "../../assets/image/truckpng.png"
export const Detail = (product) => {
    const producto = product.product;

    const {addItemToCart} = useContext(CartContext)

    return (
    <div className="px-20 pb-8 font-League">
        <h3 className="font-medium text-2xl">
            ${producto.price}
        </h3>
        <div className="flex gap-2">
            <div className="flex gap-2">
                <label>Color:</label>
                <select name="color" className="rounded-md py-1">
                    {producto.colors.map((color, key) => (
                        <option value={color} key={key}>
                            {color}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex gap-2">
                <label>Caja de regalo</label>
                <select name="CajaRegalo" className="rounded-md py-1">
                    <option value="true">Si</option>
                    <option value="false">No</option>
                </select>
            </div>
        </div>
        <div>
            <label>Cantidad</label>
            <input type="number" className="rounded-md pl-4 py-1 mx-2 my-4" />
        </div>
        <div>
            <button className="w-full bg-black text-white
            font-medium py-2 rounded-md my-6 transition-all
             duration-1000 hover:bg-hover" onClick={()=> addItemToCart(producto)}>
                Agregar al Carrito
            </button>
        </div>
        <div>
            <div className="flex gap-2 items-center justify-center">
                <img src={ImageTrucker} alt="Image Trucker" />
                <span className="font-medium">Calcular costo del envio</span>
            </div>
            <div className="flex items-center py-4 justify-center">
                <input type="number" className="rounded-l-md py-1 pl-4"/>
                <input type="submit" value="Calcular" 
                className="rounded-r-md bg-black text-white py-1 px-2 cursor-pointer border-l
                transition-all duration-1000 hover:bg-hover"/>
            </div>
        </div>
        <div className="py-8 pb-12">
            <h3 className="text-2xl text-center">
                Caracteristicas
            </h3>
            <ul className="flex flex-col items-center justify-center
            gap-4 text-center">
                {producto.characteristics.map((p, key)=>(
                    <li key={key} className="flex items-baseline">
                         ✔️ {p} 
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
