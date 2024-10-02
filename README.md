# Sistema de Gerenciamento de Capivaras 🦫

Este projeto é uma aplicação web para gerenciar capivaras, permitindo que você adicione, edite, liste e remova informações sobre essas adoráveis criaturas. O projeto é dividido em duas partes principais: a **API (backend)**, que lida com as operações no banco de dados, e o **Frontend (capivara-app)**, que é a interface do usuário.
<br><br><br>

## 🌟 Funcionalidades Principais

- **Adicionar** uma capivara com nome, idade, peso, status de saúde, habitat, comportamento, dieta e observações.
- **Editar** os detalhes de uma capivara existente.
- **Listar** todas as capivaras registradas.
- **Remover** capivaras da lista.
- **Confirmações** para ações importantes.
<br><br><br>


## 🏗️ Estrutura do Projeto

```bash
Gerenciamento-Capivaras/
│
├── api/                     # Backend (Node.js + Express + MySQL)
│   ├── controllers/         # Lógica dos controladores para manipular dados
│   ├── database/            # Conexão ao banco de dados
│   ├── routes/              # Rotas da API
│   ├── Dockerfile           # Dockerfile para a API
│   └── docker-compose.yml   # Docker Compose para orquestração dos serviços (API + MySQL)
│
└── capivara-app/            # Frontend (React)
    ├── src/                 # Código-fonte do frontend
    └── package.json         # Dependências do frontend
```
<br><br>

## 📋 Requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (v14 ou superior)
- **Docker**
- **Docker Compose**
<br><br><br>


## 🚀 Passo a Passo de Instalação e Execução

### 1. Clone o repositório
Clone o projeto para a sua máquina local usando o Git:
```bash
git clone https://github.com/juanalenca/Gerenciamento-Capivaras.git
```
```bash
cd Gerenciamento-Capivaras
```
<br>

### 2. Configuração do Backend (API)
#### a) **Configurar as variáveis de ambiente**
Dentro do diretório **api/**, crie um arquivo **.env** com as seguintes variáveis de ambiente:
```bash
DB_HOST=mysql
DB_USER=<seu_usuario_mysql>
DB_PASSWORD=<sua_senha_mysql>
DB_NAME=<nome_do_banco_de_dados>
```
Essas variáveis de ambiente são usadas para configurar a conexão com o banco de dados MySQL.

#### b) Executar a API com Docker Compose
No diretório **api/**, execute o seguinte comando para levantar a API e o banco de dados MySQL:
```bash
docker-compose up --build
```
<br>

### 3. Configuração do Frontend (React)
Você pode executar o frontend de duas maneiras: usando Docker ou Node.js diretamente.

#### a) Executar com Docker
No diretório **capivara-app/**, execute o comando abaixo para buildar a imagem do Docker e iniciar a aplicação na porta **3000**:
```bash
docker build -t capivara-app .
```
```bash
docker run -p 3000:3000 capivara-app
```

#### b) Executar localmente com Node.js
1. No diretório capivara-app/, instale as dependências do projeto:
```bash
cd capivara-app
npm install
```
2. Execute a aplicação React em modo de desenvolvimento:
```bash
npm start
```
<br>

### 4. Acessar a aplicação
- Abra o navegador e acesse o frontend: http://localhost:3000.
- A API estará rodando no endpoint: http://localhost:5000.
Você poderá adicionar, editar e remover capivaras pela interface da aplicação.<br>
<br>

### 5. Testar a Aplicação
Após levantar a aplicação (frontend e backend), você poderá interagir com o sistema para gerenciar capivaras:

- Adicionar Capivara: Preencha o formulário e clique em "Adicionar".
- Editar Capivara: Clique no botão de "Editar" de uma capivara já existente e altere os dados.
- Remover Capivara: Utilize o botão de "Remover" para deletar uma capivara do sistema.
<br><br><br>

## 🌐 Tecnologias Utilizadas

### Backend:
- Node.js
- Express
- MySQL
- Docker (para containerização)
- Docker Compose (para orquestração)

### Frontend:
- React
- TailwindCSS (para estilização)
- React-Icons (para ícones)
- React-Loader-Spinner (para animações de carregamento)
- React-Transition-Group (para animações)
<br><br><br>

## 🤝 Contribuição
Sinta-se à vontade para abrir issues ou pull requests no repositório! Qualquer feedback ou sugestão é bem-vindo.
