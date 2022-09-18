import { React, createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import uuid from "react-uuid";

const CartContext = React.createContext()

export const useCartContext=()=>useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);
  
    const isInCart = (cart) => {
      return carts.some((buscada) => buscada.name === cart.name);
    };
  
    const addItem = (cart) => {
      if (isInCart(cart)) {
        return Swal.fire("Ya existe en la lista");
      }
  
      const id = uuid();
      const nuevaCart = { ...cart, id };
      setCarts([...carts, nuevaCart]);
      Swal.fire("Cart agregada");
    };
  
    const removeItem = (cart) => {
      const removeItem = carts.filter((buscada) => buscada.id !== cart.id);
      return setCarts(removeItem);
    };
  
    const clear = () => {
      setCarts([]);
    };
  
    const pendientes = () => {
      const pendientes = carts.reduce(
        (acum, cart) => (cart.estado === false ? acum + 1 : acum),
        0
      );
      return pendientes;
    };
  
    const actualizarEstado = (cart, estado) => {
      const copiaCarts = [...carts];
  
      const actualizarCart = copiaCarts.map((actual) => {
        if (actual.id === cart.id) {
          return { ...actual, estado: estado ? false : true };
        } else {
          return actual;
        }
      });
  
      //!---------------------------------------------------------
      //! Esto no es necesario en la funcion, sino que lo use
      //! para mostrar como el estado original no habia cambiado
      const original = carts.find((p) => p.id === cart.id);
  
      console.log("Cart original:", original);
      console.log("Lista original", carts);
      console.log("Lista actualizadas:", actualizarCart);
      //! ---------------------------------------------------------
  
      setCarts(actualizarCart);
    };
  
    return (
      <CartContext.Provider
        value={{
          carts,
          isInCart,
          addItem,
          removeItem,
          clear,
          pendientes,
          actualizarEstado,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
