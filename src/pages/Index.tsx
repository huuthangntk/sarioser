import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";
import { PriceTicker } from "@/components/PriceTicker";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-vazir bg-[#0F172A] text-gray-100">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />
      <main className="relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/24de8605-a66e-4530-b414-37c019974f7e.png')] bg-cover bg-center opacity-10 animate-pulse" />
        <div className="relative">
          <Hero onGetStarted={() => setIsAuthModalOpen(true)} />
          <PriceTicker />
          <WhyUs />
          <Features />
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