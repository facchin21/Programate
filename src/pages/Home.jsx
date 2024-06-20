import { Navbar } from "../components/Navbar"
import { Banner } from "../components/Banner"
import { Stats } from "../components/Stats"
import { Personalized } from "../components/Personalized"
import { Footer } from "../components/Footer"
import { useContext, useState } from "react"
import { SearchContext } from "../Context/SearchProvider"
import { ProductFilter } from "../components/ProductFilter"
import { Products } from "../Data/Products"

export const Home = () => {
  const [title] = useState("Productos destacados");
  const {filteredProducts, hasSearched, searchedTitle} = useContext(SearchContext)
  const productFilter = Products.slice(1,4)
  return (
    <>
     <Navbar/>
        <Banner/>
        {hasSearched && filteredProducts.length > 0 ?(
            <ProductFilter title={searchedTitle} filteredProducts={filteredProducts} hasSearched={hasSearched}/>
          ):(
              <ProductFilter title ={title} filteredProducts={productFilter}/>
          )}
        <Stats/>
        <Personalized/>
        <Footer/>
    </>
  )
}
