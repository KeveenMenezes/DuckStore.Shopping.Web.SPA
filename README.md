# DuckStore.Shopping.Web.SPA

DuckStore.Shopping.Web.SPA é uma aplicação web single-page (SPA) desenvolvida para oferecer uma experiência de compra online fluida e interativa. Esta aplicação é parte do ecossistema DuckStore e serve como a interface principal para os usuários finais realizarem compras.

## Funcionalidades

- Navegação por categorias de produtos.
- Pesquisa avançada de produtos.
- Carrinho de compras dinâmico.
- Finalização de pedidos com integração de pagamento.
- Interface responsiva para dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **Frontend**: Desenvolvido com [Angular](https://angular.io/) e [TypeScript](https://www.typescriptlang.org/).
- **Estilização**: Utiliza [Tailwind CSS](https://tailwindcss.com/) para design responsivo e moderno.
- **Componentes de UI**: Baseado em [Angular Material](https://material.angular.io/).
- **Comunicação com API**: Integração com backend via [HttpClient](https://angular.io/guide/http).

## Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone o repositório:
   ```bash
   git clone https://github.com/KeveenMenezes/DuckStore.Shopping.Web.SPA.git
   ```
3. Navegue até o diretório da aplicação:
   ```bash
   ~/DuckStore/src/WebApps/Shopping.Web.SPA
   ```
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
6. Acesse a aplicação em `http://localhost:4200`.

## Estrutura de Diretórios

- `/src`: Contém o código-fonte da aplicação.
  - `/app`: Diretório principal da aplicação Angular.
    - `/pages`: Páginas principais da aplicação.
    - `/shared`: Componentes e modelos compartilhados.
    - `/core`: Serviços e lógica central da aplicação.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).