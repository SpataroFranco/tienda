import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import "./CartContainer.css"

export const CartContainer = () => {
  const {productCartList, clearProductCartList} = useContext(CartContext);

  return (
    <div>
      <p>Productos en tu carrito:</p>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }     
            <button class="btn" onClick={clearProductCartList}>Vaciar el carrito</button>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  )
}
