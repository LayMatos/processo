import React from "react";

const StatusBadge: React.FC<{ isDesaparecido: boolean }> = ({ isDesaparecido }) => (
  <p
    className={`text-white text-lg font-bold px-4 py-2 rounded-lg w-fit shadow-md text-center
      ${isDesaparecido ? "bg-red-500" : "bg-green-500"}
    `}
  >
    {isDesaparecido ? "Desaparecido" : "Localizado"}
  </p>
);

export default StatusBadge;
