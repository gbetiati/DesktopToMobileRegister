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

   
    </>
  );
};

export default Test;