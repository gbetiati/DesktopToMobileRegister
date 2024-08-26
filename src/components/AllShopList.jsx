import { useState, useEffect } from "react";

const AllShopList = () => {
  const [allOrgShopsJson, setallOrgShopsJson] = useState([]);
  let nextId = 1;
  let qtdShops = allOrgShopsJson.length;

  useEffect(() => {
    const fetchShopsData = async () => {
      try {
        const response = await fetch(
          "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/getAllCollectionAllDocumentsEP",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const allOrgShopsJson = await response.json();
        console.log("JSON data recebido i:", allOrgShopsJson);
        setallOrgShopsJson(allOrgShopsJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchShopsData();
  }, []);

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Controle de lojas
          </h1>
        </div>
      </header>
            
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="bg-zinc-50 mx-8 mt-20 p-12 shadow-md rounded-sm">
            <div className="">
              <div className="flex justify-between mb-16">
                <div className="font font-semibold text-2xl text-start text-slate-900">
                  {" "}
                  Relatório de lojas cadastradas
                </div>

                <button className="bg-secondary hover:bg-blue-900 text-white font-semibold py-1.5 px-4 rounded-md">
                  <div>Info</div>
                </button>
              </div>
              <div className=" bg-slate-50 border-[1px] border-black m-8 p-6">
                <h1 className="text mt-6 mb-12 text-2xl font-semibold">
                  {" "}
                  Todas as lojas cadastradas
                </h1>
        
                <div className="overflow-x-auto p-4 bg-slate-50 border-[1px] border-black">
                  <table className="table table-xs">
                    <thead>
                      <tr>
                        <th className="py-5">N</th>
                        <th>Nome Fantasia</th>
                        <th>Endereço</th>
                        <th>Tipo de serviço</th>
                        <th>Data de criação</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allOrgShopsJson.map(({ description, createdAt }) => (
                        <tr key={nextId++}>
                          <th>{nextId}</th>
                          <td>{description}</td>
                          <td>{description}</td>
                          <td>{description}</td>
                          <td>{description}</td>
                          <td>zzzzzzz</td>
                          <td>{createdAt}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

          </div>

        </div>
    </>
  );
};

export default AllShopList;
