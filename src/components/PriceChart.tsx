import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

interface PriceData {
  name: string;
  price: number;
}

export const PriceChart = () => {
  const [data, setData] = useState<PriceData[]>([]);

  useEffect(() => {
    // Initialize with some data
    const initialData = [
      { name: "BTC", price: 1850000000 },
      { name: "ETH", price: 120000000 },
      { name: "BNB", price: 89000000 },
      { name: "TRX", price: 25000 },
      { name: "MM", price: 15000 },
    ];
    setData(initialData);

    // Update prices periodically
    const interval = setInterval(() => {
      setData(prevData =>
        prevData.map(item => ({
          ...item,
          price: item.price * (1 + (Math.random() * 0.02 - 0.01)),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 bg-black/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 rounded-lg"
        >
          <h2 className="text-2xl font-lalezar mb-6 text-center">نمودار قیمت‌های زنده</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1A1F2C",
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={{ fill: "#8B5CF6" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};