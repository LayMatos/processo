import axios from "axios";

const API_BASE_URL = "https://abitus-api.geia.vip/v1";

export const submitDesaparecidoInfo = async (formData: FormData) => {
  try {
    const response = await axios.post(
      `https://abitus-api.geia.vip/v1/ocorrencias/informacoes-desaparecido`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log("response"); 
    console.log(response); 
    return { success: true, message: "Informações enviadas com sucesso!" };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erro ao enviar informações:", error.response?.data || error.message);
    } else {
      console.error("Erro inesperado:", error);
    }
    return { success: false, message: "Erro ao enviar informações. Verifique os dados e tente novamente." };
  }
};
