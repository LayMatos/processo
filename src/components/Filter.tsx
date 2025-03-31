import React from "react";

interface FilterProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  ageRangeStart: number;
  setAgeRangeStart: React.Dispatch<React.SetStateAction<number>>;
  ageRangeEnd: number;
  setAgeRangeEnd: React.Dispatch<React.SetStateAction<number>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<FilterProps> = ({
  name,
  setName,
  ageRangeStart,
  setAgeRangeStart,
  ageRangeEnd,
  setAgeRangeEnd,
  gender,
  setGender,
}) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mb-6 w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Filtros de Pesquisa</h2>
      
      {/* Layout Responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Nome */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Buscar por nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Faixa Etária Inicial */}
        <div className="flex flex-col">
          <label htmlFor="ageRangeStart" className="text-gray-700 font-medium">Idade Mínima</label>
          <input
            type="number"
            id="ageRangeStart"
            placeholder="Mínima"
            value={ageRangeStart}
            onChange={(e) => setAgeRangeStart(Number(e.target.value))}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Faixa Etária Final */}
        <div className="flex flex-col">
          <label htmlFor="ageRangeEnd" className="text-gray-700 font-medium">Idade Máxima</label>
          <input
            type="number"
            id="ageRangeEnd"
            placeholder="Máxima"
            value={ageRangeEnd}
            onChange={(e) => setAgeRangeEnd(Number(e.target.value))}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sexo */}
        <div className="flex flex-col">
          <label htmlFor="gender" className="text-gray-700 font-medium">Sexo</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos</option>
            <option value="MASCULINO">Masculino</option>
            <option value="FEMININO">Feminino</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default Filter;
