import { useContext, useState } from "react"
import { Navbar } from "../components/Navbar"
import { Product}  from "../components/Product"
import { Back } from "../components/ProductDetail/Back"
import { SearchContext } from "../Context/SearchProvider"
import { ProductFilter } from "../components/ProductFilter"

export const PageProduct = () => {
  const [title , setTitle] = useState('Productos');
  const {filteredProducts, hasSearched, searchedTitle} = useContext(SearchContext)
  return (
    <div className="bg-detail">
        <Navbar/>
        <main className="pt-6">
          <Back/>
          {hasSearched && filteredProducts.length > 0 ?(
            <ProductFilter title={searchedTitle} filteredProducts={filteredProducts} hasSearched={hasSearched}/>
          ):(
              <Product title ={title}/>
          )}
        </main>
    </div>
  )
}
