import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "علی محمدی",
    role: "معامله‌گر ارز دیجیتال",
    content: "بهترین پلتفرم معاملاتی که تا به حال استفاده کردم. امنیت و سرعت عالی!",
    rating: 5,
  },
  {
    id: 2,
    name: "سارا احمدی",
    role: "سرمایه‌گذار",
    content: "پشتیبانی ۲۴ ساعته و راهنمایی‌های مفید برای تازه‌واردها عالی است.",
    rating: 5,
  },
  {
    id: 3,
    name: "محمد رضایی",
    role: "برنامه‌نویس بلاکچین",
    content: "رابط کاربری ساده و در عین حال حرفه‌ای. واقعاً از کار با این پلتفرم لذت می‌برم.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-900/20 to-transparent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-lalezar text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          نظرات کاربران ما
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card p-6 rounded-lg space-y-4"
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};