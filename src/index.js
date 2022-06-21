import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./components/TodoContainer"
import NotMatch from "./components/NotMatch";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<TodoContainer />} />
                <Route path="*" element={<NotMatch />} />
            </Routes>
        </Router>
    </React.StrictMode>, 
    document.getElementById("root")
)