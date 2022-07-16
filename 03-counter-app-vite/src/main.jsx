import React from 'react'

import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp';

//import {Saludo} from './Saludo'

//import {Fragment} from './Fragment'

import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={20}/>
  </React.StrictMode>
)
