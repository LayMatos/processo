export const formatDate = (dateString?: string): string => {
    if (!dateString) return "Data não informada";
    return new Date(dateString).toLocaleDateString("pt-BR");
  };
  
  export const getDefaultText = (text?: string, defaultText: string = "Não informado"): string => {
    return text && text.trim() ? text : defaultText;
  };
  