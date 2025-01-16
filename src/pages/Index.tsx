import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { LivePrices } from "@/components/LivePrices";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-lalezar bg-[#0F172A] text-gray-100">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />
      <main className="relative">
        <div className="relative">
          <Hero onGetStarted={() => setIsAuthModalOpen(true)} />
          <LivePrices />
          <WhyUs />
          <Testimonials />
          <FAQ />
        </div>
      </main>
      <Footer />
      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </div>
  );
};

export default Index;