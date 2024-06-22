/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

export const Filter = ({ toggleFilter, productos, handleFilter }) => {
  const [colors, setColors] = useState([]);
  
  useEffect(() => {
    const allColors = productos.reduce((acc, item) => {
      item.colors.forEach(color => {
        if (!acc.includes(color)) {
          acc.push(color);
        }
      });
      return acc;
    }, []);
    
    setColors(allColors);
  }, [productos]);

  const filterByColor = (color) => {
    const resultColor = productos.filter(productColors => productColors.colors.includes(color));
    handleFilter(resultColor);
  };

  return (
    <div className="flex flex-col py-12 px-6 bg-detail w-48 h-screen absolute barra__filtro">
      <button className='btn__menu' onClick={toggleFilter}>
        <div className='btn__menu-x'></div>
        <div className='btn__menu-x'></div>
      </button>
      <header>
        <h3 className="text-xl font-semibold">Filtros</h3>
      </header>
      <div className="py-8 font-League">
        <h3 className="text-lg font-medium">Color</h3>
        {colors.map((item, key) => (
          <div key={key} className="flex gap-2 items-center">
            <input type="checkbox" 
                   className="custom-checkbox" onClick={() => filterByColor(item)} />
            <span className="capitalize">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
