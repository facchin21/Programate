import ImageBack from '../../assets/image/arrow-back 1.png'
import { useNavigate } from 'react-router-dom';


export const Back = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className='flex items-center gap-2 pl-4'>
        <img src={ImageBack} alt="Icono back (Volver atras)" 
        className='cursor-pointer' onClick={handleBackClick}/>
        <span className='font-League font-medium cursor-pointer'
        onClick={handleBackClick}>
          Volver atras
        </span>
    </div>
  )
}
