import React, { useState } from 'react';
import CapivaraList from './components/CapivaraList';
import AddCapivara from './components/AddCapivara';
import EditCapivara from './components/EditCapivara';

const App = () => {
    const [selectedCapivara, setSelectedCapivara] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handleEdit = (capivara) => {
        setSelectedCapivara(capivara);
    };

    const handleUpdate = () => {
        setSelectedCapivara(null);
        setRefresh(!refresh);
    };

    return (
        <div className="bg-black text-white min-h-screen">
            <div className="container mx-auto p-4 sm:px-2 lg:px-8">
                <h1 className="text-4xl font-bold mb-6 text-green-400">
                    Gerenciamento de Capivaras
                </h1>
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                    {selectedCapivara ? (
                        <EditCapivara capivara={selectedCapivara} onUpdate={handleUpdate} onCancel={() => setSelectedCapivara(null)} />
                    ) : (
                        <AddCapivara onAdd={handleUpdate} />
                    )}
                    <CapivaraList onEdit={handleEdit} refresh={refresh} />
                </div>
            </div>
        </div>
    );    
};

export default App;
