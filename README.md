## Student Art Collection Frontend
[![Netlify Status](https://api.netlify.com/api/v1/badges/aec77a38-35ea-4299-ae5d-f08408c0a43f/deploy-status)](https://app.netlify.com/sites/artfunder-development/deploys)

[![Build Status](https://travis-ci.org/LABS-EU3/Student-Art-Collection-FRONTEND.svg?branch=master)](https://travis-ci.org/LABS-EU3/Student-Art-Collection-FRONTEND)

## Table of Contents
- [Scripts](#scripts)
  - [Installing](#installing)
  - [Running](#running)
- [Environment Variables](#environment-variables)
- [Tech-Stack](#tech-stack)
  - [Front-End Dependencies `(Production)`](#front-end-dependencies-production)
    - [React](#react)
    - [Redux](#redux)
    - [Styled Components](#styled-components)
    - [React Router](#react-router)
    - [Query-String](#query-string)
    - [React-Toastify](#react-toastify)
    - [Axios](#axios)
    - [Redux Thunk](#redux-thunk)
    - [React Modal](#react-modal)
    - [Jsonwebtoken](#jsonwebtoken)
    - [Redux-Persist](#redux-persist)
    - [Formik](#formik)
    - [Jest-Mock-Axios](#jest-mock-axios)
    - [Yup](#yup)
    - [Jest-Dom](#jest-dom)
    - [User-Event](#user-event)
    - [Testing-Libary](#testing-libary)
  - [Front-End Dependencies `(Development)`](#front-end-dependencies-development)
    - [Eslint](#eslint)
    - [Husky](#husky)
    - [Lint-Staged](#lint-staged)
    - [Prettier](#prettier)

# Scripts

## Installing

`npm install`: Installs all the dependencies needed for the frontend part of the app

## Running

`npm start`: Runs only the front-end client.

`npm test`: Will run the tests for front-end

`npm run build`: Will create a build file for front-end

# Environment Variables

`URL`: The url of the hosted website

# Tech-Stack

## Front-End Dependencies `(Production)`

### React

React is the current industry standard that offers a lot of out of the box benefits. It is fast, efficient, and scalable. Due to the large community, finding solutions to potential problems and reference material is much easier, even for a potential dev without a lot of experience who would like to contribute to Main Course. | [View Dependency](https://reactjs.org/docs/getting-started.html)

### Redux

Simply put, Redux is a state management tool. While it’s mostly used with React, it can be used with any other JavaScript framework or library. It is lightweight at 2KB (including dependencies), so you don’t have to worry about it making your application’s asset size bigger. With Redux, the state of your application is kept in a store, and each component can access any state that it needs from this store. | [Redux Official Website](https://redux.js.org)


### Styled Components

Has a large community and offers the ability to directly style multiple components within a file. The syntax used is familiar to JavaScript and improves code cleanliness and makes it easy to get up and going for those without a lot of css experience. Styled components are also very efficient, improving load time for users. | [View Dependency](https://www.styled-components.com/docs/)

### React Router
Declarative routing for React. Helps in the Routing of our application.
 | [View Dependency](https://reacttraining.com/react-router/web/guides/quick-start)

### Query-String
The query-string package helps in objectifying the query parameters in our react application. | [View Dependency](https://www.npmjs.com/package/query-string)

### React-Toastify
React-Toastify allow you to add notification to your app with ease. | [View Dependency](https://github.com/fkhadra/react-toastify)

### Axios
Axios is designed to handle http requests and responses. Axios deals with responses using Promises, so it's streamlined and easy to use in our code. Axios uses methods like get() and post() that perform http GET and POST requests for retrieving or creating resources.
[View Dependency](https://www.npmjs.com/package/axios)

### Redux Thunk
Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed. [View Dependency](https://www.npmjs.com/package/redux-thunk)

### React Modal
This dependency allows us to add dialogs to  out app for lightboxes, user notifications, or completely custom content. [View Dependency](https://www.npmjs.com/package/react-modal)

### Jsonwebtoken
It is used for authenticating users. [View Dependency](https://www.npmjs.com/package/jsonwebtoken)

### Redux-Persist
Redux persist is a library allowing to save the redux store in the local storage of your browser. [View Dependency](https://www.npmjs.com/package/redux-persist)

### Formik
Formik is a small library that helps you with the 3 most annoying parts: Getting values in and out of form state. Validation and error messages. Handling form submission.
[View Dependency](https://www.npmjs.com/package/formik)

### Jest-Mock-Axios
This is a light-weight, easy to use synchronous Axios mock for unit testing with Jest. [View Dependency](https://www.npmjs.com/package/jest-mock-axios)

### Yup
Yup is a JavaScript object schema validator and object parser. [View Dependency](https://www.npmjs.com/package/yup)

### Jest-Dom
jest-dom is a companion library for React Testing Library that provides custom DOM element matchers for Jest npm install --save-dev @testing-library/jest-dom. [View Dependency](https://testing-library.com/docs/ecosystem-jest-dom)

### User-Event
user-event tries to simulate the real events that would happen in the browser as the user interacts with it. [View Dependency](https://www.npmjs.com/package/@testing-library/user-event)

### Testing-Libary
Simple and complete React DOM testing utilities that encourage good testing practices. [View Dependency](https://github.com/testing-library/react-testing-library)

### Firebase
Firebase gives you functionality like analytics, databases, messaging and crash reporting so you can move quickly and focus on your users.
Backed by Google, trusted by top apps
Firebase is built on Google infrastructure and scales automatically, for even the largest apps.
One platform, with products that work better together
[View Dependency](https://firebase.google.com/)

### react-ga
This is a JavaScript module that can be used to include Google Analytics tracking code in a website or app that uses React for its front-end codebase.[View Dependency](https://github.com/react-ga/react-ga)




## Front-End Dependencies `(Development)`

### Eslint
Eslint is the dominant linting tool for NodeJS and it makes it possible to establish a clear coding convention for a team or project, as well as aiding in catching various bugs such as variables improperly scoped. | [View Dependency](https://eslint.org/)

### Husky
Husky can prevent bad git commit, git push and more 🐶 woof! [View Dependency](https://www.npmjs.com/package/husky)

### Lint-Staged
Run linters against staged git files and don't let 💩 slip into your code base! [View Dependency](https://www.npmjs.com/package/lint-staged)

### Prettier
Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. [View Dependency](https://www.npmjs.com/package/prettier)
