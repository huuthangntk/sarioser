import { useEffect, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface Price {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

export const LivePrices = () => {
  const [prices, setPrices] = useState<Price[]>([
    { symbol: "BTC", name: "بیت‌کوین", price: 1850000000, change: 2.5 },
    { symbol: "ETH", name: "اتریوم", price: 120000000, change: -1.2 },
    { symbol: "BNB", name: "بایننس", price: 89000000, change: 0.8 },
    { symbol: "TRX", name: "ترون", price: 25000, change: 1.5 },
    { symbol: "MM", name: "مرسی مانی", price: 15000, change: 3.2 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prices => prices.map(price => ({
        ...price,
        price: price.price * (1 + (Math.random() * 0.02 - 0.01)),
        change: price.change + (Math.random() * 0.4 - 0.2)
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {prices.map((price) => (
            <div key={price.symbol} className="glass-card p-4 rounded-lg hover:bg-white/15 transition-colors">
              <div className="text-center">
                <h3 className="font-lalezar text-lg mb-2 text-white">{price.name}</h3>
                <p className="font-lalezar text-sm text-purple-300">{price.symbol}</p>
                <p className="font-lalezar text-lg mt-2 text-white/90">{price.price.toLocaleString()} تومان</p>
                <p className={`text-sm flex items-center justify-center mt-1 font-lalezar ${price.change >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {price.change >= 0 ? <ArrowUpIcon className="w-4 h-4 ml-1" /> : <ArrowDownIcon className="w-4 h-4 ml-1" />}
                  {Math.abs(price.change).toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};