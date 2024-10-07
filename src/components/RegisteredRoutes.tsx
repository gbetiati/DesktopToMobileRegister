import CardRoutes from "./CardRoutes";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let nextId = 0;


const RegisteredRoutes = () => {
  const [pathsJsonData, setPathsJsonData] = useState<[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPathsData = async () => {
      try {
        const response = await fetch(
          "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/EPgetCollectionsNames"
        );
        const jsonData = await response.json();
        console.log("JSON data:", jsonData);
        setPathsJsonData(jsonData);
      } catch (error) {
        console.error("Error fetching buscar:", error);
      }
    };
    fetchPathsData();
  }, []);

  const filteredRoutes =
    search.length > 0
      ? pathsJsonData.filter((path: any) => path.includes(search))
      : [];

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto shadow-md px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Gerenciamento de rotas
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="bg-zinc-50 mx-8 mt-20 p-12 shadow-md rounded-sm">
            <div className="">
              <div className="flex justify-between mb-20">
                <div className="font font-semibold text-2xl text-start text-slate-900">
                  {" "}
                  Rotas registradas
                </div>
                <button className="bg-secondary hover:bg-blue-800 text-white font-semibold py-1.5 px-4 rounded-md">
                  <Link to="/form">Cadastar nova rota</Link>
                </button>
              </div>

              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="w-80 mb-14 drop-shadow-md">
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
                        </svg>
                      </span>
                    </div>
                    <input
                      id="inputroutename"
                      name="inputroutename"
                      type="text"
                      className="block w-80 rounded-md border-0 mb-6 py-4 pl-7 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                      placeholder=" Buscar..."
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <label htmlFor="currency" className="sr-only">
                        Currency
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    {search.length > 0
                    ? filteredRoutes.map((route, index) => (
                        <CardRoutes
                          key={index}
                          index={index}
                          routeName={route}
                        />
                      ))
                    : pathsJsonData.map((route, index) => (
                        <CardRoutes
                          key={index}
                          index={index}
                          routeName={route}
                        />
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisteredRoutes;
