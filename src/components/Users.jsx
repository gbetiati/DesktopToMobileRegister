import { useEffect , useState} from "react" 
import React from "react";

const Users = () => {
    const [userJsonData, setUserJsonData] = useState([]);

    let nextId = 1

    useEffect(() => {
        const fetchUsersData = async () => {
        try {
            const response = await fetch(
            "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/EPgetUsers"
            );
            const jsonData = await response.json();
            console.log("JSON data:", jsonData);
            setUserJsonData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };
        fetchUsersData();
        }, []);
    
    return (
        <div className="flex items-center flex-col mx-56 mt-10 py-10 bg-slate-100 shadow-lg rounded-md">
          <p className="text text-2xl font-semibold"> Usuários do sistema </p>
         <ul>
          {userJsonData.map(({name, email, user_id}) => (
            <li key={nextId++}>
    
              <div className="flex flex-row mt-6 bg-white p-5 shadow-sm">
              <div className="basis-start text-sm mx-2"><strong>{nextId}</strong></div>
                <div className="basis-start text-sm mx-2"><strong>{name}</strong></div>
                <div className="basis-1/2 text-sm mr-2 ">{email}</div>
                <div className="basis-1/2 text-sm"> {user_id} </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
    )
}

export default Users