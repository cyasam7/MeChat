import React from "react";
import foto from "../Static/perfil.jpg";
function ItemUsuario() {
  return (
    <button className="flex items-center bg-purple-900 m-1 rounded-sm shadow-sm">
      <img src={foto} alt="foto" width={50} className="rounded-full m-2" />
      <div className="flex flex-col items-start">
        <p className="text-white font-semibold">Melissa Flores</p>
        <p className="text-white bg-green-700 py-1 px-2 rounded-xl font-bold">Online</p>
      </div>
    </button>
  );
}

export default ItemUsuario;
