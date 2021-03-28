import React from "react";
import Header from "../Components/Header";
import InputEnviarMensaje from "../Components/InputEnviarMensaje";
import ListaMensajes from "../Components/ListaMensajes";
import ListaUsuarios from "../Components/ListaUsuarios";
function Salas() {
  return (
    <div className="flex flex-row-reverse flex-wrap h-screen ">
      <div className="w-1/4 bg-white border left-0 h-full fixed ">
        <Header />
        <ListaUsuarios usuarios={new Array(10).fill(1)} />
      </div>
      <div className="w-3/4 ">
        <div className="container mx-auto h-screen  flex flex-col">
          <ListaMensajes mensajes={new Array(10).fill(10)} />
          <InputEnviarMensaje />
        </div>
      </div>
    </div>
  );
}

export default Salas;
