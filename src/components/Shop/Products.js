import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/slice/product.slice";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = useSelector(selectProducts);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <div>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
