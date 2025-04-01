import React from "react";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

interface CardProps {
  caseItem: any;
  caseDetail?: any;
}

const Card: React.FC<CardProps> = ({ caseItem: { id, nome, idade, sexo, urlFoto, ultimaOcorrencia }, caseDetail }) => {
  const isDesaparecido = ultimaOcorrencia ? !ultimaOcorrencia.encontradoVivo : false;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={urlFoto} alt={nome} className="w-full h-64 object-cover rounded-lg" />
      <h2 className="text-xl font-semibold mt-4">{nome}</h2>
      <p className="mb-2">{idade} anos | {sexo}</p>
      <StatusBadge isDesaparecido={isDesaparecido} />
      <Link
        to={`/detalhe/${id}`}
        className="mt-4 inline-block bg-gray-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition"
      >
        Saiba Mais
      </Link>
    </div>
  );
};

export default Card;
