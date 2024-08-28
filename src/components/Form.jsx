import React, { useState } from "react";
import RegisterList from "./RegisterList";
import ButtonPost from "./ButtonPost";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [inputFolder, setInputFolder] = useState("");
  const [shopData, setShopData] = useState([]);
  const [data, setData] = useState(null);

  let nextId = 0;
  let createDate = new Date();

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
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Cadastro de rotas
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto flex-row max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="bg-zinc-50 mx-8 mt-20 p-12 shadow-2xl rounded-sm">
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
                      <div className="space-y-2 m-4">
                        <h2 className="font font-semibold text-2xl text-start text-slate-900 my-6 margin-2">
                          {" "}
                          Cadastro de rota
                        </h2>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text text-lg font-thin">
                              Nome da rota
                            </span>
                            <span className="label-text-alt">
                              Top Right label
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder="Nome da rota"
                            className="input input-accent input-bordered bg-white input-lg w-full max-w-xs"
                            value={inputFolder}
                            onChange={(e) => setInputFolder(e.target.value)}
                          />
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
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text font-thin">
                              {" "}
                              Endereço
                            </span>
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
                          className="bg-accent hover:shadow-lg p-2 mt-6 w-full rounded-lg border-2 border-zinc-200"
                          onClick={() => {
                            setShopData([
                              ...shopData,
                              {
                                id: nextId++,
                                name: name,
                                address: address,
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
                      />
                      <ButtonPost onClickPost={callFunction} />
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
