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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    // Example for Portuguese (Brazil) format
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const filtersPlaceHolders = {
  descriptionInput: "Nome da loja",
  isCompleteSelect: "Status do serviço",
  userIdInput: "ID de usuário",
  dayWeekSelect: "Dia",
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
    routeBelong: "", // Add this line
  });

  let nextId = 0;
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
        console.log("JSON data recebido i:", data);
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
      const { description, isComplete, user_id, dayOfWeek, routeBelong } =
        filterCriteria;
      const filtered = allDoneTasksJson.filter((task) => {
        const taskDayOfWeek = getDayOfWeek(task.createdAt);

        return (
          (description ? task.description.includes(description) : true) &&
          (isComplete ? task.isComplete === (isComplete === "true") : true) &&
          (user_id ? task.user_id.includes(user_id) : true) &&
          (dayOfWeek ? taskDayOfWeek === dayOfWeek : true) &&
          (routeBelong ? task.routeBelong === routeBelong : true) // Add this line
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
      <div className="p-4 m-6 bg-slate-50 border-[1px] border-">
        <div className="flex flex-row" name="filters div">
          <div className="grid grid-cols-2 w-1/2 bg-slate-200 border-2 m-3 border-slate-300">
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
            <label className="">
              {filtersPlaceHolders.userIdInput}
              <input
                type="text"
                name="user_id"
                value={filterCriteria.user_id}
                onChange={handleFilterChange}
                className="rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
              />
            </label>
            <label className="">
              {filtersPlaceHolders.isCompleteSelect}
              <select
                name="isComplete"
                value={filterCriteria.isComplete}
                onChange={handleFilterChange}
                className="rounded-md border-gray-300 p-1 w-44"
              >
                <option value="">All</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </label>
            <label className="">
              {filtersPlaceHolders.routeSelect}
              <select
                name="routeBelong"
                value={filterCriteria.routeBelong}
                onChange={handleFilterChange}
                className="ml-2 rounded-md border-gray-300 p-1 w-44"
              >
                <option value="">All</option>
                {pathsJsonData.map((route, index) => (
                  <option key={nextId++} index={index}>
                    {route}
                  </option>
                ))}
              </select>
            </label>
          </div>
        <div className="w-1/2 bg-slate-200 p-3 border-2 m-3 border-slate-300">
        <h2 className="mb-4">Filtro de data</h2>
          <label className="ml-4">
            {filtersPlaceHolders.dayWeekSelect}
            <select
              name="dayOfWeek"
              value={filterCriteria.dayOfWeek}
              onChange={handleFilterChange}
              className="ml-2 rounded-md border-gray-300 p-1"
            >
              <option value="">All</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Segunda</option>
              <option value="Tuesday">Terça</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </label>
          <label className="ml-4">
            {filtersPlaceHolders.dayWeekSelect}
            <select
              name="dayOfWeek"
              value={filterCriteria.dayOfWeek}
              onChange={handleFilterChange}
              className="ml-2 rounded-md border-gray-300 p-1"
            >
              <option value="">All</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Segunda</option>
              <option value="Tuesday">Terça</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </label>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-sm">
            <thead>
              <tr>
                <th className="py-5">N</th>
                <th>Nome da loja</th>
                <th>Nome da loja</th>
                <th>Serviço realizado</th>
                <th>Usuário</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map(
                ({ description, createdAt, user_id, isComplete }) => (
                  <tr key={nextId++}>
                    <th>{nextId}</th>
                    <td>{description}</td>
                    <td>{description}</td>
                    <td>{isComplete.toString()}</td>
                    <td>{user_id}</td>
                    <td>{formatDate(createdAt)}</td>
                  </tr>
                )
              )}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Company</th>
                <th>Location</th>
                <th>Last Login</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashDoneTasks;
