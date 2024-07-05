import React, { useState } from "react";
import RegisterList from "./RegisterList";
import ButtonPost from "./ButtonPost";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [inputFolder, setInputFolder] = useState();
  const [shopData, setShopData] = useState([]);
  const [data, setData] = useState(null);

  let nextId = 0;

  const callFunction = async () => {
    try {
      const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/EPcreateRoutes",
        {
          method: "POST", // or 'GET' depending on your setup
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ shopData, inputFolder }), // Include data from the UI
        }
      );

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error calling serverless function:", error);
    }
  };

  return (
    <>
      <div className="flex mx-20 my-10">
        <div className="bg-zinc-100 p-3 h-auto rounded-md shadow-md">
          <div className="space-y-2">
            <h2 className="text font-bold text-2xl my-6"> Cadastro de rota </h2>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-lg font-thin">
                  Nome da rota
                </span>
                <span className="label-text-alt">Top Right label</span>
              </div>
              <input
                type="text"
                placeholder="Nome da rota"
                className="input input-info input-bordered bg-white input-lg w-full max-w-xs"
                value={inputFolder}
                onChange={(e) => setInputFolder(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-thin">Nome</span>
                <span className="label-text-alt font-extralight">label</span>
              </div>
              <input
                type="text"
                placeholder="Nome da loja"
                className="input input-info input-bordered bg-white input-sm w-full max-w-xs"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-thin"> Endereço</span>
                <span className="label-text-alt font-extralight">label</span>
              </div>
              <input
                type="text"
                placeholder="Endereço da loja"
                className="input input-info input-bordered bg-white input-sm w-full max-w-xs"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <br />

            <button
              className="bg-sky-800 p-2 mt-6 w-full rounded-sm"
              onClick={() => {
                setShopData([
                  ...shopData,
                  { id: nextId++, name: name, address: address },
                ]);
                setName("");
                setAddress("");
              }}
            >
              <a className="text text-white"> Enviar para rota </a>
            </button>

            {/* <div className="">
        {data && (
          <div>
            <h2>Response from Form:</h2>
            <pre>{JSON.stringify(data)}</pre>
          </div>
        )}
        </div> */}
          </div>
        </div>

        <div className="flex  flex-col  ml-10">
          <RegisterList shopDataList={shopData} nameFolder={inputFolder} />
          <ButtonPost onClickPost={callFunction} />
        </div>
      </div>
    </>
  );
};

export default Form;
