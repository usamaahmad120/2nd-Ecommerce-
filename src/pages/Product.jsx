import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductsStock, selectProductStock } from "../Redux/CartSlice";
import ProductDisplay from "../component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../component/DescriptionBox/DescriptionBox";
import RelatedProducts from "../component/RelatedProduct/RelatedProduct";
import Breadcrum from "../component/Breadcum/Breadcrum";

function Product() {
  const { ProductId } = useParams();
  const dispatch = useDispatch();
  const productsStock = useSelector((state) => state.cart.productsStock);

  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const stockData = {};
        data.forEach((p) => {
          stockData[p.id] = p.stock || 10; // JSON ke basis pe stock
        });
        dispatch(setProductsStock(stockData));

        const foundProduct = data.find((p) => p.id === Number(ProductId));
        setProduct(foundProduct);
        setAllProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [ProductId, dispatch]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay
        product={product}
        stock={productsStock[product.id] || 0}
      />
      <DescriptionBox description={product.description} />
      <RelatedProducts product={product} allProducts={allProducts} />
    </div>
  );
}

export default Product;
