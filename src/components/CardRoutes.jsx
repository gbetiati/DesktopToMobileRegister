import { useNavigate } from 'react-router-dom';
import pic from "../images/pic.png"


const CardRoutes = ({ index,  routeName }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the detail page with the index or some unique identifier
    navigate(`/detail/${routeName}`);
  };

  return (

    <button className=""
      onClick={handleClick}
    >
      <div className="card bg-zinc-50 w-80 border-[0.3px] border-slate-400 transform-gpu transition-all duration-300 hover:-translate-y-4 hover:shadow-xl">
        <div className="card-body">
          <div> <h1 className="card-title text-3xl mb-12 font-bold">{routeName}</h1>
            <p className='text font-light text-sm row-auto pr-28'> criada em 22/07/2024 </p>
             </div>
            
        </div>
        <figure className='opacity opacity-75'>
          <img
            src={pic}
            alt="Image card" />
        </figure>
      </div>
    </button>
  );
};

export default CardRoutes;
