import { ReactLib } from "../ReactLib";
import { ReduxLib } from "../ReduxLib";
import { componentMapUi } from "../ComponentMapUi";


const {ProductDisplay,DescriptionBox,Breadcrum}= componentMapUi;
const {selectReviewsByProduct,setProductsStock} = ReduxLib;
const { useState, useEffect, useParams, useDispatch, useSelector,} = ReactLib;

function Product() {
  const { ProductId } = useParams();
  const dispatch = useDispatch();
  const productsStock = useSelector((state) => state.cart.productsStock);
  const reviewsFromStore = useSelector((state) =>
    selectReviewsByProduct(state, Number(ProductId))
  );

  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        // Stock setup
        const stockData = {};
        data.forEach((p) => {
          stockData[p.id] = p.stock || 10;
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

  // Merge JSON + slice reviews
  const reviews = [...(product.reviews || []), ...reviewsFromStore];

  //  ye component udr se aye hai 


  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} stock={productsStock[product.id] || 0} />
      <DescriptionBox
        description={product.description ? [product.description] : []}
        reviews={reviews}
      />
    </div>
  );
}

export default Product;
