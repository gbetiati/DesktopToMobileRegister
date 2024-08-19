import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Modal, Box, Button } from "@mui/material";
import ExtForm from "../components/ExtForm";
import ModalDelete from "../components/ModalDelete";

const DetailPage = () => {
  const { id } = useParams();

  const fetchDetails = (id) => {
    return {
      id,
      name: `${id}`,
    };
  };

  const details = fetchDetails(id);

  const [shopsAllDocuments, setShopsAllDocuments] = useState([]);
  const [data, setData] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleB, setModalVisibleB] = useState(false);
  const [isModalVisibleC, setModalVisibleC] = useState(false);
  const [idModal, setIdModal] = useState(null);
  const [idModalToDel, setIdModalToDel] = useState(null);
  const [newDescription, setNewDescription] = useState("");

  const toggleModal = (_id) => {
    setModalVisible(!isModalVisible);
    setIdModal(_id);
  };

  const toggleModalB = () => {
    setModalVisibleB(!isModalVisibleB);
  };

  const toggleModalC = (_id) => {
    setModalVisibleC(!isModalVisibleC);
    setIdModalToDel(_id)
  };

  let nextId = 0;

  const routehttp = details.name;

  const handleEditClick = async (newDescription) => {
    try {
      const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/editDescriptionEP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ routehttp, newDescription }), // Include data from the UI
        }
      );
      const data = await response.json();
      console.log("Response data:", data);
      setData(data);
    } catch (error) {
      console.error("Error calling serverless function:", error);
    }
  };

  const handleDeleteClick = async (ShopId) => {
    try {
      const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/deleDocumentsShopEP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ routehttp, ShopId }), // Include data from the UI
        }
      );
      const data = await response.json();
      console.log("Response data:", data);
      setData(data);  
    } catch (error) {
      console.error("Error calling serverless function:", error);
    }
  };

  useEffect(() => {
    const fetchShopsData = async () => {
      try {
        const response = await fetch(
          "https://sa-east-1.aws.data.mongodb-api.com/app/application-1212-iqtvhvv/endpoint/getCollectionsAllDocumentsEP",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ routehttp }),
          }
        );
        const shopsJson = await response.json();
        console.log("JSON data recebido i:", shopsJson);
        setShopsAllDocuments(shopsJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchShopsData();
  }, []);

  console.log(newDescription);

  return (
    <>
      <div className="bg-zinc-50 mx-24 mt-20 p-12 shadow-md rounded-sm">
        <h2 className="font-semibold text-3xl mb-16 text-start">
          {" "}
          Lojas a cadastrar
        </h2>
        <div className="flex flex-row my-10">
          <div className="flex flex-row justify-between items-center">
            <div className="text font-bold text-xl mx-3"> Nome da rota:</div>
            <div className="text font-semibold text-accent text-xl">
              {" "}
              {details.name}
            </div>
            <div className="ml-14">
              <button
                className="bg-secondary hover:bg-blue-800 text-white font-semibold py-1 px-4 rounded-md"
                onClick={toggleModalB}
              >
                Cadastar nova loja
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-start ml-2"> Nº </div>
          <div className="basis-1/2"> Nome </div>
          <div className="basis-1/2"> ID </div>
          <div className="basis-end"> Configurações </div>
        </div>
        <ul>
          {shopsAllDocuments.map(({ description, _id }) => (
            <li key={nextId++}>
              <div className="divider divider-primary my-[0.2px]" />
              <div className="flex flex-row mx-1">
                <div className="basis-start text-sm mx-2">
                  <strong>{nextId + 1}</strong>
                </div>
                <div className="basis-1/2 text-sm mr-2">{description}</div>
                <div className="basis-1/2 text-sm mr-2">{_id}</div>
         
                <div className="basis-end mx-1"> 
                  <div className="flex flex-row">
                <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => toggleModalC(_id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 48 48"
                    >
                      <path d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 14.640625 6 C 12.803372 6 11.082924 6.9194511 10.064453 8.4492188 L 7.6972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 8.2636719 15 A 1.50015 1.50015 0 0 0 8.6523438 15.007812 L 11.125 38.085938 C 11.423352 40.868277 13.795836 43 16.59375 43 L 31.404297 43 C 34.202211 43 36.574695 40.868277 36.873047 38.085938 L 39.347656 15.007812 A 1.50015 1.50015 0 0 0 39.728516 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 40.302734 12 L 37.935547 8.4492188 C 36.916254 6.9202798 35.196001 6 33.359375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 14.640625 9 L 33.359375 9 C 34.196749 9 34.974746 9.4162203 35.439453 10.113281 L 36.697266 12 L 11.302734 12 L 12.560547 10.113281 A 1.50015 1.50015 0 0 0 12.5625 10.111328 C 13.025982 9.4151428 13.801878 9 14.640625 9 z M 11.669922 15 L 36.330078 15 L 33.890625 37.765625 C 33.752977 39.049286 32.694383 40 31.404297 40 L 16.59375 40 C 15.303664 40 14.247023 39.049286 14.109375 37.765625 L 11.669922 15 z"></path>
                    </svg>
                  </button>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => toggleModal(_id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 48 48"
                    >
                      <path d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"></path>
                    </svg>
                  </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>{details.name}</h1>
      </div>
      <Modal
        open={isModalVisible}
        onClose={toggleModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-80 bg-slate-300 ">
          <button onClick={toggleModal}> x </button>
          {Object.keys(shopsAllDocuments).map((key, index) => (
            <div key={index}>
              {shopsAllDocuments[key]._id === idModal && (
                <div>
                  <h3>{key}</h3>
                  <ul>
                    {Object.keys(shopsAllDocuments[key]).map(
                      (prop, propIndex) => (
                        <li key={propIndex}>
                          <strong>{prop}:</strong>{" "}
                          {shopsAllDocuments[key][prop]}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </Box>
      </Modal>

      <Modal open={isModalVisibleB} onClose={toggleModalB}>
        <Box className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-zinc-50">
          <ExtForm routeParam={details.name} onClickSend={toggleModalB} />
        </Box>
      </Modal>
      
      <Modal open={isModalVisibleC} onClose={toggleModalC}>
        <Box className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <ModalDelete
          onConfirmDel={() => handleDeleteClick(idModalToDel)}
          onCancelDel={() => setModalVisibleC()}
        />
        </Box>
      </Modal>

    </>
  );
};

export default DetailPage;
