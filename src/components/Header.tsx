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
            <Button variant="outline" onClick={onAuthClick} className="bg-transparent border-purple-500 text-purple-500 hover:bg-purple-500/10">
              ورود / ثبت نام
            </Button>
            <a href="tel:+982112345678" className="mr-4 hidden md:block text-sm text-gray-400 hover:text-purple-400 transition-colors">
              ۰۲۱-۱۲۳۴۵۶۷۸
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/prices" className={`text-gray-400 hover:text-purple-400 transition-colors ${isActive('/prices') ? 'text-purple-400' : ''}`}>قیمت‌ها</Link>
            <Link to="/guide" className={`text-gray-400 hover:text-purple-400 transition-colors ${isActive('/guide') ? 'text-purple-400' : ''}`}>راهنما</Link>
            <Link to="/contact" className={`text-gray-400 hover:text-purple-400 transition-colors ${isActive('/contact') ? 'text-purple-400' : ''}`}>تماس با ما</Link>
          </nav>

          <Link to="/" className="flex items-center">
            <span className="text-xl font-lalezar bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              مرسی مانی
            </span>
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
              <Link to="/prices" className="text-gray-400 hover:text-purple-400 transition-colors">قیمت‌ها</Link>
              <Link to="/guide" className="text-gray-400 hover:text-purple-400 transition-colors">راهنما</Link>
              <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">تماس با ما</Link>
            </div>
          </div>
        )}
      </div>

      <div className="bg-purple-900/20 overflow-hidden py-2">
        <div className="animate-ticker whitespace-nowrap">
          <span className="inline-block px-4">🔥 عرضه اولیه توکن مرسی مانی - فرصت محدود</span>
          <span className="inline-block px-4">📈 بیت‌کوین به بالاترین قیمت ۶ ماه اخیر رسید</span>
          <span className="inline-block px-4">🎉 کارمزد صفر در معاملات تا پایان ماه</span>
        </div>
      </div>
    </header>
  );
};