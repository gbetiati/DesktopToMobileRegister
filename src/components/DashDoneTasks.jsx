import { useState, useEffect } from "react";

const getDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[date.getDay()];
};

const getMonth = (dateString) => {
  const date = new Date(dateString);
  const monthsOfYear = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return monthsOfYear[date.getMonth()];
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const filtersPlaceHolders = {
  descriptionInput: "Nome da loja",
  isCompleteSelect: "Status do serviço",
  userIdInput: "ID de usuário",
  dayWeekSelect: "Dia da semana",
  monthSelect: "Mês",
  routeSelect: "Rota",
};

const DashDoneTasks = () => {
  const [pathsJsonData, setPathsJsonData] = useState([]);
  const [allDoneTasksJson, setAllDoneTasksJson] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    description: "",
    isComplete: "",
    user_id: "",
    dayOfWeek: "",
    month: "",
    routeBelong: "",
  });

  let nextId = 0;
  useEffect(() => {
    const fetchPathsData = async () => {
      try {
        const response = await fetch(
          "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/EPgetCollectionsNames"
        );
        const jsonData = await response.json();
        setPathsJsonData(jsonData);
      } catch (error) {
        console.error("Error fetching buscar:", error);
      }
    };
    fetchPathsData();
  }, []);

  useEffect(() => {
    const fetchShopsData = async () => {
      try {
        const response = await fetch(
          "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/getAllDoneTasksEP",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setAllDoneTasksJson(data);
        setFilteredTasks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchShopsData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const {
        description,
        isComplete,
        user_id,
        dayOfWeek,
        month,
        routeBelong,
      } = filterCriteria;
      const filtered = allDoneTasksJson.filter((task) => {
        const taskDayOfWeek = getDayOfWeek(task.createdAt);
        const taskMonth = getMonth(task.createdAt);

        return (
          (description ? task.description.includes(description) : true) &&
          (isComplete ? task.isComplete === (isComplete === "true") : true) &&
          (user_id ? task.user_id.includes(user_id) : true) &&
          (dayOfWeek ? taskDayOfWeek === dayOfWeek : true) &&
          (month ? taskMonth === month : true) &&
          (routeBelong ? task.routeBelong === routeBelong : true)
        );
      });
      setFilteredTasks(filtered);
    };

    applyFilters();
  }, [filterCriteria, allDoneTasksJson]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  return (
    <>
      <header className="bg-white shado">
        <div className="mx-auto shadow-md mb-28 px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Gerenciamento de serviços
          </h1>
        </div>
      </header>
      <div className="p-4 pt-10 m-6 bg-zinc-50 border-[1px] mx-20">
        <div className="flex flex-row" name="filters div">
          <div className="grid grid-cols-2 w-1/2 p-3 rounded-lg shadow-md bg-zinc-50 border-[1px] m-3 border-gray-300">
            <label>
              {filtersPlaceHolders.descriptionInput}:
              <input
                type="text"
                name="description"
                value={filterCriteria.description}
                onChange={handleFilterChange}
                className="rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
              />
            </label>
            <label>
              {filtersPlaceHolders.userIdInput}:
              <input
                type="text"
                name="user_id"
                value={filterCriteria.user_id}
                onChange={handleFilterChange}
                className="rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
              />
            </label>
            <label>
              {filtersPlaceHolders.isCompleteSelect}:
              <select
                name="isComplete"
                value={filterCriteria.isComplete}
                onChange={handleFilterChange}
                className="rounded-md border-gray-300 p-1 w-44"
              >
                <option value="">Todos</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </label>
            <label>
              {filtersPlaceHolders.routeSelect}:
              <select
                name="routeBelong"
                value={filterCriteria.routeBelong}
                onChange={handleFilterChange}
                className="ml-2 rounded-md border-gray-300 p-1 w-44"
              >
                <option value="">Todos</option>
                {pathsJsonData.map((route, index) => (
                  <option key={index} value={route}>
                    {route}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="w-1/2 bg-zinc-50 shadow-md p-3 border-[1px] m-3 rounded-lg border-gray-300">
            <h2 className="mb-4">Filtro de data</h2>
            <label className="ml-4">
              {filtersPlaceHolders.dayWeekSelect}:
              <select
                name="dayOfWeek"
                value={filterCriteria.dayOfWeek}
                onChange={handleFilterChange}
                className="ml-2 rounded-md border-gray-300 p-1"
              >
                <option value="">Todos</option>
                <option value="Sunday">Domingo</option>
                <option value="Monday">Segunda-feira</option>
                <option value="Tuesday">Terça-feira</option>
                <option value="Wednesday">Quarta-feira</option>
                <option value="Thursday">Quinta-feira</option>
                <option value="Friday">Sexta-feira</option>
                <option value="Saturday">Sábado</option>
              </select>
            </label>
            <label className="ml-4">
              {filtersPlaceHolders.monthSelect}:
              <select
                name="month"
                value={filterCriteria.month}
                onChange={handleFilterChange}
                className="ml-2 rounded-md border-gray-300 p-1"
              >
                <option value="">Todos</option>
                <option value="Janeiro">Janeiro</option>
                <option value="Fevereiro">Fevereiro</option>
                <option value="Março">Março</option>
                <option value="Abril">Abril</option>
                <option value="Maio">Maio</option>
                <option value="Junho">Junho</option>
                <option value="Julho">Julho</option>
                <option value="Agosto">Agosto</option>
                <option value="Setembro">Setembro</option>
                <option value="Outubro">Outubro</option>
                <option value="Novembro">Novembro</option>
                <option value="Dezembro">Dezembro</option>
              </select>
            </label>
          </div>
        </div>

        <div className="relative overflow-x-auto rounded-xl shadow-lg mx-3 mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-black">
            <thead className="text-md text-zinc-200 uppercase bg-gray-800">
              <tr>
                <th className="py-4 px-6">N</th>
                <th>Nome da loja</th>
                <th>Assinatura</th>
                <th>Data</th>
                <th>Assinado</th>
                <th>ID de usuário</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map(
                ({
                  description,
                  createdAt,
                  user_id,
                  isComplete,
                  signature,
                }) => (
                  <tr
                    key={nextId++}
                    class="bg-zinc-50 border-t  border-gray-500"
                  >
                    <td
                      scope="row"
                      class="pl-7 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {nextId}
                    </td>
                    <td className=" py-4">{description}</td>
                    <td className=" py-4">
                      <img
                        src={`data:image/png;base64,${signature}`}
                        style={{ height: 60, width: 120 }}
                        alt="Signature"
                      />
                    </td>
                    <td className=" py-4">{formatDate(createdAt)}</td>
                    <td className=" py-4">{isComplete.toString()}</td>
                    <td className=" py-4">{user_id}</td>
                  </tr>
                )
              )}
            </tbody>
            <tfoot>
             
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashDoneTasks;
