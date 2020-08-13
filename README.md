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

<h2 align="center">
    <a href="https://www.notion.so/Configurando-Ambiente-NLW-98a471ad3cb6448284b8ceed31c45767">
        Configurando Ambiente NLW
    </a>
</h2>

<h2 align="center">
    <a href="https://www.notion.so/Layout-Proffy-3d5f45f54ec54ef9b2103565b7cce4e1">
        Layout Proffy
    </a>
</h2>

<h2 align="center">
    <a href="https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970">
        Versão 2.0 Proffy
    </a>
</h2>

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

expo --version

expo init [ Choose a template: expo-template-blank-typescript ]

npm install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins
npm install styled-components
npm install @types/styled-components -D
npm install @react-navigation/native
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install axios
npm install @react-native-community/async-storage
yarn start
```

### If any problems occur during the development of the application, execute:

```bash
expo r -c
```

### If the similar problem below occurs, run the command</h2>

`fontFamily * is not a system font and has not been loaded through Font.loadAsync`

```bash
watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && rm -f package-lock.json && rm -f yarn.lock && npm cache verify && npm install && expo r -c
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