import React, { useEffect, useState } from "react";
import "./Popular.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
function Veg() {
    const [veggies, setVeggies] = useState([]);

    useEffect(() => {
        getVeg();
    }, []);

    const getVeg = async () => {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
        );
        console.log(res);
        const data = await res.json();
        console.log(data);
        localStorage.setItem("Veggies", JSON.stringify(data.recipes));
        setVeggies(data.recipes);
        console.log(data.recipes);
    };
    return (
        <div>
            <div className="wrapper">
                <h2 style={{ margin: "10px" }}>Our Vegetarian Picks</h2>
                <Splide
                    options={{
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "2rem",
                        perPage: 3,
                        breakpoints: {
                            1000: {
                                perPage: 1,
                                gap: "1rem",
                            },
                        },
                    }}
                >
                    {veggies.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <div key={recipe.id}>
                                    <Link
                                        className="card"
                                        to={"/recipe/" + recipe.id}
                                    >
                                        <p>{recipe.title}</p>
                                        <img
                                            src={recipe.image}
                                            alt={recipe.title}
                                        />
                                        <div className="gradient"></div>
                                    </Link>
                                </div>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </div>
        </div>
    );
}
export default Veg;
