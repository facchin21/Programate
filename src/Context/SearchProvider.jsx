/* eslint-disable react/prop-types */
import {createContext, useState} from 'react'

// Creo el contexto
export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [hasSearched, setHasSearched] = useState(false)
  const [searchedTitle, setsearchedTitle] = useState("")
  
  return (
    <SearchContext.Provider value={{ filteredProducts, setFilteredProducts, hasSearched, setHasSearched,searchedTitle, setsearchedTitle }}>
      {children}
    </SearchContext.Provider>
  )
}
