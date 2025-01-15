import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PriceTicker } from "@/components/PriceTicker";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen font-vazir">
      <Header />
      <main>
        <Hero />
        <PriceTicker />
        <Features />
      </main>
    </div>
  );
};

export default Index;