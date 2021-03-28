import React from "react";
import ItemMensaje from "./ItemMensaje";

function ListaMensajes({ mensajes }) {
  return (
    <div className="flex-1 overflow-y-auto">
      {mensajes.map((mensaje, index) => (
        <>
          <ItemMensaje color="blue" key={index} />
        </>
      ))}
    </div>
  );
}

export default ListaMensajes;
