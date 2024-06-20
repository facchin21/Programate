import {Routes, Route, BrowserRouter} from "react-router-dom"
import { Home } from "./pages/Home"
import { ProductDetail } from "./pages/ProductDetail"
import { ProductsGlobal } from "./pages/ProductsGlobal"
import { PageProduct } from "./pages/PageProduct"
import { SearchProvider } from "./Context/SearchProvider"


function App() {

  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/products/:type" element={<ProductsGlobal />} />
          <Route path="/product/" element={<PageProduct />} />
        </Routes>
      </BrowserRouter>
  </SearchProvider>
  )
}

export default App
