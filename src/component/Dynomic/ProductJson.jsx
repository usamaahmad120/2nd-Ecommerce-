import React, { useEffect, useState } from "react";

const ProductJson = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/products.json") // ✅ public se direct fetch
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Could not load products. Check your JSON path.");
      });
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#ff4141] mb-6">
        Product List
      </h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-4 bg-white shadow hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="mt-3 text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-600 mt-1">PKR {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductJson;
