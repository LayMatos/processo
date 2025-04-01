# Nome do Projeto

Descrição breve do projeto.

## Tecnologias Utilizadas

- React
- Vite
- Tailwind CSS
- Lazy Loading Routes
- Docker

## Requisitos

- Node.js >= 18
- Docker e Docker Compose

## Dependências

### Produção

- `@vitejs/plugin-vue` ^5.2.3
- `autoprefixer` ^10.4.21
- `axios` ^1.8.4
- `lodash` ^4.17.21
- `lucide-react` ^0.485.0
- `react` ^19.0.0
- `react-dom` ^19.0.0
- `react-icons` ^5.5.0
- `react-router-dom` ^7.4.1
- `tailwindcss` ^3.0.0

### Desenvolvimento

- `@eslint/js` ^9.21.0
- `@swc/cli` ^0.6.0
- `@swc/core` ^1.11.13
- `@swc/helpers` ^0.5.15
- `@types/lodash` ^4.17.16
- `@types/react` ^19.0.10
- `@types/react-dom` ^19.0.4
- `@vitejs/plugin-react-swc` ^3.8.0
- `eslint` ^9.21.0
- `eslint-plugin-react-hooks` ^5.1.0
- `eslint-plugin-react-refresh` ^0.4.19
- `globals` ^15.15.0
- `postcss` ^8.5.3
- `typescript` ~5.7.2
- `typescript-eslint` ^8.24.1
- `vite` ^6.2.0

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Acesse o diretório do projeto:
  ```cd seu-repositorio

3. Instale as dependências:
  ```npm install

### Execução
Ambiente de Desenvolvimento
Para rodar localmente:
```npm run dev
Acesse em: http://localhost:5173

## Construção e Execução com Docker
Construa a imagem Docker:
```docker build -t nome-do-projeto .

Execute o container:
```docker run -p 80:80 nome-do-projeto

Acesse em: http://localhost:80


### Executando com Docker Compose
Suba os serviços:
```docker-compose up -d
Acesse em: http://localhost:80


## Testes
Para rodar os testes:
```npm test

## Estrutura do Projeto
/
├── dist/                # Build do projeto
│   ├── assets/          # Arquivos estáticos gerados
│   ├── index.html       # Página principal
│   └── vite.svg         # Ícone do Vite
├── node_modules/        # Dependências do projeto
├── public/              # Arquivos públicos
│   └── vite.svg         # Ícone do Vite
├── src/                 # Código-fonte do projeto
│   ├── assets/          # Imagens e recursos
│   ├── components/      # Componentes reutilizáveis
│   ├── controllers/     # Lógica de controle das páginas
│   ├── pages/           # Páginas do projeto
│   ├── routes/          # Configuração das rotas
│   ├── service/         # Chamadas à API
│   ├── styles/          # Estilos globais
│   ├── utils/           # Funções utilitárias
├── .gitignore           # Arquivos ignorados pelo Git
├── .swcrc               # Configuração do SWC
├── docker-compose.yml   # Configuração do Docker Compose
├── Dockerfile           # Configuração do Docker
├── eslint.config.js     # Configuração do ESLint
├── index.html           # Página principal
├── nginx.conf           # Configuração do Nginx
├── package-lock.json    # Controle de versões das dependências
├── package.json         # Dependências e scripts
├── postcss.config.cjs   # Configuração do PostCSS
├── README.MD            # Documentação do projeto
├── tailwind.config.cjs  # Configuração do Tailwind CSS
├── tsconfig.app.json    # Configuração do TypeScript para a aplicação
├── tsconfig.json        # Configuração global do TypeScript
├── tsconfig.node.json   # Configuração do TypeScript para Node.js
└── vite.config.ts       # Configuração do Vite
