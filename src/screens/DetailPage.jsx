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
  const [isModalVisibleNotes, setModalVisibleNotes] = useState(false);
  const [idModal, setIdModal] = useState(null);
  const [idModalToDel, setIdModalToDel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showInitialContent, setShowInitialContent] = useState(true);

  const toggleModal = (_id) => {
    setModalVisible(!isModalVisible);
    setIdModal(_id);
  };

  const toggleModalB = () => {
    setModalVisibleB(!isModalVisibleB);
  };

  const toggleModalNotes = () => {
    setModalVisibleNotes(!isModalVisibleNotes);
  };

  const toggleModalC = (_id) => {
    setModalVisibleC(!isModalVisibleC);
    setIdModalToDel(_id);
    setShowInitialContent(true);
  };

  let nextId = 0;

  const routehttp = details.name;

  const handleDeleteClick = async (ShopId) => {
    setLoading(true);
    setShowInitialContent(false);
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
    } finally {
      setLoading(false); // Stop loading
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

  return (
    <>
      <div className="bg-zinc-50 mx-24 mt-20 p-12 shadow-md rounded-sm">
        <h2 className="font-semibold text-3xl mb-16 text-start">
          {" "}
          Lojas a cadastrar
        </h2>
        <div className="flex flex-row my-10 ">
          <div className="flex flex-row justify-between items-center">
            <div className="text font-bold text-xl mx-3"> Nome da rota:</div>
            <div className="text font-semibold text-accent text-xl">
              {" "}
              {details.name}
            </div>
            <div className="ml-14">
              <button
                className="bg-sky-900 hover:bg-sky-800 text-white font-semibold py-1 px-4 rounded-md"
                onClick={toggleModalB}
              >
                Cadastar nova loja
              </button>
            </div>
            <button
                className="bg-gray-200 hover:bg-gray-300 text-black border-[1px] border-black font-semibold py-1 px-4 rounded-md ml-4"
                onClick={toggleModalNotes}
              >
                Anotações
              </button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-start ml-2"> Nº </div>
          <div className="basis-1/2"> Nome </div>
          <div className="basis-1/2"> Endereço </div>
          <div className="basis-end"> Configurações </div>
        </div>
        <div className="">
          <ul>
            {shopsAllDocuments.map(({ description, _id, adress }) => (
              <li key={nextId++}>
                <div className="divider divider-neutral my-0.5" />
                <div className="flex flex-row mx-1">
                  <div className="basis-start text-sm mx-2">
                    <strong>{nextId + 1}</strong>
                  </div>
                  <div className="basis-1/2 text-sm mr-2">{description}</div>
                  <div className="basis-1/2 text-sm mr-2">{adress}</div>

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
                          x="0px"
                          y="0px"
                          width="20"
                          height="20"
                          viewBox="0 0 32 32"
                        >
                          <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 12 L 17 12 L 17 10 Z M 15 14 L 15 22 L 17 22 L 17 14 Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
        <Box className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-auto rounded-xl bg-zinc-200 ">
          <div className="flex flex-col px-8 py-4">
            <button onClick={toggleModal} className="self-end mb-1">
              {" "}
              X{" "}
            </button>
            {Object.keys(shopsAllDocuments).map((key, index) => (
              <div key={index}>
                {shopsAllDocuments[key]._id === idModal && (
                  <div>
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
          </div>
        </Box>
      </Modal>

      <Modal open={isModalVisibleB} onClose={toggleModalB}>
        <Box className="fixed top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] bg-zinc-50 w-full">
          <ExtForm routeParam={details.name} onClickSend={toggleModalB} />
        </Box>
      </Modal>

      <Modal open={isModalVisibleC} onClose={toggleModalC}>
        <Box className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <ModalDelete
            onConfirmDel={() => handleDeleteClick(idModalToDel)}
            onCancelDel={() => setModalVisibleC()}
            showInitialContent={showInitialContent}
            loading={loading}
          ></ModalDelete>
        </Box>
      </Modal>

      
      <Modal open={isModalVisibleNotes} onClose={toggleModalNotes}>
      <Box className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-auto rounded-xl bg-zinc-50 ">
      <div className="w-64 h-52 p-3">
            <div>
              <h1>Anotacoes da rota</h1>
            </div>
            <div>
              Insira as novas anotações:
            </div>
            <textarea className="textarea textarea-bordered" placeholder="Anotar..."></textarea>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default DetailPage;
