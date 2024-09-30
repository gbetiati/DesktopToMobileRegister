import React, { useState } from "react";
import RegisterList from "./RegisterList";
import ButtonPost from "./ButtonPost";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [inputFolder, setInputFolder] = useState("");
  const [shopData, setShopData] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showInitialContent, setShowInitialContent] = useState(true);
  const [responseData, setResponseData] = useState(null);

  let nextId = 0;
  let createDate = new Date();

  let isCompleteVar = false;
  let positionVar = 0;

  const callFunction = async () => {
    setLoading(true);
    setShowInitialContent(false);

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
      setResponseData(data);
    } catch (error) {
      console.error("Error calling serverless function:", error);
      setResponseData("Erro ao cadastrar")
    } finally {
      setLoading(false);
      setShopData([]);
    }
  };

  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Cadastro de rotas
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto flex-row max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="bg-zinc-50 mx-8 mt-20 p-12 shadow-md rounded-sm">
            <div className="">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <div className="font mb-24 font-semibold text-2xl text-start text-slate-900">
                    {" "}
                    Siga os passos para cadastrar novas rotas
                  </div>
                  {/*     <button className="btn btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="26"
                      height="26"
                      viewBox="0 0 48 48"
                    >
                      <linearGradient
                        id="Z3eIuf5QY2EetuA~FfDd6a_VQOfeAx5KWTK_gr1"
                        x1="9.899"
                        x2="38.183"
                        y1="9.98"
                        y2="38.264"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#33bef0"></stop>
                        <stop offset="1" stop-color="#0a85d9"></stop>
                      </linearGradient>
                      <path
                        fill="url(#Z3eIuf5QY2EetuA~FfDd6a_VQOfeAx5KWTK_gr1)"
                        d="M44.041,24.122c0,11.045-8.955,20-20,20s-20-8.955-20-20s8.955-20,20-20	S44.041,13.077,44.041,24.122z"
                      ></path>
                      <path
                        d="M22,36h4c0.552,0,1-0.448,1-1V20c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v15	C21,35.552,21.448,36,22,36z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M22.227,35.5h3.547c0.401,0,0.727-0.325,0.727-0.727V20.227c0-0.401-0.325-0.727-0.727-0.727h-3.547	c-0.401,0-0.727,0.325-0.727,0.727v14.547C21.5,35.175,21.825,35.5,22.227,35.5z"
                        opacity=".07"
                      ></path>
                      <radialGradient
                        id="Z3eIuf5QY2EetuA~FfDd6b_VQOfeAx5KWTK_gr2"
                        cx="24"
                        cy="16"
                        r="5.108"
                        gradientTransform="matrix(.7808 0 0 .7066 5.26 4.096)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".516"></stop>
                        <stop offset="1" stop-opacity="0"></stop>
                      </radialGradient>
                      <ellipse
                        cx="24"
                        cy="15.402"
                        fill="url(#Z3eIuf5QY2EetuA~FfDd6b_VQOfeAx5KWTK_gr2)"
                        opacity=".15"
                        rx="3.988"
                        ry="3.609"
                      ></ellipse>
                      <path
                        fill="#fff"
                        d="M24,17.732c1.7,0,2.65-1.068,2.65-2.388C26.65,14.024,25.647,13,24,13s-2.65,1.024-2.65,2.344	C21.35,16.664,22.3,17.732,24,17.732z"
                      ></path>
                      <rect
                        width="4"
                        height="15"
                        x="22"
                        y="20"
                        fill="#fff"
                      ></rect>
                    </svg>
                  </button>*/}
                </div>
                <div className="mb-14 border-[1px] bg-zinc-100 border-zinc-50 drop-shadow-md rounded-3xl pt-9 pb-7 px-4">
                  <ul className="steps">
                    <li className="step step-accent text-sm">
                      Insira o nome da rota e dados da loja
                    </li>
                    <li className="step step-accent text-sm">
                      Clique em "Enviar para rota"
                    </li>
                    <li className="step step-accent text-sm">
                      Repetir os passos anteriores adicionando as lojas a lista
                    </li>
                    <li className="step step-accent text-sm">
                      Após inserir as lojas na lista clique em "Cadastar tudo"
                    </li>
                  </ul>
                </div>
                <div className="flex mb-16">
                  <div className="flex flex-none">
                    <div className=" bg-zinc-100 p-4 shadow-md h-[32em]">
                      <div className="space-y- m-4 w-60">
                        <h2 className="font font-semibold text-2xl text-start text-slate-900  mt-5 mb-14 margin-2">
                          {" "}
                          Cadastro de rota
                        </h2>
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="inputroutename"
                              className="text-sm font-medium  text-gray-900"
                            >
                              <div className="text text-start">
                                Nome da rota
                              </div>
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm w-full max-w-xs">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                {/* Add an icon or placeholder if needed */}
                              </div>
                              <input
                                id="inputroutename"
                                name="inputroutename"
                                type="text"
                                placeholder="Nome da rota"
                                className="block w-full rounded-md border-0 mb-6 py-4 pl-7 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                                value={inputFolder}
                                onChange={(e) => setInputFolder(e.target.value)}
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="inputshopname"
                              className="block text-sm font-medium text-gray-900"
                            >
                              <div className="text text-start">Nome loja</div>
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm w-full max-w-xs">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                {/* Add an icon or placeholder if needed */}
                              </div>
                              <input
                                id="inputshopname"
                                name="inputshopname"
                                type="text"
                                placeholder="Nome da loja"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="inputshopadress"
                              className="block text-sm font-medium text-gray-900"
                            >
                              <div className="text text-start">Endereco</div>
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm w-full max-w-xs">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                {/* Add an icon or placeholder if needed */}
                              </div>
                              <input
                                id="inputshopadress"
                                name="inputshopadress"
                                type="text"
                                placeholder="Endereço da loja"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                        <button
                          className="bg-accent hover:shadow-lg p-2 mt-6 w-full rounded-lg border-2 border-zinc-200"
                          onClick={() => {
                            if (!inputFolder || !name || !address) {
                              alert(
                                "Por favor, preencha todos os campos antes de enviar."
                              );
                              return;
                            }

                            setShopData([
                              ...shopData,
                              {
                                id: nextId++,
                                name: name,
                                address: address,
                                isComplete: isCompleteVar,
                                position: positionVar,
                                createdAt: createDate,
                              },
                            ]);
                            setName("");
                            setAddress("");
                          }}
                        >
                          <a className="text text-zinc-100 font-semibold">
                            {" "}
                            Enviar para lista de cadastro{" "}
                          </a>
                        </button>
                      </div>
                    </div>

                    <div className=" ml-10">
                      <RegisterList
                        shopDataList={shopData}
                        nameFolder={inputFolder}
                        onClickCleanList={() => setShopData([])}
                      />
                      <ButtonPost onClickPost={callFunction} />
                      <div className="self-center pt-6">
                        {showInitialContent ? null : (
                          <div>
                            {loading ? (
                              <span className="loading loading-spinner loading-lg"></span>
                            ) : (
                              <div className="text text-slate-700 font-semibold text-lg">
                                {" "}
                                {responseData && (
                                  <div>
                                    <h3>Response Data:</h3>
                                    <pre>
                                      {JSON.stringify(responseData, null, 2)}
                                    </pre>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
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

export default Form;
