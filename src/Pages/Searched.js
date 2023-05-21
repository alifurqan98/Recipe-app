import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Searched.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Searched() {
    const [searchedRecipe, setSearchedRecipe] = useState([]);

    const params = useParams();

    const getSearchRecipe = async (name) => {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        );
        const data = await res.json();
        setSearchedRecipe(data.results);
        console.log(data.results);
    };

    useEffect(() => {
        getSearchRecipe(params.search);
        console.log(params.search);
    }, [params.search]);
    return (
        <motion.div
            className="grid-searched"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {searchedRecipe.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <Link
                            className="card-searched"
                            to={"/recipe/" + recipe.id}
                        >
                            <img src={recipe.image} alt={recipe.title} />
                            <h4>{recipe.title}</h4>
                        </Link>
                    </div>
                );
            })}
        </motion.div>
    );
}

export default Searched;
