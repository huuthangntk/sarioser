import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="py-4 md:py-6 relative overflow-hidden bg-[#1A1F2C]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-right"
          >
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
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <img 
              src="/lovable-uploads/71ba8f62-34e8-4f1d-aaf1-b3a58b4a080c.png" 
              alt="Calculator Illustration" 
              className="w-full h-auto max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
