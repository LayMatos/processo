# Aplicação PJCMT

## Dados de Inscrição
Nome: Layssa Matos Dos Santos

Email: layssamatos8@gmail.com

Data de Entrega: 01/04/2025

## Descrição breve do projeto.

O projeto tem como objetivo fornecer uma aplicação que permita aos cidadãos consultar informações sobre pessoas desaparecidas, utilizando uma API disponibilizada pela Polícia Judiciária Civil de Mato Grosso. Através dessa aplicação, os usuários podem buscar dados sobre desaparecidos, visualizar detalhes dos casos e, se desejado, enviar informações que possam ajudar na localização dessas pessoas. A integração com a API é realizada de forma eficiente, oferecendo uma interface amigável para consultas rápidas e envio de informações diretamente pela plataforma.

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
   git clone https://github.com/LayMatos/processo.git

2. Acesse o diretório do projeto:
   ```sh
    cd processo

3. Instale as dependências:
    ```sh
    npm install

## Execução
Ambiente de Desenvolvimento
- Para rodar localmente:
     ```sh
     npm run dev

Acesse em: http://localhost:5173

## Construção e Execução com Docker

- Construa a imagem Docker:
    ```sh
    docker build -t project .

- Execute o container:
    ```sh
    docker run -p 80:80 project

Acesse em: http://localhost:80


### Executando com Docker Compose
- Suba os serviços:
     ```sh
     docker-compose up -d

Acesse em: http://localhost:80


## Testes
- Para rodar os testes:
     ```sh
     npm test

## Descrição dos Diretórios e Arquivos Principais:
- dist/: Arquivos gerados após a construção do projeto (build), como o index.html.

- node_modules/: Contém as dependências do projeto.

- public/: Arquivos públicos como imagens e recursos estáticos.

- src/: Diretório com o código-fonte:

    - assets/: Imagens e recursos.

    - components/: Componentes reutilizáveis.

    - controllers/: Lógica de controle.

    - pages/: Páginas da aplicação.

    - routes/: Configuração das rotas.

    - service/: Funções que fazem chamadas para APIs externas.

    - styles/: Arquivos de estilo.

    - utils/: Funções utilitárias.

- .gitignore: Arquivos e pastas que o Git deve ignorar.

- docker-compose.yml: Configuração do Docker Compose.

- Dockerfile: Como criar a imagem Docker para o projeto.

- eslint.config.js: Configuração do ESLint.

- index.html: Página principal.

- nginx.conf: Configuração do servidor web Nginx.

- package-lock.json: Controle de versões das dependências.

- package.json: Dependências e scripts do projeto.

- postcss.config.cjs: Configuração do PostCSS.

- README.md: Documentação do projeto.

- tailwind.config.cjs: Configuração do Tailwind CSS.

- tsconfig.app.json: Configuração do TypeScript para a aplicação.

- tsconfig.json: Configuração global do TypeScript.

- tsconfig.node.json: Configuração do TypeScript para Node.js.

- vite.config.ts: Configuração do Vite.
