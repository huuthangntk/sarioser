import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "./ui/use-toast";

export const ClaudeChat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/chat-with-claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) throw new Error("Failed to get response");

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      toast({
        title: "خطا",
        description: "متأسفانه مشکلی پیش آمده است. لطفاً دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              با کلود صحبت کنید
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="سوال خود را بپرسید..."
                disabled={isLoading}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "در حال پردازش..." : "ارسال"}
              </Button>
            </form>
            {response && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="whitespace-pre-wrap">{response}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};