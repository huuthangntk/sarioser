import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";

const Guide = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const handleSignIn = () => {
    setAuthMode('signin');
    setIsAuthModalOpen(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen font-lalezar bg-[#0F172A] text-gray-100">
      <Header onSignInClick={handleSignIn} onSignUpClick={handleSignUp} />
      <main className="container py-20">
        <h1 className="text-4xl font-lalezar mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">راهنمای استفاده</h1>
        
        <div className="grid gap-8">
          <section className="glass-card p-6 rounded-lg">
            <h2 className="text-2xl font-lalezar mb-4">شروع به کار</h2>
            <p className="text-gray-300">برای شروع معامله در پلتفرم ما، ابتدا باید یک حساب کاربری ایجاد کنید. پس از تأیید هویت، می‌توانید معاملات خود را آغاز کنید.</p>
          </section>

          <section className="glass-card p-6 rounded-lg">
            <h2 className="text-2xl font-lalezar mb-4">نحوه خرید و فروش</h2>
            <p className="text-gray-300">برای خرید ارز دیجیتال، کافیست مقدار مورد نظر خود را وارد کرده و دکمه خرید را بزنید. برای فروش نیز به همین سادگی می‌توانید اقدام کنید.</p>
          </section>

          <section className="glass-card p-6 rounded-lg">
            <h2 className="text-2xl font-lalezar mb-4">امنیت حساب</h2>
            <p className="text-gray-300">توصیه می‌کنیم برای افزایش امنیت حساب خود، از رمز عبور قوی استفاده کرده و احراز هویت دو مرحله‌ای را فعال کنید.</p>
          </section>
        </div>
      </main>
      <Footer />
      <AuthModal 
        open={isAuthModalOpen} 
        onOpenChange={setIsAuthModalOpen}
        initialView={authMode}
      />
    </div>
  );
};

export default Guide;