<p align="center">
    <img src="https://img.shields.io/github/license/MagicalStrangeQuark/NLW2"></img>
</p>

# Next Level Week II

Repository containing the application created in the second edition of the Rocketseat NLW event.

## 👺 Starting a new project

`npx create-react-app web --template typescript`

## Installing the react-router-dom dependency

`npm install --save react-router-dom`

`npm install --save-dev @types/react-router-dom`

## Increase the limit for files being watched

`sudo sysctl -w fs.inotify.max_user_watches=100000`


mkdir server
cd server
npm init -y

# typescript
npm install typescript --save-dev

mkdir src
touch src/server.ts
npx tsc --init

# autoreload
npm install ts-node-dev --save-dev

# express
npm install express
npm install @types/express --save-dev

# knex
npm install knex --save

# sqlite3
npm install sqlite3

# vscode extensions

SQLite
https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite


# cors
npm install cors
npm install @types/cors