import React from "react";
import { useParams, Link } from "react-router-dom";
import CaseImage from "../components/CaseImage";
import CaseInfo from "../components/CaseInfo";
import CartazList from "../components/CartazList";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { useCaseDetail } from "../controllers/controllerDetail";

const Detail: React.FC = () => {
  const { id } = useParams();  // Captura o ID da ocorrência
  const { caseDetails, loading, error } = useCaseDetail(id!);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!caseDetails) return <ErrorMessage message="Não foi possível encontrar os detalhes dessa pessoa." />;

  const isDesaparecido = !caseDetails.ultimaOcorrencia.encontradoVivo;

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen px-2 py-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <CaseImage urlFoto={caseDetails.urlFoto} nome={caseDetails.nome} />
          <CaseInfo caseDetails={caseDetails} />
        </div>
        {isDesaparecido && (
          <div className="mt-4 space-y-4">
            <Link to={`/informar/${id}`}>
              <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all shadow-md font-semibold text-lg md:text-xl">
                Informar sobre o desaparecido
              </button>
            </Link>
            <CartazList cartazes={caseDetails.ultimaOcorrencia.listaCartaz} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
