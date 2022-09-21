import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../../redux/slice/cart.slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cart = useSelector(selectCart);
  const navigate = useNavigate();

  return (
    <button className={classes.button} onClick={() => navigate("/cart")}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
  );
};

export default CartButton;
