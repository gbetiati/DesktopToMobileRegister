import quintaav from "../images/quintaav.jpg";
import CardRoutes from "../components/CardRoutes";

import { useEffect, useState } from "react";

let nextId = 0

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
    <div className="bg-zinc-50 mx-24 mt-20 p-12 shadow-md rounded-sm">
      <div className="">
        <div className="flex justify-between mb-16">
          <div className="font font-semibold text-3xl text-start text-slate-700"> Rotas registradas</div>
          <button> <div className="badge bg-slate-200 badge-lg mr-16 p-4"> <div className="text font-extralight text-sm text-sky-900">Cadastar nova rota</div> </div></button>
        </div>
        <div className="grid grid-cols-3 gap-y-10">

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
  );
};

export default RegisteredRoutes;
