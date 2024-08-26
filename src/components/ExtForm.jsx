import React, { useState } from "react";
import RegisterList from "./RegisterList";
import ButtonPost from "./ButtonPost";

const ExtForm = ({ routeParam, onClickSend }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [inputFolder, setInputFolder] = useState("");
  const [shopData, setShopData] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showInitialContent, setShowInitialContent] = useState(true);

  let nextId = 0;
  let createDate = new Date();

  const callFunction = async () => {
    setLoading(true);
    setShowInitialContent(false);
    try {
      const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/EPcreateShopExtRoute",
        {
          method: "POST", // or 'GET' depending on your setup
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ shopData, routeParam }), // Include data from the UI
        }
      );

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error calling serverless function:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <>
      <header className="bg-white shadow">
        <div className="flex flex-row mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Cadastrar nova loja na rota {routeParam}
          </h1>
          <button className="fixed right-0 mr-7" onClick={onClickSend}>
            X
          </button>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="bg-zinc-50  rounded-sm">
            <div className="flex justify mb-16">
              <div className="flex flex-row">
                <div className=" flex flex-none bg-zinc-100 p-4 rounded-md shadow-md h-[32em]">
                  <div className="space-y-2 m-4">
                    <h2 className="font font-semibold text-2xl text-start text-slate-900 my-6 margin-2">
                      {" "}
                      Cadastro de loja
                    </h2>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-lg font-thin">
                          Nome da rota
                        </span>
                      </div>
                      <strong className="text text-xl">{routeParam}</strong>
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text font-thin">Nome</span>
                        <span className="label-text-alt font-extralight">
                          label
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Nome da loja"
                        className="input input-accent input-bordered bg-white input-sm w-full max-w-xs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                    <label className="form-control required: w-full max-w-xs">
                      <div className="label">
                        <span className="label-text font-thin"> Endereço</span>
                        <span className="label-text-alt font-extralight">
                          label
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Endereço da loja"
                        className="input input-accent input-bordered bg-white input-sm w-full max-w-xs"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </label>
                    <br />

                    <button
                      className="bg-accent hover:shadow-lg p-2 mt-6 w-full rounded-md"
                      onClick={() => {
                        setShopData([
                          ...shopData,
                          {
                            id: nextId++,
                            createdAt: createDate,
                            isComplete: null,
                            name: name,
                            address: address,
                          },
                        ]);
                        setName("");
                        setAddress("");
                      }}
                    >
                      <a className="text text-zinc-100 font-semibold">
                        {" "}
                        Enviar para lista
                      </a>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col ml-10">
                  <RegisterList
                    shopDataList={shopData}
                    nameFolder={routeParam}
                  />
                  <ButtonPost onClickPost={callFunction} />

                  <div className="self-center pt-6">
                    {showInitialContent ? null : (
                      <p>
                        {loading ? (
                          <span className="loading loading-spinner loading-lg"></span>
                        ) : (
                          <p className="text text-slate-700 font-semibold text-lg"> Rota registrada com sucesso</p>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ExtForm;
