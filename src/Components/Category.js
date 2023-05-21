import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import "./Category.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Category() {
    return (
        <motion.div className="list">
            <NavLink to={"/cuisine/Italian"} className="navLink">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>

            <NavLink to={"/cuisine/American"} className="navLink">
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={"/cuisine/Thai"} className="navLink">
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to={"/cuisine/Japanese"} className="navLink">
                <GiChopsticks />
                <h4>Japanese</h4>
            </NavLink>
        </motion.div>
    );
}

export default Category;
