import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

export const CartWidget = () => {
  const { getTotalProducts, productCartList } = useContext(CartContext);

  return (
    <div>
      {productCartList.length > 0 && (
        <>
          <Link to="/cart" className="cart-widget">
            <div className="cart-widget">
              <FontAwesomeIcon icon={faCartShopping} size="2xl" color="white" />
              <div className="qty-display">{getTotalProducts()}</div>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};
