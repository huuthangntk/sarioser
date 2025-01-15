import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { ClaudeChat } from "@/components/ClaudeChat";
import { AuthModal } from "@/components/AuthModal";
import { useState } from "react";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-vazir bg-gradient-to-br from-blue-50 to-teal-50">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />
      <main>
        <Hero onGetStarted={() => setIsAuthModalOpen(true)} />
        <Features />
        <ClaudeChat />
      </main>
      <Footer />
      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </div>
  );
};

export default Index;