import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen font-lalezar bg-[#0F172A] text-gray-100">
      <Header onAuthClick={() => {}} />
      <main className="container py-20">
        <h1 className="text-4xl font-lalezar mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">تماس با ما</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-lg">
            <h2 className="text-2xl font-lalezar mb-6">ارسال پیام</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2">نام و نام خانوادگی</label>
                <Input className="bg-white/5" />
              </div>
              <div>
                <label className="block text-sm mb-2">ایمیل</label>
                <Input type="email" className="bg-white/5" />
              </div>
              <div>
                <label className="block text-sm mb-2">پیام شما</label>
                <Textarea className="bg-white/5 min-h-[150px]" />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500">
                ارسال پیام
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-lalezar mb-4">آدرس دفتر</h3>
              <p className="text-gray-300">تهران، خیابان ولیعصر، ساختمان مرکزی</p>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-lalezar mb-4">تماس مستقیم</h3>
              <p className="text-gray-300">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p className="text-gray-300">ایمیل: info@mercimoney.ir</p>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-lalezar mb-4">ساعات کاری</h3>
              <p className="text-gray-300">شنبه تا چهارشنبه: ۹ صبح تا ۵ عصر</p>
              <p className="text-gray-300">پنجشنبه: ۹ صبح تا ۱ بعد از ظهر</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;