import React, { useEffect, useState } from "react";
import drop_down from "../component/Assest/dropdown_icon.png";
import Item from "../component/items/Item";

function ShopCategory(props) {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("default");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  // 🔹 Sorting Logic
  const sortedProducts = [...products]
    .filter((item) => props.category === item.category)
    .sort((a, b) => {
      if (sortType === "lowToHigh") return a.new_price - b.new_price;
      if (sortType === "highToLow") return b.new_price - a.new_price;
      if (sortType === "newest") return b.id - a.id; // assuming higher id = newer
      return 0;
    });

  // 🔹 Dropdown Toggle Handler
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // 🔹 Dropdown Option Select Handler
  const handleSortChange = (type) => {
    setSortType(type);
    setIsDropdownOpen(false);
  };

  // 🔹 Get Label for Current Sort
  const getSortLabel = () => {
    switch (sortType) {
      case "lowToHigh":
        return "Price: Low to High";
      case "highToLow":
        return "Price: High to Low";
      case "newest":
        return "Newest";
      default:
        return "Sort by";
    }
  };

  return (
    <div className="flex flex-col w-[90%] md:w-[85%] m-auto py-10">
      <img
        src={props.bunner}
        alt=""
        className="w-full object-cover rounded-2xl mb-8"
      />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 text-center md:text-left relative">
        <p className="text-gray-700 text-sm md:text-base mb-2 md:mb-0">
          <span className="font-semibold text-gray-900">Showing</span>{" "}
          {sortedProducts.length} products
        </p>

        {/* 🔹 Sort Dropdown */}
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="flex items-center gap-2 cursor-pointer text-gray-600 text-sm md:text-base border rounded-[70px] px-3 py-1 hover:text-gray-900 hover:border-gray-500 transition"
          >
            <span>{getSortLabel()}</span>
            <img
              src={drop_down}
              alt="Sort dropdown"
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md w-[180px] z-20">
              <p
                onClick={() => handleSortChange("lowToHigh")}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Price: Low to High
              </p>
              <p
                onClick={() => handleSortChange("highToLow")}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Price: High to Low
              </p>
              <p
                onClick={() => handleSortChange("newest")}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Newest
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {sortedProducts.map((item, i) => (
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

      {/* Explore More Button */}
      <div className="mt-12 flex justify-center">
        <button className="px-10 py-4 border border-gray-400 text-gray-700 font-semibold rounded-full hover:bg-black hover:text-white transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default ShopCategory;
