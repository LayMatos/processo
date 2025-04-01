import React from "react";

interface PaginationProps {
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setPage, totalPages }) => {
  return (
    <div className="flex justify-end items-center mt-6 space-x-4">
      <button 
        onClick={() => setPage(currentPage - 1)} 
        disabled={currentPage === 1}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        &#8592;
      </button>
      
      <span>{`Página ${currentPage} de ${totalPages}`}</span>
      <button 
        onClick={() => setPage(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Pagination;
