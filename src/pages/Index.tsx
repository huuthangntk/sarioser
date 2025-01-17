import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { Features } from "@/components/Features";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen font-vazir bg-gradient-to-b from-[#F1F0FB] to-[#E5DEFF] text-gray-800">
      <Header onSignInClick={() => handleAuthClick('signin')} onSignUpClick={() => handleAuthClick('signup')} />
      <main className="relative overflow-hidden">
        <div className="relative">
          <Hero onGetStarted={() => handleAuthClick('signup')} />
          <Features />
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