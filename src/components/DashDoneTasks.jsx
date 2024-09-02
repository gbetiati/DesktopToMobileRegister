import { useState, useEffect } from "react";

// Helper function to get the day of the week
const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    return daysOfWeek[date.getDay()];
};

// Function to format date for display
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { // Example for Portuguese (Brazil) format
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
};

const DashDoneTasks = () => {
    const [allDoneTasksJson, setAllDoneTasksJson] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filterCriteria, setFilterCriteria] = useState({
        description: "",
        isComplete: "",
        user_id: "",
        dayOfWeek: "" // Added for day of the week filtering
    });

    let nextId = 0;

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
            const { description, isComplete, user_id, dayOfWeek } = filterCriteria;
            const filtered = allDoneTasksJson.filter(task => {
                const taskDayOfWeek = getDayOfWeek(task.createdAt);

                return (
                    (description ? task.description.includes(description) : true) &&
                    (isComplete ? task.isComplete === (isComplete === 'true') : true) &&
                    (user_id ? task.user_id.includes(user_id) : true) &&
                    (dayOfWeek ? taskDayOfWeek === dayOfWeek : true)
                );
            });
            setFilteredTasks(filtered);
        };

        applyFilters();
    }, [filterCriteria, allDoneTasksJson]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterCriteria(prevCriteria => ({
            ...prevCriteria,
            [name]: value
        }));
    };

    return (
        <>
            <div className="p-4 bg-slate-50 border-[1px] border-black">
                <div className="mb-4">
                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={filterCriteria.description}
                            onChange={handleFilterChange}
                            className="ml-2 border border-gray-300 p-1"
                        />
                    </label>
                    <label className="ml-4">
                        Is Complete:
                        <select
                            name="isComplete"
                            value={filterCriteria.isComplete}
                            onChange={handleFilterChange}
                            className="ml-2 border border-gray-300 p-1"
                        >
                            <option value="">All</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </label>
                    <label className="ml-4">
                        User ID:
                        <input
                            type="text"
                            name="user_id"
                            value={filterCriteria.user_id}
                            onChange={handleFilterChange}
                            className="ml-2 border border-gray-300 p-1"
                        />
                    </label>
                    <label className="ml-4">
                        Dia da semana:
                        <select
                            name="dayOfWeek"
                            value={filterCriteria.dayOfWeek}
                            onChange={handleFilterChange}
                            className="ml-2 border border-gray-300 p-1"
                        >
                            <option value="">All</option>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Segunda</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                    </label>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-xs">
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
                            {filteredTasks.map(({ description, createdAt, user_id, isComplete }) => (
                                <tr key={nextId++}>
                                    <th>{nextId}</th>
                                    <td>{description}</td>
                                    <td>{description}</td>
                                    <td>{isComplete.toString()}</td>
                                    <td>{user_id}</td>
                                    <td>{formatDate(createdAt)}</td>
                                </tr>
                            ))}
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
