import { useNavigate } from 'react-router-dom';

const CardRoutes = ({ index, imageCard, routeName }) => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the detail page with the index or some unique identifier
    navigate(`/detail/${routeName}`);
  }; 

  return (
    <button className="rounded-r-3xl border-l-4 border-l-slate-500 shadow-inner opacity-90 bg-gradient-to-r from-slate-100 from-20% via-slate-50 via-40% to-slate-200 to-80% transform-gpu transition-all duration-300 hover:-translate-y-4 hover:shadow-lg w-80"
      onClick={handleClick}
    >
      {" "}
      <div className="card-body">
        <h1 className="card-title font-semibold text-3xl p-3">{routeName}</h1>
      </div>
      <figure>
        <img className="rounded rounded-r-3xl p-3" src={imageCard} alt="Shoes" />
      </figure>
    </button>
  );
};

export default CardRoutes;
