import React, { useState } from 'react';
import { addCapivara } from '../api';
import { TailSpin } from 'react-loader-spinner';
import Modal from './Modal';  // Importando o componente Modal

const AddCapivara = ({ onAdd }) => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(''); 
    const [peso, setPeso] = useState('');
    const [statusDeSaude, setStatusDeSaude] = useState('');
    const [habitat, setHabitat] = useState('');
    const [comportamento, setComportamento] = useState('');
    const [dieta, setDieta] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [showPreview, setShowPreview] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!nome) newErrors.nome = 'O nome é obrigatório.';
        if (!idade || idade <= 0 || idade > 25) newErrors.idade = 'A idade deve ser entre 1 e 25 anos.';
        if (!peso || peso < 0.1 || peso > 150) newErrors.peso = 'O peso deve ser entre 0.1kg e 150kg.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setShowPreview(true);  // Abre o modal de confirmação
    };

    const confirmSubmit = async () => {
        setLoading(true);

        const newCapivara = {
            nome,
            idade,
            peso,
            statusDeSaude: statusDeSaude || 'Saudável',  // Garantir que um valor padrão seja enviado
            habitat,
            comportamento,
            dieta,
            observacoes
        };

        try {
            const result = await addCapivara(newCapivara);
            setMessage('Capivara adicionada com sucesso!');
            onAdd(result);
            resetForm();
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            setMessage('Erro ao adicionar a capivara. Tente novamente.');
            console.error("Erro ao adicionar capivara:", error);
        }
        setLoading(false);
        setShowPreview(false);
    };

    const resetForm = () => {
        setNome('');
        setIdade('');
        setPeso('');
        setStatusDeSaude('');
        setHabitat('');
        setComportamento('');
        setDieta('');
        setObservacoes('');
        setErrors({});
    };

    return (
        <div className="w-full max-w-2xl mx-auto"> {/* Centralizando e limitando o tamanho */}
            <form onSubmit={handleSubmit} className="bg-black text-white shadow-md rounded px-4 sm:px-6 py-6 sm:py-8 mb-4 text-center">
                <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">Adicionar Capivara</h2>
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
                            placeholder="Dieta (Opcional)"
                            value={dieta}
                            onChange={(e) => setDieta(e.target.value)}
                            maxLength={400}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            className="border rounded w-full py-2 px-3 bg-gray-700 text-white"
                            type="text"
                            placeholder="Observações (Opcional)"
                            value={observacoes}
                            onChange={(e) => setObservacoes(e.target.value)}
                            maxLength={400}
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        {loading ? 'Adicionando...' : 'Adicionar'}
                    </button>
                </div>

                {loading && <TailSpin height="50" width="50" color="white" ariaLabel="loading" />}
            </form>

            <Modal isOpen={showPreview} onClose={() => setShowPreview(false)} onConfirm={confirmSubmit}>
                <h3 className="text-xl font-bold mb-4 text-white">Confirme os dados da Capivara</h3>
                <p className="text-white"><strong>Nome:</strong> {nome}</p>
                <p className="text-white"><strong>Idade (anos):</strong> {idade}</p>
                <p className="text-white"><strong>Peso (kg):</strong> {peso}</p>
                <p className="text-white"><strong>Status de Saúde:</strong> {statusDeSaude}</p>
                <p className="text-white"><strong>Habitat:</strong> {habitat}</p>
                <p className="text-white"><strong>Comportamento:</strong> {comportamento}</p>
                <p className="text-white"><strong>Dieta:</strong> {dieta || 'Não especificada'}</p>
                <p className="text-white"><strong>Observações:</strong> {observacoes}</p>
            </Modal>
        </div>
    );
};

export default AddCapivara;
