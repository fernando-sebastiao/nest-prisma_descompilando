<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Book API

Esta é uma API de gerenciamento de livros desenvolvida com **NestJS** e **Prisma**. Ela permite gerenciar livros, clientes e vendas, oferecendo um **CRUD completo** para todas as entidades.

A API foi desenvolvida com boas práticas, incluindo **validação de dados** utilizando o `ValidationPipe` do NestJS, garantindo que todas as requisições sejam consistentes antes de serem processadas.

## Funcionalidades

- **CRUD completo** para livros (`Book`), clientes (`Customer`) e itens de venda (`SaleItem`).
- **Validação automática** de dados usando `ValidationPipe`.
- **Relacionamentos bem definidos** entre tabelas:
  - Um livro (`Book`) pode estar presente em múltiplos itens de venda (`SaleItem`).
  - Um cliente (`Customer`) pode comprar múltiplos livros, registrados em `SaleItem`.
- **Documentação da API** disponível (usando Swagger), facilitando a exploração das rotas.
- **Controle de estoque** automático no modelo `Book`.
- **Auditoria de datas**: todas as entidades possuem `createdAt` e `updatedAt`.

## Estrutura do banco de dados

O projeto utiliza **Prisma** com SQLite como banco de dados. A seguir estão os modelos principais:

### Book

- `id`: identificador único do livro
- `title`: título do livro
- `description`: descrição do livro
- `bar_code`: código de barras único
- `price`: preço do livro
- `stock`: quantidade em estoque
- `createdAt` / `updatedAt`: datas de criação e atualização
- Relação com `SaleItem`

### Customer

- `id`: identificador único do cliente
- `name`: nome do cliente
- `email`: email único do cliente
- `phone`: telefone do cliente (opcional)
- `createdAt`: data de criação
- Relação com `SaleItem`

### SaleItem

- `id`: identificador único do item de venda
- `bookId`: referência ao livro
- `customerId`: referência ao cliente
- `quantity`: quantidade vendida
- `price`: preço do item no momento da venda
- `createdAt`: data de criação
- Relações com `Book` e `Customer`

<p>Para rodar o projeto, você precisará instalar as dependências abaixo e executar alguns comandos:</p>

### Requisitos

- **Node.js** (v18 ou superior)
- **NestJS CLI** (global)
- **Prisma**

### Instalação de dependências

```bash
# Instalar NestJS CLI globalmente
npm install -g @nestjs/cli

# Instalar dependências do projeto
npm install

# Instalar Prisma e gerar cliente
npm install @prisma/client
npm install prisma --save-dev
npx prisma generate
```
