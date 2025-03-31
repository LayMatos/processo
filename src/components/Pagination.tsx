import React from "react";

interface PaginationProps {
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setPage, totalPages }) => {
  return (
    <div className="flex justify-end items-center mt-6 space-x-4">
      {/* Botão Anterior com seta */}
      <button 
        onClick={() => setPage(currentPage - 1)} 
        disabled={currentPage === 1}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        &#8592; {/* Seta para a esquerda */}
      </button>
      
      <span>{`Página ${currentPage} de ${totalPages}`}</span>

      {/* Botão Próxima com seta */}
      <button 
        onClick={() => setPage(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        &#8594; {/* Seta para a direita */}
      </button>
    </div>
  );
};

export default Pagination;
