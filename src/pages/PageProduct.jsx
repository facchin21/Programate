import { Navbar } from "../components/Navbar"
import { Product}  from "../components/Product"
import { Back } from "../components/ProductDetail/Back"

export const PageProduct = () => {
  const title = 'Productos'
  return (
    <div className="bg-detail">
        <Navbar/>
        <main className="pt-6">
          <Back/>
          <Product title ={title}/>
        </main>
    </div>
  )
}
