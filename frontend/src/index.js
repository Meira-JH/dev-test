import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGfPtZzA3yy76ObYs1ocVzWNygCwjQQgo",
  authDomain: "spotenu-fullstack-project.firebaseapp.com",
  databaseURL: "https://spotenu-fullstack-project.firebaseio.com",
  projectId: "spotenu-fullstack-project",
  storageBucket: "spotenu-fullstack-project.appspot.com",
  messagingSenderId: "77082538550",
  appId: "1:77082538550:web:868dd6954e465b9aafde97"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
