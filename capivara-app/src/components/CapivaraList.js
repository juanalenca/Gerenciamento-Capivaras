import React, { useEffect, useState } from "react";
import { fetchCapivaras, deleteCapivara } from "../api";
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Ícones para botões
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Animações de transição

const CapivaraList = ({ onEdit, refresh }) => {
  const [capivaras, setCapivaras] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadCapivaras = async () => {
      const data = await fetchCapivaras();
      setCapivaras(data);
    };
    loadCapivaras();
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      await deleteCapivara(id);
      setCapivaras((prevCapivaras) =>
        prevCapivaras.filter((capivara) => capivara.id !== id)
      );
      setMessage("Capivara removida com sucesso!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Erro ao remover capivara.");
      console.error("Erro ao remover capivara:", error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">Lista de Capivaras</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <TransitionGroup component="ul" className="space-y-4">
        {capivaras.map((capivara) => (
          <CSSTransition key={capivara.id} timeout={500} classNames="fade">
            <li className="flex flex-col sm:flex-row justify-center sm:justify-between items-center bg-gray-800 border border-gray-600 rounded p-4 sm:p-6 shadow-md space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="text-white text-center sm:text-left">
                <span className="font-bold">{capivara.nome}</span> - {capivara.idade} anos
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => onEdit(capivara)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaEdit className="mr-2" /> Editar
                </button>
                <button
                  onClick={() => handleDelete(capivara.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaTrashAlt className="mr-2" /> Remover
                </button>
              </div>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default CapivaraList;
