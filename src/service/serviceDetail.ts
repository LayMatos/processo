// services/caseService.ts
import axios from "axios";

const API_BASE_URL = "https://abitus-api.geia.vip/v1";

export interface Cartaz {
  urlCartaz: string;
  tipoCartaz: string;
}

export interface Ocorrencia {
  encontradoVivo: boolean;
  dtDesaparecimento: string;
  localDesaparecimentoConcat: string;
  ocorrenciaEntrevDesapDTO: {
    informacao: string;
    vestimentasDesaparecido: string;
  };
  listaCartaz: Cartaz[];
}

export interface CaseDetails {
  nome: string;
  sexo: string;
  idade: number;
  urlFoto: string;
  ultimaOcorrencia: Ocorrencia;
}

// Busca detalhes do caso por ID
export const fetchCaseDetails = async (id: string): Promise<CaseDetails | null> => {
  try {
    const response = await axios.get<CaseDetails>(`${API_BASE_URL}/pessoas/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do caso:", error);
    return null;
  }
};
