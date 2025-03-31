export const isValidCartaz = (cartazUrl?: string): boolean => {
    return !!cartazUrl && cartazUrl.startsWith("http");
  };
  