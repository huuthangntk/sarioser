import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-l from-blue-300/10 to-teal-300/10">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            خرید و فروش امن
            <span className="text-primary block">ارزهای دیجیتال</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            با مرسی مانی، امن‌ترین صرافی ارز دیجیتال ایران، به دنیای رمزارزها وارد شوید
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="text-lg">
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