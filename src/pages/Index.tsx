import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";
import { PriceTicker } from "@/components/PriceTicker";
import { FAQ } from "@/components/FAQ";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setIsAuthModalOpen(false);
        toast({
          title: "خوش آمدید",
          description: "با موفقیت وارد شدید",
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [toast]);

  return (
    <div className="min-h-screen font-vazir bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2C]">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />
      <main className="relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/5c756161-9d5f-456f-9f79-7b35a6411b8e.png')] bg-cover bg-center opacity-20" />
        <div className="relative">
          <Hero onGetStarted={() => setIsAuthModalOpen(true)} />
          <PriceTicker />
          <Features />
          <FAQ />
        </div>
      </main>
      <Footer />
      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </div>
  );
};

export default Index;