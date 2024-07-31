import quintaav from "../images/quintaav.jpg";
import CardRoutes from "../components/CardRoutes";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let nextId = 0;

const RegisteredRoutes = () => {
  const [pathsJsonData, setPathsJsonData] = useState([]);

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
        console.error("Error fetching data:", error);
      }
    };
    fetchPathsData();
  }, []);

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Gerenciamento de rotas
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="bg-zinc-50 mx-8 mt-20 p-12 shadow-md rounded-sm">
            <div className="">
              <div className="flex justify-between mb-16">
                <div className="font font-semibold text-2xl text-start text-slate-900">
                  {" "}
                  Rotas registradas
                </div>

                <button className="bg-secondary hover:bg-blue-800 text-white font-semibold py-1.5 px-4 rounded-md">
                  <Link to="/form">
                  Cadastar nova rota
                  </Link>
                </button>
              </div>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3 gap-y-16">
                {...pathsJsonData.map((item, index) => (
                  <CardRoutes
                    key={index}
                    index={nextId++}
                    routeName={item}
                    imageCard={quintaav}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisteredRoutes;
