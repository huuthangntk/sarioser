import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  onAuthClick: () => void;
}

export const Header = ({ onAuthClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-black/75 border-b border-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button variant="outline" onClick={onAuthClick} className="bg-transparent border-purple-500 text-purple-500 hover:bg-purple-500/10 font-lalezar">
              ورود / ثبت نام
            </Button>
          </div>

          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/guide" className={`text-gray-400 hover:text-purple-400 transition-colors font-lalezar ${isActive('/guide') ? 'text-purple-400' : ''}`}>راهنما</Link>
            <Link to="/contact" className={`text-gray-400 hover:text-purple-400 transition-colors font-lalezar ${isActive('/contact') ? 'text-purple-400' : ''}`}>تماس با ما</Link>
          </nav>

          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/bb4ab312-72df-407f-b905-0a7cf6e8b718.png" alt="Sarioser Logo" className="h-8" />
          </Link>

          <button
            className="md:hidden text-gray-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/guide" className="text-gray-400 hover:text-purple-400 transition-colors font-lalezar">راهنما</Link>
              <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors font-lalezar">تماس با ما</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};