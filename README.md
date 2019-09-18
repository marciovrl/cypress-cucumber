# example-cypress-cucumber

Field for training e2e tests with the use of cypress

Using the site `https: // www.mercadolivre.com.br /` and developed e2e automation of the following features: - Item search.

# Preconditions:

- Package node installed;
- Chrome installed.

# To use example-cypress project:

Clone the project:

```
git clone https://github.com/marciovrl/example-cypress-cucumber.git
```

Install dependencies:

```
npm install
```

Run the tests:

```
npm run test
```

Run the cypress:

```
npm run open
```

# To start similar project from scratch:

First create the node project structure:

```
npm init
```

Second install cypress dependency:

```
npm install cypress -–save-dev
```

Third install the cucumber dependency:

```
npm install cypress-cucumber-preprocessor –-save-dev
```

and set up `cypress/plugins/index.js`.

Fourth is to edit your `package.json` and configure the script commands. Example:

```
  "scripts": {
    "open": "node_modules/.bin/cypress open",
    "test": "cypress run --spec cypress/integration/specifications/*.feature"
  },
```

Ready! Your Cypress project set up from scratch.
