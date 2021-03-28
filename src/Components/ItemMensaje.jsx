import React from "react";

function ItemMensaje({color}) {
  return (
    <div className={`bg-${color}-500 rounded-md m-2 p-2 w-1/2 shadow-md`}>
      <div className="flex justify-between">
        <p className="font-semibold text-white ">Alexander Serrano</p>
        <p className="font-thin text-white">17:05 pm</p>
      </div>
      <p className="font-sans font-thin text-gray-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  );
}

export default ItemMensaje;
