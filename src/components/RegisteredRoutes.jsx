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
    <div className="flex flex-col-1/2 m-14 p-10 bg-zinc-50">
      <h2 className="text font-bold text-3xl m-8 mr-12">Rotas registradas:</h2>
      <div className="grid grid-cols-1 mt-8 gap-8 gap-x-16 lg:grid-cols-3">

     
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
  );
};

export default RegisteredRoutes;
