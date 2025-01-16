import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-right">
            <h1 className="text-4xl md:text-7xl font-lalezar mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              راه‌حل‌های نوآورانه مالی
              <span className="block mt-2">برای هر چالش سرمایه‌گذاری</span>
            </h1>
            <p className="text-xl font-lalezar text-gray-300 mb-8">
              ما فقط روی سرمایه‌گذاری تمرکز نمی‌کنیم. کل اکوسیستم مالی شما را از بودجه‌بندی تا بازنشستگی پوشش می‌دهیم
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button 
                size="lg" 
                className="text-lg font-lalezar bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                onClick={onGetStarted}
              >
                شروع کنید
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg font-lalezar border-purple-500 text-purple-500 hover:bg-purple-500/10"
              >
                مشاهده قیمت‌ها
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/5c756161-9d5f-456f-9f79-7b35a6411b8e.png" 
              alt="Crypto Astronaut" 
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};