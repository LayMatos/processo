// src/components/CaseInfo.tsx
import React from "react";
import StatusBadge from "./StatusBadge";
import { formatDate, getDefaultText } from "../utils/formatUtils";

interface Ocorrencia {
  encontradoVivo: boolean;
  dtDesaparecimento: string;
  localDesaparecimentoConcat: string;
  ocorrenciaEntrevDesapDTO: {
    informacao: string;
    vestimentasDesaparecido: string;
  };
}

interface CaseDetails {
  nome: string;
  sexo: string;
  idade: number;
  ultimaOcorrencia: Ocorrencia;
}

const CaseInfo: React.FC<{ caseDetails: CaseDetails }> = ({ caseDetails }) => (
  <div className="space-y-5">
    <h1 className="text-3xl font-bold text-gray-800">{caseDetails.nome}</h1>
    <p className="text-lg text-gray-600">
      {caseDetails.sexo} | Idade: {caseDetails.idade}
    </p>

    <StatusBadge isDesaparecido={!caseDetails.ultimaOcorrencia.encontradoVivo} />

    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700">Última Ocorrência</h2>
      <p>
        <strong>Data do desaparecimento:</strong> {formatDate(caseDetails.ultimaOcorrencia.dtDesaparecimento)}
      </p>
      <p>
        <strong>Local:</strong> {getDefaultText(caseDetails.ultimaOcorrencia.localDesaparecimentoConcat)}
      </p>
      <p>
        <strong>Informações:</strong> {getDefaultText(caseDetails.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao, "Nenhuma informação disponível")}
      </p>
      <p>
        <strong>Vestimentas:</strong> {getDefaultText(caseDetails.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.vestimentasDesaparecido)}
      </p>
    </div>
  </div>
);

export default CaseInfo;
