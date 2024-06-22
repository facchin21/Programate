/* eslint-disable react/prop-types */

export const Filter = ({ toggleFilter }) => {
  const colors = ['Negro', "Blanco", "Marron"]
  const cajaRegalo = ['Si', 'No']
    return (
    <div className="flex flex-col py-12 px-6 bg-detail w-48 h-screen absolute barra__filtro">
        <button className='btn__menu' onClick={toggleFilter}>
            <div className='btn__menu-x'></div>
            <div className='btn__menu-x'></div>
        </button>
        <div className="py-8 font-League">
            <h3 className="text-xl font-medium">Color</h3>
            {colors.map((item, key)=>(
                <div key={key} className="flex gap-2 items-center">
                    <input type="checkbox" 
                    className="custom-checkbox"/>
                    <span>{item}</span>
                </div>
            ))}
        </div>
        <div>
            <h3 className="text-xl font-medium">
                Caja de regalo
            </h3>
            {cajaRegalo.map((item, key)=>(
                <div key={key} className="flex gap-2 items-center">
                    <input type="checkbox" className="custom-checkbox"/>
                    <span>{item}</span>
                </div>
            ))}
        </div>
    </div>
  )
}
