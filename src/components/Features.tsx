import { Shield, Clock, CreditCard, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "امنیت بالا",
    description: "با پیشرفته‌ترین سیستم‌های امنیتی، از دارایی‌های شما محافظت می‌کنیم"
  },
  {
    icon: Clock,
    title: "پشتیبانی ۲۴/۷",
    description: "تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده کمک به شماست"
  },
  {
    icon: CreditCard,
    title: "پرداخت آسان",
    description: "انواع روش‌های پرداخت برای خرید و فروش راحت‌تر"
  },
  {
    icon: Users,
    title: "جامعه بزرگ",
    description: "عضوی از بزرگترین جامعه ارزهای دیجیتال ایران شوید"
  }
];

export const Features = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">چرا مرسی مانی؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};