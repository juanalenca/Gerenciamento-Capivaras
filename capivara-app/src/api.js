const API_URL = 'http://localhost:5000/capivaras';

export const fetchCapivaras = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

export const addCapivara = async (capivara) => {
    try {
        const response = await fetch('http://localhost:5000/capivaras', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  // Cabeçalho JSON
            },
            body: JSON.stringify(capivara),  // Converte o objeto para JSON
        });

        const responseBody = await response.text(); // Obtém o corpo da resposta

        try {
            const json = JSON.parse(responseBody);  // Tenta converter para JSON
            if (!response.ok) {
                throw new Error(json.error || 'Erro na requisição ao servidor');
            }
            return json;
        } catch (error) {
            console.error('Erro ao converter resposta para JSON:', responseBody);
            throw new Error('Resposta do servidor inválida');
        }
    } catch (error) {
        console.error('Erro no frontend ao adicionar capivara:', error);
        throw error;
    }
};

export const updateCapivara = async (id, capivara) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(capivara),  // Certifique-se de que o objeto capivara está sendo convertido para JSON
    });

    if (!response.ok) {
        throw new Error('Erro ao atualizar capivara no servidor');
    }

    return await response.json();
};


export const deleteCapivara = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Erro ao remover capivara no servidor');
    }

    // Lendo a resposta JSON
    const responseBody = await response.json();
    console.log('Response body:', responseBody);

    return responseBody;
};
