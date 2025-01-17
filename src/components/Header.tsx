import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface HeaderProps {
  onAuthClick: () => void;
}

export const Header = ({ onAuthClick }: HeaderProps) => {
  return (
    <header className="py-4 bg-[#1A1F2C] border-b border-purple-500/20">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-lalezar text-white">
            ساریوسر
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/guide" className="text-gray-300 hover:text-white transition-colors">
              راهنما
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              تماس با ما
            </Link>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="text-white border-purple-500/20 hover:bg-purple-500/10"
                onClick={() => onAuthClick()}
              >
                ورود
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                onClick={() => onAuthClick()}
              >
                ثبت نام
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};