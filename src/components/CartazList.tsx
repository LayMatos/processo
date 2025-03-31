import React from "react";
import { isValidCartaz } from "../utils/cartazUtils";

interface Cartaz {
  urlCartaz: string;
  tipoCartaz: string;
}

const CartazList: React.FC<{ cartazes: Cartaz[] }> = ({ cartazes }) => (
  <div className="flex flex-wrap gap-4">
    {cartazes.map((cartaz, index) =>
      isValidCartaz(cartaz.urlCartaz) ? (
        <a key={index} href={cartaz.urlCartaz} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
            Ver Cartaz ({cartaz.tipoCartaz})
          </button>
        </a>
      ) : null
    )}
  </div>
);

export default CartazList;
