import React, { useEffect, useState } from "react";
import drop_down from "../component/Assest/dropdown_icon.png";
import Item from "../component/items/Item";

function ShopCategory(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div className="flex flex-col w-[90%] md:w-[85%] m-auto py-10">
      <img
        src={props.bunner}
        alt=""
        className="w-full object-cover rounded-2xl mb-8"
      />

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 text-center md:text-left">
        <p className="text-gray-700 text-sm md:text-base mb-2 md:mb-0">
          <span className="font-semibold text-gray-900">Showing 1–12</span> of{" "}
          <span className="font-semibold text-gray-900">
            {products.length}
          </span>{" "}
          products
        </p>
        <div className="flex items-center gap-2 cursor-pointer text-gray-600 text-sm md:text-base hover:text-gray-800 transition border rounded-[70px] px-2 py-0.5">
          <span>Sort by</span>
          <img src={drop_down} alt="Sort dropdown" className="w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {Array.isArray(products) &&
          products
            .filter((item) => props.category === item.category)
            .map((item, i) => (
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

      <div className="mt-12 flex justify-center">
        <button className="px-10 py-4 border border-gray-400 text-gray-700 font-semibold rounded-full hover:bg-black hover:text-white transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default ShopCategory;
