// DetailPage.js
import React, { useState, useEffect } from "react";
import RegisterList from "../components/RegisterList";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();

  const fetchDetails = (id) => {
    return {
      id,
    
    };
  };

  const details = fetchDetails(id);
  let nextId = 0;
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
    <div className="p-16">
      <div className="bg bg-zinc-100 rounded-t-md pb-2 shadow-md p-3 min-w-[42em]">
        <h2 className="text font-extrabold text-3xl my-6 margin-2">
          {" "}
          Listagem de rota
        </h2>
        <div className="flex flex-row my-10">
          <div className="text font-semibold text-xl mx-3"> Nome da rota: {id}</div>
          <div className="text font-semibold text-sky-500 text-xl">
            {" "}
            {details.name}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-start ml-2 font-semibold"> Nº </div>
          <div className="basis-1/2 font-semibold"> Nome </div>
          <div className="basis-1/2 font-semibold"> Endereço </div>
          <div className="basis-end font-semibold"> Controle </div>
        </div>
        <ul>
          {shopsJson.map(({ description, createdAt }) => (
            <li key={nextId++}>
              <div className="divider divider-neutral my-0.5" />
              <div className="flex flex-row mx-">
                <div className="basis-start text-sm ml-2">
                  <strong>{nextId + 1}</strong>
                </div>
                <div className="basis-1/2 text-sm  ">{description}</div>
                <div className="basis-1/2 text-sm"> {createdAt} </div>
                <div className="basis-end mx-1"> xxxx </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>

      <div>
        <h1>{details.name}</h1>
        <p>{details.description}</p>
      </div>
    </>
  );
};

export default DetailPage;
