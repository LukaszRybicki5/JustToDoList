import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ToDoList from './components/ToDoList'

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