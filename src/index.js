import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import './style.css';
import { FirstProp } from "./FirstProp";
import { CounterApp } from "./CounterApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    {/* <FirstApp /> */}
    {/* <FirstProp title="Hola, soy la Pio" subTitle="Asi es ;3" number={25}></FirstProp> */}
    <CounterApp value={15}></CounterApp>
    </React.StrictMode>
);
