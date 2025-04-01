import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import { getCasesWithDetails } from "../controllers/controllerHome";

const Home = () => {
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [caseDetails, setCaseDetails] = useState<any[]>([]);
  const [name, setName] = useState<string>("");
  const [ageRangeStart, setAgeRangeStart] = useState<number>(0);
  const [ageRangeEnd, setAgeRangeEnd] = useState<number>(0);
  const [gender, setGender] = useState<string>("");
  const fetchCasesDebounced = debounce(() => {
    setLoading(true);
    getCasesWithDetails(name, ageRangeStart, ageRangeEnd, gender, page)
      .then(({ cases, totalPages, caseDetails }) => {
        setCases(cases);
        setTotalPages(totalPages);
        setCaseDetails(caseDetails);
      })
      .finally(() => setLoading(false));
  }, 500);
  useEffect(() => {
    fetchCasesDebounced();
  }, [page, name, ageRangeStart, ageRangeEnd, gender]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="container mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg w-full max-w-6xl">

        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Desaparecidos e Localizados
        </h1>
        <Filter
          name={name}
          setName={setName}
          ageRangeStart={ageRangeStart}
          setAgeRangeStart={setAgeRangeStart}
          ageRangeEnd={ageRangeEnd}
          setAgeRangeEnd={setAgeRangeEnd}
          gender={gender}
          setGender={setGender}
        />
        {loading ? (
          <div className="flex justify-center items-center mt-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {cases.length === 0 ? (
              <div className="text-center text-lg text-gray-700">Nenhum caso encontrado</div>
            ) : (
              cases.map((caseItem) => {
                const caseDetail = caseDetails.find((detail) => detail.id === caseItem.id);
                return <Card key={caseItem.id} caseItem={caseItem} caseDetail={caseDetail} />;
              })
            )}
          </div>
        )}
        <div className="mt-8">
          <Pagination currentPage={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default Home;
