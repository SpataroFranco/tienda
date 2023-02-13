import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {
  const { agregarProducto } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (count) => {
    agregarProducto(item, count);
    setCantidad(count);
  };

  return (
    <div className="detail-container">
      <div className="img-container">
        <img src={item.img} alt={item.titulo} />
      </div>

      <div className="detail-producto">
        <h4 className="titulo-prenda">{item.titulo}</h4>
        <h5 className="precio-prenda">$ {item.precio}</h5>
        <p>
          Impuesto incluido. Los gastos de envío se calculan en la pantalla de
          pagos.
        </p>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        {cantidad > 0 && (
          <Link to="/cart">
            <button className="btn">Ir al carrito</button>
          </Link>
        )}
        <p className="text-detail">El tiempo de entrega suele ser de entre 5 a 12 días habiles</p>
      </div>
    </div>
  );
};
