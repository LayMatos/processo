import { useState, useEffect } from "react";
import { fetchCaseDetails, CaseDetails } from "../service/serviceDetail";

export const useCaseDetail = (id: string) => {
  const [caseDetails, setCaseDetails] = useState<CaseDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCaseDetails = async () => {
      setLoading(true);
      setError(null);
      const data = await fetchCaseDetails(id);
      if (data) {
        setCaseDetails(data);
      } else {
        setError("Erro ao buscar detalhes do caso. Tente novamente.");
      }
      setLoading(false);
    };

    loadCaseDetails();
  }, [id]);

  return { caseDetails, loading, error };
};
