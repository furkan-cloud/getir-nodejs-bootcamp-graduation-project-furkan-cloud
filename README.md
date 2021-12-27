# Getir Nodejs Bootcamp Graduation Project

This is a backend project for graduation from Patika.dev Getir Nodejs bootcamp which uses NodeJS, Express, MongoDB, ApiDoc and Jest.
There is one route for post requests and response will be records payload from db.

## Description
- This is a production ready RESTful API and user can fetch records according to specific queries
- Error Handling implemented for catching internal server errors, validation errors and unknown url requests
- Documentation implemented for routes
- Route test added with Jest

## Installation

- Yarn package manager used in this project.
- For avoiding conflicts or errors it is recommended to use yarn instead of npm.
- You can download [yarn](https://yarnpkg.com/) from this address.
- Clone this repo to your desktop and run `yarn install` to install all the dependencies.
- You should look into `.env.example` to set neccessary environment variables before starting the project.
- You can also install [apiDoc](https://apidocjs.com/#getting-started) `yarn global add apidoc` globally to see detailed documentation as your main page in your localhost.

## Run

Once the dependencies are installed, you can run `yarn start` to start the application. You will then be able to access it at localhost:PORT

## API Documentation

-   Detailed documentation available on this [page](https://furkan-turkoglu-getir-case.herokuapp.com/)

## Tests

You can run implemented tests with the command below.

```bash
yarn test
```