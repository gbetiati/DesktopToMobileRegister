const RegisterList = ({ shopDataList, nameFolder, onClickCleanList }) => {
  let nextId = 0;

  return (
    <div className="bg bg-zinc-100 pb-2 shadow-md p-3 w-[36em] xl:w-[44em]">
      <h2 className="text font-semibold text-2xl mt-5 mb-14 margin-2 text-slate-900">
        {" "}
        Lista a cadastrar
      </h2>
      <div className="flex my-10 justify-between">
        <div className="flex flex-row">
          <div className="text font-semibold text-xl mx-3"> Nome da rota:</div>
          <div className="text font-semibold text-accent text-xl">
            {" "}
            {nameFolder}
          </div>
        </div>
        <div>
          <button className="bg-gray-200 hover:bg-gray-300 space-x-2 text-gray-800 font-normal py-0.5 px-3 mr-1 rounded inline-flex items-center"
                  onClick={onClickCleanList}
          >
          <span className="tex text-sm">Limpar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 48 48"
            >
              <path d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 14.640625 6 C 12.803372 6 11.082924 6.9194511 10.064453 8.4492188 L 7.6972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 8.2636719 15 A 1.50015 1.50015 0 0 0 8.6523438 15.007812 L 11.125 38.085938 C 11.423352 40.868277 13.795836 43 16.59375 43 L 31.404297 43 C 34.202211 43 36.574695 40.868277 36.873047 38.085938 L 39.347656 15.007812 A 1.50015 1.50015 0 0 0 39.728516 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 40.302734 12 L 37.935547 8.4492188 C 36.916254 6.9202798 35.196001 6 33.359375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 14.640625 9 L 33.359375 9 C 34.196749 9 34.974746 9.4162203 35.439453 10.113281 L 36.697266 12 L 11.302734 12 L 12.560547 10.113281 A 1.50015 1.50015 0 0 0 12.5625 10.111328 C 13.025982 9.4151428 13.801878 9 14.640625 9 z M 11.669922 15 L 36.330078 15 L 33.890625 37.765625 C 33.752977 39.049286 32.694383 40 31.404297 40 L 16.59375 40 C 15.303664 40 14.247023 39.049286 14.109375 37.765625 L 11.669922 15 z"></path>
            </svg>{" "}
            
          </button>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-start ml-2 font-thin"> Nº </div>
        <div className="basis-1/2 text-sm font-thin"> Nome </div>
        <div className="basis-1/2 t"> Endereço </div>
      </div>
      <ul>
        {shopDataList.map((shop) => (
          <li key={nextId++}>
            <div className="divider divider-neutral my-0.5" />
            <div className="flex flex-row mx-2">
              <div className="basis-start text-sm mx-2">
                <strong>{nextId + 1}</strong>
              </div>
              <div className="basis-1/2 text-sm mr-2 ">{shop.name}</div>
              <div className="basis-1/2 text-sm"> {shop.address} </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisterList;
