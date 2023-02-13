/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { arregloProductos } from "../baseDatos/baseDatos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { tipoProducto } = useParams();

  const [productos, setProductos] = useState([]);

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arregloProductos);
    }, 2000);
  });

  useEffect(() => {
    promesa.then((resultado) => {
      if (!tipoProducto) {
        setProductos(resultado);
      } else {
        const nuevaLista = resultado.filter(
          (item) => item.categoria === tipoProducto
        );
        setProductos(nuevaLista);
      }
    });
  }, [tipoProducto]);

  return (
    <div>
      <h1>Nuestros productos</h1>
      <div>
        <ItemList
          items={productos}
        />
      </div>
    </div>
  );
};
