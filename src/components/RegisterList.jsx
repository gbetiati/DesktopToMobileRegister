const RegisterList = ({dado}) => {
  
  let nextId = 0

  return (
    <div className="bg bg-zinc-100 p-2 w-96 rounded-md shadow-md">
      <h2 className="text font-bold text-2xl my-6"> Lojas a cadastrar</h2>
        <div class="flex flex-row">
          <div class="basis-1/4"> Num </div>
          <div class="basis-1/4"> Nome </div>
          <div class="basis-1/2"> Endereço </div>
        </div>
        <ul>
          {dado.map((shop) => (
            <li key={nextId++}>
              <div className="divider my-0.5"/>
              <div class="flex flex-row">
                <div class="basis-1/4">01</div>
                <div class="basis-1/4"><strong>{shop.name}</strong></div>
                <div class="basis-1/2"> {shop.address} </div>
              </div>
            </li>
          ))}
        </ul>

    </div>
  );
};

export default RegisterList