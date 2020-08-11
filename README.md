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

```
npx create-react-app web --template typescript
```

## Installing the react-router-dom dependency

```
npm install --save react-router-dom

npm install --save-dev @types/react-router-dom
```

## Increase the limit for files being watched

```
sudo sysctl -w fs.inotify.max_user_watches=100000
```

## Installing the other project dependencies

```
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
```

# Create typescript's file tsconfig.json

```
mkdir src

touch src/server.ts

npx tsc --init
```

## Run migrations

```
cd server

npm knex:migrate
```

## Start Web Application

```
cd web

npm start
```

## Star Server

```
cd server

npm start
```

<h2 align="center">
    Visual Studio Code extensions
</h2>

<p align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite">
        <img src="SQLite370.svg.png" style="max-width: 15%"></img>
    </a>
</p>