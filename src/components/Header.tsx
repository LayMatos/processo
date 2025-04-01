import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-gradient-to-r from-black via-gray-300 to-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="../src/assets/logo-policia.png" alt="Polícia" className="h-12" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <p className="text-white text-3xl font-semibold">Polícia Judiciária Civil de Mato Grosso</p>
        </nav>
        <p className="md:hidden text-white font-semibold">PJC-MT</p>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-black p-4 mt-2">
          <p>Polícia Judiciária Civil de Mato Grosso</p>
        </nav>
      )}
    </header>
  );
};

export default Header;
