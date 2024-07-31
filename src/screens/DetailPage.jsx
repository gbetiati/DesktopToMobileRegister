// DetailPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();

  const fetchDetails = (id) => {
    return {
      id,
      name: `Detail for Card name ${id}`,
      description: `Details of card ${id}`,
    };
  };

  const details = fetchDetails(id);
  let nextId = 1;
  const [shopsJson, setShopsJson] = useState([]);

  useEffect(() => {
    const fetchShopsData = async () => {
      try {
        const response = await fetch(
          "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/getCollectionsAllDocumentsEP"
        );
        const shopsJson = await response.json();
        console.log("JSON data:", shopsJson);
        setShopsJson(shopsJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchShopsData();
  }, []);

  return (
    <>
    <div className="bg-zinc-50 mx-24 mt-20 p-12 shadow-md rounded-sm">

        <h2 className="font-semibold text-3xl mb-16 text-start">
          {" "}
          Lojas a cadastrar
        </h2>
        <div className="flex flex-row my-10">
          <div className="text font-bold text-xl mx-3"> Nome da rota:</div>
          <div className="text font-semibold text-sky-500 text-xl">
            {" "}
            {details.name}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-start ml-2"> Nº </div>
          <div className="basis-1/2"> Nome </div>
          <div className="basis-1/2"> Endereço </div>
          <div className="basis-end"> Controle </div>
        </div>
        <ul>
          {shopsJson.map(({ description, createdAt }) => (
            <li key={nextId++}>
              <div className="divider divider-neutral my-0.5" />
              <div className="flex flex-row mx-">
                <div className="basis-start text-sm mx-2">
                  <strong>{nextId + 1}</strong>
                </div>
                <div className="basis-1/2 text-sm mr-2 ">{description}</div>
                <div className="basis-1/2 text-sm"> {createdAt} </div>
                <div className="basis-end mx-1"> X  </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>{details.name}</h1>
        <p>{details.description}</p>
      </div>
    </>
  );
};

export default DetailPage;
