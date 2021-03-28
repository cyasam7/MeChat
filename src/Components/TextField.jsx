import React from "react";

function TextField({ ...rest }) {
  return <input {...rest} className="w-full mb-2 px-5 py-3 bg-gray-300 placeholder-gray-400" />;
}

export default TextField;
