import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Footer from './Footer'
import Navbar from './Navbar'
import ToDoList from './ToDoList'


ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <App/>
    <ToDoList/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
