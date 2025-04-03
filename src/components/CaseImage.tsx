import React, { useState } from "react";
import { isValidImageUrl } from "../utils/imageUtils";
import defaultImage from "../assets/default-profile.png";

interface CaseImageProps {
  urlFoto?: string;
  nome: string;
}

const CaseImage: React.FC<CaseImageProps> = ({ urlFoto, nome }) => {
  const [imageSrc, setImageSrc] = useState(isValidImageUrl(urlFoto) ? urlFoto : defaultImage);

  return (
    <div className="w-[340px] h-[340px] flex justify-center items-center overflow-hidden rounded-xl shadow-xl border-4 border-gray-300 bg-white mx-auto">
      <img
        src={imageSrc}
        alt={nome}
        className="w-full h-full object-cover"
        onError={() => setImageSrc(defaultImage)}
      />
    </div>
  );
};

export default CaseImage;
