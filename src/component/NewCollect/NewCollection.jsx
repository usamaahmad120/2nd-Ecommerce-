import React, { useEffect, useState } from "react";
import Item from "../items/Item";

function NewCollection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/NewCollect.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="my-10 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#171717] mb-4">
        NEW COLLECTION
      </h1>
      <hr className="w-24 sm:w-32 mx-auto border-[#ff4141] border-2 rounded-full mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-3 sm:px-6 justify-items-center">
        {products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
