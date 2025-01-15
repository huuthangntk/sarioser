import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const FAQ = () => {
  const faqs = [
    {
      question: "صرافی ارز دیجیتال چیست؟",
      answer: "صرافی‌های ارز دیجیتال بازارهای دیجیتالی هستند که به کاربران امکان خرید و فروش ارزهای دیجیتال مانند بیت‌کوین، اتریوم و تتر را می‌دهند."
    },
    {
      question: "چه محصولاتی ارائه می‌دهیم؟",
      answer: "ما طیف گسترده‌ای از محصولات از جمله معاملات نقدی، معاملات مارجین، معاملات آتی، و خدمات کیف پول را ارائه می‌دهیم."
    },
    {
      question: "چگونه می‌توانم بیت‌کوین و سایر ارزهای دیجیتال را خریداری کنم؟",
      answer: "شما می‌توانید با ثبت‌نام در پلتفرم ما، احراز هویت، و شارژ حساب خود، به راحتی ارزهای دیجیتال را خریداری کنید."
    },
    {
      question: "چگونه قیمت ارزهای دیجیتال را پیگیری کنم؟",
      answer: "ما نمودارهای لحظه‌ای و ابزارهای تحلیل تکنیکال پیشرفته‌ای را برای پیگیری قیمت‌ها ارائه می‌دهیم."
    }
  ];

  return (
    <section className="py-16 bg-black/20 backdrop-blur-lg">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            سوالات متداول
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 rounded-lg">
                <AccordionTrigger className="px-4 text-gray-200 hover:text-purple-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};