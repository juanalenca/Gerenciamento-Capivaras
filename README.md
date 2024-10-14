# Sistema de Gerenciamento de Capivaras 

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
│   ├── database/            # Configurações e conexão ao banco de dados
│   │   └── server.js        # Servidor Node.js que gerencia a conexão ao MySQL
│   ├── controllers/         # Controladores que contêm a lógica para manipulação de dados
│   │   └── capivaraController.js  # Lógica de controle para a entidade "Capivara"
│   ├── routes/              # Definição das rotas da API
│   │   └── capivaraRoutes.js      # Rotas específicas para a gestão de capivaras
│   ├── node_modules/        # Dependências do backend
│   ├── env/                 # Variáveis de ambiente e configurações
│   ├── Dockerfile           # Dockerfile para construção da imagem da API
│   ├── docker-compose.yml   # Docker Compose para orquestração dos serviços (API + MySQL)
│   ├── package-lock.json    # Lockfile das dependências do backend
│   └── package.json         # Dependências e scripts do backend
│
└── capivara-app/            # Frontend (React)
    ├── node_modules/        # Dependências do frontend
    ├── src/                 # Código-fonte do frontend
    │   ├── componentes/     # Componentes React reutilizáveis
    │   │   ├── AddCapivara.js    # Componente para adicionar uma nova capivara
    │   │   ├── CapivaraList.js   # Componente que lista as capivaras
    │   │   ├── EditCapivara.js   # Componente para editar capivaras existentes
    │   │   └── Modal.js          # Componente de modal para confirmar ações
    │   ├── api.js           # Arquivo de integração com a API
    │   ├── App.js           # Componente raiz da aplicação React
    │   ├── App.css          # Estilos principais do aplicativo
    │   ├── App.test.js      # Testes para o componente App
    │   ├── index.js         # Ponto de entrada do React
    │   ├── index.css        # Estilos globais
    │   ├── reportWebVitals.js  # Utilitário de performance do React
    │   └── setupTests.js    # Arquivo de configuração para testes
    ├── package-lock.json    # Lockfile das dependências do frontend
    ├── package.json         # Dependências e scripts do frontend
    └── tailwind.config.js   # Configuração do Tailwind CSS
```
<br><br>

## 📋 Requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

- [**Node.js**](https://nodejs.org/) (v14 ou superior)
- [**Docker**](https://www.docker.com/)
- [**Docker Compose**](https://docs.docker.com/compose/)
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
> **⚠️ Nota:** No projeto, as credenciais padrão são definidas como:
> ```bash
> DB_USER=root
> DB_PASSWORD=123456
> DB_NAME=zoologico
> ```
> Essas credenciais são adequadas para testes locais, mas é **altamente recomendado** substituí-las por valores personalizados em ambientes de produção para garantir a segurança do sistema.

#### b) Executar a API com Docker Compose
Dentro do diretório api/, execute o seguinte comando para construir a imagem e iniciar a API juntamente com o banco de dados MySQL:
```bash
docker-compose up --build
```
Isso criará e iniciará o container com a API e o MySQL.
<br>
<br><br>

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
1. No diretório **capivara-app/**, instale as dependências do projeto:
```bash
npm install
```
2. Execute a aplicação React em modo de desenvolvimento:
```bash
npm start
```
<br>

### 4. Acessar a aplicação
- Abra o navegador e acesse o frontend: [http://localhost:3000](http://localhost:3000).
- A API estará rodando no endpoint: [http://localhost:5000](http://localhost:5000).
<br>

### 5. Testar a Aplicação
Após levantar a aplicação (frontend e backend), você poderá interagir com o sistema para gerenciar capivaras:

- **Adicionar Capivara**: Preencha o formulário e clique em "Adicionar".
- **Editar Capivara**: Clique no botão de "Editar" de uma capivara já existente e altere os dados.
- **Remover Capivara**: Utilize o botão de "Remover" para deletar uma capivara do sistema.
<br><br><br>

## 🔧 Resolução de Problemas

### Problema de Conexão com o MySQL

Se ocorrer um erro ao conectar à base de dados, verifique se:

1. As credenciais no `.env` e no `docker-compose.yml` estão corretas.
2. A porta **3307** não está em uso por outro serviço localmente.

### Alterações em Ambientes de Produção

- Altere as credenciais padrão para valores mais seguros no `docker-compose.yml` e `.env`.
- Configure variáveis de ambiente adicionais para garantir a segurança e performance.

### Arquivo `docker-compose.yml` - Configuração Completa

```yaml
version: '3.8'

services:
  api:
    build: ./api
    ports:
      - '5000:5000'
    environment:
      DB_HOST: mysql
      DB_USER: root
      DB_PASSWORD: 123456
      DB_NAME: zoologico
    depends_on:
      - mysql

  mysql:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: 123456
      MYSQL_DATABASE: zoologico
    ports:
      - '3307:3306'
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```
> 📌 **Nota**: Altere `DB_USER`, `DB_PASSWORD` e `MYSQL_ROOT_PASSWORD` conforme necessário em ambientes de produção para melhorar a segurança.

<br><br>

## 🌐 Tecnologias Utilizadas

### Backend:
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Frontend:
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [React-Loader-Spinner](https://www.npmjs.com/package/react-loader-spinner)
- [React-Transition-Group](http://reactcommunity.org/react-transition-group/)
<br><br><br>

## 🤝 Contribuição
Sinta-se à vontade para abrir **issues** ou **pull requests** no repositório! Qualquer feedback ou sugestão é bem-vindo.
