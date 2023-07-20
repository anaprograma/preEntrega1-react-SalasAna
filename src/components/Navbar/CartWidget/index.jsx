import "./style.css";
import Cart from "../../../assets/icons/Cart.jpg";

function CartWidget() {
  return (
    <div className="cart">
      <img src={Cart} alt="cart" />
    </div>
  );
}
export default CartWidget;
