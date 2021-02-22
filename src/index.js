import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const { worker } = require('./mocks/browser');
worker.start();

const initCommit = "Setting up Initial commit. Testing"

ReactDOM.render(<App />, document.getElementById("root"));