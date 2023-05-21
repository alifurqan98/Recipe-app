import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";

function Recipe() {
    const params = useParams();

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async (name) => {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const data = await res.json();
        console.log(data);
        setDetails(data);
    };

    useEffect(() => {
        fetchDetails(params.name);
    }, [params.name]);

    return (
        <div className="details-wrapper">
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <div className="details-info">
                <button
                    className={activeTab === "instructions" ? "active" : ""}
                    onClick={() => setActiveTab("instructions")}
                >
                    Instructions
                </button>
                <button
                    className={activeTab === "ingredients" ? "active" : " "}
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                </button>
                {activeTab === "instructions" && (
                    <div>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: details.summary,
                            }}
                        ></h3>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: details.instructions,
                            }}
                        ></h3>
                    </div>
                )}

                {activeTab === "ingredients" && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Recipe;
