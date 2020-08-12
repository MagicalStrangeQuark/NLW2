<p align="center">
    <img src="https://img.shields.io/github/license/MagicalStrangeQuark/NLW2"/>
    <img src="https://img.shields.io/github/last-commit/MagicalStrangeQuark/NLW2"/>
    <img src="https://img.shields.io/github/languages/count/MagicalStrangeQuark/NLW2"/>
    <img src="https://img.shields.io/github/languages/top/MagicalStrangeQuark/NLW2"/>
</p>

<p align="center">
    <img src="logo.svg"/>
</p>

<h2 align="center">
    Next Level Week II
</h2>

<p align="center">
    Repository containing the application created in the second edition of the Rocketseat NLW event.
</p>

<h1 align="center">
    Typescript | ReactJS | React Native 
</h1>

<h2 align="center">
    Proffy
</h2>

<p align="center">
    <img src="https://media.giphy.com/media/cPfjwUZtwArxyHVqjz/giphy.gif">
</p>

## 👺 Starting a new project

```bash
npx create-react-app web --template typescript
```

## Installing the react-router-dom dependency

```bash
npm install --save react-router-dom

npm install --save-dev @types/react-router-dom
```

## Increase the limit for files being watched

```bash
sudo sysctl -w fs.inotify.max_user_watches=100000
```

## Installing the other project dependencies

```bash
mkdir server
cd server

npm init -y

npm install typescript --save-dev
npm install knex --save
npm install sqlite3 --save
npm install express
npm install @types/express --save-dev
npm install ts-node-dev --save-dev
npm install cors
npm install @types/cors
npm install axios --save
npm install styled-components
npm install @types/styled-components -D
```

# Create typescript's file tsconfig.json

```bash
mkdir src

touch src/server.ts

npx tsc --init
```

## Run migrations

```bash
cd server

npm knex:migrate
```

## Start Web Application

```bash
cd web

npm start
```

## Star Server

```bash
cd server

npm start
```

## Mobile

1° Step: download the Expo app for mobile

2° Step: create a new application

```bash
npm install expo-cli --global

export --version

export init [ Choose a template: expo-template-blank-typescript ]

expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

yarn start
```

### If any problems occur during the development of the application, execute:

```bash
    expo -r c
```

3° Step: Open the app and use the qr code generated by the application, at the same network

<h2 align="center">
    Visual Studio Code extensions
</h2>

<p align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite" >
        <img src="SQLite370.svg.png" width="300"></img>
    </a>
    <a href="https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components" >
        <img src="https://blog.jayway.com/wp-content/uploads/2019/05/New-Project-1.png" width="300"></img>
    </a>
</p>