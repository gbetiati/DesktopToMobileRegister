import { useNavigate } from 'react-router-dom';

const CardRoutes = ({ index, imageCard, routeName }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the detail page with the index or some unique identifier
    navigate(`/detail/${routeName}`);
  };

  return (

    <button className=""
      onClick={handleClick}
    >
      <div className="card bg-slate-100 w-80 transform-gpu transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl">
        <div className="card-body">
          <div> <h1 className="card-title text-3xl mb-12 font-bold">{routeName}</h1>
            <p className='text font-light text-sm row-auto pr-28'> criada em 22/07/2024 </p> </div>
        </div>
        <figure className='opacity opacity-75 '>
          <img
            src="https://img.freepik.com/free-vector/gradient-grainy-texture_23-2148976750.jpg"
            alt="Image card" />
        </figure>
      </div>
    </button>
  );
};

export default CardRoutes;
