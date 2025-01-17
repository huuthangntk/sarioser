import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen font-lalezar bg-[#0F172A] text-gray-100">
      <Header onSignInClick={() => handleAuthClick('signin')} onSignUpClick={() => handleAuthClick('signup')} />
      <main className="relative">
        <div className="relative">
          <Hero onGetStarted={() => handleAuthClick('signup')} />
          <WhyUs />
          <Testimonials />
          <FAQ />
        </div>
      </main>
      <Footer />
      <AuthModal 
        open={isAuthModalOpen} 
        onOpenChange={setIsAuthModalOpen}
        initialView={authMode === 'signin' ? 'sign_in' : 'sign_up'}
      />
    </div>
  );
};

export default Index;