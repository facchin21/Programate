import { Navbar } from "../components/Navbar"
import { Banner } from "../components/Banner"
import { Product } from "../components/Product"
import { Stats } from "../components/Stats"
import { Personalized } from "../components/Personalized"
import { Footer } from "../components/Footer"


export const Home = () => {
  const title = "Productos destacados"
  return (
    <>
     <Navbar/>
        <Banner/>
        <Product title={title}/>
        <Stats/>
        <Personalized/>
        <Footer/>
    </>
  )
}
