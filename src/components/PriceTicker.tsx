import { useEffect, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface Price {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

export const PriceTicker = () => {
  const [prices, setPrices] = useState<Price[]>([
    { symbol: "BTC", name: "بیت‌کوین", price: 1850000000, change: 2.5 },
    { symbol: "ETH", name: "اتریوم", price: 120000000, change: -1.2 },
    { symbol: "USDT", name: "تتر", price: 52000, change: 0.1 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prices => prices.map(price => ({
        ...price,
        price: price.price * (1 + (Math.random() * 0.02 - 0.01)),
        change: price.change + (Math.random() * 0.4 - 0.2)
      })));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-8">
      <div className="container py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {prices.map((price) => (
            <div key={price.symbol} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-bold">{price.name}</h3>
                <p className="text-sm text-gray-500">{price.symbol}</p>
              </div>
              <div className="text-left">
                <p className="font-bold">{price.price.toLocaleString()} تومان</p>
                <p className={`text-sm flex items-center ${price.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {price.change >= 0 ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
                  {Math.abs(price.change).toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};