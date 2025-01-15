import { Shield, Clock, CreditCard, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "امنیت بالا",
    description: "با استفاده از پیشرفته‌ترین تکنولوژی‌های رمزنگاری، امنیت دارایی‌های شما تضمین می‌شود.",
  },
  {
    icon: Clock,
    title: "پشتیبانی ۲۴/۷",
    description: "تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده کمک به شما است.",
  },
  {
    icon: CreditCard,
    title: "پرداخت آسان",
    description: "انواع روش‌های پرداخت امن و سریع برای خرید و فروش ارزهای دیجیتال.",
  },
  {
    icon: Users,
    title: "جامعه فعال",
    description: "عضوی از جامعه بزرگ معامله‌گران ارز دیجیتال شوید و از تجربیات یکدیگر بهره‌مند شوید.",
  },
];

export const WhyUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-lalezar text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          چرا مرسی مانی؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-lg text-center space-y-4 hover:scale-105 transition-transform duration-300"
            >
              <feature.icon className="w-12 h-12 mx-auto text-purple-500" />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};