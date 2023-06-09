import React from "react";
import Veg from "../Components/Veggies";
import Popular from "../Components/Popular";
import { motion } from "framer-motion";

function Home() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Veg />
            <Popular />
        </motion.div>
    );
}

export default Home;
