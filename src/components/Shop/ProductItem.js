import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cart.slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description } = props;

  const dispatch = useDispatch();

  return (
    <div className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price?.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => dispatch(addToCart(props))}>
            Add to Cart
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ProductItem;
