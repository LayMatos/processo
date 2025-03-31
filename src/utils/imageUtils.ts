export const isValidImageUrl = (url?: string): boolean => {
    return !!url && url.startsWith("http");
  };
  