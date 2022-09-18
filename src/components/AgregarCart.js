import React, { useState } from "react";
import Select from "react-select";
import { useCartContext } from "../context/CartContext";
import { Input } from "./Input/Input";

export const SubirCarts = () => {
  const [titulo, setTitulo] = useState("");
  const [encargado, setEncargado] = useState("");
  const [estado, setEstado] = useState();

  const { addItem } = useCartContext();

  // Funcion para el formulario
  const onSubmit = (e) => {
    e.preventDefault();

    addItem({ titulo, encargado, estado });

    setTitulo("");
    setEncargado("");
  };

  //* Array que le se utiliza en el componente react-select para las opciones
  const options = [
    { label: "Pendiente", value: false },
    { label: "Realizado", value: true },
  ];

  return (
    <>
      <h1>Lista de Carts</h1>

      <form onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          name="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="TCart..."
          autoComplete="off"
          required
        />

        {/*Esto es solo un comp. Input que hice con estilo incorporado que podria reutilizar */}
        <Input
          type="text"
          name="encargado"
          value={encargado}
          onChange={(e) => setEncargado(e.target.value)}
          autoComplete="off"
          placeholder="Encargadx de la tarea"
          required={true}
        />

        {/* //! SELECT es un componente de react-select y se instala  */}
        <Select
          options={options}
          onChange={({ value }) => setEstado(value)}
          defaultValue={{ label: "Seleccionar estado", value: null }}
          required
        />

        <input className="button" type="submit" value="Registrar cart" />
      </form>
    </>
  );
};