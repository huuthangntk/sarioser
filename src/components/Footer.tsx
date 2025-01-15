import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">پشتیبانی</h3>
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <span>۰۲۱-۹۱۰۷۹۹۹۹</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <span>support@exchange.com</span>
            </div>
            <p className="text-gray-400">
              پشتیبانی ۲۴/۷ در خدمت شماست
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">قوانین و مقررات</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">حریم خصوصی</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">سوالات متداول</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">بلاگ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">خبرنامه</h3>
            <p className="text-gray-400">
              برای دریافت آخرین اخبار و تحلیل‌های بازار در خبرنامه ما عضو شوید
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary"
              />
              <Button>عضویت</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            تمامی حقوق این وب‌سایت محفوظ است © ۱۴۰۲
          </p>
        </div>
      </div>
    </footer>
  );
};