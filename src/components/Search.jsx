import { useContext } from "react";
import { Products } from '../Data/Products'
import ImageSearch from "../assets/image/search.png";
import { SearchContext } from "../Context/SearchProvider";

export const Search = () => {
    const { setFilteredProducts, setHasSearched, setsearchedTitle } = useContext(SearchContext);

    const search = (e) => {
      const params = e.target.value.toLowerCase();
      if (params.trim() === "") {
          setFilteredProducts([]);
          setHasSearched(false);
          setsearchedTitle("");
      } else {
          const productFilter = Products.filter(product => product.name.toLowerCase().includes(params));
          setFilteredProducts(productFilter);
          setHasSearched(true);
          setsearchedTitle(params);
      }
  };
  return (
    <div className="flex items-center container__btn-search">
        <div className="btn__search">
            <img
             src={ImageSearch} alt="Icono Search"
             className="cursor-pointer icon__search"/>
        </div>
        <input type="text" className="input__search" 
            onKeyUp={search} placeholder="Buscar"/>
    </div>
  )
}
