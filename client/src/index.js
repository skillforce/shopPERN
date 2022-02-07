import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import UserStore from "./store/UserStore";
import DeviseStore from "./store/DeviseStore";


export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviseStore()
    }}>
    <Router>
    <App />
    </Router>
    </Context.Provider>,
  document.getElementById('root')
);

