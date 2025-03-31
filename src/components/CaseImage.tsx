// src/components/CaseImage.tsx
import React from "react";
import { isValidImageUrl } from "../utils/imageUtils";

interface CaseImageProps {
  urlFoto: string;
  nome: string;
}

const placeholderImage = "/images/placeholder.png"; // Imagem padrão

const CaseImage: React.FC<CaseImageProps> = ({ urlFoto, nome }) => (
  <div className="w-[320px] h-[320px] flex justify-center items-center overflow-hidden rounded-lg shadow-lg mx-auto">
    <img
      src={isValidImageUrl(urlFoto) ? urlFoto : placeholderImage}
      alt={nome}
      className="w-full h-full object-cover"
    />
  </div>
);

export default CaseImage;
