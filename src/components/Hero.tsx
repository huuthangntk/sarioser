import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            راه‌حل‌های نوآورانه مالی
            <span className="block mt-2">برای هر چالش سرمایه‌گذاری</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-300 mb-8"
          >
            ما فقط روی سرمایه‌گذاری تمرکز نمی‌کنیم. کل اکوسیستم مالی شما را از بودجه‌بندی تا بازنشستگی پوشش می‌دهیم
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="text-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              onClick={onGetStarted}
            >
              شروع کنید
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-purple-500 text-purple-500 hover:bg-purple-500/10"
            >
              مشاهده قیمت‌ها
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};