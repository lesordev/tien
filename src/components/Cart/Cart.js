import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slice/cart.slice";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cart = useSelector(selectCart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <div>
        {cart.length === 0
          ? "You don't select product yet!"
          : cart.map((e) => (
              <CartItem
                key={e.title}
                item={{
                  id: e.id,
                  title: e.title,
                  quantity: e.quantity,
                  total: e.price * e.quantity,
                  price: e.price,
                }}
              />
            ))}
        <h2>
          Total:{" "}
          {(() => {
            const fm = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 2,
            });

            const total = cart.reduce(
              (acc, cur) => acc + cur.quantity * cur.price,
              0
            );

            return fm.format(total);
          })()}
        </h2>
      </div>
    </Card>
  );
};

export default Cart;
