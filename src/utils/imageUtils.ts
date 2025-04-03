export const isValidImageUrl = (url?: string): boolean => {
  return !!(url && typeof url === "string" && url.trim() !== "");
};
