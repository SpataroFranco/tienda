import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

export const CartItem = ({ item }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-item-container">
        <div className="cart-img-container">
          <img src={item.img} alt={item.titulo} />
        </div>
        <div className="cart-info-container">
          <h2>{item.titulo}</h2>
          <p>precio unitario: ${item.precio}</p>
          <p>cantidad: {item.quantity}</p>
          <p>Precio total: ${item.totalPrice}</p>
          <button className="btn" onClick={() => removeProduct(item.id)}>
            Eliminar producto
          </button>
        </div>
      </div>
    </div>
  );
};
