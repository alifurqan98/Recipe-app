import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./Cuisine.css";
import { Link } from "react-router-dom";

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);

    const params = useParams();

    const getCuisine = async (name) => {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
        );
        const data = await res.json();
        setCuisine(data.results);
        console.log(data.results);
    };

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid-cuisine"
        >
            {cuisine.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <Link
                            className="cuisine-card"
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

export default Cuisine;
