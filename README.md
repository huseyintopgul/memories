<h1 align="center">
🌐 MERN Stack
  
</h1>
<p align="center">
React-Vite
</p>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs, Tailwind CSS, AntDesing,
</p>


<p align="center">
   <a href="https://github.com/huseyintopgul">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.


## clone or download

```terminal
$ git clone https://github.com/huseyintopgul/memories
$ yarn # or npm i
```

# Usage (run fullstack app on your machine)

## Prerequisites

- [React](https://react.dev/)
- [Redux](https://redux.js.org/)
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^20.5.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 8001)

```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ vite build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run dev // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

### Start

```terminal
$ cd server   // go to api folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm vite build // this will build the server code to es5 js codes and generate a dist file
```


## project structure

```terminal
memories
├─ .DS_Store
├─ client
│  ├─ .DS_Store
│  ├─ .eslintrc.cjs
│  ├─ dist
│  │  ├─ assets
│  │  │  ├─ index-86029a25.js
│  │  │  ├─ index-ac5bd03b.css
│  │  │  └─ memories-7c4016df.png
│  │  ├─ index.html
│  │  └─ vite.svg
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ .DS_Store
│  │  ├─ App.jsx
│  │  ├─ api
│  │  │  └─ index.js
│  │  ├─ components
│  │  │  ├─ Form
│  │  │  │  ├─ Form.jsx
│  │  │  │  └─ styles.js
│  │  │  └─ Posts
│  │  │     ├─ Post
│  │  │     │  ├─ Post.jsx
│  │  │     │  └─ styles.js
│  │  │     ├─ Posts.jsx
│  │  │     └─ styles.js
│  │  ├─ images
│  │  │  ├─ .DS_Store
│  │  │  └─ memories.png
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  ├─ redux
│  │  │  ├─ actionTypes
│  │  │  │  └─ PostActionTypes.js
│  │  │  ├─ actions
│  │  │  │  └─ PostActions.js
│  │  │  ├─ reducers
│  │  │  │  ├─ CombineReducers.js
│  │  │  │  └─ PostReducers.js
│  │  │  └─ store.js
│  │  └─ styles.js
│  └─ vite.config.js
└─ server
   ├─ controllers
   │  └─ post.js
   ├─ models
   │  └─ postMessage.js
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  └─ posts.js
   └─ server.js
```

# Dependencies(tech-stacks)

| Client-side                                        | Server-side              |
| -----------------------------                      | --------------------- |
| vite: "^4.4.9" 			                               | body-parser: "^1.20.2"|
| react: "^18.2.0",			                             | cors: "^2.8.5"       |
| react-dom: "^18.2.0",		                           | nodemon: "^3.0.1"    |
| redux: "^4.2.1",			                             | express: "^4.18.2"   |
| redux-thunk: "^2.4.2"		                           | mongoose: "^7.4.5"   |
| react-file-base64: "^1.0.3",		                   | morgan: "^1.10.0"    |
| moment: "^2.29.4",		
| axios": ^1.5.0",
| @mui/styles: "^5.14.7","                 
| @mui/material: "^5.14.7",
| @mui/icons-material: "^5.14.8",
| @emotion/styled: "^11.11.0",
| @emotion/react: "^11.11.1",

## Deploy Server to [render.com](https://my-memories-client.onrender.com/)

```server
   Web Service
- Branch - master
- Root Directory - ./server
- Environment - Node
- Build Command - server/ npm install
- Start - npm start
- Advenced
      key: -
      value: -
- Create Web Service

   Static Site
- Branch - master
- Root Directory - ./client
- Build Command - client/ vite build
- Publish Directory - dist
- Advenced
      key: port
      value: (You need to add a (https://my-memories-server-mrmj.onrender.com)
- Create Static Site


```


## Demo

https://my-memories-client.onrender.com/

## Screenshots #Mobile Screen
<img width="450" height="700" alt="mb-1" src="https://github.com/huseyintopgul/memories/assets/124911450/f66f1c8b-6c9d-4283-b262-50a13def03b4">
<img width="450" height="700" alt="mbl" src="https://github.com/huseyintopgul/memories/assets/124911450/e5951fa4-51e9-4f1e-b110-52a0a970b1b2">

## Screenshots #Full Screen
<img width="1082"  alt="m-3" src="https://github.com/huseyintopgul/memories/assets/124911450/4418ba69-6252-479a-a1ec-2a46ad277aed">


## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/huseyintopgul/pos-app/issues) (preferred)

Email Me: huseyintopgul1@gmail.com (welcome, say hi)

## Author

[Huseyin Topgul](https://www.linkedin.com/in/huseyin-topgul/)




