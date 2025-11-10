import React, { useEffect, useState } from "react";
import Item from "../items/Item";

function Popular() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/products.json") // public folder me JSON file
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        // sirf women category ke products filter karo
        const womenProducts = data
          .filter((item) => item.category === "women")
          .slice(0, 4); // sirf first 4 products
        setProducts(womenProducts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="my-10 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#171717] mb-4 rounded-2xl">
        Popular in Women
      </h1>
      <hr className="w-24 sm:w-32 mx-auto border-[#ff4141] border-2 rounded-full mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-3 sm:px-6 justify-items-center">
        {products.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            img={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
