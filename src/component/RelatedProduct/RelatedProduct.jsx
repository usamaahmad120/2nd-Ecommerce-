import React from "react";
import Item from "../../component/items/Item";

function RelatedProducts({ product, allProducts }) {
  if (!allProducts || !Array.isArray(allProducts) || allProducts.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">Loading products...</p>
    );
  }

  const related = allProducts.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  if (related.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">
        No related products found.
      </p>
    );
  }

  return (
    <div className="w-[90%] md:w-[85%] mx-auto my-10 text-center">
      <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center place-items-center">
        {related.slice(0, 4).map((item) => (
          <Item
            key={item.id}
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

export default RelatedProducts;
