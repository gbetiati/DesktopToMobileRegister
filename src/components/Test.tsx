import { useState } from "react";
import React from 'react';

const Test = () => {
  const [selectedOption1, setSelectedOption1] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");
  const [responseData, setResponseData] = useState<any>(null);
  const [delegated, setDelegated] = useState<[string,string][]>([]);


  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/EPsetListRoute",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedOption1, selectedOption2 }),
        }
      );

      const data = await response.json();
      setResponseData(data); // Update the state with response data
    } catch (error) {
      console.error("Error calling serverless function:", error);
    } finally {
      setDelegated(prevDelegated => [...prevDelegated, [selectedOption1, selectedOption2]]);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <a> op1-email</a>
        <input
          type="text"
          placeholder="op1"
          className="input input-accent input-bordered bg-white input-sm w-full max-w-xs"
          value={selectedOption1}
          onChange={(e) => setSelectedOption1(e.target.value)}
        />

        <input
          type="text"
          placeholder="op2"
          className="input input-accent input-bordered bg-white input-sm w-full max-w-xs"
          value={selectedOption2}
          onChange={(e) => setSelectedOption2(e.target.value)}
        />

        <button type="submit" className="btn btn-square">
          ola
        </button>

        {/* Render response data */}
        {responseData && (
          <div>
            <h3>Response Data:</h3>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
      </form>
      <div>{delegated}</div>

      <div>
        <h3>Delegated Options:</h3>
        {delegated.length > 0 ? (
          <ul>
            {delegated.map((pair, index) => (
              <li key={index}>
                <button className="bg bg-blue-100">
                {pair[0]} - {pair[1]}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No options stored yet.</p>
        )}
      </div>

      <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
    </div>

    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
  
  </form>
</div>


<div>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        Price
      </label>
      <div className="relative mt-2 rounded-md shadow-sm w-48">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          id="price"
          name="price"
          type="text"
          placeholder="0.00"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
       
      </div>
    </div>

      
    </>
  );
};

export default Test;

///  nycole@gmail.com
