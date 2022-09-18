import { React, createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import uuid from "react-uuid";

const CartContext = React.createContext()

export const useCartContext=()=>useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const existe = (cart) => {
      return cart.some((buscada) => buscada.name === cart.name);
    };
  
    const addItem = (cart) => {
      if (existe(cart)) {
        return Swal.fire("Ya existe en la lista");
      }
  
      const id = uuid();
      const nuevacart = { ...cart, id };
      setCart([...cart, nuevacart]);
      Swal.fire("Cart agregada");
    };
  
    //* Otra forma, es como mostro el profe Adrian
  
    //    const addItem2 = (cart) => {
    //     const id = uuid();
    //     const nuevacart = { ...cart, id };
    //     setCart((prev) => prev.concat(nuevacart));
    //   };
  
    const removeItem = (cart) => {
      const removeItem = cart.filter((buscada) => buscada.id !== cart.id);
      return setCart(removeItem);
    };
  
    const clear = () => {
      setCart([]);
    };
  
    const pendientes = () => {
      const pendientes = cart.reduce(
        (acum, cart) => (cart.estado === false ? acum + 1 : acum),
        0
      );
      return pendientes;
    };
  
    const actualizarEstado = (cart, estado) => {
      const copiaCarts = [...cart];
  
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
      const original = cart.find((p) => p.id === cart.id);
  
      console.log("cart original:", original);
      console.log("Lista cart original", cart);
      console.log("Lista cart actualizadas:", actualizarCart);
      //! ---------------------------------------------------------
  
      setCart(actualizarCart);
    };
  
    return (
      <CartContext.Provider
        value={{
          cart,
          existe,
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
