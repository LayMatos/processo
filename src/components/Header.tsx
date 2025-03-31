import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones do menu hamburguer

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Tipagem correta para useState

  return (
    <header className="bg-gradient-to-r from-black via-gray-300 to-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="../src/assets/logo-policia.png" alt="Polícia" className="h-12" />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <p className="text-white text-3xl font-semibold">Polícia Judiciária Civil de Mato Grosso</p>
        </nav>

        {/* Botão Menu Mobile */}
        <p className="md:hidden text-white font-semibold">PJC-MT</p>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-black p-4 mt-2">
          <p>Polícia Judiciária Civil de Mato Grosso</p>
        </nav>
      )}
    </header>
  );
};

export default Header;
