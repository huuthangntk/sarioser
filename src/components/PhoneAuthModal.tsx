import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";

interface PhoneAuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PhoneAuthModal = ({ open, onOpenChange }: PhoneAuthModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  const handleSendOTP = async () => {
    try {
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
      const { error } = await supabase.auth.signInWithOtp({
        phone: formattedPhone,
      });

      if (error) throw error;

      setIsVerifying(true);
      toast({
        title: "کد تایید ارسال شد",
        description: "لطفا کد ارسال شده را وارد کنید",
      });
    } catch (error) {
      toast({
        title: "خطا",
        description: "مشکلی در ارسال کد تایید پیش آمد",
        variant: "destructive",
      });
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const { error } = await supabase.auth.verifyOtp({
        phone: phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`,
        token: otp,
        type: 'sms',
      });

      if (error) throw error;

      toast({
        title: "خوش آمدید",
        description: "با موفقیت وارد شدید",
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "خطا",
        description: "کد وارد شده صحیح نیست",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#1A1F2C] border-purple-500/20">
        <div className="space-y-6 py-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-lalezar text-white">
              {isVerifying ? "تایید شماره موبایل" : "ورود / ثبت نام"}
            </h2>
            <p className="text-gray-400 text-sm">
              {isVerifying
                ? "کد تایید ارسال شده را وارد کنید"
                : "شماره موبایل خود را وارد کنید"}
            </p>
          </div>

          {!isVerifying ? (
            <div className="space-y-4">
              <Input
                dir="ltr"
                placeholder="09123456789"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button
                className="w-full"
                onClick={handleSendOTP}
                disabled={!phoneNumber}
              >
                دریافت کد تایید
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Input
                dir="ltr"
                placeholder="کد تایید"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button
                className="w-full"
                onClick={handleVerifyOTP}
                disabled={!otp}
              >
                تایید و ورود
              </Button>
              <Button
                variant="link"
                className="w-full text-purple-400"
                onClick={() => setIsVerifying(false)}
              >
                تغییر شماره موبایل
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};