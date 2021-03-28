import React from "react";

function InputEnviarMensaje() {
  return (
    <div className="flex flex-none">
      <input
        type="text"
        placeholder="Escribe algun mensaje"
        className="bg-gray-200 px-2 py-4 flex-1"
      />
      <button className="bg-green-400 hover:bg-green-600 rounded-md px-5 py-2 text-white flex-none">
        Enviar
      </button>
    </div>
  );
}

export default InputEnviarMensaje;
