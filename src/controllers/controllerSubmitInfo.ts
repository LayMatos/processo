import { useState } from "react";
import axios from "axios";

export const useSubmitInfo = (ocoId: number | undefined) => {
  const [formData, setFormData] = useState({
    informacao: "",
    descricao: "",
    data: "",
    foto: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({ ...prev, foto: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ocoId) {
      setError("ID da ocorrência não fornecido.");
      return;
    }
  
    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("informacao", formData.informacao);
    formDataToSend.append("descricao", formData.descricao);
    formDataToSend.append("data", formData.data);
    formDataToSend.append("ocoId", ocoId.toString());
    if (formData.foto) {
      formDataToSend.append("files", formData.foto);
    }
  
    try {
      const response = await axios.post(
        `/v1/ocorrencias/informacoes-desaparecido`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Informações enviadas com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao enviar informações:", error);
      if (axios.isAxiosError(error)) {
        console.error("Detalhes do erro:", error.response?.data || error.message);
        setError("Erro ao enviar as informações. Verifique os dados e tente novamente.");
      } else {
        console.error("Erro inesperado:", error);
        setError("Erro inesperado ao enviar as informações.");
      }
    } finally {
      setLoading(false);
    }
  };
  

  return {
    formData,
    loading,
    error,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
};
