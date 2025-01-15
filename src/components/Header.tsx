import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/75 border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button variant="outline">ورود / ثبت نام</Button>
            <a href="tel:+982112345678" className="mr-4 hidden md:block text-sm">
              ۰۲۱-۱۲۳۴۵۶۷۸
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#" className="text-gray-700 hover:text-primary">صفحه اصلی</a>
            <a href="#" className="text-gray-700 hover:text-primary">قیمت‌ها</a>
            <a href="#" className="text-gray-700 hover:text-primary">راهنما</a>
            <a href="#" className="text-gray-700 hover:text-primary">تماس با ما</a>
          </nav>

          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">مرسی مانی</span>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700">صفحه اصلی</a>
              <a href="#" className="text-gray-700">قیمت‌ها</a>
              <a href="#" className="text-gray-700">راهنما</a>
              <a href="#" className="text-gray-700">تماس با ما</a>
            </div>
          </div>
        )}
      </div>

      {/* News ticker */}
      <div className="bg-primary/10 overflow-hidden py-2">
        <div className="animate-ticker whitespace-nowrap">
          <span className="inline-block px-4">🔥 عرضه اولیه توکن مرسی مانی - فرصت محدود</span>
          <span className="inline-block px-4">📈 بیت‌کوین به بالاترین قیمت ۶ ماه اخیر رسید</span>
          <span className="inline-block px-4">🎉 کارمزد صفر در معاملات تا پایان ماه</span>
        </div>
      </div>
    </header>
  );
};