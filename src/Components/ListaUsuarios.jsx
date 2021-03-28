import React from "react";
import ItemUsuario from "./ItemUsuario";

function ListaUsuarios({ usuarios }) {
  return (
    <div className="flex flex-col w-full h-full bg-purple-400 overflow-y-auto">
      {usuarios.map((data, index) => (
        <ItemUsuario key={index} />
      ))}
    </div>
  );
}

export default ListaUsuarios;
