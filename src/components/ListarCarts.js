import React from "react";
import { useCartContext } from "../context/CartContext";

export const ListarCarts = () => {
  const { carts, removeCart, actualizarEstado, clear } =
    useCartContext();

  return (
    <div>

      {carts.length ? (
        carts.map((cart) => (
          <article key={cart.id}>
            <h3>cart: {cart.titulo}</h3>
            <h3>Encargadx: {cart.encargado}</h3>
            <h3>Estado: {cart.estado ? "Realizado" : "Pendiente"}</h3>

            <button className="button" onClick={() => removeCart(cart)}>
              Remover cart
            </button>

            <button
              className="button"
              onClick={() => actualizarEstado(cart, cart.estado)}
            >
              Cambiar estado
            </button>
          </article>
        ))
      ) : (
        <h3 style={{ margin: "5rem" }}>No hay carts...</h3>
      )}
      {carts.length > 0 && (
        <button className="button" onClick={vaciarLista}>
          Vaciar lista de carts
        </button>
      )}
    </div>
  );
};