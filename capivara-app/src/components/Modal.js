import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-lg p-6 mx-4 relative">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition duration-300"
                    onClick={onClose}
                >
                    ✕
                </button>
                <div className="mb-4">{children}</div>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onConfirm}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                        Confirmar
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
