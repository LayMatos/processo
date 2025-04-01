import axios from "axios";

const API_BASE_URL = "https://abitus-api.geia.vip/v1";
export const fetchCases = async (
  name: string,
  ageRangeStart: number,
  ageRangeEnd: number,
  gender: string,
  page: number
) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pessoas/aberto/filtro`, {
      params: {
        nome: name,
        faixaIdadeInicial: ageRangeStart,
        faixaIdadeFinal: ageRangeEnd,
        sexo: gender,
        pagina: page - 1,
        porPagina: 12,
        status: "DESAPARECIDO",
      },
    });

    return {
      cases: response.data.content,
      totalPages: response.data.totalPages,
    };
  } catch (error) {
    console.error("Erro ao buscar casos", error);
    return { cases: [], totalPages: 0 };
  }
};
export const fetchCaseDetails = async (cases: any[]) => {
  try {
    const detailsPromises = cases.map(async (caseItem) => {
      const response = await axios.get(`${API_BASE_URL}/ocorrencias/informacoes-desaparecidos`, {
        params: { ocorrenciaId: caseItem.ocorrenciaId },
      });

      return { id: caseItem.id, details: response.data };
    });

    return await Promise.all(detailsPromises);
  } catch (error) {
    console.error("Erro ao buscar detalhes dos casos", error);
    return [];
  }
};
