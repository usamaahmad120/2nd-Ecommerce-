import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDisplay from "../component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../component/DescriptionBox/DescriptionBox";
import RelatedProducts from "../component/RelatedProduct/RelatedProduct";
import Breadcrum from "../component/Breadcum/Breadcrum";

function Product() {
  const { ProductId } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product data");
        return res.json();
      })
      .then((data) => {
        const foundProduct = data.find((p) => p.id === Number(ProductId));
        if (!foundProduct) throw new Error("Product not found");
        setProduct(foundProduct);
        setAllProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [ProductId]);

  if (loading)
    return <p className="text-center mt-10 text-gray-500 text-lg">Loading...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500 text-lg">{error}</p>;
  if (!product)
    return <p className="text-center mt-10 text-gray-500 text-lg">Product not found</p>;

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox description={product.description} />
      <RelatedProducts product={product} allProducts={allProducts} />
    </div>
  );
}

export default Product;
