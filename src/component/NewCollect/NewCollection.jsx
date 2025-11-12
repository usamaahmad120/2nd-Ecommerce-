import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; 
import Item from "../items/Item";

function NewCollection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/NewCollect.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="my-10 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#171717] mb-4">
        NEW COLLECTION
      </h1>
      <hr className="w-24 sm:w-32 mx-auto border-[#ff4141] border-2 rounded-full mb-8" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-3 sm:px-6 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {products.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <Item
              id={item.id}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default NewCollection;
