# example-cypress-cucumber

Field for training e2e tests with the use of cypress

Peguei o site `https://www.mercadolivre.com.br/` e desenvolvi a automação e2e das seguintes features: - Pesquisa de item.

# Pré-condições:

- Pacote node instalado;
- Chrome instalado.

# Para utilizar projeto exemplo-cypress:

Clonar o projeto:

```
git clone https://github.com/marciovrl/example-cypress-cucumber.git
```

Instalar as dependencias executando:

```
npm install
```

Para executar os testes:

```
npm run test
```

E para executar o cypress

```
npm run open
```

# Para começar projeto semelhante do zero:

Primeiro criar a estrutura do projeto node:

```
npm init
```

Segundo instalar a dependencia do cypress:

```
npm install cypress -–save-dev
```

Terceiro instalar a dependencia do cucumber:

```
npm install cypress-cucumber-preprocessor –-save-dev
```

e configurar `cypress/plugins/index.js`.

Quarto é editar seu `package.json` e configurar os comandos de script. Exemplo:

```
  "scripts": {
    "open": "node_modules/.bin/cypress open",
    "test": "cypress run --spec cypress/integration/specifications/*.feature"
  },
```

Pronto! Seu projeto Cypress configurado do zero.

# Estrutura do projeto

```
|
| - cypress
    | - fixtures
      | - `example.json`
    | - integration
      | - specifications
        | - `example.feature`
      | - steps_definitions
        | - `example_steps.js`
    | - plugins
      | - `index.js`
    | - support
      | - `commands.js`
      | - `index.js`
| - `.gitignore`
| - `cypress.json`
| - `package.json`
| - `README.md`
```
