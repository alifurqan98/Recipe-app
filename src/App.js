import "./App.css";
import React from "react";
import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import Search from "./Components/Search";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
function App() {
    return (
        <Router>
            <div className="nav">
                <GiKnifeFork />
                <Link to={"/"} className="logo">
                    Delicious
                </Link>
            </div>
            <Search />
            <Category />
            <Pages />
        </Router>
    );
}

export default App;
