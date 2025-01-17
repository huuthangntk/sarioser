import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface HeaderProps {
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

export const Header = ({ onSignInClick, onSignUpClick }: HeaderProps) => {
  return (
    <header className="py-4 bg-[#1A1F2C] border-b border-purple-500/20">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/870b3a33-7b21-4aaa-aa6d-8d52d43740fb.png" 
              alt="Sarioser Logo" 
              className="h-8 w-auto"
            />
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
                onClick={onSignInClick}
              >
                ورود
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                onClick={onSignUpClick}
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