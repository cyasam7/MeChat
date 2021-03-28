import React from "react";
import { Link } from "react-router-dom";
import TextField from "../Components/TextField";

function Login() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="container mx-auto w-1/4 p-2">
        <h1 className="text-indigo-800 text-center text-6xl mb-2">MeChat</h1>
        <TextField type="text" placeholder="Usuario" />
        <TextField type="password" placeholder="Contraseña" />
        <div className="flex justify-between mb-4">
          <label className="text-gray-600">
            <input type="checkbox" className="border-none outline-none" />
            Recordar sesion
          </label>
          <Link to="/sala">Crear una cuenta</Link>
        </div>
        <Link to="sala">
          <button
            className="ring-4 ring-indigo-300 bg-indigo-600 hover:bg-indigo-900
         rounded-sm text-white w-full py-3"
          >
            Iniciar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
