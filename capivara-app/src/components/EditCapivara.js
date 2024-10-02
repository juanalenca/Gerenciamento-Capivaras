import React, { useState, useEffect } from 'react';
import { updateCapivara } from '../api';
import { TailSpin } from 'react-loader-spinner';

const EditCapivara = ({ capivara, onUpdate, onCancel }) => {
    const [nome, setNome] = useState(capivara?.nome || '');
    const [idade, setIdade] = useState(capivara?.idade || '');
    const [peso, setPeso] = useState(capivara?.peso || '');
    const [statusDeSaude, setStatusDeSaude] = useState(capivara?.status_de_saude || '');
    const [habitat, setHabitat] = useState(capivara?.habitat || '');
    const [comportamento, setComportamento] = useState(capivara?.comportamento || '');
    const [dieta, setDieta] = useState(capivara?.dieta || '');
    const [observacoes, setObservacoes] = useState(capivara?.observacoes || '');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (capivara) {
            setNome(capivara.nome || '');
            setIdade(capivara.idade || '');
            setPeso(capivara.peso || '');
            setStatusDeSaude(capivara.status_de_saude || '');
            setHabitat(capivara.habitat || '');
            setComportamento(capivara.comportamento || '');
            setDieta(capivara.dieta || '');
            setObservacoes(capivara.observacoes || '');
        }
    }, [capivara]);

    const validateForm = () => {
        const newErrors = {};
        if (!nome) newErrors.nome = 'O nome é obrigatório.';
        if (!idade || idade <= 0 || idade > 25) newErrors.idade = 'A idade deve ser entre 1 e 25 anos.';
        if (!peso || peso < 0.1 || peso > 150) newErrors.peso = 'O peso deve ser entre 0.1kg e 150kg.';
        if (!statusDeSaude) newErrors.statusDeSaude = 'O status de saúde é obrigatório.';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
    
        setLoading(true);
        try {
            await updateCapivara(capivara.id, {
                nome,
                idade,
                peso,
                status_de_saude: statusDeSaude,  
                habitat,
                comportamento,
                dieta,
                observacoes
            });
            setMessage('Capivara atualizada com sucesso!');
            onUpdate();
        } catch (error) {
            setMessage('Erro ao atualizar a capivara. Tente novamente.');
            console.error("Erro ao atualizar capivara:", error);
        }
        setLoading(false);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-black text-white shadow-md rounded px-4 sm:px-6 py-6 sm:py-8 mb-4">
                <h2 className="text-2xl font-bold text-center sm:text-left text-white mb-4">Editar Capivara</h2>
                {message && <p className="text-green-500 mb-4">{message}</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <input
                            className="border rounded w-full py-2 px-3 bg-gray-700 text-white"
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            maxLength={400}
                            required
                        />
                        {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            className="border rounded w-full py-2 px-3 bg-gray-700 text-white"
                            type="number"
                            placeholder="Idade (anos)"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                            required
                        />
                        {errors.idade && <p className="text-red-500 text-sm">{errors.idade}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            className="border rounded w-full py-2 px-3 bg-gray-700 text-white"
                            type="number"
                            placeholder="Peso (kg)"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                            step="0.01"
                            min="0.1"
                            max="150"
                            required
                        />
                        {errors.peso && <p className="text-red-500 text-sm">{errors.peso}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            className="border rounded w-full py-2 px-3 bg-gray-700 text-white"
                            type="text"
                            placeholder="Status de Saúde"
                            value={statusDeSaude}
                            onChange={(e) => setStatusDeSaude(e.target.value)}
                            maxLength={400}
                            required
                        />
                        {errors.statusDeSaude && <p className="text-red-500 text-sm">{errors.statusDeSaude}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            className="border rounded w-full py-2 px-3 bg-gray-700 text-white"
                            type="text"
                            placeholder="Habitat"
                            value={habitat}
                            onChange={(e) => setHabitat(e.target.value)}
                            maxLength={400}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            className="border rounded w-full py-2 px-3 bg-gray-700 text-white"
                            type="text"
                            placeholder="Comportamento"
                            value={comportamento}
                            onChange={(e) => setComportamento(e.target.value)}
                            maxLength={400}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            className="border rounded w-full py-2 px-3 bg-gray-700 text-white"
                            type="text"
                            placeholder="Dieta"
                            value={dieta}
                            onChange={(e) => setDieta(e.target.value)}
                            maxLength={400}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            className="border rounded w-full py-2 px-3 bg-gray-700 text-white"
                            type="text"
                            placeholder="Observações"
                            value={observacoes}
                            onChange={(e) => setObservacoes(e.target.value)}
                            maxLength={400}
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center sm:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        {loading ? 'Atualizando...' : 'Atualizar'}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Cancelar
                    </button>
                </div>

                {loading && <TailSpin height="50" width="50" color="white" ariaLabel="loading" />}
            </form>
        </div>
    );
};

export default EditCapivara;
