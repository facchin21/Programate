import { useParams } from 'react-router-dom'
import { Products } from '../Data/Products'
import {Navbar} from "../components/Navbar"
import { Back } from '../components/ProductDetail/Back';
import { ImagesProducts } from '../components/ProductDetail/ImagesProducts';
import { Detail } from '../components/ProductDetail/Detail';
import { Footer } from "../components/Footer"

export const ProductDetail = () => {
const { productId } = useParams();
const product = Products.find((p) => p.id.toString() === productId)

if(!product){
    return <div>Product not Found!</div>
}
    return (
    <div className='bg-primary'>
        <Navbar/>
        <main>
            <div>
                <Back/>
                <ImagesProducts product={product}/>
                <Detail product={product}/>
                <Footer/>
            </div>
        </main>
    </div>
  )
}
