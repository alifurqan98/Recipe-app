import React, { useEffect, useState } from "react";
import "./Popular.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const check = localStorage.getItem("popular");

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const res = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
            );
            const data = await res.json();
            console.log(data);
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipe);
        }
    };

    return (
        <div>
            <div className="wrapper">
                <h2 style={{ margin: "10px" }}>Popular Picks</h2>
                <Splide
                    options={{
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "1.5rem",
                        perPage: 4,
                        breakpoints: {
                            1000: {
                                perPage: 2,
                                gap: "0.8rem",
                            },
                        },
                    }}
                >
                    {popular.map((recipe) => {
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
export default Popular;
