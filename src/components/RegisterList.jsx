const RegisterList = ({shopDataList, nameFolder}) => {
  
  let nextId = 0

  return (
    <div className="bg bg-zinc-50 rounded-t-xl pb-2 shadow-md p-3 min-w-[42em]" >
      <h2 className="text font-bold text-2xl my-6 margin-2"> Lojas a cadastrar</h2>
      <div className="flex flex-row my-10">
        <div className="text font-bold text-xl mx-3"> Nome da rota:</div>
        <div className="text font-semibold text-sky-500 text-xl"> {nameFolder}</div>
      </div>
        <div className="flex flex-row">
          <div className="basis-start ml-2"> Nº </div>
          <div className="basis-1/2"> Nome </div>
          <div className="basis-1/2"> Endereço </div>
        </div>
        <ul>
          {shopDataList.map((shop) => (
            <li key={nextId++}>
              <div className="divider divider-neutral my-0.5"/>
              <div className="flex flex-row mx-2">
                <div className="basis-start text-sm mx-2"><strong>{nextId+1}</strong></div>
                <div className="basis-1/2 text-sm mr-2 ">{shop.name}</div>
                <div className="basis-1/2 text-sm"> {shop.address} </div>
              </div>
            </li>
          ))}
        </ul>

    </div>
  );
};

export default RegisterList