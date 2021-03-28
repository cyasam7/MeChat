import React from "react";
import foto from '../Static/perfil.jpg'
function Header() {
  return (
    <header className="flex items-center px-5 py-4 bg-purple-600 ">
      <img src={foto} alt="" width={40} className="rounded-full"/>
      <p className="text-white ml-5 text-right font-bold">Alexander Serrano</p>
    </header>
  );
}

export default Header;
