<h2 align="center">
  Fastfeet - Final Challenge of GoStack 10.0
</h2>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/NaluFigueira/FastFeet.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/NaluFigueira/FastFeet.svg">

  <a href="https://www.codacy.com/app/NaluFigueira/FastFeet?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=NaluFigueira/FastFeet&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/1b577a07dda843aba09f4bc55d1af8fc.svg">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/NaluFigueira/FastFeet.svg">
  <a href="https://github.com/NaluFigueira/FastFeet/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/NaluFigueira/FastFeet.svg">
  </a>

  <a href="https://github.com/NaluFigueira/FastFeet/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/NaluFigueira/FastFeet.svg">
  </a>
</p>

## :rocket: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp) with the following technologies:

# Back-end

- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [bee-queue](https://github.com/bee-queue/bee-queue)
- [date-fns](https://date-fns.org/)
- [Express](https://expressjs.com/pt-br/)
- [JWT](https://github.com/auth0/node-jsonwebtoken)
- [Multer](https://github.com/expressjs/multer)
- [Nodemailer](https://nodemailer.com/about/)
- [Sequelize](https://sequelize.org/)
- [youch](https://github.com/poppinss/youch)
- [yup](https://github.com/jquense/yup)


# Front-End

-  [ReactJS](https://reactjs.org/)
-  [Redux](https://redux.js.org/)
-  [Redux-Saga](https://redux-saga.js.org/)
-  [React Router v5](https://github.com/ReactTraining/react-router)
-  [Axios](https://github.com/axios/axios)
-  [History](https://www.npmjs.com/package/history)
-  [Immer](https://github.com/immerjs/immer)
-  [Polished](https://polished.js.org/)
-  [React-Toastify](https://fkhadra.github.io/react-toastify/)
-  [styled-components](https://www.styled-components.com/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [Reactotron](https://infinite.red/reactotron)
-  [Rocketseat Unform](https://github.com/Rocketseat/unform)
-  [date-fns](https://date-fns.org/)
-  [prop-types](https://github.com/facebook/prop-types)
-  [react-select](https://react-select.com/home)
-  [yup](https://github.com/jquense/yup)

# Mobile (Android Only)

-  [ReactNative](https://reactnative.dev/)
-  [Redux](https://redux.js.org/)
-  [Redux-Saga](https://redux-saga.js.org/)
-  [React Navigation](https://reactnavigation.org/)
-  [Axios](https://github.com/axios/axios)
-  [Immer](https://github.com/immerjs/immer)
-  [Polished](https://polished.js.org/)
-  [styled-components](https://www.styled-components.com/)
-  [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)
-  [Reactotron](https://infinite.red/reactotron)
-  [date-fns](https://date-fns.org/)
-  [prop-types](https://github.com/facebook/prop-types)
-  [yup](https://github.com/jquense/yup)
-  [AsyncStorage](https://github.com/react-native-community/async-storage)

# Others

-  [VS Code][vc] with [EditorConfig][vceditconfig], [ESLint][vceslint] and [Prettier][prettier]

# Instructions

First, we need to start the api. For that you'll need to:
-  Create a database in PostgreSQL and a redis container with docker.
-  Create a .env file following the format available on .env.example.
-  Run the following commands on backend folder: 
```
yarn
yarn sequelize db:migrate
yarn sequelize db:seed:all
```
-  After that you can start the api with:
```
yarn dev
```
- And then, in a seperate command prompt:
```
yarn queue
```
To start front-end, execute the following commands on frontend folder:
```
yarn
yarn start
```
To start mobile (Android only), execute the following commands on frontend folder:
```
yarn
yarn android
```

Made with ♥ by Ana Figueira :wave: [Get in touch!](https://www.linkedin.com/in/ana-lu%C3%ADsa-chaves-figueira-38792218a/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://prettier.io/
