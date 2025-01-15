import { Button } from "./ui/button";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            خرید و فروش امن
            <span className="block">ارزهای دیجیتال</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            با مرسی مانی، امن‌ترین صرافی ارز دیجیتال ایران، به دنیای رمزارزها وارد شوید
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg" onClick={onGetStarted}>
              شروع معامله
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              مشاهده قیمت‌ها
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};