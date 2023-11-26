import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./state/state";

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderThree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
}

rerenderThree(store.getState())

store.subscribe(rerenderThree)

reportWebVitals();

